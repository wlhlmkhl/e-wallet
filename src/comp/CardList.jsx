import { useSelector } from "react-redux";
import Card from "./Card";
export default function CardList() {
  const { cards } = useSelector((state) => state.wallet);
  const activeCard = cards.find((card) => card.active === true);
  const inactiveCards = cards.filter((card) => card.active === false);
  return (
    <div className="cardlist">
      <div className="activecard">
        <p>Active Card</p>
        <Card card={activeCard} />
        <button>flip</button>
      </div>
      <div className="inactivecards">
        <p>Inactive Cards</p>
        {inactiveCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
