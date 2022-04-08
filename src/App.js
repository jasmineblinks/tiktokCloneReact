import logo from "./logo.svg";
import "./App.css";

import LandingPage from "./Components/LandingPage/LandingPage";
import Profile from "./Components/profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//  <img src={logo} className="App-logo" alt="logo" />;
