import { Box, Typography } from "@mui/material";
import React from "react";
import codeImg from "../../assets/images/tut2_step1.png";

const Step1 = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", padding: 1 }}>
      <Typography variant="h6" component="div" gutterBottom>
        Now that you are familiar with the basic concepts and the way of running
        your own DeepRacer model, let's level up a bit. <br />
        For this tutorial, we will be using the Tutorial 1's reward function as
        a backbone and improve it. If you did evaluation on any other track
        other than the track you trained your data in, you might realise that
        the model is not performing as well as you would expect. So, we will
        make the model more strict by introducing a few more parameters. <br />
        We will be using{" "}
        <span
          style={{
            backgroundColor: "#f0ead6",
            borderRadius: "10%",
            padding: "10px",
          }}
        >
          steering_angle
        </span>
        ,
        <span
          style={{
            backgroundColor: "#f0ead6",
            borderRadius: "10%",
            padding: "10px",
          }}
        >
          distance_from_center
        </span>
        , and
        <span
          style={{
            backgroundColor: "#f0ead6",
            borderRadius: "10%",
            padding: "10px",
          }}
        >
          track_width
        </span>{" "}
        as well. <br />
        So, go ahead and add the blocks you already learned in Tutorial 1.{" "}
        <br />
        Your code should look like this after completing step 1.
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={codeImg} alt="acceptable code" width='90%' />
        </div>
      </Typography>
    </Box>
  );
};

export default Step1;
