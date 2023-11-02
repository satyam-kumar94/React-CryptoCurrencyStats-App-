import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    // backgroundImage:"url(./bannermain.jpg)",
    backgroundImage:"url(https://images.pexels.com/photos/814136/pexels-photo-814136.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)",
    // backgroundImage:"url(https://images.pexels.com/photos/3745234/pexels-photo-3745234.jpeg)",
    // backgroundImage:"url(https://images.pexels.com/photos/12154830/pexels-photo-12154830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
    backgroundSize: "cover", // Set the background size to cover the entire container
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center", // Center the background image
    height: "90vh",
    

  },

  bannerContent: {
    height: 550,
    display: "flex",
    flexDirection: "column",
    // paddingTop: 2,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            YOUR CRYPTO
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              // color: "darkgrey",
              color: "white",
              fontWeight: "bold",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
