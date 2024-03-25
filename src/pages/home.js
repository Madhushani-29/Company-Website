import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import HeroBanner from "../assets/HeroBanner.png";
import OverlayImage from "../assets/OverlayImage.svg"; 

const Home = () => {
  return (
    <Grid
      sx={{
        minHeight: "750px",
        position: "relative",
        backgroundImage: `url(${HeroBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
        }}
      ></Box>
      <img
        src={OverlayImage}
        alt="Overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.5,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          paddingTop: "220px",
          paddingLeft: "110px",
          maxWidth: "600px",
        }}
      >
        <Typography
          sx={{ color: "#ffff", fontSize: "60px", fontWeight: "800" }}
        >
          Welcome to our company...
        </Typography>
        <Typography
          lineHeight="40px"
          sx={{
            color: "#ffff",
            fontSize: "22px",
            paddingTop: "30px",
          }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </Typography>
      </Box>
    </Grid>
  );
};

export default Home;
