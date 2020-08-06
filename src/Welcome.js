import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import Back from "./Back";

const useStyles = makeStyles(() => ({
  home: {
    display: "flex",
    height: "100vh",
    width: "100vw",
  },
  deadCenterColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
  deadCenterRow: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: "20px",
  },
}));

const Welcome = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        name="home"
        justify="center"
        alignItems="center"
        container
        className={classes.home}
        item
        xs={12}
      >
        {/* <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            color: "white",
            padding: "40px",
          }}
        >
          <div className="btn">CV</div>
        </div> */}
        <Back />

        <Grid item xs={7}>
          <div
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "max(3vw, 25px)",
              fontFamily: "Open Sans,sans-serif",
            }}
          >
            Hi, I'm <span style={{ color: "#e31b6d" }}>Samuel Greenwald.</span>
            <br></br>
            I'm a full-stack web developer.
          </div>

          <div className={classes.deadCenterRow}>
            <Link to="about" spy={true} smooth={true} duration={500}>
              <span
                className="ghost-button-semi-transparent"
                style={{ fontFamily: "Open Sans,sans-serif" }}
              >
                LET'S GO DEEPER
              </span>
            </Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Welcome;
