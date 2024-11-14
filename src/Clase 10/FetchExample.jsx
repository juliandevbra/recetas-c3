import { useEffect, useState } from "react";

const FetchExample = () => {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  const url = "https://dog.ceo/api/breeds/image/random";

  useEffect(() => {
    fetch(url)
      .then((respuesta) => {
        console.log(respuesta);
        if (!respuesta.ok) {
          throw new Error("Error al obtener la información");
        }
        return respuesta.json();
      })
      .then((data) => {
        console.log(data);
        if (data) {
          setDog(data);
          setLoading(false);
        } else {
          alert("Error al obtener información");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);

  return (
    <div>
      {loading ? "Cargando..." : <img src={dog.message} alt="" width="400" />}
    </div>
  );
};

export default FetchExample;

//Montaje
//Parte funcional
//Parte de render -> no hay imagen
//useEffect -> actualización de estado

//Actualización
//Parte Funcional
//Parte de render -> renderiza la imagen
