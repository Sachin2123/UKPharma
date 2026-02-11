import React from "react";
import { Box } from "@mui/material";
import Services from "./Services";
import Visit from "./Visit";
import ConsultPharmacist from "./ConsultPharmacist";
import BookService from "./BookService";
import BrowseStore from "./BrowseStore";
import PatientReview from "./PatientReview";
import MobileSection from "./MobileSection";
import Footer from "./Footer";
import Home from "./Home";

const Dashboard = () => {
  return (
    <Box
      sx={{
        overflow: "hidden", // PREVENTS SCATTERING
      }}
    >
      <Home />
      <Services />
      <Visit />
      <ConsultPharmacist />
      <BookService />
      <BrowseStore />
      <PatientReview />
      <MobileSection />
      <Footer />
    </Box>
  );
};

export default Dashboard;
