import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const drawerWidth = 240;
const navItems = ["About Us", "Features", "Contact"];

function Navbar1(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
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
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
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
        sx={{
          paddingLeft: "50px",
          paddingTop: "30px",
          paddingRight: "40px",
          backgroundColor: "transparent",
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
                key={item}
                sx={{
                  marginLeft: "40px",
                  fontSize: "20px",
                  color: "#FFFFFF",
                  textTransform: "none",
                }}
              >
                {item}
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

Navbar1.propTypes = {
  window: PropTypes.func,
};

export default Navbar1;
