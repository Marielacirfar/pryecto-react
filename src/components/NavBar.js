import CartWidget from "./CartWidget"
import { NavLink, Link } from "react-router-dom";
const NavBar =()=> {

    return(
        <nav className="bg-yellow-50">
        <Link to= "/">
            <h1 className="bg-amber-200 italic hover:not-italic font-extrabold tracking-widest hover:font-serif text-purple-600  p-3   shadow-xl shadow-rose-400 text-center">TIENDA MARIELA</h1>
        </Link>
        <div className="flex justify-evenly">
            <NavLink to={`/category/Computadoras`}>Computadoras</NavLink>
            <NavLink to={`/category/Lavarropas`}>Lavarropas</NavLink>
            <NavLink to={`/category/Celulares`}>Celulares</NavLink>
            
        </div>
            <CartWidget/>
        </nav>
    )
}

      
   
export default NavBar