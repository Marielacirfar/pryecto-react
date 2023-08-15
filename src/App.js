
import NavBar from "./components/NavBar";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailConteiner from "./components/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element= {<ItemListContainer/>}/>
      <Route path="/category/:categoryId" element= {<ItemListContainer/>}/>
      <Route path="/item/:itemId" element= {<ItemDetailConteiner/>}/>
      <Route path="*" element= {<h1>404 not found</h1>}/>
    </Routes>
    
    
    
    </BrowserRouter>
  );
}

export default App;

