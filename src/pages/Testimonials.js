import { Grid, Typography, Divider, Box } from "@mui/material";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialsData from "../data/testimonialsData";
import TestimonialsSwiper from "../components/testimonialsSwiper";

const Testimonials = () => {
  return (
    <Grid display="flex" justifyContent="center" marginTop="130px">
      <Grid maxWidth="1000px" sx={{ textAlign: "center" }}>
        <Typography
          sx={{ color: "#0864b1", fontSize: "30px", fontWeight: "800" }}
        >
          Testimonials
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Divider
              color="#676767"
              sx={{ width: "140px", height: "6px", marginBottom: "30px" }}
            />
          </Box>
        </Typography>
        <TestimonialsSwiper testimonialsData={TestimonialsData} />
      </Grid>
    </Grid>
  );
};

export default Testimonials;
