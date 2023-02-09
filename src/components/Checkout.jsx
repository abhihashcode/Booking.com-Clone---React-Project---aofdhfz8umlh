import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
import "../styles/checkout.css";

function Checkout() {
  const renderAfterBooking = useNavigate();

  const { loggedIn, setLoggedIn, bookingData, setBookingData } =
    useContext(LoginContext);
  console.log(bookingData, "paste");

  const Tax = (bookingData.flightdetais.price * 18) / 100;

  const Total = bookingData.flightdetais.price * 1 + Tax;

  const price = bookingData.flightdetais.price * 1;

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [cardName, setCardName] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlepayment = () => {

    if(name ===""){
      alert('Name field is required')
    }
    else if(cardName ===""){
      alert('Card Number field is required')
    }
     else if(date ===""){
      alert('Date field is required')
    }
   else if(cvv ===""){
      alert('CVV field is required')
    }
    else{
    setBookingData(() => {
      return {
        ...bookingData,
        price: price,
        Tax: Tax,
        Total: Total,
      };
      
    });
    localStorage.setItem("BookingData", JSON.stringify([...data, bookingData])); // inpval k andr hmne name email wgerah store kiya h
    const temp = [...data, bookingData];
    setData(() => {
      return temp;
      
    });

    
   
    
    alert("Booking SuccessFul");
      renderAfterBooking("/booking");
    }
      
  };

  return (
    <div className="info">
      <div className="card_ceckout">
        
          <h4>Payment Method</h4>
        
        <form className="form_contol_form">
          <div className="card_body">
            <input
              type="text"
              placeholder="Name on card"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
           
            />
          </div>
          <div className="card_body">
            <input
              type="number"
              placeholder="Card Number"
              className="form-control"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
             
            />
          </div>
          <div className="card_body">
            <input
              type="date"
              placeholder="Expiry Date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="card_body">
            <input type="text" placeholder="cvv" className="form-control"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </form>
        <div className="card_Button">
          <button className="pay_button" onClick={handlepayment}>
            Pay
          </button>
        </div>
      </div>

      <div className="card_ceckout1">
        <div className="form_contol_form1">
          <h3>Booking Summary</h3>
          <div className="card_body1">
            <h4 className="form-control1">Ticket Price</h4>
            <span className="span">{`₹ ${price}`}</span>
          </div>
          <div className="card_body1">
            <h4 className="form-control1">Taxes</h4>
            <span className="span">{`₹ ${Tax}`}</span>
          </div>
        </div>
        <div className="card_body1">
          <h4 className="form-control1">Total Amount</h4>
          <span className="span">{`₹ ${Total}`}</span>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
