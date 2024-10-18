import { useState } from "react";

export default function CardForm({ update, card, setCard, handleSubmit }) {
  // Använder card prop som initial tillstånd
  const [cardData, setCardData] = useState(card);
  const [updateOrAdd, setUpdateOrAdd] = useState(update);

  // Hanterar alla fältändringar i ett enda handtag
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Uppdatera både cardData lokalt och parent state (setCard)
    setCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setCard((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, index) => currentYear + index);

  const vendors = ["Visa", "MasterCard", "AmericanExpress"];

  return (
    <div className="cardform">
      <form className="cardform--form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="cardnumber"
          className="input-field"
          placeholder="Enter Card Number"
          value={cardData.cardnumber}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="cardholder"
          className="input-field"
          placeholder="Enter Name of Cardholder"
          value={cardData.cardholder}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="cvc"
          className="input-field"
          placeholder="Enter CVC"
          value={cardData.cvc}
          onChange={handleInputChange}
        />

        {/* Dropdown for expire dates */}
        <fieldset>
          <legend>Expire Month / Year</legend>

          {/* Expire Month */}
          <select
            name="expiremonth"
            id="expire-month"
            value={cardData.expiremonth}
            onChange={handleInputChange}
          >
            <option value="">Select Month</option>
            {months.map((month, i) => (
              <option key={i} value={i + 1}>
                {month}
              </option>
            ))}
          </select>

          <span className="cardform--divider"> / </span>

          {/* Expire Year */}
          <select
            name="expireyear"
            id="expire-year"
            value={cardData.expireyear}
            onChange={handleInputChange}
          >
            <option value="">Select Year</option>
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
          name="active"
          id="cardform--active-card"
          className="cardform--radio"
          value={true}
          checked={cardData.active === true}
          onChange={handleInputChange}
        />
        <label htmlFor="cardform--active-card">Active</label>

        <input
          type="radio"
          name="active"
          id="cardform--inactive-card"
          className="cardform--radio"
          value={false}
          checked={cardData.active === false}
          onChange={handleInputChange}
        />
        <label htmlFor="cardform--inactive-card">Inactive</label>

        {/* Select for vendor */}
        <select
          name="vendor"
          id="cardform--select-vendor"
          value={cardData.vendor}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select Vendor
          </option>
          {vendors.map((vendor, i) => (
            <option key={i} value={vendor}>
              {vendor}
            </option>
          ))}
        </select>

        <button type="submit" className="cardform--button">
          {updateOrAdd ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}
