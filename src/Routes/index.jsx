import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import FormLogin from "../pages/Login";
import FormRegister from "../pages/Register";
import Clients from "../pages/ClientList";

const RoutesApp = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<FormLogin />} />
      <Route exact path="/register" element={<FormRegister />} />
      <Route exact path="/customers" element={<Clients />} />
    </Routes>
  );
};

export default RoutesApp;
