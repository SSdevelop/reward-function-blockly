import { Box, Typography } from "@mui/material";
import React from "react";
import step1 from "../../assets/images/tut1_step3_1.png";
import step2 from "../../assets/images/tut1_step3_2.png";
import step4 from "../../assets/images/tut1_step3_4.png";
import step5 from "../../assets/images/tut1_step3_5.png";
import step6 from "../../assets/images/tut1_step3_6.png";

const Step4 = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", padding: 1 }}>
      <Typography variant="h6" component="h6" paragraph gutterBottom>
        Now, head over to your AWS console and go to the DeepRacer. There, click
        on <b>Create Model</b>. Follow these steps:
        <ul>
          <li>
            Give your model a name and description in the form as shown below.
            <div>
              <img src={step1} alt="Model Name Form" width="100%" />
            </div>
            Give it any name you like and a good description.
          </li>
          <li>
            From the enviornment simulation section, select A to Z speedway.
            <div>
              <img src={step2} alt="Training Enviornment" width="100%" />
            </div>
            This is a basic track with not many turns. So, it is a good place to
            start. Leave everythng as it is and move to the next step.
          </li>
          <li>
            In this step, leave everything as it is from teh race type and
            training algorithm sections.
          </li>
          <li>
            In the Define continuous action space section, set the upper speed
            limit to 4 as shown below.
            <div>
              <img
                src={step4}
                alt="Define continuous action space"
                width="100%"
              />
            </div>
          </li>
          <li>Choose your vehicle.</li>
          <li>
            Click on show code from the header above and click on Copy Code
            button. <br />
            Paste the code in the Reward Function section of AWS Deepracer. It
            should look like below:
            <div>
              <img src={step5} alt="Reward Function" width="100%" />
            </div>
            Click on validate button to confirm that the reward function is
            acceptable for AWS Deepracer. <br />
            Leave everything as it is and click on Create Model.
          </li>
          <li>
            You will be able to see the training screen like below.
            <div>
              <img src={step6} alt="Training Screen" width="100%" />
            </div>
          </li>
        </ul>
        Whew! Now you can relax for an hour. The model will train for an hour.
        After that, you can see the evaluation section.
      </Typography>
    </Box>
  );
};

export default Step4;
