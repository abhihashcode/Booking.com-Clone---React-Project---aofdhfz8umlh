import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
import "../styles/passengerform.css";

function PassengerForm(props) {
  const afterClick = useNavigate();
  const { loggedIn, setLoggedIn, bookingData, setBookingData } =
    useContext(LoginContext);
  const [passengerData, setPassengerData] = useState({
    passengerName: "",
    passengerAge: "",
    date: "",
    flightdetais: props.flightdetais,
    price: "",
    Tax: "",
    Total: "",
  });

  const getdata = (e) => {
    console.log(e.target.value);

    const { value, name } = e.target;

    console.log(value, name);

    setPassengerData(() => {
      return {
        ...passengerData,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();

    const { passengerName, passengerAge, date, flightdetais } = passengerData;

    if (passengerName === "") {
      alert("please enter passenger name");
    } else if (passengerAge === "") {
      alert("Age is required");
    } else if (date === "") {
      alert("date field is required");
    } else {
      console.log(passengerData);
      setBookingData(passengerData);
      afterClick("/checkout");
    }
  };

  return (
    <div className="form_mains">
      <form className="forms">
        <h3 className="passanger_heding">Flight booking form</h3>

        <div>
          <label>Passenger Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="passenger_input_name"
            name="passengerName"
            onChange={getdata}
            required
          />
        </div>
        <div>
          <label>Passenger Age</label>
          <input
            type="number"
            placeholder="Enter your Age"
            className="passenger_input_age"
            required
            name="passengerAge"
            onChange={getdata}
          />
        </div>
        <div>
          <label>Travel Date</label>
          <input
            type="date"
            className="passenger_input_age"
            name="date"
            onChange={getdata}
          />
        </div>
        <div className="class_div">
          <label className="class_label">Class</label>
          <div className="p_label">
            <div className="Economy_label">
              <label>Economy</label>
              <input
                type="radio"
                value={"Economy"}
                name="class"
                onChange={getdata}
                required
              />
            </div>
          </div>
        </div>

        <div className="payment">
          <button className="checkout_button" onClick={addData}>
            Go for Payment
          </button>
        </div>
      </form>
    </div>
  );
}

export default PassengerForm;
