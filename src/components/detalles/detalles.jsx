import { useParams } from "react-router-dom";

function Detalles(){
    const { itemid } = useParams()

    return(
        <div>
            <h1>Detalles de tu compra</h1>
            <p>Gracias por comprar, tu numero de ID es: ${itemid}</p>
        </div>
    )
}

export default Detalles

