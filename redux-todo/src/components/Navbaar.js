import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { DeleteContext } from "./context/ContextProvider";
import Alert from "react-bootstrap/Alert";

const Navbaar = () => {
  const { dlttask, setDlettask } = useContext(DeleteContext);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              sx={{ alignSelf: "right" }} // Add this line to center align the text
            >
              Redux Todo-app
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {dlttask ? (
        <Alert
          variant="danger"
          className="alert"
          onClose={() => setDlettask(false)}
          dismissible
        >
          <Alert.Heading>Your Task Removed Succesfully</Alert.Heading>
        </Alert>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbaar;
