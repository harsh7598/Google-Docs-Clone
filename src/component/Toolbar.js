import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  makeStyles,
  Box,
  Menu,
  MenuItem,
  Divider,
} from "@material-ui/core";
import {
  StarBorderOutlined,
  Description,
  Message,
  VideoCall,
  Add,
  Undo,
  Redo,
  Print,
  ArrowDropDown,
  Check,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  description: {
    fontSize: "18px",
  },
  sectionRight: {
    marginLeft: "auto",
  },
  rectangularBar: {
    backgroundColor: "#E1F5FE",
    borderRadius: "10px",
    padding: "2px 10px", // Adjust padding values
    margin: "8px 12px", 
    display: "flex",
    alignItems: "center",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    color: "black",
  },
}));

const Toolbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#FFFFFF" }}
      elevation={0}
    >
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <IconButton edge="start" color="inherit" aria-label="document">
              <Description style={{ color: "#000000" }} />
            </IconButton>
          </Grid>
          <Grid direction="column" className={classes.root}>
            <Grid item>
              <Typography
                variant="h6"
                style={{
                  color: "rgba(0, 0, 0, 0.87)",
                  marginLeft: "10px",
                  marginTop: "5px",
                }}
              >
                Untitled document
                <StarBorderOutlined
                  style={{ color: "#000000", marginLeft: "10px" }}
                />
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                className={classes.description}
                style={{
                  color: "rgba(0, 0, 0, 0.87)",
                  marginLeft: "10px",
                  fontSize: "15px",
                }}
              >
                File Edit View Insert Format Tools Extensions Help
              </Typography>
            </Grid>
          </Grid>

          <Grid item className={classes.sectionRight}>
            <IconButton color="inherit">
              <Message style={{ color: "#000000" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="inherit">
              <VideoCall style={{ color: "#000000" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="inherit">
              <Add style={{ color: "#000000" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
      <Box className={classes.rectangularBar}>
        <IconButton color="inherit">
          <Undo style={{ color: "#000000" }} />
        </IconButton>
        <IconButton color="inherit">
          <Redo style={{ color: "#000000" }} />
        </IconButton>
        <IconButton color="inherit">
          <Print style={{ color: "#000000" }} />
        </IconButton>
        <IconButton color="inherit" onClick={handleClick}>
          <Check style={{ color: "#000000" }} />
        </IconButton>
        <Typography variant="body1" className={classes.menuItem}>
          100%
          <ArrowDropDown style={{ color: "#000000", marginLeft: "25px" }} />
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          style={{ marginRight: "25px" }}
        />
        <Typography variant="body1" className={classes.menuItem}>
          Normal Text
          <ArrowDropDown style={{ color: "#000000", marginLeft: "25px" }} />
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          style={{ marginRight: "25px" }}
        />
        <Typography variant="body1" className={classes.menuItem}>
          Arial{" "}
          <ArrowDropDown style={{ color: "#000000", marginLeft: "25px" }} />
        </Typography>
      </Box>
    </AppBar>
  );
};

export default Toolbar;
