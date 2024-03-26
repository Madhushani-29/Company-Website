import { Grid } from "@mui/material";
import Navbar from "./components/navBar";
import AboutUs from "./pages/aboutUs";
import Home from "./pages/home";
import ContactUs from "./pages/contactUs";
import LatestNews from "./pages/latestNews";
import Testimonials from "./pages/Testimonials";
import Footer from "./pages/footer";

function App() {
  return (
    <Grid>
      <Navbar />
      <Home />
      <AboutUs />
      <LatestNews />
      <Testimonials />
      <ContactUs />
      <Footer />
    </Grid>
  );
}

export default App;
