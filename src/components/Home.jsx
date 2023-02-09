import React, { useState } from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";


function Home() {
  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("Mumbai");
  const [departure, setDeparture] = useState("");
const [returnDate, setReturnDate] = useState("");

  const history = useNavigate();

  const handleFrom = (e) => {
    setFrom(e.target.value);
  };

  const handleTo = (e) => {
    setTo(e.target.value);
  };

  const handleDeparture = (e) => {
    setDeparture(e.target.value);
  };

const handleReturn = (e) => {
    setReturnDate(e.target.value);
  };

  const handleSearch = () => {
    if (!departure || !returnDate) {
      alert("Departure date and Return date is required");
    } else if ( from == "Delhi" && (to == "Kolkata" || to == "Bangalore" ||  to == "Lucknow" || to == "Varanasi" || to == "Hyderabad" || to == "Jaipur")) {
      alert(`"Sorry, there are no flights available between ${from} and ${to}. Please try a different route." `);
      history("/Home");
    } else if ( from == "Mumbai" && (to == "Mumbai" || to == "Goa" ||  to == "Kolkata" || to == "Indore" || to == "Varanasi" || to == "Hyderabad" || to == "Jaipur")) {
      alert(`"Sorry, there are no flights available between ${from} and ${to}. Please try a different route." `);
      history("/Home");
    
    } else if ( from == "Kolkata" && (to == "Mumbai"  || to == "Kol" || to == "Goa" || to == "Indore" || to == "Varanasi" || to == "Hyderabad" || to == "Jaipur" ||  to == "Lucknow")) {
      alert(`"Sorry, there are no flights available between ${from} and ${to}. Please try a different route." `);
      history("/Home");
    } else if ( from == "Chennai" && (to == "Mumbai" || to == "Indore" || to == "Chennai" || to == "Varanasi" || to == "Hyderabad" || to == "Bangalore" || to == "Jaipur" ||  to == "Lucknow")) {
      alert(`"Sorry, there are no flights available between ${from} and ${to}. Please try a different route." `);
      history("/Home");
    }


    else if ( from == "Jaipur" && (to == "Mumbai" || to == "Varanasi" || to == "Hyderabad" || to == "Bangalore" || to == "Jaipur" ||  to == "Lucknow")) {
      alert(`"Sorry, there are no flights available between ${from} and ${to}. Please try a different route." `);
      history("/Home");
    }

    else if ( from == "Hyderabad" && (to == "Mumbai"|| to == "Indore" || to == "Varanasi" || to == "Hyderabad" || to == "Bangalore" || to == "Jaipur" || to == "Kolkata" ||  to == "Lucknow")) {
      alert(`"Sorry, there are no flights available between ${from} and ${to}. Please try a different route." `);
      history("/Home");
    }

    else if ( from == "Lucknow" && (to == "Mumbai" || to == "Lucknow" || to == "Goa" || to == "Indore" || to == "Varanasi" || to == "Hyderabad" || to == "Bangalore" || to == "Jaipur" || to == "Kolkata" ||  to == "Lucknow")) {
      alert(`"Sorry, there are no flights available between ${from} and ${to}. Please try a different route." `);
      history("/Home");
    }

    else if ( from == "Varansi" && (to == "Mumbai" || to == "Lucknow" || to == "Indore" || to == "Varanasi" || to == "Bangalore" || to == "Jaipur" || to == "Kolkata" ||  to == "Lucknow")) {
      alert(`"Sorry, there are no flights available between ${from} and ${to}. Please try a different route." `);
      history("/Home");
    }

    else if ( from == "Bangalore" && (to == "Mumbai" || to == "Goa" || to == "Bangalore"|| to == "Lucknow" || to == "Indore" || to == "Varanasi" || to == "Bangalore" || to == "Jaipur" || to == "Hyderabad" || to == "Kolkata" ||  to == "Lucknow")) {
      alert(`"Sorry, there are no flights available between ${from} and ${to}. Please try a different route." `);
      history("/Home");
    }
    else{
      history(`/Flight/from=${from}&to=${to}`)
    }
  };


  return (
    <>
      <div className="journey">
        <h3 className="jou">Let the journey begin</h3>
      </div>
      <div className="container_1">
        <div className="box">
          <div>From</div>

          <select name="select_box" id="selects" onChange={handleFrom}>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Chennai">Chennai</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Varansi">Varansi</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>

        <div className="box">
          <div>To</div>
          <select name="select_to" id="selects_to" onChange={handleTo}>
            <option value="Mumbai">Mumbai</option>
            <option value="Goa">Goa</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Indore">Indore</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Varanasi">Varanasi</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="jaipur">Jaipur</option>
          </select>
        </div>

        <div className="box">
  <div>Depart</div>
  <input type="date" name="departure" onChange={handleDeparture}/>
</div>

<div className="box">
  <div>Return</div>
  <input type="date" name="return" onChange={handleReturn}/>
</div>

        <div className="box search-btn">
       
            <button className="btn-1 search btn-warning"  onClick={handleSearch}>SEARCH FLIGHT</button>
            
        </div>
      </div>
    </>
  );
}

export default Home;
