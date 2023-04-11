import { Box, Typography } from "@mui/material";
import React from "react";
import onTrack from "../../assets/images/all_wheels_on_track_true.png";
import ofTrack from "../../assets/images/all_wheels_on_track_false.png";
import vid from "../../assets/videos/tut1_step2.mp4";

const Step2 = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", padding: 1 }}>
      <Typography variant="h6" component="h6" paragraph gutterBottom>
        Now, we will be learning about the first variable of importance, the{" "}
        <span
          style={{
            backgroundColor: "#f0ead6",
            borderRadius: "10%",
            padding: "2px",
          }}
        >
          all_wheels_on_track
        </span>{" "}
        variable.
        <br />
        As you might have guessed from the name, this variable tells us if all
        the wheels of the car are on the track or not. Just like the real world,
        if your car goes out of the track, it is not considered a good driving.
        So, we will assign a low reward to the car if it goes out of the track.
        Visually, you can think of it like this: <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={onTrack}
            alt="all_wheels_on_track_true"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        Here, all the wheels are on track, so we will not change the reward
        value. So, if one of the wheel is off the track, like the image below,
        we will penalize the car by decreasing the reward value.
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={ofTrack}
            alt="all_wheels_on_track_false"
            style={{ width: "300px", height: "200px" }}
          />
        </div>
        Now, go to the <b>Check</b> tab in the Blockly editor and place
        <span
          style={{
            backgroundColor: "#f0ead6",
            borderRadius: "10%",
            padding: "2px",
          }}
        >
          check if all wheels are on track
        </span>{" "}
        block below the previous blocks, as shown below.
      </Typography>
      <video autoPlay loop muted style={{ width: "100%" }}>
        <source src={vid} type="video/mp4" />
        Sorry your browser does not support MOV videos.
      </video>
    </Box>
  );
};

export default Step2;
