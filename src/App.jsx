import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { BubblyContainer } from "react-bubbly-transitions";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useEffect } from "react";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import MarketPlace from "./pages/Dashboard/MarketPlace";
import NftDetails from "./pages/Dashboard/NftDetails";
import Settings from "./pages/Dashboard/Settings";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import PasswordReset from "./pages/PasswordReset/PasswordReset";
import EmailVerification from "./pages/EmailVerification/EmailVerification";
import NewPassword from "./pages/NewPassword/NewPassword";
import NftProfile from "./pages/Dashboard/NftProfile";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 80,
      once: true,
      easing: "ease",
    });
  }, []);

  return (
    <>
      <BubblyContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/EmailVerification" element={<EmailVerification />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/NewPassword" element={<NewPassword />} />
        <Route path="/PasswordReset" element={<PasswordReset />} />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="NftProfile" element={<NftProfile />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
        <Route path="Dashboard/MarketPlace" element={<MarketPlace />} />
        <Route path="MarketPlace" element={<MarketPlace />} />
        <Route path="/*" element={<NftDetails />} />
        <Route
          path="*"
          element={<div style={{ color: "White" }}>Error Page</div>}
        />
      </Routes>
    </>
  );
}

export default App;
