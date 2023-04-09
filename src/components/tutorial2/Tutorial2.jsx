import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Finish from "../tutorial1/Finish";
import { Alert, Box, Button, Snackbar, Step, StepLabel, Stepper } from "@mui/material";
import { getBlocks } from "../../assets/customblocks";
import Step5 from "./Step5";

const steps = ["Towards improvements", "Preventing Zig-Zag", "Utiizaing the Markers", "Steering Angle Check", "Deploy on AWS"];

const Tutorial2 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const handleNext = () => {
    let blocks = getBlocks();
    if (blocks.length === 1) {
        setError(prev => "You need to add at least one block inside the function.");
      setOpen(prev => true);
      return;
    }
    else if(activeStep === 0) {
        if (
            !(
              blocks.includes("reward") &&
              // blocks.includes("all_wheels_on_track_init") &&
              // blocks.includes("speed_init") &&
              blocks.includes("wheels_on_track_check") &&
              blocks.includes("check_speed")
              // blocks.includes("distance_from_center_init") &&
              // blocks.includes("steering_angle_init") &&
              // blocks.includes("track_width_init")
            )
          ) {
            setError(prev => "Please add all the required blocks first.");
            setOpen(prev => true);
            return;
          }
    }
    else if(activeStep === 1 && !blocks.includes('markers_init')) {
        setError(prev => "Please declare the markers variable first.");
        setOpen(prev => true);
        return;
    }
    else if(activeStep === 2 && !(blocks.includes('controls_if') && blocks.includes('check_marker1') && blocks.includes('check_marker2') && blocks.includes('check_marker3'))) {
        setError(prev => "Please add required blocks first.");
        setOpen(prev => true);
        return;
    }
    else if(activeStep === 3 && !blocks.includes('check_steering')) {
        setError(prev => "Please add the check steering angle block first.");
        setOpen(prev => true);
        return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const stepContent = (step) => {
    switch (step) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 3:
        return <Step4 />;
      case 4:
        return <Step5 />;
    }
  };

  return(
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          return (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
          <Finish handleReset={handleReset} tutorial='tutorial2' />
      ) : (
        <React.Fragment>
          <Box sx={{ mt: 2, mb: 1 }}>{stepContent(activeStep)}</Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
      <Snackbar open={open} autoHideDuration={7000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          elevation={6}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Tutorial2;
