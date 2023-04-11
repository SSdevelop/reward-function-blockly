import * as Blockly from "blockly";
// import 'blockly/python.js';

export const getBlocks = () => {
  let allBlocks = [];
  Blockly.getMainWorkspace()
    .getAllBlocks()
    .forEach((block) => {
      allBlocks.push(block.type);
    });
  return allBlocks;
};

Blockly.Blocks["reward_function"] = {
  init: function () {
    this.appendStatementInput("code")
      .setCheck(null)
      .appendField("Reward Function");
    this.setColour(165);
    this.setTooltip("");
    this.setHelpUrl(
      "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html#deepracer-train-models-define-reward-function"
    );
    this.setCommentText(
      "This is a reward function. Every code should go inside this function block of code."
    );
  },
};

Blockly.Blocks["reward"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Set reward to")
      .appendField(new Blockly.FieldNumber(1, 0, 1, 0.0001), "REWARD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl(
      "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html#deepracer-train-models-define-reward-function"
    );
    this.setCommentText(
      "Use this block to modify the value of reward. The default value is 1. \nAny value between 0 and 1 is allowed."
    );
  },
};

Blockly.Blocks["reward_access"] = {
  init: function () {
    this.appendDummyInput().appendField("reward");
    this.setOutput(true, "Number");
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
    this
      .setCommentText(`Use this variable to access the value of reward anytime.\n
  You can use it to assign the value of reward to another variable, use it in mathematical expressions, or use it in a condition statement.`);
  },
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
  Blockly.Blocks[`${parameter}_init`] = {
    init: function () {
      this.appendDummyInput().appendField(`declare ${parameter}`);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
      this.setTooltip("");
      this.setHelpUrl(
        "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-reward-function-input.html"
      );
    },
  };

  Blockly.Blocks[`${parameter}_access`] = {
    init: function () {
      this.appendDummyInput().appendField(parameter);
      this.setOutput(true, null);
      this.setColour(30);
      this.setTooltip("");
      this.setHelpUrl(
        "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-reward-function-input.html"
      );
    },
    onchange: function () {
      let allBlocks = getBlocks();
      if (allBlocks.includes(`${parameter}_init`)) {
        this.setEnabled(true);
      } else {
        this.setEnabled(false);
      }
    },
  };
});

Blockly.Blocks["wheels_on_track_check"] = {
  init: function () {
    let allBlocks = getBlocks();
    this.appendDummyInput().appendField("Check if all wheels are on track?");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl(
      "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-reward-function-input.html#reward-function-input-all_wheels_on_track"
    );
    this.setCommentText(
      "This block will determine if all wheels are on track. \nIf all wheels are not on track, the reward will be 0.0001.\nWe want to set the reward to a low value as soon as the car goes off track."
    );
  },
  // onchange: function() {
  //   let allBlocks = getBlocks();
  //   if (allBlocks.includes("all_wheels_on_track_init")) {
  //     this.setEnabled(true);
  //   } else {
  //     this.setEnabled(false);
  //   }
  // }
};

Blockly.Blocks["check_speed"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Check if speed is less than")
      .appendField(new Blockly.FieldNumber(0, 0, 4, 0.0001), "SPEED")
      .appendField("?");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl(
      "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-reward-function-input.html#reward-function-input-speed"
    );
    this.setCommentText(
      "This block will first set the Speed Threshold.\nThen, it will be used to determine if the car is moving at a speed less than the threshold.\nIf the car is moving at a speed less than the threshold, the reward will be 0.0001.\nWe want to set the reward to a low value as soon as the car moves at a speed less than the threshold. Minimum value is 0 and maximum is 4."
    );
  },
};

Blockly.Blocks["markers_init"] = {
  init: function () {
    this.appendDummyInput().appendField(`declare markers`);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip("");
    this.setHelpUrl(
      "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-reward-function-input.html#reward-function-input-track_width"
    );
    this.setCommentText(
      "This block will declare three markers.\nThese markers will represent the 10%, 25% and 50% width of the track.\nWe will use these markers to determine if the car is moving close to the center of the track or not."
    );
  },
  // onchange: function(){
  //   let allBlocks = getBlocks();
  //   if (allBlocks.includes("track_width_init")) {
  //     this.setEnabled(true);
  //   } else {
  //     this.setEnabled(false);
  //   }
  // }
};

