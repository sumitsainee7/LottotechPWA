import React from "react";
import "./App.css";
import { Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Rewards from "./Rewards";
import Cart from "./Cart";
import Home from "./Home";
import MyAccount from "./MyAccount";
import Notifications from "./Notifications";
import Scan from "./Scan";
import Play from "./Play";

function App() {
  return (
    <>
      <Router>
        <nav className="nav fixed-top d-flex justify-contet-center  bg-danger bg-gradient">
          <div className="container d-flex justify-content-start">
            <nav-link className="align-self-center">
              <Link to="/">
                <img
                  src="/icons/lottotech-high-resolution-logo-transparent.svg"
                  alt=""
                />
              </Link>
            </nav-link>
            <ul className="container grid gap-0 column-gap-3 d-flex justify-content-end align-self-center">
              <nav-link aria-current="page">
                <Link to="/notifications">
                  <img src="/icons/bell.svg" alt="" />
                </Link>
              </nav-link>
              <nav-link>
                <Link to="/cart">
                  <img src="/icons/shoppingcart.svg" alt="" />
                </Link>
              </nav-link>
            </ul>
          </div>
        </nav>
        <nav className="nav fixed-bottom justify-content-center bg-danger bg-gradient">
          <div className="d-flex container p-2 justify-content-around">
            <nav-link className="active" aria-current="page">
              <Link to="/">
                <img src="/icons/home.svg" alt="" />
              </Link>
            </nav-link>
            <nav-link>
              <Link to="/rewards">
                <img src="/icons/money.svg" alt="" />
              </Link>
            </nav-link>
            <nav-link>
              <Link to="/play">
                <img src="/icons/videogame.svg" alt="" />
              </Link>
            </nav-link>
            <nav-link>
              <Link to="/scan">
                <img src="/icons/qrcode.svg" alt="" />
              </Link>
            </nav-link>
            <nav-link>
              <Link to="/myAccount">
                <img src="/icons/user.svg" alt="" />
              </Link>
            </nav-link>
          </div>
        </nav>
        <Routes>
          <Route path="/notifications" Component={Notifications}></Route>
          <Route path="/myAccount" Component={MyAccount}></Route>
          <Route path="/cart" Component={Cart}></Route>
          <Route path="/rewards" Component={Rewards}></Route>
          <Route path="/scan" Component={Scan}></Route>
          <Route path="/play" Component={Play}></Route>
          <Route path="/" Component={Home}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
