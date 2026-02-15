import React from "react";
import { Box, Typography, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const PatientReview = () => {
  const visitCards = [
    {
      id: 1,
      rating: 5.0,
      title: "Albert capewell",
      desc: "I’ve used Inspire Pharmacy’s delivery service for four years. They’ve been fantastic and always listen to my concerns. The driver, Shab, is very helpful and even takes action to solve my problems.",
    },
    {
      id: 2,
      rating: 4.0,
      title: "Zia Karim",
      desc: "Exceptionally brilliant service. Medication is delivered on time every month without fail. Friendly staff and professional support always.",
    },
    {
      id: 3,
      rating: 5.0,
      title: "Naz Hussain",
      desc: "I recently started using Inspire after problems with previous pharmacy. Very impressed with fast service and reliability.",
    },
    {
      id: 4,
      rating: 4.5,
      title: "Lisa Barrow",
      desc: "Since I changed pharmacies to Inspire, I’ve never had to worry. Fantastic service and great communication.",
    },
    {
      id: 5,
      rating: 5.0,
      title: "Naz Hussain",
      desc: "I recently started using Inspire after problems with previous pharmacy. Very impressed with fast service and reliability.",
    },
    {
      id: 6,
      rating: 4.5,
      title: "Lisa Barrow",
      desc: "Since I changed pharmacies to Inspire, I’ve never had to worry. Fantastic service and great communication.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FF775C",
        display: "flex",
        flexDirection: "column",
        px: { xs: 3, md: 10 },
        py: { xs: 5, md: 7 },
      }}
    >
      {/* HEADING */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontFamily: "Quicksand, Sans-serif",
            color: "white",
            textAlign: "center",
            fontSize: "clamp(2rem, 2vw, 2.5rem)",
          }}
        >
          Hear What Our Patients Say
        </Typography>
      </Box>

      {/* HORIZONTAL SCROLL CONTAINER */}
      <Box
        sx={{
          mt: 6,
          display: "flex",
          gap: 3,

          overflowX: "auto",
          overflowY: "hidden",

          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",

          pb: 2,

          // professional scrollbar
          "&::-webkit-scrollbar": {
            height: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255,255,255,0.3)",
            // backgroundColor: "white",
            borderRadius: "10px",
            width: "4%",
          },
        }}
      >
        {visitCards.map((val) => (
          <Card
            key={val.id}
            sx={{
              mt: 1,
              minWidth: { xs: "260px", sm: "280px", md: "300px" },
              mb: { xs: 3, md: 0 },
              maxWidth: "300px",
              flexShrink: 0,
              scrollSnapAlign: "start",

              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
              transition: "all 0.35s ease",

              boxShadow: "0 6px 18px rgba(0,0,0,0.15)",

              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 20px 45px rgba(0,0,0,0.35)",
              },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                p: 5,
              }}
            >
              {/* TITLE */}
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  fontFamily: "Quicksand, sans-serif",
                  color: "#111",
                }}
              >
                {val.title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  fontSize: "0.95rem",
                  color: "#666",
                  lineHeight: 1.6,
                }}
              >
                {val.desc}
              </Typography>

              {/* RATING */}

              <Box
                sx={{
                  mt: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Rating value={val.rating} precision={0.5} readOnly />

                <Typography sx={{ fontSize: "0.9rem", color: "#777" }}>
                  ({val.rating})
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default PatientReview;
