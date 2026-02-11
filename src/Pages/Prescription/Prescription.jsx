import { Box, Typography, TextField, Button } from "@mui/material";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import NHS from "../../Asset/NHS Image/NHS.svg";

const Prescription = () => {
  return (
    <Box
      sx={{
        height: { xs: "auto", md: "90vh" },

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: { xs: "5rem", md: "6.2rem" },
        backgroundColor:
          "color-mix(in oklab, rgb(251, 100, 45) 10%, rgb(255, 255, 255))",
      }}
    >
      <Box
        sx={{
          gap: 6,
          alignItems: "center",
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            mt: { xs: 4, md: 0 }, // ✅ margin-top controlled here
            textAlign: "center",
            fontWeight: "700",
            fontSize: "2rem",
          }}
        >
          How would you like to add your prescription?
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "", gap: 5, mt: 5 }}>
          {/* Connect to NHS */}

          <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Box
              sx={{
                backgroundColor: "white",
                py: 5,
                px: 7,
                borderRadius: "30px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                Connect to your NHS account
              </Typography>

              <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  startIcon={
                    <img
                      src={NHS}
                      alt="NHS Logo"
                      style={{ width: "52px", height: "28px" }}
                    />
                  }
                  sx={{
                    color: "white",
                    fontSize: "1.1rem",
                    textTransform: "none",
                    borderRadius: "10px",
                    px: 3,
                    py: 1.5,
                    gap: 1,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  Continue to NHS Login
                </Button>
              </Box>

              {[
                "Secure and fast access to your NHS account",
                "Easy and hassle-free connection",
                "Your medicines sync automatically",
              ].map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    mt: 4,
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                  }}
                >
                  <CheckCircleRoundedIcon />
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "1rem",
                      fontFamily: "Inter, Arial, sans-serif",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Already have account */}
            <Box
              sx={{
                borderRadius: "30px",
                backgroundColor: "white",
                py: 4,
                px: 7,
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "1.1rem",
                  fontFamily: "Inter, Arial, sans-serif",
                }}
              >
                Already have an account?
              </Typography>

              <Button
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  py: 1,
                  px: 2,
                  textTransform: "none",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                Sign in
              </Button>
            </Box>
          </Box>

          {/* Search Medicine */}
          <Box>
            <Box
              sx={{
                backgroundColor: "white",
                py: 11,
                px: 7,
                borderRadius: "30px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "start",
                  fontWeight: "700",
                  fontSize: "1.8rem",
                  fontFamily: "Inter, Arial, sans-serif",
                  lineHeight: "1.334",
                }}
              >
                Or search for your medicine
              </Typography>

              <Box
                sx={{ display: "flex", gap: 2, alignItems: "center", mt: 3 }}
              >
                <TipsAndUpdatesOutlinedIcon />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                    fontFamily: "Inter, Arial, sans-serif",
                    lineHeight: "1.75",
                  }}
                >
                  Search tips
                </Typography>
              </Box>

              <TextField
                placeholder="Medicine name (e.g. Amoxicilin)"
                label="Email Address"
                sx={{ mt: 3, width: "80%" }}
              />

              <Typography sx={{ mt: 4, fontWeight: 500 }}>
                1. Copy the medicine name written on your prescription or
                packaging
              </Typography>

              <Typography sx={{ mt: 3, fontWeight: 500 }}>
                2. Make sure you check you have chosen the right one
              </Typography>

              <Typography sx={{ mt: 3, fontWeight: 500 }}>
                3. You can add more medicines later
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Prescription;
