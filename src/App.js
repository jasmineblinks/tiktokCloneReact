import logo from "./logo.svg";
import "./App.css";

import LandingPage from "./Components/LandingPage/LandingPage";
import Profile from "./Components/profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";
import Upload from "./Components/upload/Upload";
import Minicard from "./pages/minicard/Minicard";
import Microcard from "./pages/microcard/Microcard";
import Followers from "./pages/followers/Followers";
import Card from "./pages/Card/Card";
import Home from "./pages/home/Home";
import Video from "./Components/video/Video";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/upload" element={<Upload />} />
        <Route exact path="/minicard" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//  <img src={logo} className="App-logo" alt="logo" />;
