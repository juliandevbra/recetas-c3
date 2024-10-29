//Una representación del hook de useState
const useState = (valorInicial) => {
  let estado = valorInicial;

  const actualizadorEstado = (valorNuevo) => {
    estado = valorNuevo;
  };

  return [estado, actualizadorEstado];
};
