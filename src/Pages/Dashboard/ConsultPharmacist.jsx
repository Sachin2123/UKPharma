import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ConsultDoctor from "../../Asset/AnimatedPictures/ConsultDoctor.webp";

const ConsultPharmacist = () => {
  const diseases = [
    { id: 1, name: "Sore Throat", color: "orange" },
    { id: 2, name: "Inflamed Sinuses", color: "orange" },
    { id: 3, name: "UTIs", color: "orange" },
    { id: 4, name: "Impetigo", color: "orange" },
    { id: 5, name: "UTIInsect Bites", color: "orange" },
    { id: 6, name: "Shingles & more...", color: "orange" },
  ];
  // const ConsultImgSrc =
  //   "https://ibstockpharmacy.co.uk/wp-content/uploads/2025/04/pharmacist-work-5-1024x683-1.webp";
  return (
    <Box
      sx={{
        // backgroundColor: "#FF775C",
        px: { xs: 3, md: 10 },
        py: { xs: 5, md: 7 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "Center",
        gap: { xs: 5, md: 20 },
      }}
    >
      <Box
        component="img"
        loading="lazy"
        src={ConsultDoctor}
        alt=""
        sx={{
          width: { xs: "100%", md: "50%" },
          height: { xs: "100%", md: "40%" },
          objectFit: "cover",
          objectPosition: "center center",
          borderRadius: "30px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
        }}
      />

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
            fontSize: {
              xs: "clamp(1.7rem, 1.9154rem + 0.8205vw, 1.7rem)",
              md: "clamp(2.1rem, 1.9154rem + 0.8205vw, 2.5rem)",
            },
            fontFamily: "Quicksand, Sans-serif",
            fontWeight: "700",
          }}
        >
          Consult a Pharmacist
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Nunito",
            fontSize: { xs: "1.2rem", md: "1.2rem" },
            fontWeight: 500,
            color: "#444",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: 1.6,
            letterSpacing: "0.3px",
          }}
        >
          Start an assessment to see what conditions are covered, including:
        </Typography>

        <Box
          sx={{
            mt: 3,
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {diseases.map((disease) => (
            <Box
              key={disease.id}
              sx={{
                p: 3,
                borderRadius: "14px",
                backgroundColor: "#fff",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",

                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
                },
              }}
            >
              {/* Color Indicator */}
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: disease.color || "#ccc",
                  margin: "0 auto 10px",
                }}
              />

              <Typography
                sx={{
                  fontFamily: "Nunito",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#222",
                }}
              >
                {disease.name}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            mt: 4,
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              padding: "10px 20px 10px 20px",
              backgroundColor: "#FB642D",
              color: "white",
              borderRadius: "10px 10px 10px 10px",
              // mr: 4,
              transition: "transform 0.3s ease", // smooth animation
              "&:hover": {
                transform: "scale(1.05)", // zoom in
                boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
              },
            }}
          >
            Start Assessment
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ConsultPharmacist;
