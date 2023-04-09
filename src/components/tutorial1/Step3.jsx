import { Box, Typography } from "@mui/material";
import React from "react";
import vid from "../../assets/videos/tut1_step3.mov";

const Step3 = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", padding: 1 }}>
      <Typography variant="h6" component="h6" paragraph gutterBottom>
        Now, we will be learning about the second variable of importance, the{" "}
        <span
          style={{
            backgroundColor: "#f0ead6",
            borderRadius: "10%",
            padding: "2px",
          }}
        >
          speed
        </span>{" "}
        variable.
        <br />
        As you might have guessed from the name, this variable tells us how fast
        the car is moving. Just like the real world, if your car is moving too
        slow, it is not considered a good driving. So, we will assign a low
        reward to the car if it is moving too fast. (Note: going fast is also
        not very good, but DeepRacer's free car can only go up to 4 m/s) <br />
        Now, go to the <b>Check</b> tab in the Blockly editor and place the{" "}
        <span style={{ backgroundColor: "#f0ead6", borderRadius: "10%" }}>
          check if the speed is less than 0
        </span>{" "}
        block below the previous blocks. <br />
        You can changing the value of the speed input as shown below:
      </Typography>
      <video autoPlay loop muted style={{ width: "100%" }}>
        <source src={vid} type="video/mp4" />
        Sorry your browser does not support MOV videos.
      </video>
      <Typography variant="h6" component="h6" paragraph gutterBottom>
        We cannot exceed the value of 4 as the maximum speed of
        the car is 4 m/s. Although, you can put decimal values.
        <br />
      </Typography>
    </Box>
  );
};

export default Step3;
