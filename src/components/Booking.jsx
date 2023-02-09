import React from "react";
import "../styles/booking.css";

function Booking() {
  const BookingData = JSON.parse(localStorage.getItem("BookingData"));
  console.log(BookingData);

  return BookingData.map((data) => (
    <div className="booking_main">
      <table>
        <thead>
          <tr className="tr1">
            <th>Airline Name</th>
            <th>{data.flightdetais.airlineName}</th>
          </tr>

          <tr className="tr2">
            <th>From</th>
            <th>{data.flightdetais.from}</th>
          </tr>

          <tr className="tr3">
            <th>To</th>
            <th>{data.flightdetais.to}</th>
          </tr>

          <tr className="tr4">
            <th>Passenger Name</th>
            <th>{data.passengerName}</th>
          </tr>

          <tr className="tr5">
            <th>Age</th>
            <th>{data.passengerAge}</th>
          </tr>

          <tr className="tr6">
            <th>Date</th>
            <th>{data.date}</th>
          </tr>

          <tr className="tr7">
            <th>Class</th>
            <th>{data.class}</th>
          </tr>

          <tr className="tr8">
            <th>Total Amount</th>
            <th>{`₹ ${
              +data.flightdetais.price + (data.flightdetais.price * 18) / 100
            }`}</th>
          </tr>
        </thead>
      </table>
    </div>
  ));
}

export default Booking;
