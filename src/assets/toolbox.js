export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",
          type: "controls_if",
        },
        {
          kind: "BLOCK",
          type: "logic_compare",
        },
        {
          kind: "BLOCK",
          type: "logic_operation",
        },
        {
          kind: "BLOCK",
          type: "logic_negate",
        },
        {
          kind: "BLOCK",
          type: "logic_boolean",
        },
        {
          kind: "BLOCK",
          type: "logic_null",
        },
        {
          kind: "BLOCK",
          type: "logic_ternary",
        },
      ],
      name: "Logic",
      colour: "#5b80a5",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",

          type: "controls_repeat_ext",
        },
        {
          kind: "BLOCK",

          type: "controls_whileUntil",
        },
        {
          kind: "BLOCK",

          type: "controls_for",
        },
        {
          kind: "BLOCK",

          type: "controls_forEach",
        },
        {
          kind: "BLOCK",

          type: "controls_flow_statements",
        },
      ],
      name: "Loops",
      colour: "#5ba55b",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",

          type: "math_number",
        },
        {
          kind: "BLOCK",

          type: "math_arithmetic",
        },
        {
          kind: "BLOCK",

          type: "math_single",
        },
        {
          kind: "BLOCK",

          type: "math_trig",
        },
        {
          kind: "BLOCK",

          type: "math_constant",
        },
        {
          kind: "BLOCK",

          type: "math_number_property",
        },
        {
          kind: "BLOCK",

          type: "math_round",
        },
        {
          kind: "BLOCK",

          type: "math_on_list",
        },
        {
          kind: "BLOCK",

          type: "math_modulo",
        },
        {
          kind: "BLOCK",

          type: "math_constrain",
        },
        {
          kind: "BLOCK",

          type: "math_random_int",
        },
        {
          kind: "BLOCK",

          type: "math_random_float",
        },
      ],
      name: "Math",
      colour: "#5b67a5",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",

          type: "text",
        },
        {
          kind: "BLOCK",

          type: "text_join",
        },
        {
          kind: "BLOCK",

          type: "text_append",
        },
        {
          kind: "BLOCK",

          type: "text_length",
        },
        {
          kind: "BLOCK",

          type: "text_isEmpty",
        },
        {
          kind: "BLOCK",

          type: "text_indexOf",
        },
        {
          kind: "BLOCK",

          type: "text_charAt",
        },
        {
          kind: "BLOCK",

          type: "text_getSubstring",
        },
        {
          kind: "BLOCK",

          type: "text_changeCase",
        },
        {
          kind: "BLOCK",

          type: "text_trim",
        },
        {
          kind: "BLOCK",

          type: "text_print",
        },
        {
          kind: "BLOCK",

          type: "text_prompt_ext",
        },
      ],
      name: "Text",
      colour: "#5ba58c",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",

          type: "lists_create_with",
        },
        {
          kind: "BLOCK",

          type: "lists_create_with",
        },
        {
          kind: "BLOCK",

          type: "lists_repeat",
        },
        {
          kind: "BLOCK",

          type: "lists_length",
        },
        {
          kind: "BLOCK",

          type: "lists_isEmpty",
        },
        {
          kind: "BLOCK",

          type: "lists_indexOf",
        },
        {
          kind: "BLOCK",

          type: "lists_getIndex",
        },
        {
          kind: "BLOCK",

          type: "lists_setIndex",
        },
        {
          kind: "BLOCK",

          type: "lists_getSublist",
        },
        {
          kind: "BLOCK",

          type: "lists_split",
        },
        {
          kind: "BLOCK",

          type: "lists_sort",
        },
      ],
      name: "Lists",
      colour: "#745ba5",
    },
    {
      kind: "SEP",
    },
    {
      kind: "CATEGORY",
      name: "Variables",
      colour: "#a55b80",
      custom: "VARIABLE",
    },
    {
      kind: "CATEGORY",
      name: "Functions",
      colour: "#995ba5",
      custom: "PROCEDURE",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",

          type: "reward",
        },
        {
          kind: "BLOCK",

          type: "reward_access",
        },
      ],
      name: "Reward",
      colour: "#5b67a6",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",

          type: "all_wheels_on_track_init",
        },
        {
          kind: "BLOCK",

          type: "x_init",
        },
        {
          kind: "BLOCK",

          type: "y_init",
        },
        {
          kind: "BLOCK",

          type: "distance_from_center_init",
        },
        {
          kind: "BLOCK",

          type: "speed_init",
        },
        {
          kind: "BLOCK",

          type: "steering_angle_init",
        },
        {
          kind: "BLOCK",

          type: "heading_init",
        },
        {
          kind: "BLOCK",

          type: "crashed_init",
        },
        {
          kind: "BLOCK",

          type: "track_width_init",
        },
        {
          kind: "BLOCK",

          type: "markers_init",
        },
        {
          kind: "BLOCK",
          type: "waypoints_init",
        },
        {
          kind: "BLOCK",
          type: "closest_waypoints_init"
        },
      ],
      name: "Initializers",
      colour: "#5b67a6",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",

          type: "all_wheels_on_track_access",
        },
        {
          kind: "BLOCK",

          type: "x_access",
        },
        {
          kind: "BLOCK",

          type: "y_access",
        },
        {
          kind: "BLOCK",

          type: "distance_from_center_access",
        },
        {
          kind: "BLOCK",

          type: "speed_access",
        },
        {
          kind: "BLOCK",

          type: "steering_angle_access",
        },
        {
          kind: "BLOCK",

          type: "heading_access",
        },
        {
          kind: "BLOCK",

          type: "crashed_access",
        },
        {
          kind: "BLOCK",

          type: "track_width_access",
        },
        {
          kind: "BLOCK",

          type: "marker1_access",
        },
        {
          kind: "BLOCK",

          type: "marker2_access",
        },
        {
          kind: "BLOCK",

          type: "marker3_access",
        },
        {
          kind: "BLOCK",
          type: "waypoints_access",
        },
        {
          kind: "BLOCK",
          type: "closest_waypoints_access"
        },
        {
          kind: "BLOCK",
          type: "get_points"
        },
        {
          kind: "BLOCK",
          type: "get_waypoints_at"
        },
        {
          kind: "BLOCK",
          type: "get_track_direction"
        }
      ],
      name: "Access Parameters",
      colour: "#5b67a5",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",

          type: "wheels_on_track_check",
        },
        {
          kind: "BLOCK",
          type: 'check_speed',
        },
        {
          kind: "BLOCK",
          type: 'check_marker1',
        },
        {
          kind: "BLOCK",
          type: 'check_marker2',
        },
        {
          kind: "BLOCK",
          type: 'check_marker3',
        },
        {
          kind: "BLOCK",
          type: 'check_steering',
        },
        {
          kind: "BLOCK",
          type: 'check_heading',
        }
      ],
      name: "Checks",
      colour: "#5b67a5",
    },
  ],
};

