import { Box, Typography } from '@mui/material';
import React from 'react';
import trackWidth from '../../assets/images/track_width.png';

const Step2 = () => {
    return(
        <Box sx={{ width: "100%", height: "100%", padding: 1 }}>
            <Typography variant="h6" component="div" gutterBottom>
                Up till now, we were only using the all_wheels_on_track on track to determine 
                whether the car is on track or not. But, we can use the distance_from_center 
                and gradually decrease the reward as the car moves away from the center. 
                This will ensure that the car stays near the center of road, as much as possible.
                This will prevent the zig-zag movement of the car, which was prominent during Tutorial 1.<br />
                We can do this, by assigning a reward of 1.0 if the car is at the center of the track, 
                a penalty of 0.5 if the car is at the edge of the track and a penalty of 0.25 if the 
                car is in between the center and the edge. <br />
                We can use the track width to determine these points. Conider the image below <br />
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={trackWidth} alt='track width' />
                </div>
                So, the center point will be the 50% of the track width. 
                The point in between the edge and center will be at 25% of the track width. 
                Similarly, we can assign the reward values for the other points. <br />
                For this Tutorial, we will be using the following marks: 50%, 25%, 10% and 0%<br />
                You can do this by adding the marker initializer from the Initializer tab. 
                It will add three markers to the code, namely <b>marker_1</b>, <b>marker_2</b> and <b>marker_3</b>.
                These will reprent the 50%, 25% and 10% point of the track respectively. Make sure to 
                initialize the markers after you have initialized <b>track_width</b>. <br />
                Initialize the markers and move to the next step.
            </Typography>
        </Box>
    )
};

export default Step2;