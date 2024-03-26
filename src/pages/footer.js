import { Grid, Typography } from "@mui/material";
import React from "react";
import FacebookImage from "../assets/FacebookImage.svg";
import LinkedinImage from "../assets/LinkedinImage.svg";
import InstagramImage from "../assets/InstagramImage.svg";
import TwitterImage from "../assets/TwitterImage.svg";
import YoutubeImage from "../assets/YoutubeImage.svg";

const Footer = () => {
  return (
    <Grid
      display="flex"
      justifyContent="space-between"
      color="#FFFFFF"
      paddingY="40px"
      paddingLeft="90px"
      paddingRight="70px"
      sx={{ backgroundColor: "#0864B1" }}
    >
      <Grid>
        <Grid display="flex" alignItems="baseline" gap="25px">
          <Grid>
            <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
              Company Logo
            </Typography>
          </Grid>
          <Grid>
            <Typography sx={{ fontSize: "14px" }}>
              Keas 69 Str. 15234, East Nile
              <br /> Athens, Greece <br />
              +249 9123 456 78 <br />
              +249 9123 456 78
            </Typography>
          </Grid>
        </Grid>
        <Typography mt={9} sx={{ fontSize: "18px", fontWeight: "bold" }}>
          &copy; 2020 Reserver by Company Name Limited.
        </Typography>
      </Grid>
      <Grid>
        <Typography mb="10px" sx={{ fontSize: "22px", fontWeight: "bold" }}>
          Stay connected with
        </Typography>

        <Grid display="flex" gap="12px">
          <img
            src={FacebookImage}
            alt="Facebook"
            style={{ height: "42px", width: "42px" }}
          />
          <img
            src={TwitterImage}
            alt="Twitter"
            style={{ height: "42px", width: "42px" }}
          />
          <img
            src={InstagramImage}
            alt="Instagram"
            style={{ height: "42px", width: "42px" }}
          />
          <img
            src={LinkedinImage}
            alt="Linkedin"
            style={{ height: "42px", width: "42px" }}
          />
          <img
            src={YoutubeImage}
            alt="Youtube"
            style={{ height: "42px", width: "42px" }}
          />
        </Grid>

        <Typography mt="100px" sx={{ fontSize: "16px" }}>
          Published: March 05, 2024
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
