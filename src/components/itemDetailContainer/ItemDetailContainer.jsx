import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { obtenerUnItem } from "../../services/mockAsyncService";

function ItemDetailContainer() {
    const [product, setProduct] = useState([])

    let { itemid } = useParams()

    useEffect(() => {
            obtenerUnItem(itemid)
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
            </div>
    )
}

export default ItemDetailContainer