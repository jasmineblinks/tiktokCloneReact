import logo from "./logo.svg";
import "./App.css";

import SideNav from "./Components/sideNav/SideNav";
import LandingPage from "./Components/LandingPage/LandingPage";
import Profile from "./Components/profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SideNav />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//  <img src={logo} className="App-logo" alt="logo" />;
