import Header from "./Component/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Prescription from "./Pages/Prescription/Prescription";
import Services from "./Pages/Services/Services";
import Shop from "./Pages/Shop/Shop";
import CarHome from "./Pages/CarHome/CarHome";
import WeightLoss from "./Pages/Prescription/Prescription";
import WomensHealth from "./Pages/WomensHealth/WomensHealth";
import MensHealth from "./Pages/MensHealth/MensHealth";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/prescriptions" element={<Prescription />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/carhome" element={<CarHome />} />
        <Route path="/weightloss" element={<WeightLoss />} />
        <Route path="/womenshealth" element={<WomensHealth />} />
        <Route path="/menshealth" element={<MensHealth />} />
      </Routes>
    </Router>
  );
}

export default App;
