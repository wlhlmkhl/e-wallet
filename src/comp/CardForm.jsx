import { useState } from "react";
import Card from "../comp/Card";
import { useDispatch } from "react-redux";
import { addCard } from "../redux/walletSlice";

export default function CardForm() {
  const [cardnumber, setCardnumber] = useState("");
  const [cardholder, setCardholder] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiremonth, setExpiremonth] = useState("");
  const [expireyear, setExpireyear] = useState("");
  const [active, setActive] = useState(true);
  const [vendor, setVendor] = useState("Visa");

  // Månader till select
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // ÅR till Select
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, index) => currentYear + index);

  // Utgivare till select
  const vendors = ["Visa", "MasterCard", "AmericanExpress"];

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // Förhindra sidladdning vid formulärskick
    console.log("Card Info:", {
      cardnumber,
      cardholder,
      cvc,
      expiremonth,
      expireyear,
      active,
      vendor,
    });
    dispatch(addCard());
  };

  return (
    <div className="cardform">
      <div className="cardform--card-container">
        <Card />
      </div>
      <form className="cardform--form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-field"
          placeholder="Enter Card Number"
          value={cardnumber}
          onChange={(e) => setCardnumber(e.target.value)}
        />

        <input
          type="text"
          className="input-field"
          placeholder="Enter Name of Cardholder"
          value={cardholder}
          onChange={(e) => setCardholder(e.target.value)}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Enter CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
        />

        {/* Dropdown for expire dates */}
        <fieldset>
          <legend>Expire Month / Year</legend>
          <select
            id="expire-month"
            onChange={(e) => setExpiremonth(e.target.value)}
          >
            {months.map((month, i) => (
              <option key={i} value={i + 1}>
                {month}
              </option>
            ))}
          </select>
          <span className="cardform--divider"> / </span>
          <select
            id="expire-year"
            onChange={(e) => setExpireyear(e.target.value)}
          >
            {years.map((year, i) => (
              <option key={i} value={year}>
                {year}
              </option>
            ))}
          </select>
        </fieldset>

        {/* Radio Buttons input for active/inactive */}
        <input
          type="radio"
          name="activeOrNot"
          id="cardform--active-card"
          className="cardform--radio"
          value={true}
          checked={active === true}
          onChange={(e) => setActive(JSON.parse(e.target.value))}
        />
        <label htmlFor="cardform--active-card">Active</label>

        <input
          type="radio"
          name="activeOrNot"
          id="cardform--inactive-card"
          className="cardform--radio"
          value={false}
          checked={active === false}
          onChange={(e) => setActive(JSON.parse(e.target.value))}
        />
        <label htmlFor="cardform--inactive-card">Inactive</label>

        {/* Select for vendor */}
        <select
          id="cardform--select-vendor"
          onChange={(e) => setVendor(e.target.value)}
        >
          <option value="" disabled>
            {" "}
            select
          </option>
          {vendors.map((vendor, i) => (
            <option key={i} value={vendor}>
              {vendor}
            </option>
          ))}
        </select>

        <button type="submit" className="cardform--button">
          Add Card
        </button>
      </form>
    </div>
  );
}
