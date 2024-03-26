import { Grid, Typography, Divider, Box } from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <Grid marginTop="25px">
      <Grid sx={{ textAlign: "center", marginBottom: "25px" }}>
        <Typography
          sx={{ color: "#0864b1", fontSize: "30px", fontWeight: "800" }}
        >
          Contact Us
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Divider
              color="#676767"
              sx={{ width: "140px", height: "6px", marginBottom: "30px" }}
            />
          </Box>
        </Typography>
      </Grid>
      <Grid>
        <iframe
          title="googleMap"
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=320%20E%209th%20St,%20Charlotte,%20NC%2028202,%20United%20States+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
