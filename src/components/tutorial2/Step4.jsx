import { Box, Typography } from '@mui/material';
import React from 'react';

const Step4 = () => {
    return(
        <Box sx={{ width: "100%", height: "100%", padding: 1 }}>
            <Typography variant="h6" component="div" gutterBottom>
                What is the car is going left and right a lot? <br />
                While defining the model's action space, you might have seen the steering angle section. <br />
                So, we can say that if the car is changing angles a lot, we can reduce its reward function, 
                as it will serve for the penalty. However, turning is also necessary for the turns on roads.<br /> 
                Thus, for turns, we will assign the reward as 80% of the already assigned reward. <br />
                You can do this, by dragging the <b>Check if steering angle is less than</b> block from the <b>Check</b> tab.
                Do this, and move to the final step.
            </Typography>
        </Box>
    )
};

export default Step4;