import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { InView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const useStyles = makeStyles(() => ({
  deadCenterColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  deadCenterRow: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: "20px",
  },
  desImages: {
    width: "150px",
    paddingBottom: "2vh",
    "@media (max-width: 820px)": {
      padding: "20px",
    },
  },
  profilePic: {
    paddingBottom: "3vh",
    width: "250px",
    "@media (max-width: 820px)": {
      padding: "30px",
    },
  },
  aboutmeText: {
    "@media (max-width: 1000px)": {
      padding: "30px",
    },
  },
  headerText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
  },
  mainContainer: {
    padding: "90px",
    "@media (max-width: 1000px)": {
      padding: "90px 0px 0px 0px",
    },
  },
  skillContainer: {
    width: "100%",
    height: "100%",
    padding: "0 8vw 0 8vw",
  },
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const About = () => {
  const classes = useStyles();
  return (
    <Grid
      justify="center"
      alignItems="center"
      container
      name="about"
      className={classes.mainContainer}
    >
      <Grid item xs={12}>
        <ThemeProvider theme={theme}>
          <Typography variant="h2" className={classes.deadCenterColumn}>
            <div
              style={{ fontFamily: "Open Sans,sans-serif" }}
              className={classes.headerText}
            >
              <div>About</div>
              <img
                src="./images/line.png"
                alt="solid line"
                style={{ width: "70px", height: "10px" }}
              />
            </div>
          </Typography>
        </ThemeProvider>
      </Grid>
      <Grid container item xs={10} style={{ paddingBottom: "6vh" }}>
        <Grid item sm={3} xs={6} className={classes.deadCenterColumn}>
          <div data-aos="zoom-in-right">
            <img
              className={classes.desImages}
              alt="me"
              src="/images/draw.png"
            />
            <div style={{ fontFamily: "Open Sans,sans-serif" }}>
              <b>Detail Oriented</b>
            </div>
          </div>
        </Grid>
        <Grid item sm={3} xs={6} className={classes.deadCenterColumn}>
          <div data-aos="zoom-in" data-aos-delay="100">
            <img
              className={classes.desImages}
              alt="me"
              src="/images/search.png"
            />
            <div style={{ fontFamily: "Open Sans,sans-serif" }}>
              <b>Resourceful</b>
            </div>
          </div>
        </Grid>
        <Grid item sm={3} xs={6} className={classes.deadCenterColumn}>
          <div data-aos="zoom-in" data-aos-delay="200">
            <img
              className={classes.desImages}
              alt="me"
              src="/images/idea.png"
            />
            <div style={{ fontFamily: "Open Sans,sans-serif" }}>
              <b>Analytical</b>
            </div>
          </div>
        </Grid>
        <Grid item sm={3} xs={6} className={classes.deadCenterColumn}>
          <div data-aos="zoom-in-left" data-aos-delay="300">
            <img
              className={classes.desImages}
              alt="me"
              src="/images/agreement.png"
            />
            <div style={{ fontFamily: "Open Sans,sans-serif" }}>
              <b>Team Player</b>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={10}>
        <Grid item xs={12} md={4}>
          <div className={classes.deadCenterColumn}>
            <img
              className={classes.profilePic}
              alt="me"
              src="/images/me.webp"
            />

            <Typography
              variant="h4"
              className={classes.deadCenterColumn}
              style={{ fontFamily: "Open Sans,sans-serif" }}
            >
              What is this human?
            </Typography>
            <br></br>
            <div
              style={{ fontFamily: "Open Sans,sans-serif" }}
              className={classes.aboutmeText}
            >
              My name is Sam and I come from Toronto, Canada. <br></br> I'm a
              junior full stack web developer on a mission to get dirty hands
              and squeaky clean code.
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <InView threshold={0.4} triggerOnce>
            {({ inView, ref, entry }) => (
              <div style={{ width: "100%" }} ref={ref}>
                {inView && (
                  <div
                    className="skillscontainer"
                    style={{ fontFamily: "Open Sans,sans-serif" }}
                  >
                    <ul>
                      <li className="html">HTML / CSS</li>
                      <li className="react">React</li>
                      <li className="js">Javascript</li>
                      <li className="express">Express</li>
                      <li className="api">Rest API</li>
                      <li className="mongo">Mongo DB</li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </InView>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
