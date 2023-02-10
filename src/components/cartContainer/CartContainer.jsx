import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createBuyOrder } from "../../services/firestore"
import { cartContext } from "../../storage/cartContext"

function CartContainer(){
    
    const { cart } = useContext(cartContext)
    const [orderId, setOrderId] = useState(null)
    const navigateTo = useNavigate()

    async function handleCheckout(userData){
        const items = cart.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            count: product.count
        }))

        const orden = {
            buyer: userData,
            items: items,
            data: new Date(),
            total: 1000
        }
        console.log("Order ---->",orden)

        let id = await createBuyOrder(orden)

        navigateTo(`/thank-you/${id}`)
    }

    if (orderId !== null)
    return (
        <div>
            <h1>
                Gracias por tu compra
            </h1>
            <p>El id de tu compra es: {orderId}</p>
        </div>
    )

    return(
        <>
            <h1>Tu Carrito</h1>
            
            <table>
                <thead>
                    <tr>
                        <th>Miniatura</th>
                        <th>Titulo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Remover</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id} className="">
                            <td>
                                <img height={50} src={item.imgurl} alt={item.title}/>
                            </td>
                            <td>{item.title}</td>
                            <td>$ {item.price}</td>
                            <td>{item.count}</td>
                            <td>
                                {/* <ButtonChild></ButtonChild> */}
                            </td>
                            <th>$ ---,--- </th>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                <h4>El total de tu compra es de $ ---,--- </h4>
            </div>
            
        </>
    )
}

export default CartContainer