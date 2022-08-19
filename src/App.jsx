import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./components/NavbarComponent";
import SidebarComponent from "./components/SidebarComponent";
import FooterComponent from "./components/FooterComponent";
import LoginPage from "./pages/Login/LoginPage";
import ResultPage from "./pages/Result/ResultPage";
import ComparePage from "./pages/Compare/ComparePage";
import SmartStopPage from "./pages/Smartstop/SmartStopPage";

function App() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <NavbarComponent />
          <SidebarComponent />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/login" element={<LoginPage url="/" />} />
              <Route path="/result" element={<ResultPage />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/weightout" element={<SmartStopPage />} />
            </Routes>
          </div>
        <FooterComponent />
        </div>
      </BrowserRouter>
    );
  }

export default App;
