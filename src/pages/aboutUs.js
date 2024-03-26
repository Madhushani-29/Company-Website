import { Grid, Typography, Divider, Box } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <Grid id="about-us" display="flex" justifyContent="center" marginTop="70px">
      <Grid maxWidth="700px" sx={{ textAlign: "center" }}>
        <Typography
          sx={{ color: "#0864b1", fontSize: "30px", fontWeight: "800" }}
        >
          About Us
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Divider
              color="#676767"
              sx={{ width: "135px", height: "6px", marginBottom: "70px" }}
            />
          </Box>
        </Typography>

        <Typography
          lineHeight="44px"
          sx={{ color: "#676767", fontSize: "20px" }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est{" "}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