Blockly.Blocks["marker1_access"] = {
  init: function () {
    this.appendDummyInput().appendField("marker1");
    this.setOutput(true, null);
    this.setColour(30);
    this.setTooltip("");
    this.setHelpUrl(
      "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-reward-function-input.html#reward-function-input-distance_from_center"
    );
  },
  onchange: function () {
    let allBlocks = getBlocks();
    if (allBlocks.includes("markers_init")) {
      this.setEnabled(true);
    } else {
      this.setEnabled(false);
    }
  },
};

Blockly.Blocks["marker2_access"] = {
  init: function () {
    this.appendDummyInput().appendField("marker2");
    this.setOutput(true, null);
    this.setColour(30);
    this.setTooltip("");
    this.setHelpUrl(
      "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-reward-function-input.html#reward-function-input-distance_from_center"
    );
  },
  onchange: function () {
    let allBlocks = getBlocks();
    if (allBlocks.includes("markers_init")) {
      this.setEnabled(true);
    } else {
      this.setEnabled(false);
    }
  },
};

Blockly.Blocks["marker3_access"] = {
  init: function () {
    this.appendDummyInput().appendField("marker3");
    this.setOutput(true, null);
    this.setColour(30);
    this.setTooltip("");
    this.setHelpUrl(
      "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-reward-function-input.html#reward-function-input-distance_from_center"
    );
  },
  onchange: function () {
    let allBlocks = getBlocks();
    if (allBlocks.includes("markers_init")) {
      this.setEnabled(true);
    } else {
      this.setEnabled(false);
    }
  },
};

for (let i = 0; i < 3; i++) {
  Blockly.Blocks[`check_marker${i + 1}`] = {
    init: function () {
      this.appendDummyInput().appendField(
        `Check if distance from center is near marker${i + 1}`
      );
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl(
        "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-reward-function-input.html#reward-function-input-distance_from_center"
      );
    },
    onchange: function () {
      let allBlocks = getBlocks();
      if (allBlocks.includes("markers_init")) {
        this.setEnabled(true);
      } else {
        this.setEnabled(false);
      }
    },
  };
}

Blockly.Blocks["check_steering"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Check if Steering is greater than")
      .appendField(new Blockly.FieldNumber(0, -30, 30, 0.0001), "ANGLE")
      .appendField("degrees?");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl(
      "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-reward-function-input.html#reward-function-input-steering_angle"
    );
  },
  // onchange: function() {
  //   let allBlocks = getBlocks();
  //   if (allBlocks.includes("steering_angle_init")) {
  //     this.setEnabled(true);
  //   } else {
  //     this.setEnabled(false);
  //   }
  // }
};

Blockly.Blocks["get_points"] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get the previous waypoint and next waypoint");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  },
   onchange: function() {
    let allBlocks = getBlocks();
    if (allBlocks.includes("waypoints_init") && allBlocks.includes("closest_waypoints_init")) {
      this.setEnabled(true);
    } else {
      this.setEnabled(false);
    }
  }
};

Blockly.Blocks["get_waypoints_at"] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get the coordinates of ")
        .appendField(new Blockly.FieldNumber(0, 1), "INDEX")
        .appendField("waypoint");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  onchange: function() {
    let allBlocks = getBlocks();
    if (allBlocks.includes("waypoints_init")) {
      this.setEnabled(true);
    } else {
      this.setEnabled(false);
    }
  }
};

Blockly.Blocks["get_track_direction"] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Get the direction of the heading of the track.");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
  },
  onchange: function() {
    let allBlocks = getBlocks();
    if (allBlocks.includes("get_points")) {
      this.setEnabled(true);
    } else {
      this.setEnabled(false);
    }
  }
};

Blockly.Blocks["check_heading"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Check if the car is heading in the right direction.")
      // .appendField(new Blockly.FieldNumber(0, -30, 30, 0.0001), "ANGLE")
      // .appendField("degrees?");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function () {
    let allBlocks = getBlocks();
    if (allBlocks.includes("get_track_direction")) {
      this.setEnabled(true);
    } else {
      this.setEnabled(false);
    }
  }
};
