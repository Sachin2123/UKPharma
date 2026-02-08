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
      <Box sx={{ mt: { xs: "0rem", md: "5rem" }, position: "relative" }}>
        {/* HERO IMAGE */}
        <Box className="dashboard-img">
          <Box
            component="img"
            src="https://ibstockpharmacy.co.uk/wp-content/uploads/2025/04/retired-man-holding-smartphone-chat-video-call-with-family-using-online-teleconference-remote-communication-pensioner-having-conversation-with-people-videoconference-meeting-1-1.webp"
            alt="Homepage Logo"
            sx={{
              width: "100%",
              height: { xs: "auto", md: "90vh" }, // responsive height
              minHeight: { xs: "550px", md: "700px" },
              objectFit: "cover",
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
              mt: { xs: -15, md: 5 },
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
              fontFamily: "Quicksand, Sans-serif",
              fontWeight: "700",
              background: "linear-gradient(90deg, #FB642D, #FFFFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mt: { xs: 0, md: -2 },
              fontSize: {
                xs: "2rem",
                md: "clamp(3rem, 2.5385rem + 2.0513vw, 4rem)",
              },
            }}
          >
            Inspire Pharmacy
          </Typography>

          <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
            Free NHS Prescription Delivery
          </Typography>

          <Typography sx={{ fontSize: { xs: "1rem", md: "1.125rem" }, mt: 2 }}>
            With Inspire Pharmacy, you have access to the healthcare you need,
            when <br /> you need it. Easily book a service with us in just a few
            clicks.
          </Typography>

          {/* RATINGS */}
          <Box
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
          </Box>

          {/* APP STORE */}
          <Box
            sx={{
              display: "flex",
              gap: 5,
              mt: { xs: 3, md: 4 },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {/* <Box sx={{ mt: 1 }}>
              <img
                src={Rater1}
                alt="Rater1"
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
            </Box> */}

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                gap: { md: 2, xs: 1 },
              }}
            >
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
