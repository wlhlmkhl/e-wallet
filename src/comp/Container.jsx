import { Link } from "react-router-dom";
import CardList from "./CardList";
export default function Container() {
  return (
    <main className="main">
      <CardList />
      <div className="main--buttoncontainer">
        <Link to="/addcard">
          <button className="main--button button">Add New Card</button>
        </Link>
      </div>
    </main>
  );
}
