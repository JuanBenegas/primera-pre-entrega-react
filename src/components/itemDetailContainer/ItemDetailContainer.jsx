import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleItem } from "../../services/firestore";
import { obtenerUnItem } from "../../services/mockAsyncService";
import { cartContext } from "../../storage/cartContext";
import ItemCount from "../contador/contador";

function ItemDetailContainer() {
    const [product, setProduct] = useState({})
    const [isInCart, setIsInCart] = useState(false)

    let { itemid } = useParams()

    const { cart, addItem } = useContext(cartContext)

    const itemInCart = cart.find((item) => item.id === product.id)

    let stockUpdated
    console.log("Item Detal Container:", itemInCart)
    if (itemInCart) 
        stockUpdated = product.rating.count - itemInCart.count
    else {
        stockUpdated = product.index
    }

    function handleAddToCart(count){
        setIsInCart(true)
        alert(`Agregaste ${count} unidades de ${product.title} al carrito`)
        product.count = count
        addItem(product)
    }

    useEffect(() => {
        getSingleItem(itemid)
            .then((respuesta) => {
                setProduct(respuesta)
            })
            .catch((error) => {
                alert(`Error! ${error}` )
            })
        },[])

    return (
        <div className="cardBackground">
            <div className="cardBackground2">
                <div className="columnFlex">
                    <h5>{product.title}</h5>
                    <img src={product.image} alt="IMAGEN" />
                    <h5>$ {product.price}</h5>
                </div>
            </div>

            <div>
                <ItemCount stock={stockUpdated} onAddToCart={handleAddToCart}></ItemCount>
            </div>
        </div>

        
    )
}

export default ItemDetailContainer