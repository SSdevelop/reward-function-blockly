import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { toolbox } from "../assets/toolbox";
import BlocklySpace from "../components/BlocklySpace";
import { Prism as SyntaxHighLighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { copyCode, downloadCode, isLoggedIn } from "../helper/helper";

const FreePlay = () => {
  const [xml, setXml] = useState("");
  const [pythonCode, setPythonCode] = useState("");
  // const [auth, setAuth] = useState(false);

  // useEffect(() => {
  //   isLoggedIn().then(res => {
  //     if(!res){
  //       window.location.href = "http://localhost:8083/auth/login";
  //     }
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // }, []);
  return (
    <>
      <AppBar position="static" sx={{ margin: 0 }}>
        <Toolbar>
          <Typography varient="h6" component="div" sx={{ flexGrow: 1, mr: 2 }}>
            Free Play
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid
          item
          xs={6}
          sx={{
            minHeight: `${window.innerHeight - 64}px`,
            padding: 0,
            border: "2px solid black",
          }}
        >
          <BlocklySpace
            setXml={setXml}
            setPythonCode={setPythonCode}
            toolbox={toolbox}
            tutorialNum="tutorial6"
          />
        </Grid>
        <Grid item xs={6}>
          <Button color="primary" onClick={() => downloadCode("tutorial6")}>
            Download Code
          </Button>
          <Button color="primary" onClick={() => copyCode("tutorial6")}>
            Copy Code
          </Button>
          <SyntaxHighLighter
            language="python"
            style={vs}
            wrapLines
            customStyle={{ border: "none" }}
          >
            {pythonCode}
          </SyntaxHighLighter>
        </Grid>
      </Grid>
    </>
  );
};

export default FreePlay;
