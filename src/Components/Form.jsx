import { useState } from "react";
import Message from "./Message";

const Form = () => {
  //   const [nombre, setNombre] = useState("");
  //   const [direccion, setDireccion] = useState("");
  const [user, setUser] = useState({
    nombre: "",
    direccion: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regexNum = /[0-9]/;
    console.log(regexNum.test(user.direccion));
    if (
      user.nombre.length >= 3 &&
      user.direccion.includes(" ") &&
      regexNum.test(user.direccion)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  console.log(user);
  return (
    <div>
      <h2>A donde enviamos su pedido</h2>

      {show ? (
        <Message nombre={user.nombre} direccion={user.direccion} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input
            type="text"
            //   value={nombre}
            onChange={(event) =>
              setUser({ ...user, nombre: event.target.value })
            }
          />
          <label>Dirección</label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, direccion: event.target.value })
            }
          />
          <button>Enviar</button>
          {error ? (
            <h4 style={{ color: "red" }}>
              Debe colocar la información correctamente
            </h4>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default Form;

// form.addEventListener('submit', (evento) => {
//     evento.preventDefault()
// })

//Operador tenario
// if (condicion) {
//   //Entra acá si la condición da true
// } else {
//   //Entra acá si la condición da false
// }

// {
//   condicion ? true : false;
// }
