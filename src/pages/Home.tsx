import Login from "../components/Login/Login";
import CreateAccount from "../components/CreateAccount/CreateAccount";
import Timeline from "./Timeline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/home" element={<Timeline />} />
      </Routes>
    </Router>
  );
}

export default Home;
