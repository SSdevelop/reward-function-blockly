// import * as Blockly from 'blockly';
import { pythonGenerator } from 'blockly/python.js';
import { getBlocks } from './customblocks';

pythonGenerator["reward_function"] = function(block) {
    let blocks = getBlocks();
    var statements_code = pythonGenerator.statementToCode(block, "code");
    if (blocks.includes("get_track_direction")) {
        var code = "import math\ndef reward_function(params):\n" + statements_code + "\n  return float(reward)\n";
        return code;
    }
    var code =
      "\ndef reward_function(params):\n" + statements_code + "\n  return float(reward)\n";
    return code;
};

pythonGenerator["reward"] = function (block) {
    var value_reward = block.getFieldValue('REWARD')
    // TODO: Assemble Python into code variable.
    var code = "reward = " + value_reward + "\n";
    return code;
};

pythonGenerator[`reward_access`] = function (block) {
    var code = `reward`;
    return [code, pythonGenerator.ORDER_NONE];
};

const parameters = [
    "all_wheels_on_track",
    "x",
    "y",
    "distance_from_center",
    "speed",
    "steering_angle",
    "heading",
    "crashed",
    "track_width",
    "waypoints",
    "closest_waypoints",
];
parameters.forEach((parameter) => {
    pythonGenerator[`${parameter}_init`] = function (block) {
        if (parameter === "steering_angle") {
            var code = `${parameter} = abs(params["${parameter}"])\n`;
        }
        else {
            var code = `${parameter} = params["${parameter}"]\n`;
        }
        return code;
    };
    pythonGenerator[`${parameter}_access`] = function (block) {
        var code = `${parameter}`;
        return [code, pythonGenerator.ORDER_NONE];
    };
});

pythonGenerator["wheels_on_track_check"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "all_wheels_on_track = params[\"all_wheels_on_track\"]\nif not all_wheels_on_track:\n  reward = 0.0001\n";
    return code;
};

pythonGenerator['check_speed'] = function(block) {
    let number_speed = block.getFieldValue('SPEED');
    // TODO: Assemble Python into code variable.
    let code = `speed = params["speed"]\nSPEED_THRESHOLD = ${number_speed}\nif speed < SPEED_THRESHOLD:\n  reward = 0.0001\n`;
    return code;
  };

pythonGenerator['markers_init'] = function(block) {
    var code = 'track_width = params[\"track_width\"]\nmarker1 = 0.1 * track_width\nmarker2 = 0.25 * track_width\nmarker3 = 0.5 * track_width\ndistance_from_center = params[\"distance_from_center\"]\n';
    return code;
};

pythonGenerator['marker1_access'] = function(block) {
    var code = 'marker1';
    return [code, pythonGenerator.ORDER_NONE];
};

pythonGenerator['marker2_access'] = function(block) {
    var code = 'marker2';
    return [code, pythonGenerator.ORDER_NONE];
};

pythonGenerator['marker3_access'] = function(block) {
    var code = 'marker3';
    return [code, pythonGenerator.ORDER_NONE];
};

for(let i = 0; i < 3; i++) {
    pythonGenerator[`check_marker${i+1}`] = function(block) {
        var code = `distance_from_center <= marker${i+1}`;
        return [code, pythonGenerator.ORDER_NONE];
    };
}

pythonGenerator['check_steering'] = function(block) {
    let number_angle = block.getFieldValue('ANGLE');
    let code = `steering_angle = abs(params[\"steering_angle\"])\nSTEERING_ANGLE_THRESHOLD = ${number_angle}\nif steering_angle > STEERING_ANGLE_THRESHOLD:\n  reward *= 0.8\n`;
    return code;
}

pythonGenerator['get_points'] = function(block) {
    let code = 'prev_point = waypoints[closest_waypoints[0]]\nnext_point = waypoints[closest_waypoints[1]]\n';
    return code;
}

pythonGenerator['get_waypoints_at'] = function(block) {
    let index = block.getFieldValue('INDEX');
    let code = `waypoints[${index}]`;
    return [code, pythonGenerator.ORDER_NONE];
}

pythonGenerator['get_track_direction'] = function(block) {
    let code = 'track_direction = math.atan2(next_point[1] - prev_point[1], next_point[0] - prev_point[0])\ntrack_direction = math.degrees(track_direction)\n';
    return code;
}

pythonGenerator['check_heading'] = function(block) {
    let code = `heading = params['heading']\nheading_difference = abs(track_direction - heading)\nif heading_diffence > 180:\n  heading_diffence = 360 - heading_diffence\nHEADING_THRESHOLD = 10.0\nif heading_difference > HEADING_THRESHOLD:\n  reward *= 0.5\n`;
    return code;
}

