import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Rater1 from "../../Asset/Rating/1stRater.jpeg";
import AppStore from "../../Asset/Rating/AppStore.jpeg";
import GooglePlay from "../../Asset/Rating/GooglePlay.jpeg";
import Services from "../Home/Services";
import Visit from "../Home/Visit";
import ConsultPharmacist from "../Home/ConsultPharmacist";
import BookService from "../Home/BookService";
import BrowseStore from "../Home/BrowseStore";
import PatientReview from "../Home/PatientReview";
import MobileSection from "../Home/MobileSection";
import Footer from "../Home/Footer";

const Home = () => {
  return (
    <Box
      sx={{
        overflow: "hidden", // PREVENTS SCATTERING
      }}
    >
      {/* HERO SECTION */}
      <Box sx={{ mt: "7rem", position: "relative" }}>
        {/* HERO IMAGE */}
        <Box className="dashboard-img">
          <Box
            component="img"
            src="https://ibstockpharmacy.co.uk/wp-content/uploads/2025/04/retired-man-holding-smartphone-chat-video-call-with-family-using-online-teleconference-remote-communication-pensioner-having-conversation-with-people-videoconference-meeting-1-1.webp"
            alt="Homepage Logo"
            sx={{
              width: "100%",
              height: { xs: "auto", md: "90vh" }, // responsive height
              minHeight: { xs: "450px", md: "unset" },
              objectFit: "cover",
            }}
          />
        </Box>

        {/* HERO CONTENT */}
        <Box
          className="dashboard-img-container"
          sx={{
            position: "absolute",
            top: { xs: "50%", md: "50%" },
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
              fontSize: "clamp(3rem, 2.5385rem + 2.0513vw, 4rem)",
              fontWeight: "700",
              mt: 5,
            }}
          >
            Welcome to
          </Typography>

          <Typography
            sx={{
              fontFamily: "Quicksand, Sans-serif",
              fontSize: "clamp(3rem, 2.5385rem + 2.0513vw, 4rem)",
              fontWeight: "700",
              background: "linear-gradient(90deg, #FB642D, #FFFFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mt: -2,
            }}
          >
            Inspire Pharmacy
          </Typography>

          <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
            Free NHS Prescription Delivery
          </Typography>

          <Typography sx={{ fontSize: "1.125rem", mt: 2 }}>
            With Inspire Pharmacy, you have access to the healthcare you need,
            when <br /> you need it. Easily book a service with us in just a few
            clicks.
          </Typography>

          {/* RATINGS */}
          <Box
            sx={{
              display: "flex",
              gap: 5,
              mt: 4,
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
          </Box>

          {/* APP STORE */}
          <Box
            sx={{
              display: "flex",
              gap: 5,
              mt: 4,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box sx={{ mt: 1 }}>
              <img
                src={Rater1}
                alt="Rater1"
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <img
                src={AppStore}
                alt="AppStore"
                style={{ width: "100%", height: "50px" }}
              />
              <img
                src={GooglePlay}
                alt="GooglePlay"
                style={{ width: "100%", height: "50px" }}
              />
            </Box>
          </Box>

          {/* BUTTONS */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              mt: 4,
              mb: 5,
              justifyContent: { xs: "center", md: "flex-start" },
              flexWrap: "wrap",
            }}
          >
            <Button
              sx={{
                padding: "10px 20px",
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
                padding: "10px 20px",
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

      {/* OTHER SECTIONS */}
      <Services />
      <Visit />
      <ConsultPharmacist />
      <BookService />
      <BrowseStore />
      <PatientReview />
      <MobileSection />
      <Footer />
    </Box>
  );
};

export default Home;
