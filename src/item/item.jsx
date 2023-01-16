import { Link } from "react-router-dom"

function Item({id, title, image, price}){
    const urlDetalle = `/item/${id}`
    return (
            <div className="cardBackground">
                <div className="cardBackground2">
                    <div className="columnFlex">
                        <h5>{title}</h5>
                        <img src={image} alt="IMAGEN" />
                        <h5>$ {price}</h5>
                        <div className="bottomCard">
                            <Link to={urlDetalle}><button>Ver Mas</button></Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Item