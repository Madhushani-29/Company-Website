import { Grid, Typography, Divider, Box } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import TestimonialsData from "../data/testimonialsData";

const Testimonials = () => {
  return (
    <Grid display="flex" justifyContent="center" marginTop="180px">
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
          {TestimonialsData.map((testimonials) => (
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
                      paddingRight:'30px',
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
      </Grid>
    </Grid>
  );
};

export default Testimonials;
