import React from "react";
import { Box, Button, Typography } from "@mui/material";

const BrowseStore = () => {
  const BrowseStoreImgSrc =
    "https://ibstockpharmacy.co.uk/wp-content/uploads/2025/04/senior-person-using-smartphone-1-e1745412035492-1024x606.webp";
  return (
    <Box
      sx={{ px: 10, py: 7, display: "flex", justifyContent: "Center", gap: 20 }}
    >
      <img
        src={BrowseStoreImgSrc}
        alt="BrowseStoreImgSrc Image"
        style={{
          width: "50%",
          height: "60%%",
          objectFit: "cover",
          objectPosition: "center center",
          borderRadius: "30px 30px 30px 30px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
        }}
      ></img>
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
          }}
        >
          Browse Our Store
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Nunito",
            fontSize: { xs: "1rem", md: "1.2rem" },
            fontWeight: 500,
            color: "#444",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: 1.6,
            letterSpacing: "0.3px",
          }}
        >
          Whether you need an over-the-counter medicine or something else from
          our shelves, you can rest assured that your order will be packaged and
          delivered to you discreetly.
        </Typography>

        <Box sx={{ display: "flex", mt: 4, justifyContent: "center" }}>
          <Button
            sx={{
              padding: "10px 20px 10px 20px",
              backgroundColor: "#FB642D",
              color: "white",
              borderRadius: "10px 10px 10px 10px",
              mr: 4,
              transition: "transform 0.3s ease", // smooth animation
              "&:hover": {
                transform: "scale(1.05)", // zoom in
                boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
              },
            }}
          >
            View Products
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BrowseStore;
