import React from "react";
import { Box, Typography, Container } from "@mui/material";
import AppStore from "../../Asset/Rating/AppStore.jpeg";
import GooglePlay from "../../Asset/Rating/GooglePlay.jpeg";
const MobileSection = () => {
  const MobileStores = [
    {
      id: 1,
      img: AppStore,
      link: "https://apps.apple.com/gb/app/inspire-pharmacy-ibstock/id6748751178",
    },
    {
      id: 2,
      img: GooglePlay,
      link: "https://play.google.com/store/apps/details?id=com.healthera.healtheraapp.jayty&pcampaignid=web_share",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "grey.100",
        py: { xs: 5, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* MAIN FLEX CONTAINER */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // responsive
            gap: 3,
            alignItems: "stretch",
          }}
        >
          {/* ORANGE LEFT SECTION */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#FB642D",
              borderRadius: "20px",
              p: { xs: 3, md: 5 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            <Box
              component="img"
              src="https://ibstockpharmacy.co.uk/wp-content/uploads/2025/07/Inspire.webp"
              alt="mobile"
              sx={{
                width: "60%",
                // maxWidth: 200,
              }}
            />
          </Box>

          {/* WHITE RIGHT SECTION */}
          <Box
            sx={{
              flex: 2,
              backgroundColor: "white",
              borderRadius: "16px",
              p: { xs: 3, md: 4 },
              boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Unlock Medicine Reminders and More by <br />
              Downloading Our Free App
            </Typography>

            <Typography variant="body1">
              Want to receive notifications when your prescription is ready?{" "}
              <br />
              Download our app today and we’ll send you push notifications{" "}
              <br />
              to let you know your prescription is ready.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                gap: 5,
                justifyContent: "center",
                mt: { xs: 4, md: 7 },
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
                    key={index}
                    component="img"
                    src={val.img}
                    alt="AppStore"
                    sx={{
                      width: { xs: "100%", md: "30%" },
                      height: { xs: "50px", md: "50px" },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MobileSection;
