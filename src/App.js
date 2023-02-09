import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import Flightdetail from "./components/Flightdetail";
import Flight from "./components/Flight";
import { createContext, useState } from "react";
import Booking from "./components/Booking";

export const LoginContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [bookingData, setBookingData] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        {loggedIn ? (
          <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
            <Navbar />
          </LoginContext.Provider>
        ) : null}

        <Routes>
          <Route
            path="/"
            element={
              <LoginContext.Provider
                value={{ loggedIn, setLoggedIn, bookingData, setBookingData }}
              >
                <Login />
              </LoginContext.Provider>
            }
          />
          <Route
            path="/login"
            element={
              <LoginContext.Provider
                value={{ loggedIn, setLoggedIn, bookingData, setBookingData }}
              >
                <Login />
              </LoginContext.Provider>
            }
          />
          <Route
            path="/signup"
            element={
              <LoginContext.Provider
                value={{ loggedIn, setLoggedIn, bookingData, setBookingData }}
              >
                <Signup />
              </LoginContext.Provider>
            }
          />
          <Route
            path="/flightdetail"
            element={
              <LoginContext.Provider
                value={{ loggedIn, setLoggedIn, bookingData, setBookingData }}
              >
                <Flightdetail />
              </LoginContext.Provider>
            }
          />
          <Route
            path="/checkout"
            element={
              <LoginContext.Provider
                value={{ loggedIn, setLoggedIn, bookingData, setBookingData }}
              >
                <Checkout />
              </LoginContext.Provider>
            }
          />
          <Route
            path="/home"
            element={
              <LoginContext.Provider
                value={{ loggedIn, setLoggedIn, bookingData, setBookingData }}
              >
                <Home />
              </LoginContext.Provider>
            }
          />
          <Route
            path="/flight/:index"
            element={
              <LoginContext.Provider
                value={{ loggedIn, setLoggedIn, bookingData, setBookingData }}
              >
                <Flight />
              </LoginContext.Provider>
            }
          />

          <Route
            path="/booking"
            element={
              <LoginContext.Provider
                value={{ loggedIn, setLoggedIn, bookingData, setBookingData }}
              >
                <Booking />
              </LoginContext.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
