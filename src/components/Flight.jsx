import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/flight.css";
import PassengerForm from "./PassengerForm";

function Flight() {
  const param = useParams();
  const [flightData, setflightData] = useState({});
  const [formShow, setFormShow] = useState(false);

  function fetchApi() {
    fetch(
      `https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights?${param.index}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data[0]);
        setflightData(data[0]);
      });
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="card_main">
      <div className="card_flight">
        <div className="name">
          <h4>Airline</h4>
          <span> {flightData.airlineName}</span>
        </div>

        <div className="name">
          <h4>From</h4>
          <span>{flightData.from}</span>
        </div>

        <div className="name">
          <h4>To</h4>
          <span>{flightData.to}</span>
        </div>

        <div className="name">
          <h4>Via</h4>
          <span>{flightData.via}</span>
        </div>

        <div className="name">
          <h4>Duration</h4>
          <span>{flightData.duration}</span>
        </div>

        <div className="name">
          <h5>Price</h5>
          <span>{`₹ ${flightData.price}`}</span>
        </div>
        <button
          className="book_button"
          onClick={() => {
            setFormShow(!formShow);
          }}
        >
          Book now
        </button>
      </div>
      {formShow ? <PassengerForm flightdetais={flightData} /> : ""}
    </div>
  );
}

export default Flight;
