import CartWidget from "./CartWidget"
function NavBar(){
    return(
  
        
        <nav className="bg-yellow-50">
        <h1 className="text-blue-600 flex justify-center">TIENDA MARIELA</h1>
        <div className="flex justify-evenly">
            <a className="px-2.5" href="#">Computadoras</a>
            <a className="px-2.5" href="#">Lavarropas</a>
            <a className="px-2.5" href="#">Celulares</a>
        </div>
            <CartWidget/>
        </nav>
        
      
    )
};

export default NavBar