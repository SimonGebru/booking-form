import { useState } from "react";
import "./BookingForm.css"; // CSS för styling

function BookingForm() {
  
  const [travelClass, setTravelClass] = useState("2a klass"); // Standardval
  const [ticketAmount, setTicketAmount] = useState("1");
  const [title, setTitle] = useState("Ms.");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Hantera knapptryck
  const handleSubmit = () => {
    const bookingData = {
      travelClass,
      ticketAmount,
      title,
      firstName,
      lastName,
      termsAccepted,
    };

    console.log("Bokningsdata:", bookingData);
  };

  return (
    <div className="booking-container">
  {/* Header-sektionen för rubriken */}
  <div className="header">
    <h2>ÅKA TÅG</h2>
  </div>

  {/* Rutt-information */}
  <div className="route">
    <strong>STOCKHOLM</strong> → <strong>GÖTEBORG</strong>
  </div>

      {/* Klassval */}
      <div className="class-selection">
        <label>
          <input
            type="radio"
            value="2a klass"
            checked={travelClass === "2a klass"}
            onChange={(e) => setTravelClass(e.target.value)}
          />
          2:a klass
        </label>
        <label>
          <input
            type="radio"
            value="1a klass"
            checked={travelClass === "1a klass"}
            onChange={(e) => setTravelClass(e.target.value)}
          />
          1:a klass
        </label>
      </div>

      {/* Antal biljetter och Titel */}
<div className="form-group row">
  <div className="input-container">
    <label>Antal biljetter</label>
    <select value={ticketAmount} onChange={(e) => setTicketAmount(e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  </div>

  <div className="input-container">
    <label>Titel</label>
    <select value={title} onChange={(e) => setTitle(e.target.value)}>
      <option value="Mr.">Mr.</option>
      <option value="Ms.">Ms.</option>
      <option value="Dr.">Dr.</option>
    </select>
  </div>
</div>

      {/* Namninput */}
      <div className="form-group">
        <label>Förnamn</label>
        <input
          type="text"
          placeholder="Förnamn"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Efternamn</label>
        <input
          type="text"
          placeholder="Efternamn"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      {/* Checkbox */}
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          Godkänner villkoren
        </label>
      </div>

      {/* Skicka-knapp */}
      <button className="submit-button" onClick={handleSubmit}>
        Boka biljetter
      </button>
    </div>
  );
}

export default BookingForm;