import { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Tutorial1 from "../components/tutorial1/Tutorial1";
import BlocklySpace from "../components/BlocklySpace";
import CodeDialogue from "../components/CodeDialogue";
import { tutorial1_toolbox } from "../assets/toolbox";
import { isLoggedIn } from "../helper/helper";

function Tutorial1Page() {
  const [xml, setXml] = useState("");
  const [pythonCode, setPythonCode] = useState("");
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   isLoggedIn().then(res => {
  //     if(!res){
  //       window.location.href = "http://localhost:8083/auth/login";
  //     }
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // }, []);

  const showCode = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ margin: 0 }}>
        <Toolbar>
          <Typography varient="h6" component="div" sx={{ flexGrow: 1, mr: 2 }}>
            Turoial 1: Basics
          </Typography>
          <Button color="inherit" onClick={showCode}>
            Show Code
          </Button>
          <CodeDialogue
            handleClose={handleClose}
            open={open}
            tutorial="tutorial1"
          />
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
          sx={{ height: `${window.innerHeight - 64}px`, padding: 0, border: "2px solid black" }}
        >
          <BlocklySpace
            setXml={setXml}
            setPythonCode={setPythonCode}
            toolbox={tutorial1_toolbox}
            tutorialNum='tutorial1'
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ height: `${window.innerHeight - 64}px`, padding: 2, border: "2px solid black", overflowY: "scroll" }}
        >
          <Tutorial1 />
        </Grid>
      </Grid>
    </>
  );
}

export default Tutorial1Page;
