import { useState } from "react";
import { useLocation } from "react-router-dom";

import ReusableModal from "./Component/Modal/ReusableModal";
import Header from "./Component/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Prescription from "./Pages/Prescription/Prescription";
import Services from "./Pages/Services/Services";
import Shop from "./Pages/Shop/Shop";
import CarHome from "./Pages/CarHome/CarHome";
import WeightLoss from "./Pages/Prescription/Prescription";
import WomensHealth from "./Pages/WomensHealth/WomensHealth";
import MensHealth from "./Pages/MensHealth/MensHealth";

import { Routes, Route } from "react-router-dom";

function App() {
  const location = useLocation();
  const WhiteBurger = location.pathname === "/services";
  console.log("App.js:-", location);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header
        menuColor={WhiteBurger ? "black" : "black"}
        activePage={location}
      />
      <ReusableModal open={open} onClose={handleClose} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/prescriptions"
          element={<Prescription openModal={handleOpen} />}
        />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/carhome" element={<CarHome />} />
        <Route path="/weightloss" element={<WeightLoss />} />
        <Route path="/womenshealth" element={<WomensHealth />} />
        <Route path="/menshealth" element={<MensHealth />} />
      </Routes>
    </>
  );
}

export default App;
