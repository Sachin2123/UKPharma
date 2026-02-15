import { Box, Typography, TextField, Button } from "@mui/material";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import NHS from "../../Asset/NHS Image/NHS.svg";

/* ===============================
   DATA
================================ */

const benefits = [
  "Secure and fast access to your NHS account",
  "Easy and hassle-free connection",
  "Your medicines sync automatically",
];

/* ===============================
   REUSABLE PROFESSIONAL CARD CSS
================================ */

const cardUI = {
  background: "#ffffff",
  borderRadius: "20px",
  p: { xs: 3, md: 6 },
  border: "1px solid #edf2f7",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 16px 40px rgba(0,0,0,0.08)",
  },
};

/* ===============================
   COMPONENT
================================ */

const Prescription = ({ openModal }) => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 10 },
        mt: { md: "0rem" },

        /* NICE HEALTHCARE BACKGROUND */
        background: "linear-gradient(180deg, #FFF5F0 0%, #ffffff 60%)",
      }}
    >
      {/* ================= TITLE ================= */}

      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: { xs: "1.6rem", md: "2.4rem" },
          mb: 7,
          letterSpacing: "-0.4px",
          mt: { xs: "3rem" },
        }}
      >
        How would you like to add your prescription?
      </Typography>

      {/* ================= GRID LAYOUT ================= */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 5,
        }}
      >
        {/* ================= LEFT COLUMN ================= */}

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {/* NHS LOGIN CARD */}

          <Box sx={cardUI}>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: 700,
                fontSize: "1.4rem",
              }}
            >
              Connect to your NHS account
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Button
                variant="contained"
                startIcon={<Box component="img" src={NHS} sx={{ width: 48 }} />}
                sx={{
                  backgroundColor: "#005EB8",
                  borderRadius: "10px",
                  px: 4,
                  py: 1.4,
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "0 8px 20px rgba(0,94,184,0.25)",
                  transition: "all .25s",
                  "&:hover": {
                    backgroundColor: "#004a93",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Continue to NHS Login
              </Button>
            </Box>

            {/* BENEFITS */}

            {benefits.map((text, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mt: 4,
                }}
              >
                <CheckCircleRoundedIcon sx={{ color: "#22c55e" }} />
                <Typography fontWeight={500}>{text}</Typography>
              </Box>
            ))}
          </Box>

          {/* SIGN IN CARD */}

          <Box
            sx={{
              ...cardUI,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontWeight={500}>Already have an account?</Typography>

            <Button
              onClick={openModal}
              variant="outlined"
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: 500,
                borderColor: "#fb642d",
                color: "#fb642d",
                "&:hover": {
                  backgroundColor: "#fff2ec",
                  borderColor: "#fb642d",
                },
              }}
            >
              Sign in
            </Button>
          </Box>
        </Box>

        {/* ================= RIGHT COLUMN ================= */}

        <Box sx={cardUI}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.6rem",
              mb: 3,
            }}
          >
            Or search for your medicine
          </Typography>

          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <TipsAndUpdatesOutlinedIcon sx={{ color: "#fb642d" }} />
            <Typography fontWeight={700}>Search tips</Typography>
          </Box>

          <TextField
            fullWidth
            label="Search for your medicine"
            placeholder="Medicine name (e.g. Amoxicillin)"
            sx={{
              mt: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />

          <Box sx={{ mt: 4 }}>
            {[
              "Copy the medicine name written on your prescription or packaging",
              "Make sure you check you have chosen the right one",
              "You can add more medicines later",
            ].map((tip, i) => (
              <Typography key={i} sx={{ mt: 2 }} fontWeight={500}>
                {i + 1}. {tip}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Prescription;
