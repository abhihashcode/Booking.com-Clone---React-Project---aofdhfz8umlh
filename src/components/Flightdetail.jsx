import React, { useState, useEffect } from "react";
import "../styles/flightdetails.css";
import { Link } from "react-router-dom";

function Flightdetail() {
  const [flightdata, setflightdata] = useState([]);

  const fetchData = () => {
    fetch(
      "https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights"
    )
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        setflightdata(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(flightdata, "data");

  return (
    <div className=" main_containers">
      <div className="card_container">
        <h2 className="head">List of Flights</h2>
        {flightdata.map((item, index) => {
          return (
            <div className="card">
              <div className="airline_name">
                <h4>Airline</h4>
                <span> {item.airlineName}</span>
              </div>
              <div className="Departure">
                <h4>From</h4>
                <span>{item.from}</span>
              </div>
              <div className="via">
                <h4>Duration</h4>
                <span>{item.duration}</span>
              </div>

              <div className="to">
                <h4>To</h4>
                <span>{item.to}</span>
              </div>

              <div className="via">
                <h4>Date</h4>
                <span>{item.departure.departureDate}</span>
              </div>

              <div className="via">
                <h4>Time</h4>
                <span>{item.departure.departureTime}</span>
              </div>

              <div className="price">
                <h5>{`₹${item.price}`}</h5>
                <Link to={`/flight/from=${item.from}&to=${item.to}`}>
                  <button className="button_book">Book now</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Flightdetail;
