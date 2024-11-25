import { useState } from "react";
import CardStyles from "../styles/Card.module.css";
import Counter from "./Counter";
import { Link } from "react-router-dom";
import { useRecipeStates } from "../Context/Context";

const Card = ({ recipe }) => {
  const { title, image, pricePerServing, id } = recipe;
  const [counter, setCounter] = useState(0);
  const { setCart } = useRecipeStates();
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
        onClick={() =>
          setCart((prevState) => [
            ...prevState,
            { ...recipe, counter: counter },
          ])
        }
      >
        Agregar al 🛒
      </button>
    </div>
  );
};

export default Card;

// setEstado((estado) => {
//   return { ...estado, valorNuevo };
// });
