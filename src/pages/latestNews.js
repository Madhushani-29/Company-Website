import { Grid, Typography, Divider, Box } from "@mui/material";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NewsData from "../data/newsData";
import NewsSwiper from "../components/newsSwiper";

const LatestNews = () => {
  return (
    <Grid
      id="features"
      display="flex"
      justifyContent="center"
      marginTop="70px"
      marginBottom="100px"
    >
      <Box
        sx={{
          zIndex: -1,
          position: "absolute",
          marginTop: "280px",
          width: "100%",
          minHeight: "430px",
          background: "#F5F5F5",
          pointerEvents: "none",
        }}
      ></Box>

      <Grid maxWidth="85%" sx={{ textAlign: "center" }}>
        <Typography
          sx={{ color: "#0864b1", fontSize: "30px", fontWeight: "800" }}
        >
          Latest News
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Divider
              color="#676767"
              sx={{ width: "140px", height: "6px", marginBottom: "70px" }}
            />
          </Box>
        </Typography>
        <NewsSwiper newsData={NewsData} />
      </Grid>
    </Grid>
  );
};

export default LatestNews;
