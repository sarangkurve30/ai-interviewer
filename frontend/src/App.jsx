import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Interview from "./pages/Interview";
import Report from "./pages/Report";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
	<Route path="/dashboard" element={<Dashboard />} />
	<Route path="/interview" element={<Interview />} />
	<Route path="/report" element={<Report />} />
	<Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
