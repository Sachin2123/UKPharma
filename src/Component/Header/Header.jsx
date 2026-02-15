import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Box, TextField, Divider } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ReusableModal from "../Modal/ReusableModal";
import { useNavigate } from "react-router-dom";
import Logo from "../../Asset/Logo/Logo.jpeg";
import NHS from "../../Asset/NHS Image/NHS.svg";
const pages = [
  { id: 1, link: "/prescriptions", page: "Prescriptions" },
  { id: 2, link: "/services", page: "Services" },
  { id: 3, link: "/shop", page: "Shop" },
  { id: 4, link: "/carhome", page: "Car Home" },
  { id: 5, link: "/weightloss", page: "Weight Loss" },
  { id: 6, link: "/womenshealth", page: "Women's Health" },
  { id: 7, link: "/menshealth", page: "Men's Health" },
];

const Header = ({ WhiteHeaderText, activePage }) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   // setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigation = (link) => {
    // console.log(data);
    navigate(link);
    // Mobile View
    // console.log(link);
  };

  const handleSubmit = () => {};

  // console.log("Headers:- ", activePage);

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          top: 0,
          backgroundColor: { md: "transparent", sm: "white", xs: "white" },
          py: { xs: 1, md: 1 },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "space-between",
              }}
            >
              <Tooltip title="Pages">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon
                    sx={{
                      fontSize: "30px",
                      color: "black",
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={() => navigate("/")}
              >
                <img src={Logo} alt="Logo" style={{ width: "140px" }}></img>
              </Box>

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
                  <Box sx={{ backgroundColor: "white" }}>
                    {" "}
                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                      <Typography
                        onClick={() => {
                          handleNavigation(item.link);
                          // console.log(item);
                        }}
                        sx={{
                          textAlign: "center",
                          fontWeight:
                            activePage.pathname === item.link ? "600" : "400",
                          color:
                            activePage.pathname === item.link
                              ? "#FB642D"
                              : "black",
                        }}
                      >
                        {item.page}
                      </Typography>
                    </MenuItem>
                  </Box>
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
              <Box
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                  // backgroundColor: "white",
                  // p: 1,
                }}
                onClick={() => navigate("/")}
              >
                <img
                  src={Logo}
                  alt="Logo"
                  style={{
                    marginRight: "10px",
                    width: "200px",
                  }}
                ></img>
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
                      // color: "#FFAC1C",
                    },
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    my: 2,
                    fontWeight: 600,
                    color:
                      activePage.pathname === item.link
                        ? "white"
                        : WhiteHeaderText || "white",

                    backgroundColor:
                      activePage.pathname === item.link ? "#FB642D" : "",
                  }}
                >
                  {item.page}
                  {(item.id === 6 || item.id === 7) && <ArrowDropDownIcon />}
                </Button>
              ))}

              <Box sx={{ flexGrow: 0 }}>
                {" "}
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#FB642D",
                    padding: "10px 20px 10px 20px",
                    color: "#FB642D",
                    borderRadius: "10px 10px 10px 10px",
                    marginLeft: "20px",
                    mt: 1.5,
                    transition: "transform 0.3s ease", // smooth animation
                    "&:hover": {
                      transform: "scale(1.05)", // zoom in
                    },
                  }}
                  onClick={() => setOpen(true)}
                >
                  {" "}
                  Login / Sign Up
                </Button>
                <ReusableModal
                  open={open}
                  onClose={() => setOpen(false)}
                  title="Create an account or sign in"
                  width={{ xs: "90%", sm: "60%", md: "400px" }}
                >
                  {" "}
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ mt: 4 }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 5,
                    }}
                  >
                    <Button
                      onClick={handleSubmit}
                      sx={{
                        backgroundColor: "#FB642D",
                        color: "white",
                        py: 1,
                        px: 2,
                        transition: "transform 0.3s ease", // smooth animation
                        "&:hover": {
                          transform: "scale(1.05)", // zoom in
                        },
                      }}
                    >
                      Continue
                    </Button>
                  </Box>
                  <Typography sx={{ mt: 4 }}>
                    By clicking continue, you accept the
                    <span style={{ color: "orange" }}>
                      {" "}
                      Terms and Conditions & Privacy Policy
                    </span>
                  </Typography>
                  <Divider sx={{ mt: 5 }} />
                  <Box
                    sx={{ mt: 5, display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      startIcon={
                        <Box
                          component="img"
                          src={NHS}
                          alt="NHS Logo"
                          sx={{
                            width: { xs: "45px", md: "52px" },
                            height: { xs: "25px", md: "28px" },
                          }}
                        />
                      }
                      variant="contained"
                      onClick={handleSubmit}
                      sx={{
                        color: "white",
                        py: 1,
                        px: 2,
                        fontSize: "1.3rem",
                        textTransform: "none",
                        transition: "transform 0.3s ease", // smooth animation
                        "&:hover": {
                          transform: "scale(1.05)", // zoom in
                        },
                      }}
                    >
                      Continue to NHS Login
                    </Button>
                  </Box>
                </ReusableModal>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
