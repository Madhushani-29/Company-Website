import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const NewsSwiper = ({ newsData }) => {
  return (
    <Grid>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={70}
        slidesPerView={3}
        navigation
      >
        {newsData.map((news) => (
          <SwiperSlide key={news.id}>
            <Card
              sx={{
                maxWidth: 340,
                borderRadius: "0px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  height="200px"
                  component="img"
                  image={news.image}
                  alt="News Image"
                />
                <CardContent
                  sx={{
                    marginRight: "15px",
                    paddingLeft: "30px",
                    paddingTop: "35px",
                  }}
                >
                  <Typography textAlign="left" color="#676767" fontSize="15px">
                    {news.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{ justifyContent: "flex-end", marginRight: "15px" }}
              >
                <Button
                  size="small"
                  sx={{
                    textTransform: "none",
                    color: "#0864b1",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Read
                </Button>
                <ArrowForwardIosRoundedIcon
                  sx={{ color: "#0864b1", fontSize: "15px" }}
                />
              </CardActions>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <Grid
        display="flex"
        gap="12px"
        justifyContent="center"
        alignItems="center"
        mt="50px"
      >
        {newsData.map((news) => (
          <Box
            key={news.id}
            height="7px"
            width="42px"
            sx={{ backgroundColor: news.id === 2 ? "#0864B1" : "#9FD2FF" }}
          ></Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default NewsSwiper;
