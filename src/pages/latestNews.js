import { Grid, Typography, Divider, Box } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NewsData from "../data/newsData";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const LatestNews = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      marginTop="70px"
      marginBottom="100px"
    >
      <Box
        sx={{
          position: "absolute",
          marginTop: "280px",
          width: "100%",
          minHeight: "420px",
          background: "#F5F5F5",
          pointerEvents: "none",
        }}
      ></Box>

      <Grid maxWidth="85%" sx={{ textAlign: "center" }}>
        <Typography
          sx={{ color: "#0864b1", fontSize: "28px", fontWeight: "800" }}
        >
          Latest News
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Divider
              color="#676767"
              sx={{ width: "170px", height: "6px", marginBottom: "70px" }}
            />
          </Box>
        </Typography>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={70}
          slidesPerView={3}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {NewsData.map((news) => (
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
                    <Typography
                      textAlign="left"
                      color="#676767"
                      fontSize="15px"
                    >
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
      </Grid>
    </Grid>
  );
};

export default LatestNews;
