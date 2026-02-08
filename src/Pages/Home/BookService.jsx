import React from "react";
import { Box, Button, Typography } from "@mui/material";

const BookService = () => {
  const BookServiceImgSrc =
    "https://ibstockpharmacy.co.uk/wp-content/uploads/2025/04/AdobeStock_179996358-1024x682-1.webp";
  return (
    <Box
      sx={{
        px: 10,
        py: 7,
        display: "flex",
        justifyContent: "Center",
        gap: 20,
        backgroundColor: "#FB642D",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "clamp(2.1rem, 1.9154rem + 0.8205vw, 2.5rem)",
            fontFamily: "Quicksand, Sans-serif",
            fontWeight: "700",
            color: "white",
          }}
        >
          Book a Service
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Nunito",
            fontSize: { xs: "1rem", md: "1.2rem" },
            fontWeight: 500,
            color: "white",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: 1.6,
            letterSpacing: "0.3px",
          }}
        >
          Want to book a service with one of our healthcare professionals? All
          you need to do is choose a time that works for you and confirm your
          appointment.{" "}
        </Typography>

        <Box
          sx={{
            mt: 3,
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        ></Box>

        <Box sx={{ display: "flex", mt: 4, justifyContent: "center" }}>
          <Button
            sx={{
              padding: "10px 20px 10px 20px",
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px 10px 10px 10px",
              mr: 4,
              transition: "transform 0.3s ease", // smooth animation
              "&:hover": {
                transform: "scale(1.05)", // zoom in
                boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
              },
            }}
          >
            Book Now{" "}
          </Button>
        </Box>
      </Box>
      <img
        src={BookServiceImgSrc}
        alt="Consult Pharmacist Image"
        style={{
          width: "50%",
          height: "60%%",
          objectFit: "cover",
          objectPosition: "center center",
          borderRadius: "30px 30px 30px 30px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
        }}
      ></img>
    </Box>
  );
};

export default BookService;
