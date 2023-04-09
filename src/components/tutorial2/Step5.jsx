import { Box, Typography } from "@mui/material";
import React from "react";

const Step5 = ({ handleReset }) => {
  return (
    <Box sx={{ width: "100%", height: "100%", padding: 1 }}>
      <Typography variant="h6" component="div" gutterBottom>
        Now, follow the instructions from Tutorial 1 and run the code on AWS. <br />
        Make sure:
        <ul>
          <li>Maximum Speed is set to 4 m/s.</li>
          <li>Training time is 2 hours this time.</li>
          <li>Try using a different enviornment (racing circuit)</li>
        </ul>
        Happy Training!!
      </Typography>
    </Box>
  );
};

export default Step5;
