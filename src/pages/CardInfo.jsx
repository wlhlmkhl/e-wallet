import Header from "../comp/Header";
import Card from "../comp/Card";
import CardForm from "../comp/CardForm";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCard } from "../redux/walletSlice";

export default function CardInfo() {
  const location = useLocation();
  const [card, setCard] = useState(location.state.card); // Få kortdata från location

  const dispatch = useDispatch();

  // Uppdatera kortet i redux när formuläret skickas
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Card Info:", card);
    dispatch(updateCard(card)); // Uppdatera kortet med den nya data
  };

  return (
    <>
      <Header />

      <Card card={card} />

      <CardForm
        update={true}
        card={card}
        setCard={setCard}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
