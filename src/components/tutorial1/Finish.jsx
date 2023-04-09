import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useRef, useState } from "react";
import ReactConfetti from "react-confetti";
import { Link } from "react-router-dom";
// import Confetti from "react-confetti/dist/types/Confetti";

const Finish = ({ handleReset, tutorial }) => {
  const columns = [
    {
      field: "id",
      headerName: "Trial",
      width: 70,
      type: "number",
    },
    {
      field: "time",
      headerName: "Time(MM:SS:mmm)",
      width: 150,
      editable: true,
    },
    {
      field: "result",
      headerName: "Trial Result",
      width: 100,
      type: "number",
      editable: true,
    },
    {
      field: "status",
      headerName: "Trial Status",
      width: 150,
      type: "singleSelect",
      editable: true,
      valueOptions: ["Lap Completed", "Lap Not Completed"],
    },
    {
      field: "off_track",
      headerName: "Off Track",
      width: 100,
      type: "number",
      editable: true,
    },
    {
      field: "penalty",
      headerName: "Off Track Penalty",
      width: 150,
      type: "number",
      editable: true,
    },
    {
      field: "crashes",
      headerName: "Crashes",
      width: 100,
      type: "number",
      editable: true,
    },
    {
      field: "crashes_penalty",
      headerName: "Crash Penalty",
      width: 150,
      type: "number",
      editable: true,
    },
  ];

  const [rows, setRows] = useState([
    {
      id: 1,
      time: "00:00:000",
      result: 0,
      status: "Lap Not Completed",
      off_track: -1,
      penalty: -1,
      crashes: -1,
      crashes_penalty: -1,
    },
    {
      id: 2,
      time: "00:00:000",
      result: 0,
      status: "Lap Not Completed",
      off_track: -1,
      penalty: -1,
      crashes: -1,
      crashes_penalty: -1,
    },
    {
      id: 3,
      time: "00:00:000",
      result: 0,
      status: "Lap Not Completed",
      off_track: -1,
      penalty: -1,
      crashes: -1,
      crashes_penalty: -1,
    },
  ]);
  const [circuitName, setCircuitName] = useState("");
  const [errorCircuitName, setErrorCitcuitName] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    setModalOpen(false);
  };

  const processRowUpdate = (newRow, oldRow) => {
    setRows((prevRows) => {
      const newRows = [...prevRows].map((row, index) => {
        if (row.id === newRow.id) {
          return newRow;
        }
        return row;
      });
      //   console.log(newRows);
      return newRows;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (circuitName === "") {
      setErrorCitcuitName(true);
      return;
    }
    setErrorCitcuitName(prev => false);
    setCircuitName(prevName => {
        let val = document.getElementById('race-circuit').value;
        document.getElementById('race-circuit').value = '';
        return val;
    });
    // console.log(circuitName);
    const data = {
        circuitName,
        evaluation: rows
    };
    localStorage.setItem(`evaluation_${tutorial}`, JSON.stringify(data));
    setModalOpen(prev => true);
  };

  const dialogRef = useRef();

  return (
    <div id={tutorial}>
      <Box sx={{ width: "100%", height: "100%", padding: 1 }}>
        <Typography variant="h6" component="h6" paragraph gutterBottom>
          Congratualations on submitting your model. <br />
          After the training is completed, go to evaluation section and evaluate
          your model for 3 trials and on any of the given circuit. Enter the
          details below for participation:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="race-circuit"
              label="Race Enviornment"
              varient="outlined"
              fullWidth
              required
              value={circuitName}
              onChange={(e) => setCircuitName(prev => e.target.value)}
              error={errorCircuitName}
            />
          </Grid>
        </Grid>
        <div style={{ width: "100%", marginTop: '20px' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
            disableColumnMenu
            processRowUpdate={processRowUpdate}
            hideFooter
          />
        </div>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleReset} sx={{ m: 1 }}>
          Reset
        </Button>
        <Button variant="contained" sx={{ m: 1 }} onClick={handleSubmit} >
          Submit
        </Button>
      </Box>
      <Dialog open={modalOpen} onClose={handleClose} sx={{ overflow: 'hidden' }}>
        <DialogTitle ref={dialogRef} sx={{ width: '100%' }}>Congratualations on finishing {tutorial}</DialogTitle>
        <DialogContent>
            <DialogContentText>
            You can now move to <Link to='/tutorial2'>next tutorial</Link> or go to FreePlay section 
            to try out your own reward function.
            </DialogContentText>
        </DialogContent>
        {/* {console.log(dialogRef.current && dialogRef.current.clientWidth)} */}
        {/* <ReactConfetti opacity={0.3} width={dialogRef.current && dialogRef.current.clientWidth} height={dialogRef.current && dialogRef.current.clientHeight + 55 + 'px'} /> */}
      </Dialog>
      
    </div>
  );
};

export default Finish;
