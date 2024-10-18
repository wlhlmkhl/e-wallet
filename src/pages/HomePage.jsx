import Header from "../comp/Header";
import CardList from "../comp/CardList";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="main">
        <CardList />
        <div className="main--buttoncontainer">
          <Link to="/addcard">
            <button className="main--button button">Add New Card</button>
          </Link>
        </div>
      </main>
    </>
  );
}
