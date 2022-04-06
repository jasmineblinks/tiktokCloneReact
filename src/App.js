import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import SideNav from "./Components/sideNav/SideNav";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideNav />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
//  <img src={logo} className="App-logo" alt="logo" />;
