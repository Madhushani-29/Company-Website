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
    <Grid display="flex" justifyContent="center" marginTop="140px">
      <Grid maxWidth="700px" sx={{ textAlign: "center" }}>
        <Typography
          sx={{ color: "#0864b1", fontSize: "28px", fontWeight: "800" }}
        >
          Testimonials
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Divider
              color="#676767"
              sx={{ width: "170px", height: "6px", marginBottom: "70px" }}
            />
          </Box>
        </Typography>

        <Swiper
          style={{
            "--swiper-navigation-color": "red",
            "--swiper-pagination-color": "red",
          }}
          lazy={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {TestimonialsData.map((testimonials) => (
            <SwiperSlide>
              <Grid  display="flex" justifyContent="center" >
              <Box maxWidth='500px'>
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
                <Typography>{testimonials.content1}</Typography>
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
                <Typography>{testimonials.content2}</Typography>
                <Typography>{testimonials.content3}</Typography>
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
