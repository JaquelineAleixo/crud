import "./Home.css";
import Banner from "../components/Banner/Banner";
import Login from "./subScreen/Login/Login";
import Register from "./subScreen/Register/Register";
import ForgotPassword from "./subScreen/ForgotPassword/ForgotPassword";
import { IoEarthOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="app">
      <aside className="app-aside">
        <Banner />
      </aside>

      <main className="app-main">
        <header>
          <div className="icon-text">
            <IoEarthOutline /> BR
          </div>
          <div className="icon-text">
            <GrClose /> Close
          </div>
        </header>

        <div className="app-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>

        <footer>
          <p>
            2023 - Itaú Private Bank. All rights reserved.&nbsp;&nbsp;&nbsp;
            Privacy Policy
          </p>
        </footer>
      </main>
    </div>
  );
}

export default Home;
