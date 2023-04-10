import { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AccountCircle } from "@mui/icons-material";
import Tutorial1 from "../components/tutorial1/Tutorial1";
import BlocklySpace from "../components/BlocklySpace";
import CodeDialogue from "../components/CodeDialogue";
import { tutorial1_toolbox } from "../assets/toolbox";
import { copyCode, downloadCode, isLoggedIn } from "../helper/helper";
import { useNavigate } from "react-router-dom";

function Tutorial1Page() {
  const [xml, setXml] = useState("");
  const [pythonCode, setPythonCode] = useState("");
  // const [open, setOpen] = useState(false);
  const [codeView, setCodeView] = useState(true);
  const navigator = useNavigate();

  // useEffect(() => {
  //   isLoggedIn().then(res => {
  //     if(!res){
  //       window.location.href = "http://localhost:8083/auth/login";
  //     }
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // }, []);

  // const showCode = () => {
  //   // setOpen(true);
  //   // setCodeView(prev => !prev);
  //   // window.location.reload(false);
  // };

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
          <Button color="inherit" onClick={() => navigator("/")}>
            Go Home
          </Button>
          {/* <CodeDialogue
            handleClose={handleClose}
            open={open}
            tutorial="tutorial1"
          /> */}
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
          container
          item
          xs={6}
          sx={{
            height: `${window.innerHeight - 64}px`,
            padding: 0,
            border: "2px solid black",
          }}
          spacing={0}
        >
          <Grid item xs={12} sx={{ height: "60%" }}>
            <BlocklySpace
              setXml={setXml}
              setPythonCode={setPythonCode}
              toolbox={tutorial1_toolbox}
              tutorialNum="tutorial1"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              height: "40%",
              padding: 2,
              overflow: "scroll",
            }}
          >
            <Button color="primary" onClick={() => downloadCode("tutorial6")}>
              Download Code
            </Button>
            <Button color="primary" onClick={() => copyCode("tutorial6")}>
              Copy Code
            </Button>
            <SyntaxHighlighter
              language="python"
              style={vs}
              customStyle={{ border: "none" }}
            >
              {pythonCode}
            </SyntaxHighlighter>
          </Grid>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            height: `${window.innerHeight - 64}px`,
            padding: 2,
            border: "2px solid black",
            overflowY: "scroll",
          }}
        >
          <Tutorial1 />
        </Grid>
      </Grid>
    </>
  );
}

export default Tutorial1Page;
