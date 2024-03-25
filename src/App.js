import { Grid } from "@mui/material";
import Navbar1 from "./components/navBar";
import AboutUs from "./pages/aboutUs";
import Home from "./pages/home";
import ContactUs from "./pages/contactUs";

function App() {
  return (
    <Grid>
      <Navbar1 />
      <Home />
      <AboutUs />
      <ContactUs />
    </Grid>
  );
}

export default App;
