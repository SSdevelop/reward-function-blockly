Blockly.Blocks["reward_function"] = {
  init: function () {
    this.appendStatementInput("code")
      .setCheck(null)
      .appendField("Reward Function");
    this.setColour(165);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["reward_function"] = function (block) {
  var statements_code = Blockly.Python.statementToCode(block, "code");
  // TODO: Assemble Python into code variable.
  var code =
    "def reward_function(params):\n" + statements_code + "\n  return reward\n";
  return code;
};

Blockly.Blocks["reward"] = {
  init: function () {
    this.appendValueInput("REWARD")
      .setCheck("Number")
      .appendField("set reward to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["reward"] = function (block) {
  var value_reward = Blockly.Python.valueToCode(
    block,
    "REWARD",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  if (value_reward === "") value_reward = "0";
  var code = "reward = " + value_reward + "\n";
  return code;
};

Blockly.Blocks["reward_access"] = {
  init: function () {
    this.appendDummyInput().appendField("reward");
    this.setOutput(true, "Number");
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["reward_access"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "reward";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
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
];
parameters.forEach((parameter) => {
  Blockly.Blocks[`${parameter}_init`] = {
    init: function () {
      this.appendDummyInput().appendField(`initialize ${parameter}`);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
      this.setTooltip("");
      this.setHelpUrl("");
    },
  };

  Blockly.Python[`${parameter}_init`] = function (block) {
    var code = `${parameter} = params["${parameter}"]\n`;
    return code;
  };

  Blockly.Blocks[`${parameter}_access`] = {
    init: function () {
      this.appendDummyInput().appendField(parameter);
      this.setOutput(true, null);
      this.setColour(30);
      this.setTooltip("");
      this.setHelpUrl("");
    },
  };

  Blockly.Python[`${parameter}_access`] = function (block) {
    var code = `${parameter}`;
    return [code, Blockly.Python.ORDER_NONE];
  };
});