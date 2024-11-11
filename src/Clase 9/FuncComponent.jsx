import { useState, useEffect } from "react";

const FuncComponent = () => {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");
  const [loading, setLoading] = useState(true);
  console.log("Se ejecuta el cuerpo de FuncComponent");
  // componentDidMount() {}
  useEffect(() => {
    console.log("Esto se ejecuta una sola vez (useEffect)");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // componentDidUpdate() {}
  useEffect(() => {
    setLoading(true);
    console.log(
      "Se ejecuta este useEffect cada vez que se actualiza contador o nombre"
    );
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [contador, nombre]);

  // componentWillUnmount() {}
  useEffect(() => {
    return () => {
      console.log("Se desmontó mi componente");
    };
  }, []);

  return (
    <div>
      {console.log("Se ejecuta el render de FuncComponent")}
      {loading ? (
        "Cargando..."
      ) : (
        <>
          <h1>{contador}</h1>
          <button onClick={() => setContador(contador + 1)}>+</button>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </>
      )}
    </div>
  );
};

export default FuncComponent;
