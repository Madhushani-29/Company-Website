import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

const TestimonialsSwiper = ({ testimonialsData }) => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "RGBA(103,103,103,0.15 )",
        "--swiper-pagination-color": "RGBA(103,103,103,0.15 )",
      }}
      lazy={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {testimonialsData.map((testimonials) => (
        <SwiperSlide>
          <Grid display="flex" justifyContent="center">
            <Box maxWidth="700px">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <FormatQuoteRoundedIcon
                  sx={{ color: "#0864b1", fontSize: "50px" }}
                />
              </Box>
              <Typography
                sx={{
                  paddingRight: "30px",
                  color: "#676767",
                  fontSize: "20px",
                  lineHeight: "35px",
                }}
              >
                {testimonials.content1}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",

                  alignItems: "center",
                }}
              >
                <FormatQuoteRoundedIcon
                  sx={{
                    color: "#0864b1",
                    fontSize: "50px",
                    transform: "rotate(180deg)",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  color: "#0864B1",
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: "0px",
                }}
              >
                {testimonials.content2}
              </Typography>
              <Typography
                sx={{
                  color: "#676767",
                  fontSize: "20px",
                  lineHeight: "90px",
                }}
              >
                {testimonials.content3}
              </Typography>
            </Box>
          </Grid>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsSwiper;
