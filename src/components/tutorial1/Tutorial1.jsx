import {
  Alert,
  Box,
  Button,
  Snackbar,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { getBlocks } from "../../assets/customblocks";
import Finish from "./Finish";

const steps = [
  "Basics",
  "All wheels on track",
  "Speed",
  "Try Running it on AWS",
];

const Tutorial1 = () => {
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
    if (activeStep === 0) {
      if (
        !(
          blocks.includes("reward")
          // blocks.includes("all_wheels_on_track_init") &&
          // blocks.includes("speed_init")
        )
      ) {
        setError(prev => "Please place the 'set reward to' block inside the reward function.");
        setOpen(prev => true);
        return;
      }
    }
    else if (activeStep === 1 && !blocks.includes("wheels_on_track_check")) {
        setError(prev => "Please add the check block first.");
        setOpen(prev => true);
        return;
    }
    else if (activeStep === 2 && !blocks.includes("check_speed")) {
        setError(prev => "Please add the check block first.");
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

    }
  };

  return (
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
          <Finish handleReset={handleReset} tutorial='tutorial1' />
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

export default Tutorial1;
