import * as React from "react";
import PropTypes from "prop-types";
import { Box, AppBar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const navItems = [
  { id: "about-us", title: "About Us" },
  { id: "features", title: "Features" },
  { id: "contact", title: "Contact" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollToSection = (id) => {
    const aboutUsSection = document.getElementById(id);
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ fontSize: "30px", fontWeight: "bold" }}>
        Company Logo
      </Typography>
      <Typography variant="h6" sx={{ fontSize: "13px" }}>
        English
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          paddingLeft: "50px",
          paddingTop: "30px",
          paddingRight: "40px",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0) 100%)",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textAlign: "start",
              verticalAlign: "bottom",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#ffff",
                fontSize: "30px",
                fontWeight: "bold",
                display: "inline",
              }}
            >
              Company Logo
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#ffff",
                fontSize: "10px",
                display: "inline",
                pl: "20px",
                pr: "8px",
              }}
            >
              English
            </Typography>
            <KeyboardArrowDownRoundedIcon
              height
              sx={{
                fontSize: "30px",
                verticalAlign: "bottom",
                marginBottom: "5px",
              }}
            />
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                sx={{
                  marginLeft: "40px",
                  fontSize: "20px",
                  color: "#FFFFFF",
                  textTransform: "none",
                }}
                onClick={() => scrollToSection(item.id)}
              >
                {item.title}
              </Button>
            ))}

            <MenuRoundedIcon
              sx={{
                verticalAlign: "bottom",
                fontSize: "50px",
                marginLeft: "40px",
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
