import React from "react";
import { Box, Button, Typography } from "@mui/material";
import AppStore from "../../Asset/Rating/AppStore.jpeg";
import GooglePlay from "../../Asset/Rating/GooglePlay.jpeg";
import PharmacyStore from "../../Asset/AnimatedPictures/PharamcyStore.jpg";
const Home = () => {
  const MobileStores = [
    {
      id: 2,
      img: AppStore,
      link: "https://apps.apple.com/gb/app/inspire-pharmacy-ibstock/id6748751178",
    },
    {
      id: 3,
      img: GooglePlay,
      link: "https://play.google.com/store/apps/details?id=com.healthera.healtheraapp.jayty&pcampaignid=web_share",
    },
  ];
  return (
    <Box
      sx={{
        overflow: "hidden", // PREVENTS SCATTERING
      }}
    >
      {/* HERO SECTION */}
      <Box sx={{ mt: { xs: "0rem", md: "0rem" }, position: "relative" }}>
        {/* HERO IMAGE */}
        <Box className="dashboard-img">
          <Box
            component="img"
            // src="https://ibstockpharmacy.co.uk/wp-content/uploads/2025/04/retired-man-holding-smartphone-chat-video-call-with-family-using-online-teleconference-remote-communication-pensioner-having-conversation-with-people-videoconference-meeting-1-1.webp"
            src={PharmacyStore}
            alt="Homepage Logo"
            sx={{
              width: "100%",
              height: { xs: "auto", md: "90vh" }, // responsive height
              minHeight: { xs: "550px", md: "700px" },
              // objectFit: "cover",
              filter: "brightness(0.6)", // 👈 makes image dull
            }}
          />
        </Box>

        {/* HERO CONTENT */}
        <Box
          className="dashboard-img-container"
          sx={{
            position: "absolute",
            top: { xs: "65%", md: "52%" },
            left: { xs: "50%", md: "28%" },
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: { xs: "center", md: "left" },
            width: { xs: "90%", md: "auto" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Quicksand, Sans-serif",
              fontWeight: "700",
              mt: { xs: -12, md: 10 },
              fontSize: {
                xs: "2rem",
                md: "clamp(3rem, 2.5385rem + 2.0513vw, 4rem)",
              },
            }}
          >
            Welcome to
          </Typography>

          <Typography
            sx={{
              color: "#FDFBD4",
              fontFamily: "Quicksand, Sans-serif",
              fontWeight: "700",
              mt: { xs: 0, md: -2 },
              fontSize: {
                xs: "2rem",
                md: "clamp(3rem, 2.5385rem + 2.0513vw, 4rem)",
              },
            }}
          >
            Inspire Pharmacy
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontSize: "1.2rem",
              fontWeight: "700",
            }}
          >
            Free NHS Prescription Delivery
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              mt: 2,
              color: "#FAFAFA",
              textShadow: "0px 2px 6px rgba(0,0,0,0.4)",
            }}
          >
            With Inspire Pharmacy, you have access to the healthcare you need,
            when <br /> you need it. Easily book a service with us in just a few
            clicks.
          </Typography>

          {/* RATINGS */}
          {/* <Box
            sx={{
              display: "flex",
              gap: 5,
              mt: { xs: 2, md: 4 },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box sx={{ mt: 1 }}>
              <img
                src={Rater1}
                alt="Rater1"
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
              <img
                src={Rater1}
                alt="Rater1"
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
              <img
                src={Rater1}
                alt="Rater1"
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography>Rating Stars</Typography>
              <Typography>Top -Rated</Typography>
            </Box>
          </Box> */}

          {/* APP STORE */}
          <Box
            sx={{
              display: "flex",
              gap: 5,
              mt: { xs: 3, md: 4 },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "row" },
                gap: { xs: 1, md: 2 },
                flexWrap: { xs: "wrap", md: "nowrap" }, // wrap on small screens
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
              }}
            >
              {MobileStores.map((val, index) => (
                <Box
                  key={index}
                  component="a"
                  href={val.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "inline-block",
                    width: { xs: "120px", sm: "140px", md: "100%" },
                    height: "50px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      filter: "blur(0px)", // if you want hover clear effect
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={val.img}
                    alt={val.img}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          {/* BUTTONS */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, md: 3 },
              mt: { xs: 3, md: 4 },
              mb: 5,
              px: { xs: 1, md: 0 },

              flexDirection: { xs: "row", md: "row" },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Button
              sx={{
                fontSize: { xs: "0.8rem", md: "1rem" },
                padding: { xs: "5px 15px", md: "10px 20px" },
                backgroundColor: "#FB642D",
                color: "white",
                borderRadius: "10px",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              Order Prescriptions
            </Button>

            <Button
              sx={{
                fontSize: { xs: "0.8rem", md: "1rem" },
                padding: { xs: "5px 15px", md: "10px 20px" },
                backgroundColor: "#FF2E2E",
                color: "white",
                borderRadius: "10px",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              Emergency Prescriptions
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
