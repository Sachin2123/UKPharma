import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const Services = () => {
  const ServiceCards = [
    {
      cid: 1,
      img: "https://ibstockpharmacy.co.uk/wp-content/uploads/2025/04/weightloss-e1742904339415-1.webp",
      heading: "Weight Loss Management",
      Desc: "Get expert support on your weight loss journey. Book a consultation with our friendly team and take the first step toward a healthier you.",
      btnText: "Book Now",
    },
    {
      cid: 2,
      img: "	https://ibstockpharmacy.co.uk/wp-content/uploads/2025/04/freepik__background__14591-1.webp",
      heading: "Ear Wax Removal",
      Desc: "Get safe and professional ear wax removal with support from our friendly experts to help you hear clearly and feel comfortable.",
      btnText: "Book Now",
    },
    {
      cid: 3,
      img: "	https://ibstockpharmacy.co.uk/wp-content/uploads/2025/04/AdobeStock_333429626-1-e1745410447384.webp",
      heading: "Emergency Contraception",
      Desc: "Receive confidential support and quick access to emergency contraception, provided by our caring and professional team.",
      btnText: "Book Now",
    },
    {
      cid: 4,
      img: "https://ibstockpharmacy.co.uk/wp-content/uploads/2025/04/freepik__background__31852-1.webp",
      heading: "Pharmacy First",
      Desc: "Expert advice and treatment for common conditions, available directly from our friendly pharmacy team without the need for a GP appointment.",
      btnText: "Start Assessment",
    },
  ];
  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: { xs: 5, md: 7 },
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "black",
            fontWeight: "700",
            fontFamily: "Quicksand, Sans-serif",
            fontSize: {
              xs: "clamp(1.5rem, 1.9154rem + 0.8205vw, 1.5rem)",
              md: "clamp(2.1rem, 1.9154rem + 0.8205vw, 2.5rem)",
            },
          }}
        >
          Our Most Popular Services
        </Typography>
        <Button
          sx={{
            mt: { xs: 4, md: 0 },
            padding: "10px 20px 10px 20px",
            backgroundColor: "#FB642D",
            color: "white",
            borderRadius: "10px 10px 10px 10px",
            mr: 4,
            transition: "transform 0.3s ease", // smooth animation
            "&:hover": {
              transform: "scale(1.05)", // zoom in
            },
          }}
        >
          View All Services
        </Button>
      </Box>

      <Box
        sx={{
          color: "white",
          mt: { xs: 6, md: 8 },
          // display: "flex",
          gap: 2,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // mobile → 1 card
            sm: "repeat(2, 1fr)", // tablet → 2 cards
            md: "repeat(4, 1fr)", // desktop → 3 cards
          },
        }}
      >
        {ServiceCards.map((val, index) => (
          <Card
            sx={{
              p: 3,
              position: "relative", // IMPORTANT
              overflow: "hidden",
              border: "0.2px grey solid",
              maxWidth: 320,
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              backgroundColor: "#3B5768",
              transition: "all 0.35s ease",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.15)",

              "&:hover": {
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: "0px 12px 35px rgba(0,0,0,0.3)",
              },
            }}
            key={val.cid}
          >
            {/* BLURRED BACKGROUND IMAGE */}
            <Box
              component="img"
              src={val.img}
              alt={val.heading}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "blur(1px)",
                transform: "scale(1.1)", // remove blur edges
                zIndex: 0,
              }}
            />

            {/* DARK OVERLAY (professional readability) */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.35)",
                zIndex: 1,
              }}
            />

            {/* CONTENT ABOVE IMAGE */}
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{
                    fontWeight: "700",
                    fontSize: "clamp(1.4rem, 1.3538rem + 0.2051vw, 1.5rem)",
                    fontFamily: "Quicksand, Sans-serif",
                    color: "white",
                  }}
                >
                  {val.heading}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "300",
                    fontSize: "1rem",
                    fontFamily: "Quicksand, Sans-serif",
                    color: "white",
                  }}
                >
                  {val.Desc}
                </Typography>
              </CardContent>

              <CardActions sx={{ mt: "auto" }}>
                <Button
                  sx={{
                    fontWeight: "700",
                    padding: "10px 20px",
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "10px",
                    "&:hover": { color: "orange" },
                  }}
                >
                  {val.btnText}
                </Button>
              </CardActions>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
