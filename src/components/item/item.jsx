import { Link } from "react-router-dom"
import { ButtonChild } from "../button/Button"
import "./item.css"

function Item({id, title, image, price}){
    const urlDetalle = `/item/${id}`
    return (
            <div className="cardBackground">
                <div className="cardBackground2">
                    <div className="columnFlex">
                        <h5>{title}</h5>
                        <img src={image} alt="IMAGEN" className="img-primary" />
                        <h5>$ {price}</h5>
                        <div className="bottomCard">
                            <Link to={urlDetalle}><ButtonChild>Ver Mas</ButtonChild></Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Item