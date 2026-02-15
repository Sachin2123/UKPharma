import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import HairLoss from "../../Asset/AnimatedPictures/HairLoss.webp";
import PeriodDelay from "../../Asset/AnimatedPictures/PeriodDelay.webp";
const Visit = () => {
  const visitCards = [
    {
      id: 1,
      img: "https://ibstockpharmacy.co.uk/wp-content/uploads/2025/05/clinicweightloss-1.webp",
      title: "Weight Loss",
      desc: "Lose up to 22.5% of your body weight",
      btn: "Read More",
    },
    {
      id: 2,
      img: "https://ibstockpharmacy.co.uk/wp-content/uploads/2025/05/Erectile-Dysfunctionclinc.png",
      title: "Erectile Dysfunction",
      desc: "Effective, discreet treatments",
      btn: "Read More",
    },
    {
      id: 3,
      img: "https://ibstockpharmacy.co.uk/wp-content/uploads/2025/05/Premature-Ejaculation-Clinc.webp",
      title: "Premature Ejaculation",
      desc: "Last up to 3x longer",
      btn: "Read More",
    },
    {
      id: 4,
      img: "https://ibstockpharmacy.co.uk/wp-content/uploads/2025/05/close-up-young-woman-having-pain-her-waist-1.webp",
      title: "Cystitis (UTI)",
      desc: "Clinically-recommended medicines",
      btn: "Read More",
    },
    {
      id: 5,
      // img: "https://ibstockpharmacy.co.uk/wp-content/uploads/2025/05/man-getting-hair-loss-treatment-1.webp",
      img: HairLoss,
      title: "Hair Loss",
      desc: "Regain your confidence",
      btn: "Read More",
    },
    {
      id: 6,
      // img: "https://ibstockpharmacy.co.uk/wp-content/uploads/2025/05/portrait-beautiful-smiling-blond-model-dressed-summer-hipster-clothes-1.webp",
      img: PeriodDelay,
      title: "Period Delay",
      desc: "Delay your cycle for up to 17 days",
      btn: "Read More",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FAEBEB",

        display: "flex",
        flexDirection: "column",
        px: { xs: 3, md: 10 },
        py: { xs: 5, md: 7 },
        justifyContent: "Center",
      }}
    >
      <Box sx={{ justifyContent: "Center", display: "flex" }}>
        <Typography
          sx={{
            fontSize: {
              xs: "clamp(1.5rem, 1.9154rem + 0.8205vw, 1.5rem)",
              md: "clamp(2.1rem, 1.9154rem + 0.8205vw, 2.5rem)",
            },
            fontWeight: "700",
            fontFamily: "Quicksand, Sans-serif",
            color: "black",
          }}
        >
          Visit Our Online Clinic
        </Typography>
      </Box>

      <Box sx={{ justifyContent: "Center", display: "flex" }}>
        <Typography
          sx={{
            fontWeight: "700",
            fontFamily: "Quicksand, Sans-serif",
            color: "black",
            textAlign: "center",
            mt: { xs: 3, md: 0 },
          }}
        >
          Get the care you need from home for selected conditions. Complete a
          quick online assessment, <br />
          then choose delivery or local collection. No waiting rooms, no hassle.
        </Typography>
      </Box>

      <Box
        sx={{
          color: "white",
          mt: { xs: 6, md: 8 },
          gap: 3,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {visitCards.map((val, index) => (
          <Card
            className="card"
            key={val.id}
            sx={{
              height: 300, // 👈 increase height here

              borderRadius: "18px",
              position: "relative",
              overflow: "hidden", // 👈 important
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#F0C6C6",
              transition: "all 0.35s ease",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.15)",

              "&:hover": {
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: "0px 12px 35px rgba(0,0,0,0.3)",
              },

              "&:hover .services-card-img": {
                transform: "scale(1.1)",
              },
            }}
          >
            {/* IMAGE FULL BACKGROUND */}
            <CardMedia
              className="services-card-img"
              image={val.img}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%", // 👈 full card height
                transition: "transform 0.5s ease",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 1,
              }}
            />

            {/* OPTIONAL DARK OVERLAY FOR TEXT VISIBILITY */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.35)",
                zIndex: 2,
              }}
            />

            {/* CONTENT */}
            <CardContent
              className="Card-Content"
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                gap: 1,
                position: "relative",
                zIndex: 3,
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                sx={{
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  fontFamily: "Quicksand, Sans-serif",
                  color: "white",
                  lineHeight: 1.3,
                }}
              >
                {val.title}
              </Typography>

              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "0.95rem",
                  fontFamily: "Quicksand, Sans-serif",
                  color: "white",
                  lineHeight: 1.6,
                }}
              >
                {val.desc}
              </Typography>
            </CardContent>

            {/* BUTTON */}
            <CardActions
              sx={{
                mt: "auto",
                p: 2,
                position: "relative",
                zIndex: 3,
              }}
            >
              <Button
                sx={{
                  padding: "10px 20px",
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "10px",
                  mr: 4,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                {val.btn}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>

      <Box sx={{ justifyContent: "Center", display: "flex", mt: 5 }}>
        <Button
          sx={{
            fontWeight: "400",
            padding: "10px 20px 10px 20px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px 10px 10px 10px",
            transition: "transform 0.3s ease", // smooth animation
            "&:hover": {
              transform: "scale(1.05)", // zoom in
              boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
            },
          }}
        >
          View All
        </Button>
      </Box>
    </Box>
  );
};

export default Visit;
