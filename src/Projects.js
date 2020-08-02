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
import Card from "@material-ui/core/Card";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const useStyles = makeStyles((theme) => ({
  deadCenterColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  deadCenterRow: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  gridspacing: {
    padding: "10px",
  },
  cardprop: {
    display: "flex",
    height: "250px",
    width: "100%",
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
      padding: "90px 30px 0px 30px",
    },
  },
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Projects = () => {
  const classes = useStyles();
  return (
    <Grid name="projects" className={classes.mainContainer}>
      <ThemeProvider theme={theme}>
        <Grid item xs={12}>
          <Typography variant="h2" className={classes.deadCenterColumn}>
            <div className={classes.headerText}>
              <div>Projects</div>
              <img
                src="./images/line.png"
                alt="solid line"
                style={{ width: "70px", height: "10px" }}
              />
            </div>
          </Typography>
        </Grid>

        <Grid container item xs={12} className={classes.deadCenterRow}>
          <Grid className={classes.gridspacing} item sm={6} md={4}>
            <div data-aos="fade-up">
              <Card className={classes.cardprop}>
                <div class="bg">
                  <img src="/images/konami.gif" alt="" />
                  <div class="overlay">
                    <div className="backcontainer">
                      <div>
                        <b>Konami Code!</b>
                      </div>
                      <br></br>
                      <div>Technologies:</div>
                      <div>Javascript</div>
                      <div>HTML / CSS</div>
                      <br></br>
                      <div>Github Repo:</div>
                      <div>https://github.com/gozwald/konami</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Grid>
          <Grid className={classes.gridspacing} item xs={12} sm={6} md={4}>
            <div data-aos="fade-up">
              <Card className={classes.cardprop}>
                <div class="bg">
                  <img src="/images/cookbook.png" alt="" />
                  <div class="overlay">
                    <div className="backcontainer">
                      <div>
                        <b>Epic Cookbook</b>
                      </div>
                      <br></br>
                      <div>Technologies:</div>
                      <div>Javascript</div>
                      <div>HTML / CSS</div>
                      <br></br>
                      <div>Github Repo:</div>
                      <div>https://github.com/gozwald/CookBook</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Grid>
          <Grid className={classes.gridspacing} item xs={12} sm={6} md={4}>
            <div data-aos="fade-up">
              <Card className={classes.cardprop}>
                <div class="bg">
                  <img src="/images/revyou.png" alt="" />
                  <div class="overlay">
                    <div className="backcontainer">
                      <div>
                        <b>Revyou (Chrome Extension)</b>
                      </div>
                      <br></br>
                      <div>Technologies:</div>
                      <div>Javascript</div>
                      <div>Express (Node JS)</div>
                      <div>HTML / CSS</div>
                      <br></br>
                      <div>Github Repo:</div>
                      <div>https://github.com/gozwald/revyouBackend</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Grid>

          <Grid className={classes.gridspacing} item xs={12} sm={6} md={4}>
            <div data-aos="fade-up">
              <Card className={classes.cardprop}>
                <div class="bg">
                  <img src="/images/skoli.png" alt="" />
                  <div class="overlay">
                    <div className="backcontainer">
                      <div>
                        <b>Skoliosis Organization</b>
                      </div>
                      <br></br>
                      <div>Technologies:</div>
                      <div>Javascript</div>
                      <div>HTML / CSS</div>
                      <div>Bootstrap</div>
                      <br></br>
                      {/* <div>Github Repo:</div>
                    <div>https://github.com/gozwald/revyouBackend</div> */}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Grid>
          <Grid className={classes.gridspacing} xs={12} sm={6} md={4}>
            <div data-aos="fade-up">
              <Card className={classes.cardprop}>
                <div class="bg">
                  <img src="/images/videoplayer.png" alt="" />
                  <div class="overlay">
                    <div className="backcontainer">
                      <div>
                        <b>Custom HTML5 Player</b>
                      </div>
                      <br></br>
                      <div>Technologies:</div>
                      <div>Javascript</div>
                      <div>HTML / CSS</div>
                      <div>React</div>
                      <br></br>
                      <div>Github Repo:</div>
                      <div>https://github.com/gozwald/videoapp</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Grid>
          <Grid className={classes.gridspacing} xs={12} sm={6} md={4}>
            <div data-aos="fade-up">
              <Card className={classes.cardprop}>
                <div class="bg">
                  <img src="/images/lovit19.png" alt="" />
                  <div class="overlay">
                    <div className="backcontainer">
                      <div>
                        <b>Care Package Site</b>
                      </div>
                      <br></br>
                      <div>Technologies:</div>
                      <div>Javascript</div>
                      <div>HTML / CSS</div>
                      <div>React</div>
                      <div>Express</div>
                      <br></br>
                      <div>Github Repo:</div>
                      <div>https://github.com/gozwald/shopping_cms</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Grid>
  );
};

export default Projects;
