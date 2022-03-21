// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import Banner from "./Banner";
import Row from "./Row";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Error from "./pages/error";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// const code = new URLSearchParams(window.location.search).get("code");
export default function App() {
  const code = new URLSearchParams(window.location.search).get("code");
  code ? <Dashboard code={code} /> : <Login />;

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
