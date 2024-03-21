import React from "react";
import "./App.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Results from "./Results";
import Cart from "./Cart";
import Home from "./Home";
import MyAccount from "./MyAccount";
import Notifications from "./Notifications";
import Scan from "./Scan";
import Play from "./Play";

function App() {
  function changeImage(count) {
    var imgHome = document.getElementById("imgHome");
    var imgResults = document.getElementById("imgResults");
    var imgPlay = document.getElementById("imgPlay");
    var imgScan = document.getElementById("imgScan");
    var imgSettings = document.getElementById("imgSettings");

    switch (count) {
      case 0:
        imgHome.src = "icons/home_selected.png";
        imgResults.src = "icons/results.png";
        imgPlay.src = "icons/play.png";
        imgScan.src = "icons/scan.png";
        imgSettings.src = "icons/settings.png";
        break;
      case 1:
        imgHome.src = "icons/home.png";
        imgResults.src = "icons/results_selected.png";
        imgPlay.src = "icons/play.png";
        imgScan.src = "icons/scan.png";
        imgSettings.src = "icons/settings.png";
        break;
      case 2:
        imgHome.src = "icons/home.png";
        imgResults.src = "icons/results.png";
        imgPlay.src = "icons/play_selected.png";
        imgScan.src = "icons/scan.png";
        imgSettings.src = "icons/settings.png";
        break;
      case 3:
        imgHome.src = "icons/home.png";
        imgResults.src = "icons/results.png";
        imgPlay.src = "icons/play.png";
        imgScan.src = "icons/scan_selected.png";
        imgSettings.src = "icons/settings.png";
        break;
      case 4:
        imgHome.src = "icons/home.png";
        imgResults.src = "icons/results.png";
        imgPlay.src = "icons/play.png";
        imgScan.src = "icons/scan.png";
        imgSettings.src = "icons/settings_selected.png";
        break;
      default:
        imgHome.src = "icons/home_selected.png";
        imgResults.src = "icons/results.png";
        imgPlay.src = "icons/play.png";
        imgScan.src = "icons/scan.png";
        imgSettings.src = "icons/settings.png";
    }
  }
  return (
    <>
      <Router>
        <nav
          className="nav navbar fixed-top  d-flex justify-content-center bg-white"
          data-bs-theme="dark"
        >
          <div className="container p-2">
            <nav-link className="align-self-start">
              <Link
                to="/"
                className="align-self-center"
                onClick={() => changeImage(0)}
              >
                <img
                  src="/icons/logo.png"
                  alt="Bootstrap"
                  width="108"
                  height="36"
                />
              </Link>
            </nav-link>
            <nav-link className="d-flex align-self-end">
              <Link to="/notifications" className="align-self-center me-3">
                <img
                  src="/icons/new_notification.png"
                  alt="Notification"
                  width="36"
                  height="36"
                />
              </Link>
              <Link to="/cart" className="align-self-center me-3">
                <img
                  src="/icons/cart02.png"
                  alt="Cart"
                  width="36"
                  height="36"
                />
              </Link>
            </nav-link>
          </div>
        </nav>
        <nav
          className="nav navbar fixed-bottom float-start bg-white"
          data-bs-theme="dark"
        >
          <div className="container bg-warning d-flex justify-content-center">
            Take frequent brakes
          </div>
          <div className="d-flex container p-2 justify-content-around">
            <nav-link className="active" aria-current="page">
              <Link to="/" onClick={() => changeImage(0)}>
                <img
                  id="imgHome"
                  src="/icons/home_selected.png"
                  alt="Home"
                  width="36"
                  height="36"
                />
              </Link>
            </nav-link>
            <nav-link>
              <Link to="/results" onClick={() => changeImage(1)}>
                <img
                  id="imgResults"
                  src="/icons/results.png"
                  alt="Results"
                  width="36"
                  height="36"
                />
              </Link>
            </nav-link>
            <nav-link>
              <Link to="/play" onClick={() => changeImage(2)}>
                <img
                  id="imgPlay"
                  src="/icons/play.png"
                  alt="Play"
                  width="36"
                  height="36"
                />
              </Link>
            </nav-link>
            <nav-link>
              <Link to="/scan" onClick={() => changeImage(3)}>
                <img
                  id="imgScan"
                  src="/icons/scan.png"
                  alt="Scan"
                  width="36"
                  height="36"
                />
              </Link>
            </nav-link>
            <nav-link>
              <Link to="/myAccount" onClick={() => changeImage(4)}>
                <img
                  id="imgSettings"
                  src="/icons/settings.png"
                  alt="Settings"
                  width="36"
                  height="36"
                />
              </Link>
            </nav-link>
          </div>
        </nav>
        <Routes>
          <Route path="/notifications" Component={Notifications}></Route>
          <Route path="/myAccount" Component={MyAccount}></Route>
          <Route path="/cart" Component={Cart}></Route>
          <Route path="/results" Component={Results}></Route>
          <Route path="/scan" Component={Scan}></Route>
          <Route path="/play" Component={Play}></Route>
          <Route path="/" Component={Home}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
