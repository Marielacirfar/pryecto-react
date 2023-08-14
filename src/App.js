
import NavBar from "./components/NavBar";
import './index.css';
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from "./components/ItemCount"
import ItemDetailConteiner from "./components/ItemDetailContainer";

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer mensaje="Bienvenidos al sitio"/>
    <ItemDetailConteiner/>
    
    </>
  );
}

export default App;

