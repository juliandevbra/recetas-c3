import { useState } from "react";
import CardStyles from "../styles/Card.module.css";
import Counter from "./Counter";

const Card = ({ recipe, cart, setCart }) => {
  const { title, image, pricePerServing } = recipe;
  const [counter, setCounter] = useState(0);
  return (
    <div className={CardStyles.cardContainer}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
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
