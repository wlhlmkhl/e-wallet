export default function Card({ card }) {
  const defaultCard = {
    vendor: "Unknown Vendor",
    cardnumber: "#### #### #### ####",
    cardholder: "Full Name",
    expireMonth: "MM",
    expireYear: "YY",
  };

  // Om inget kort skickas in, använd defaultCard
  const displayedCard = card || defaultCard;

  return (
    <div className="card">
      <div className="card-header">
        <p className="card-vendor">{displayedCard.vendor}</p>
      </div>

      <div className="card-number">
        <p>{displayedCard.cardnumber}</p>
      </div>

      <div className="card-details">
        <div className="card-holder">
          <span>Card Holder:</span>
          <p>{displayedCard.cardholder}</p>
        </div>

        <div className="card-expiry">
          <span>Expires</span>
          <p>
            {displayedCard.expireMonth}/{displayedCard.expireYear}
          </p>
        </div>
      </div>
    </div>
  );
}
