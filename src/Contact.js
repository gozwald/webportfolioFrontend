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
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  deadCenterColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    "@media (max-width: 1000px)": {
      padding: "0 0 30px 0",
    },
  },
  deadCenterRow: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: "20px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    background: "#ffe200",
    border: "0px solid #000",
    outline: "0",
    borderRadius: "25px",
  },
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Contact = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://personalportfoliobackend.herokuapp.com/email/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    e.target.reset();
    setOpen(true);
  };

  const classes = useStyles();
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        style={{
          paddingTop: "15vh",
          display: "flex",
        }}
      >
        <img
          src="./images/arrowdown.webp"
          alt="downarrow"
          style={{
            width: "100%",
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        name="contactme"
        style={{
          paddingTop: "15vh",
          paddingBottom: "15vh",
          background: "#2c3e50",
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography
            style={{ color: "white" }}
            variant="h2"
            className={classes.deadCenterColumn}
          >
            <div
              className={classes.headerText}
              style={{ fontFamily: "Open Sans,sans-serif" }}
            >
              <div>Contact</div>
              <img
                src="./images/line.png"
                alt="solid line"
                style={{ width: "70px", height: "10px", filter: "invert(1)" }}
              />
            </div>
          </Typography>
          <Typography
            style={{
              color: "turquoise",
              padding: "30px",
              fontFamily: "Open Sans,sans-serif",
            }}
            className={classes.deadCenterColumn}
          >
            Something on your mind?
          </Typography>
          <div className={classes.deadCenterColumn}>
            <div
              className="login-box"
              style={{ fontFamily: "Open Sans,sans-serif" }}
            >
              <form name="contact" onSubmit={handleSubmit}>
                <div className="user-box">
                  <input type="text" name="name" required />
                  <label>Name</label>
                </div>
                <div className="user-box">
                  <input type="email" name="email" required />
                  <label>Email</label>
                </div>
                <div className="user-box">
                  <textarea
                    id="comment"
                    placeholder="Your message goes here!"
                    name="message"
                    style={{
                      width: "100%",
                      height: "150px",
                      background: "#283948",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      outline: "none",
                    }}
                  />
                </div>

                <button className="submit" type="submit" name="submit">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </button>
              </form>
            </div>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div
                  className={classes.paper}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      padding: "30px",
                      fontFamily: "Open Sans,sans-serif",
                    }}
                  >
                    <b>Thanks!</b> <br></br>We appreciate that you’ve taken the
                    time to write us. We’ll get back to you very soon.
                  </div>
                </div>
              </Fade>
            </Modal>
          </div>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};

export default Contact;
