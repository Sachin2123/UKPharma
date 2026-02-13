import { Box, Button, Divider, Typography } from "@mui/material";
import VaccinesIcon from "@mui/icons-material/Vaccines";

const Services = () => {
  const content = [
    {
      id: 1,
      title: "Stop Smoking Support",
    },
    {
      id: 2,
      title: "Pharmacy First",
    },
    {
      id: 3,
      title: "New Medicine Service",
    },
    {
      id: 4,
      title: "Emergency Contraception",
    },
    {
      id: 5,
      title: "Ear Wax Removal",
    },
    {
      id: 6,
      title: "Covid Vaccination Service",
    },
    {
      id: 7,
      title: "Contraceptive Pill Repeat Supply",
    },
    {
      id: 8,
      title: "Blood Pressure Checks",
    },

    {
      id: 9,
      title: "Vitamin B12 Injection",
    },
    {
      id: 10,
      title: "Shingles",
    },
    {
      id: 11,
      title: "Weight Loss & Management",
    },
    {
      id: 11,
      title: "Travel Health",
    },
    {
      id: 12,
      title: "NHS Pneumococcal Vaccination",
    },
  ];
  return (
    <Box
      sx={{
        px: { xs: 3, md: 5 },
        py: { xs: 5, md: 5 },
        height: { xs: "auto", md: "100%" },
        fontFamily: "Quicksand, Sans-serif",
        justifyContent: "center",
        mt: { xs: "0rem", md: "6rem" },
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          mt: 0,
          p: 6,
          color: "white",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "clamp(2.4rem, 2.1231rem + 1.2308vw, 3.5rem)",
            fontWeight: "600",
          }}
        >
          We’re Here to help
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            mt: 2,
            fontSize: "1.15rem",
            fontWeight: "600",
          }}
        >
          At Inspire Pharmacy, we’re dedicated to providing you the best
          <br />
          possible experience when you book a service with us. Simply browse our
          <br />
          available services, and choose a date and time that best suits you.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5, mb: 3 }}>
          <Button
            sx={{
              fontSize: "1.3rem",
              px: 2,
              color: "white",
              backgroundColor: "#FB642D",
              textTransform: "none",
              borderRadius: "10px",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            View All Services
          </Button>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "orange" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <Box
          sx={{
            // display: "flex",
            gap: 5,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // mobile → 1 card
              sm: "repeat(2, 1fr)", // tablet → 2 cards
              md: "repeat(3, 1fr)", // desktop → 3 cards
            },
          }}
        >
          {content.map((val, index) => (
            <Box
              key={val.id}
              sx={{
                backgroundColor: "white",
                py: 5,
                px: 7,
                borderRadius: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "700", fontSize: "1.75rem" }}>
                  {val.title}
                </Typography>
                <VaccinesIcon />
              </Box>
              <Divider sx={{ backgroundColor: "grey", mt: 3 }} />

              <Box
                sx={{
                  display: "flex",
                  gap: 20,
                  mt: 4,
                  alignItems: "center",
                }}
              >
                {/* Book Now */}
                <Button
                  sx={{
                    fontSize: "1rem",
                    px: 2,
                    color: "white",
                    backgroundColor: "black",
                    textTransform: "none",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  Book Now
                </Button>

                {/* Read */}
                <Button
                  sx={{
                    fontSize: "1rem",
                    px: 2,
                    color: "white",
                    backgroundColor: "black",
                    textTransform: "none",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  Read
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
