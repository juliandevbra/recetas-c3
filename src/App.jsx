import "./App.css";
import Card from "./Components/Card";
// import Navbar, { Logo } from "./Components/Navbar";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      {/* <Logo /> */}
      <Navbar />
      <h1>Bienvenidos al proyecto recetas</h1>
      <Card title="Receta 1" text="Como hacer que la carne quede jugosa" />
      <Card
        title="Acá va la receta 2"
        text="Hace licuado de lo que quieras con esta receta"
      />
      <Card title="Esta es mi tercer receta" text="Como hacer fideos" />
      <hr />
      <h2>Quienes somos</h2>
      <Card title="Thiare Cerpa" text="Diseño UX/UI">
        <h5>Behance</h5>
        <h4>Linkedin</h4>
        <input type="text" />
      </Card>
      <Card title="Yerson Ramos Sullon" text="Marketing y Desarrollo Web">
        <a>Twitter</a>
      </Card>
    </>
  );
}

export default App;
