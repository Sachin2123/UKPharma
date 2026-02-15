import { Box, Button, Divider, Typography } from "@mui/material";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import Footer from "../../Pages/Dashboard/Footer";

/* =========================
   DATA (Easy to maintain)
========================= */

const services = [
  { id: 1, title: "Stop Smoking Support" },
  { id: 2, title: "Pharmacy First" },
  { id: 3, title: "New Medicine Service" },
  { id: 4, title: "Emergency Contraception" },
  { id: 5, title: "Ear Wax Removal" },
  { id: 6, title: "Covid Vaccination Service" },
  { id: 7, title: "Contraceptive Pill Repeat Supply" },
  { id: 8, title: "Blood Pressure Checks" },
  { id: 9, title: "Vitamin B12 Injection" },
  { id: 10, title: "Shingles" },
  { id: 11, title: "Weight Loss & Management" },
  { id: 12, title: "Travel Health" },
  { id: 13, title: "NHS Pneumococcal Vaccination" },
];

/* =========================
   STYLES (Senior Pattern)
========================= */

const styles = {
  section: {
    px: { xs: 3, md: 5 },
    py: 5,
    mt: { xs: 0, md: "6rem" },
    backgroundColor: "#0F172A",
    fontFamily: "Quicksand, Sans-serif",
  },

  grid: {
    display: "grid",
    gap: 4,
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2,1fr)",
      md: "repeat(3,1fr)",
    },
    animation: "fadeIn 0.8s ease forwards",

    "@keyframes fadeIn": {
      from: { opacity: 0, transform: "translateY(40px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
  },

  card: {
    backgroundColor: "#fff",
    py: { xs: 3.5, md: 4 },
    px: { xs: 3.5, md: 4.5 },
    borderRadius: "0px 14px",
    border: "1px solid rgba(226,232,240,0.9)",
    boxShadow:
      "0 4px 10px rgba(15,23,42,0.04), 0 10px 25px rgba(15,23,42,0.06)",
    position: "relative",
    transition: "all 0.25s ease",

    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow:
        "0 10px 20px rgba(15,23,42,0.08), 0 20px 40px rgba(15,23,42,0.08)",
      borderColor: "#FB642D",
    },

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      height: "100%",
      width: "3px",
      // background: "linear-gradient(to bottom, #FB642D, rgba(251,100,45,0.3))",
    },
  },

  button: {
    fontSize: "0.95rem",
    px: 2,
    py: 0.8,
    color: "#0F172A",
    backgroundColor: "#F8FAFC",
    textTransform: "none",
    borderRadius: "8px",
    border: "1px solid #E2E8F0",
    fontWeight: 500,
    transition: "all 0.2s ease",

    "&:hover": {
      backgroundColor: "#FB642D",
      color: "white",
      borderColor: "#FB642D",
    },
  },
};

/* =========================
   COMPONENT
========================= */

const Services = () => {
  return (
    <Box>
      <Box sx={styles.section}>
        {/* HEADER */}
        <Box sx={{ p: 6, color: "white" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "1.9rem",
                md: "clamp(2.4rem, 2.1231rem + 1.2308vw, 3.5rem)",
              },
              fontWeight: 600,
            }}
          >
            We’re Here to help
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              mt: 2,
              fontSize: { xs: "1rem", md: "1.15rem" },
              color: "#E2E8F0",
            }}
          >
            At Inspire Pharmacy, we’re dedicated to providing you the best
            experience when you book a service with us.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            {" "}
            <Button sx={{ py: 1, backgroundColor: styles.button }}>
              View All Services
            </Button>
          </Box>
        </Box>

        <Divider sx={{ backgroundColor: "#FB642D" }} />

        {/* GRID */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 7, md: 10 },
          }}
        >
          <Box sx={styles.grid}>
            {services.map((service) => (
              <Box key={service.id} sx={styles.card}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "#0F172A",
                    }}
                  >
                    {service.title}
                  </Typography>

                  <VaccinesIcon
                    sx={{
                      color: "#FB642D",
                      backgroundColor: "rgba(251,100,45,0.08)",
                      borderRadius: "10px",
                      p: 0.6,
                      fontSize: "2rem",
                    }}
                  />
                </Box>

                <Divider sx={{ mt: 3 }} />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 4,
                  }}
                >
                  <Button sx={styles.button}>Book Now</Button>
                  <Button sx={styles.button}>Read</Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Footer bgColor="white" textColor="black" p="2" />
    </Box>
  );
};

export default Services;
