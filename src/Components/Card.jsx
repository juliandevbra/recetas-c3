import { useState } from "react";
import CardStyles from "../styles/Card.module.css";
import Counter from "./Counter";
import { Link } from "react-router-dom";

const Card = ({ recipe, cart, setCart }) => {
  const { title, image, pricePerServing, id } = recipe;
  const [counter, setCounter] = useState(0);
  return (
    <div className={CardStyles.cardContainer}>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
      <h4>${pricePerServing}</h4>
      <Counter counter={counter} setCounter={setCounter} />
      <button
        disabled={counter === 0}
        onClick={() => setCart([...cart, recipe])}
      >
        Agregar al 🛒
      </button>
    </div>
  );
};

export default Card;
