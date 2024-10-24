import { pizzas } from "../utils/pizzas";
import Card from "./Card";

const Home = () => {
  //   const listaMap = pizzas.map((pizza) => {
  //     return (
  //       <>
  //         <h3>{pizza.tipo}</h3>
  //         <h4>{pizza.precio}</h4>
  //       </>
  //     );
  //   });
  //   console.log(listaMap);

  return (
    <div className="list-container">
      {pizzas.map((pizza) => (
        <Card key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Home;
