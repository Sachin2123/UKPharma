import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../Asset/Logo/Logo.jpeg";
const pages = [
  { link: "/prescriptions", page: "Prescriptions" },
  { link: "/services", page: "Services" },

  { link: "/shop", page: "Shop" },
  { link: "/carhome", page: "Car Home" },
  { link: "/weightloss", page: "Weight Loss" },
  { link: "/womenshealth", page: "Women's Health" },
  { link: "/menshealth", page: "Men's Health" },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    // setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigation = (link) => {
    // console.log(data);
    navigate(link);
    // Mobile View
    // console.log(link);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          top: 0,
          backgroundColor: { md: "white", sm: "black", xs: "transparent" },
          py: 2,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Tooltip title="Pages">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon sx={{ fontSize: "30px", color: "black" }} />
                </IconButton>
              </Tooltip>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((item, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography
                      onClick={() => {
                        handleNavigation(item.link);
                        // console.log(item);
                      }}
                      sx={{
                        textAlign: "center",
                        color:
                          location.pathname === item.link ? "black" : "grey",
                      }}
                    >
                      {item.page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                gap: 2,
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Box sx={{}}>
                <img src={Logo} alt="Logo" style={{ width: "230px" }}></img>
              </Box>
              {pages.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => {
                    handleCloseNavMenu();
                    handleNavigation(item.link);
                  }}
                  sx={{
                    "&:hover": {
                      color: "#FFAC1C",
                    },
                    my: 2,
                    display: "block",
                    fontWeight: "600",
                    color: location.pathname === item.link ? "black" : "black",
                  }}
                >
                  {item.page}
                </Button>
              ))}

              <Box sx={{ flexGrow: 0 }}>
                {" "}
                <Button
                  onClick={handleOpenUserMenu}
                  sx={{
                    padding: "10px 20px 10px 20px",
                    backgroundColor: "#FB642D",
                    color: "white",
                    borderRadius: "10px 10px 10px 10px",
                    marginLeft: "20px",
                    mt: 1.5,
                    transition: "transform 0.3s ease", // smooth animation
                    "&:hover": {
                      transform: "scale(1.05)", // zoom in
                    },
                  }}
                >
                  {" "}
                  Login / Sign Up
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
