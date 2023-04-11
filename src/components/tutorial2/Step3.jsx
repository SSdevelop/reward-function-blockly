import { Box, Typography } from "@mui/material";
import React from "react";
import vid from '../../assets/videos/tut2_step3.mp4';

const Step3 = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", padding: 1 }}>
      <Typography variant="h6" component="div" gutterBottom>
        This is one of the most important step and it will help you to improve
        your model's performance on your own. <br />
        Here, we will learn to use the declared variables and also about if-else
        statements. <br />
        We need to assign a reward based on the distance the car is from the
        center of the track. So, we can use the if-else statements to determine
        which marker we will use. <br />
        The gist is, if We provide a reward of 1 for staying in the narrow band (10%),
        0.5 for staying in the medium band (25%), and 0.1 for staying in the wide
        band (50%). If we decrease the reward for the narrow band, or increase the
        reward for the medium band, we are essentially incentivizing the car to
        be use a larger portion of the track surface. This could come in handy,
        especially when there are sharp corners. <br />
        From the Logic tab, select the if block and click on the settings tab to add 
        as much else blocks as you need. Then, we will access the distance_from_center 
        and markers to determine the reward. We will also use the set reward block from 
        the Rewards tab. <br />
        You can do it as follows:
        <video autoPlay loop muted style={{ width: "100%" }}>
            <source src={vid} type="video/mp4" />
            Sorry your browser does not support MOV videos.
        </video>
      </Typography>
    </Box>
  );
};

export default Step3;