// export default toolbox;

export const tutorial1_toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'CATEGORY',
      contents: [
        {
          kind: 'BLOCK',
          type: 'reward',
        },
        {
          kind: 'BLOCK',
          type: 'reward_access',
        }
      ],
      name: 'Reward',
      colour: '#5b67a6',
    },
    {
      kind: 'CATEGORY',
      contents: [
        {
          kind: 'BLOCK',
          type: 'wheels_on_track_check',
        },
        {
          kind: "BLOCK",
          type: 'check_speed',
        },
      ],
      name: 'Check',
      colour: '#5b67a6',
    },
  ],
};

export const tutorial2_toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",
          type: "controls_if",
        },
        {
          kind: "BLOCK",
          type: "logic_compare",
        },
        {
          kind: "BLOCK",
          type: "logic_operation",
        },
        {
          kind: "BLOCK",
          type: "logic_negate",
        },
        {
          kind: "BLOCK",
          type: "logic_boolean",
        },
        {
          kind: "BLOCK",
          type: "logic_null",
        },
        {
          kind: "BLOCK",
          type: "logic_ternary",
        },
      ],
      name: "Logic",
      colour: "#5b80a5",
    },
    {
      kind: "SEP",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",

          type: "reward",
        },
        {
          kind: "BLOCK",

          type: "reward_access",
        },
      ],
      name: "Reward",
      colour: "#5b67a6",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",

          type: "all_wheels_on_track_init",
        },
        {
          kind: "BLOCK",

          type: "distance_from_center_init",
        },
        {
          kind: "BLOCK",

          type: "speed_init",
        },
        {
          kind: "BLOCK",

          type: "steering_angle_init",
        },
        {
          kind: "BLOCK",

          type: "track_width_init",
        },
        {
          kind: "BLOCK",

          type: "markers_init",
        },
      ],
      name: "Initializers",
      colour: "#5b67a6",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",

          type: "all_wheels_on_track_access",
        },
        {
          kind: "BLOCK",

          type: "distance_from_center_access",
        },
        {
          kind: "BLOCK",

          type: "speed_access",
        },
        {
          kind: "BLOCK",

          type: "steering_angle_access",
        },
        {
          kind: "BLOCK",

          type: "track_width_access",
        },
        {
          kind: "BLOCK",

          type: "marker1_access",
        },
        {
          kind: "BLOCK",

          type: "marker2_access",
        },
        {
          kind: "BLOCK",

          type: "marker3_access",
        },
      ],
      name: "Access Parameters",
      colour: "#5b67a5",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",

          type: "wheels_on_track_check",
        },
        {
          kind: "BLOCK",
          type: 'check_speed',
        },
        {
          kind: "BLOCK",
          type: 'check_marker1',
        },
        {
          kind: "BLOCK",
          type: 'check_marker2',
        },
        {
          kind: "BLOCK",
          type: 'check_marker3',
        },
        {
          kind: "BLOCK",
          type: 'check_steering',
        }
      ],
      name: "Checks",
      colour: "#5b67a5",
    },
  ],
};
