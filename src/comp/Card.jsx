export default function Card({ card }) {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-vendor">{card.vendor}</p>
      </div>

      <div className="card-number">
        <p>{card.cardnumber}</p>
      </div>

      <div className="card-details">
        <div className="card-holder">
          <span>Card Holder:</span>
          <p>{card.cardholder}</p>
        </div>

        <div className="card-expiry">
          <span>Expires</span>
          <p>
            {card.expireMonth}/{card.expireYear}
          </p>
        </div>
      </div>
    </div>
  );
}
