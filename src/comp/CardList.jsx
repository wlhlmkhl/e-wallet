import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
export default function CardList() {
  const { cards } = useSelector((state) => state.wallet);
  const activeCard = cards.find((card) => card.active === true);
  const inactiveCards = cards.filter((card) => card.active === false);
  return (
    <div className="cardlist">
      <div className="activecard">
        <p>Active Card</p>
        <Link to={"/card/" + activeCard.id} state={{ card: activeCard }}>
          <Card card={activeCard} />
        </Link>
      </div>
      <div className="inactivecards">
        <p>Inactive Cards</p>
        {inactiveCards.map((card) => (
          <Link to={"/card/" + card.id} key={card.id} state={{ card: card }}>
            <Card key={card.id} card={card} />
          </Link>
        ))}
      </div>
    </div>
  );
}
