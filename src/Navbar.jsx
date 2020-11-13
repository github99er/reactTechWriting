import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";
import "./styles.css";
import WorkIcon from "@material-ui/icons/Work";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Fab } from "@material-ui/core";
import { Facebook, Twitter, Home, GitHub, Instagram } from "@material-ui/icons";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import styled from "styled-components";
import NoteIcon from "@material-ui/icons/Note";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  toggleDrawerNavigator = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <div>
        <AppBar
          position="fixed"
          className={this.props.classes.appBar}
          style={{ backgroundColor: "#20232a" }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              margin
              className={this.props.classes.title}
            ></Typography>

            <div className={this.props.classes.home}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  size="small"
                  variant="contained"
                  color="default"
                  startIcon={<Home />}
                  style={{
                    margin: "0px",
                    marginRight: "100%",
                    Postion: "absolute",
                    backgroundColor: "#61dafb",
                    color: "white",
                  }}
                >
                  Home
                </Button>
              </Link>
            </div>
            <div className={this.props.classes.Projects}>
              <Link to="/Code" style={{ textDecoration: "none" }}>
                <Button
                  size="small"
                  variant="contained"
                  color="default"
                  startIcon={<WorkIcon />}
                  style={{
                    margin: "10px",
                    backgroundColor: "#61dafb",
                    color: "white",
                    width: "170px"
                  }}
                >
                  Coding Projects
                </Button>
              </Link>
            </div>

            <div className={this.props.classes.Projects}>
              <Link to="/Projects" style={{ textDecoration: "none" }}>
                <Button
                  size="small"
                  variant="contained"
                  color="default"
                  startIcon={<WorkIcon />}
                  style={{
                    margin: "10px",
                    backgroundColor: "#61dafb",
                    color: "white",
                    width: "170px"
                  }}
                >
                  Writing Samples
                </Button>
              </Link>
            </div>

            <div className={this.props.classes.GitHubIcon}>
              <Button
                size="small"
                variant="contained"
                color="default"
                startIcon={<GitHub />}
                style={{
                  margin: "10px",
                  backgroundColor: "#61dafb",
                  color: "white",
                }}
                target="_blank"
                href="https://github.com/github99er"
              >
                GitHub
              </Button>
            </div>
            <div className={this.props.classes.LinkedInIcon}>
              <Button
                size="small"
                variant="contained"
                color="default"
                startIcon={<LinkedInIcon />}
                style={{
                  margin: "10px",
                  backgroundColor: "#61dafb",
                  color: "white",
                }}
                target="_blank"
                href="https://www.linkedin.com/in/ryan-murphy-942277107/"
              >
                LinkedIn
              </Button>
            </div>

            <div className={this.props.classes.ResumeIcon}>
              <Link to="/Resume" style={{ textDecoration: "none" }}>
                <Button
                  size="small"
                  variant="contained"
                  color="default"
                  startIcon={<NoteIcon />}
                  style={{
                    margin: "10px",
                    backgroundColor: "#61dafb",
                    color: "white",
                  }}
                >
                  Resume
                </Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = (theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1000,
    backgroundColor: "#333333",
  },

  title: {
    color: "White",
    marginRight: theme.spacing(1),
    width: "100%",
    poistion: "absolute",
    alignItems: "center",
  },

  home: {
    width: "100%",
    marginRight: "100%",
    position: "absolute",
  },

  About: {
    "&:hover": {
      color: "#FFF",
    },
  },

  drawer: {
    width: 240,
  },

  drawerPaper: {
    width: 240,
    background: { pink },
  },
  toolbar: theme.mixins.toolbar,
});

export default withStyles(styles, { withTheme: true })(Navbar);
