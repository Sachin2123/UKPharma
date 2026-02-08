import { Box, Typography, Divider } from "@mui/material";

import logo from "../../Asset/Logo/Logo.jpeg";

const Footer = () => {
  const InspirePharmacy = [
    {
      id: 1,
      text: "Pharmacy Address: 31-33 High St, Ibstock LE67 6LG",
      link: "https://www.google.co.uk/maps/place/Inspire+Pharmacy/@52.6877419,-1.3996072,17z/data=!3m1!4b1!4m6!3m5!1s0x4877575179019045:0x4b580996c4bdd037!8m2!3d52.6877419!4d-1.3970323!16s%2Fg%2F11tjpw_6mr?coh=245189&entry=tts&g_ep=EgoyMDI1MDQyMS4wIPu8ASoJLDEwMjExNDU1SAFQAw%3D%3D&skid=4c54ef6f-e351-4739-ac66-212d10a9b3e0",
    },
    {
      id: 2,
      text: "Pharmacy GPhC Number: 1034074",
      link: "https://www.pharmacyregulation.org/registers/pharmacy/1034074",
    },
    {
      id: 3,
      text: "Pharmacy Superintendent Name: Vikram Patel",
      link: "https://www.pharmacyregulation.org/registers/pharmacist/2236029",
    },
    {
      id: 4,
      text: "Pharmacy Superintendent GPhC Number: 2077100",
      link: "https://www.pharmacyregulation.org/registers/pharmacist/2236029",
    },
  ];

  const NHS = [
    {
      id: 1,
      text: "Health A to Z",
      link: "https://www.nhs.uk/conditions/",
    },
    {
      id: 2,
      text: "Medicines A to Z",
      link: "https://www.nhs.uk/medicines/",
    },
    {
      id: 3,
      text: "Live Well",
      link: "https://www.nhs.uk/live-well/",
    },
    {
      id: 4,
      text: "NHS Safeguarding",
      link: "https://safeguarding-guide.nhs.uk/",
    },
  ];

  const OpeningTimes = [
    {
      id: 1,
      text: "Mon - Fri 09:00 – 18:00",
      link: "",
    },
    {
      id: 2,
      text: "Sat 09:00 – 13:00",
      link: "",
    },
    {
      id: 3,
      text: "Sun Closed",
      link: "",
    },
  ];

  const Information = [
    {
      id: 1,
      text: "About US",
      link: "",
    },
    {
      id: 2,
      text: "Our Services",
      link: "",
    },
    {
      id: 3,
      text: "Travel Clinic",
      link: "",
    },
    {
      id: 4,
      text: "Car Home Solutions",
      link: "",
    },
    {
      id: 5,
      text: "Our Branches",
      link: "",
    },
    {
      id: 6,
      text: "Contact Us",
      link: "",
    },
  ];

  const FooterLastContent = [
    {
      id: 1,
      text: "Terms & Conditions",
      link: "https://healthera.wpengine.com/pharmacy-terms/",
    },
    {
      id: 2,
      text: "Cookies Policy",
      link: "https://healthera.wpengine.com/cookies/",
    },
    {
      id: 3,
      text: "Privacy Policy",
      link: "https://healthera.wpengine.com/privacy/",
    },
    {
      id: 4,
      text: "EULA",
      link: "https://healthera.wpengine.com/eula/",
    },
    {
      id: 5,
      text: "Complaints Procedure",
      link: "",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 5, md: 5 },
          justifyContent: "space-around",
          px: { xs: 2, md: 10 },
          py: 7,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            backgroundColor: "white",
            color: "black",
            p: 2,
            borderRadius: "10px",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: "200px", backgroundColor: "white" }}
          ></img>
          <img
            src="https://ibstockpharmacy.co.uk/wp-content/uploads/2025/03/Healthera-Logo@2x-1-1.png"
            alt="Logo"
            style={{ width: "109px" }}
          ></img>

          <Typography>Powered By</Typography>
          <Typography>
            © 2026 Healthera Ltd. is a company <br />
            registered in England and Wales <br />
            with company number 9609198.
          </Typography>
          <Typography>All rights reserved.</Typography>
        </Box>
        {/* Inspire Pharmacy */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography sx={{ fontWeight: "700", fontSize: "1.2rem" }}>
            Inspire Pharmacy
          </Typography>
          <Divider sx={{ backgroundColor: "white" }} />
          {InspirePharmacy.map((val, index) => (
            <Typography
              component="a"
              href={val.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
                cursor: "pointer",
                color: "white",
                "&:hover": {
                  color: "#FB642D",
                },
              }}
              key={index}
            >
              {val.text}
            </Typography>
          ))}
        </Box>
        {/* NHS */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography sx={{ fontWeight: "700", fontSize: "1.2rem" }}>
            NHS
          </Typography>
          <Divider sx={{ backgroundColor: "white" }} />
          {NHS.map((val, index) => (
            <Typography
              component="a"
              href={val.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
                cursor: "pointer",
                color: "white",
                "&:hover": {
                  color: "#FB642D",
                },
              }}
              key={index}
            >
              {val.text}
            </Typography>
          ))}
        </Box>
        {/* Opening Times */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography sx={{ fontWeight: "700", fontSize: "1.2rem" }}>
            Opening Times
          </Typography>
          <Divider sx={{ backgroundColor: "white" }} />
          {OpeningTimes.map((val, index) => (
            <Typography
              sx={{
                color: "white",
              }}
              key={index}
            >
              {val.text}
            </Typography>
          ))}
        </Box>
        {/* Information */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography sx={{ fontWeight: "700", fontSize: "1.2rem" }}>
            Information
          </Typography>
          <Divider sx={{ backgroundColor: "white" }} />
          {Information.map((val, index) => (
            <Typography
              component="a"
              href={val.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
                cursor: "pointer",
                color: "white",
                "&:hover": {
                  color: "#FB642D",
                },
              }}
              key={index}
            >
              {val.text}
            </Typography>
          ))}
        </Box>{" "}
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          py: 0.5,
          px: 7,
          display: "flex",
          justifyContent: "space-between",
          mx: 10,
        }}
      >
        {FooterLastContent.map((val, index) => (
          <Typography
            key={val.id}
            sx={{
              fontWeight: "600",
              fontSize: "1.0rem",
              "&:hover": {
                color: "#FB642D",
              },
            }}
          >
            {val.text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
