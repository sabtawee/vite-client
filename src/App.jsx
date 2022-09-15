import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./components/NavbarComponent";
import SidebarComponent from "./components/SidebarComponent";
import FooterComponent from "./components/FooterComponent";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage url="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
