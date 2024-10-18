import Header from "../comp/Header";
import Card from "../comp/Card";
import CardForm from "../comp/CardForm";
import { useState } from "react";
export default function AddCardPage() {
  const [card, setCard] = useState({});

  return (
    <>
      <Header />
      <Card />
      <CardForm update={false} />
    </>
  );
}
