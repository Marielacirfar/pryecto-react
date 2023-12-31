import ItemCount from "./ItemCount";
const ItemDetail = ({id, name, img, category, descripcion, price, stock})=> {
    return(
        <article className="flex flex-col items-center justify-center border rounded p-4 m-20">
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt="name" className="w-40 h-40" />
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripcion: {descripcion}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>
            <footer>
                <ItemCount initial={0} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity )}/>
            </footer>
        </article>
    )
}
export default ItemDetail