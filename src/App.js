import { Grid } from "@mui/material";
import Navbar from "./components/navBar";
import AboutUs from "./pages/aboutUs";
import Home from "./pages/home";
import ContactUs from "./pages/contactUs";
import LatestNews from "./pages/latestNews";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <Grid>
      <Navbar />
      <Home />
      <AboutUs />
      <LatestNews/>
      <Testimonials/>
      <ContactUs />
    </Grid>
  );
}

export default App;
