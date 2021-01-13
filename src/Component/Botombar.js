import React, { Component } from "react";
import { Instagram, Twitter} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Container,Grid, Typography } from "@material-ui/core";


class Botombar extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#6495ED",
          padding: "40px",
          marginTop: "50px"
        }}
      >
        <Container style={{ color: "white" ,display:"center"}}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={2}>
              <div style={{ marginBottom: "20px" }}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "bold", fontFamily: "poppins",display: "flex" }}
                >
                  Links
                </Typography>
                <Link
                  to="/about"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontFamily: "poppins"
                  }}
                >
                  <Typography variant="body2" style={{color:"white",display: "flex"}}>About Us</Typography>
                </Link>
              </div>
              <div>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "bold", fontFamily: "poppins" ,display: "flex"}}
                >
                  Follow Us On
                </Typography>
                <Link
                  to="/instagram"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <Instagram />
                  <Typography
                    variant="body2"
                    style={{ marginLeft: "2px", fontFamily: "poppins" }}
                  >
                    Instagram
                  </Typography>
                </Link>
                <Link
                  to="/twitter"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <Twitter />
                  <Typography
                    variant="body2"
                    style={{ marginLeft: "2px", fontFamily: "poppins"}}
                  >
                    Twitter
                  </Typography>
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", fontFamily: "poppins" }}
              >
                Scale Network
              </Typography>
              <Typography variant="body1" style={{ fontFamily: "poppins" }}>
                Kualitas Produk, Layanan, Tempat, Konsep Atau
                Ide dapat Dibandingkan dengan berbagai hal berbeda
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography
                variant="body1"
                style={{ fontWeight: "bold", fontFamily: "poppins" }}
              >
                Have a question?
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ fontWeight: "bold", fontFamily: "poppins" }}
              >
                Scale Network
              </Typography>
              <Typography variant="subtitle2" style={{ fontFamily: "poppins" }}>
                email: ScaleNetwork@sc-nw.com
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Botombar;