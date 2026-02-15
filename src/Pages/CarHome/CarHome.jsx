import { Box, Button, Divider, Typography } from "@mui/material";
import Footer from "../../Pages/Dashboard/Footer";
const CarHome = () => {
  const content = [
    {
      id: 1,
      title:
        "As a busy care team handling the complex needs of multiple residents, you need a reliable, responsive medication management service you can trust.",
    },
    {
      id: 2,
      title:
        "At Inspire Pharmacy, our experienced registered pharmacists provide specialist support focused on patient wellbeing while reducing your workload.",
    },
    {
      id: 3,
      title:
        "With our advanced eMAR system, we work directly with GPs to manage repeat prescriptions and ensure acute medications are delivered in time for the 3pm care round.",
    },
  ];

  const carContent = [
    {
      id: 1,
      title: "Managing Monthly Medication Drops",
      desc: [
        {
          id: 1,
          title:
            "Scheduled delivery of repeat prescriptions for all residents, including any new medications.",
        },
        {
          id: 2,
          title: "Working directly with GPs to update prescriptions as needed.",
        },
        {
          id: 3,
          title: "eMAR system tracks refill needs to ensure you never run out.",
        },
      ],
    },
    {
      id: 2,
      title: "Fast Same-Day Delivery",
      desc: [
        {
          id: 1,
          title:
            "Acute medications delivered within 24 hours, often on the same day.",
        },
        {
          id: 2,
          title: "Dispensary vans stocked for immediate deliveries until 5pm.",
        },
        {
          id: 3,
          title:
            "Next-morning delivery guaranteed for late afternoon prescriptions.",
        },
      ],
    },

    {
      id: 3,
      title: "Professional Clinical Support",
      desc: [
        {
          id: 1,
          title: "Personalised support from qualified registered pharmacists.",
        },
        {
          id: 2,
          title: "Direct access for medication queries and clinical advice.",
        },
        {
          id: 3,
          title:
            "NHS and private prescriptions filled, including controlled drugs.",
        },
      ],
    },
  ];

  console.log(carContent[0].desc[0].title);
  return (
    <Box>
      <Box
        sx={{
          px: { xs: 3, md: 0 },
          py: { xs: 5, md: 0 },
          height: { xs: "auto", md: "100%" },
          fontFamily: "Quicksand, Sans-serif",
          justifyContent: "center",
          mt: { xs: "0rem", md: "6rem" },
          // backgroundColor: "white",
        }}
      >
        {/* 1st Section */}
        <Box
          sx={{
            mt: 0,
            p: 6,
            color: "white",
            backgroundColor: "black",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "1.9rem",
                md: "clamp(2.4rem, 2.1231rem + 1.2308vw, 3.5rem)",
              },
              fontWeight: "600",
              mt: 5,
            }}
          >
            Care Home Solutions
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              mt: 2,
              fontSize: { xs: "1rem", md: "1.15rem" },
              fontWeight: "600",
            }}
          >
            Specialist pharmacy support for care homes, including medication
            <br />
            management, MAR charts, training, and reliable deliveries.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 5,
              mb: { xs: 0, md: 1 },
            }}
          >
            {/* <Button
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
            </Button> */}
          </Box>
        </Box>
        {/* 2nd Section */}
        <Box
          sx={{
            px: 9,
            py: 5,
            color: "black",
            backgroundColor: "white",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "Center",
            gap: { xs: 5, md: 20 },
          }}
        >
          <Box>
            <Box
              sx={{
                width: { xs: "100px", md: "480px" },
                height: { xs: "100%", md: "100%" },
                objectFit: "cover",
                objectPosition: "center center",
              }}
              component="img"
              src="https://ibstockpharmacy.co.uk/wp-content/uploads/2025/04/Care-Home-Isolate-1.webp"
              alt="Logo"
            />
          </Box>
          <Box>
            {" "}
            <Typography
              sx={{
                textAlign: "start",
                fontSize: {
                  xs: "1.9rem",
                  md: "clamp(2.1rem, 1.9154rem + 0.8205vw, 2.5rem)",
                },
                fontWeight: "700",
                mt: 15,
              }}
            >
              Pharmacy Services for Care & Nursing Homes
            </Typography>
            {content.map((val, index) => (
              <Box key={val.id} sx={{ display: "flex", mt: 3 }}>
                <Typography>{val.title}</Typography>
              </Box>
            ))}
            <Divider sx={{ mt: 3 }} />
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button
                sx={{
                  padding: "10px 20px 10px 20px",
                  backgroundColor: "#FB642D",
                  color: "white",
                  borderRadius: "10px 10px 10px 10px",
                  marginLeft: "20px",
                  mt: 1.5,
                  transition: "transform 0.3s ease", // smooth animation
                  "&:hover": {
                    transform: "scale(1.05)", // zoom in
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 7, md: 10 },
            px: 10,
            py: 10,
            backgroundColor: "grey",
          }}
        >
          <Box
            sx={{
              // display: "flex",
              opacity: 1,
              animation: "fadeIn 0.9s ease forwards",
              "@keyframes fadeIn": {
                from: {
                  opacity: 0,
                  transform: "translateY(40px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },

              gap: 5,
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr", // mobile → 1 card
                sm: "repeat(2, 1fr)", // tablet → 2 cards
                md: "repeat(3, 1fr)", // desktop → 3 cards
              },
            }}
          >
            {carContent.map((val, index) => (
              <Box
                key={val.id}
                sx={{
                  backgroundColor: "#FB642D",
                  py: 5,
                  px: { xs: 5, md: 6 },
                  borderRadius: "30px",
                }}
              >
                <Box
                  sx={
                    {
                      // display: "flex",
                      // justifyContent: "space-between",
                      // alignItems: "center",
                    }
                  }
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "1.2rem",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    {val.desc}
                  </Typography>

                  {/* {carContent.desc.map((desc, id) => (
                    <Typography>{desc.title}</Typography>
                  ))} */}
                </Box>
                <Divider sx={{ backgroundColor: "white", mt: 3 }} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer bgColor="white" textColor="black" p="2" />
    </Box>
  );
};

export default CarHome;
