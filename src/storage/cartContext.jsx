const { createContext, useState } = require("react");

export const cartContext = createContext()

export function CartContextProvider(props){
    let [cart, setCart] = useState([])

    function addItem(item){
        const inCart = cart.some((itemInCart) => itemInCart === item.id)
        console.log(inCart)

        if (inCart){
            let newCart = [...cart]
            let index = cart.findIndex((itemInCart) => itemInCart.id === item.id)
            alert("El item ya esta en el carrito")
        } else{
            setCart([...cart, item])
        }
    }

    function getTotalitems(){
        let total = 0
        cart.forEach((item) => (total += 1))
        return total
    }

    function getTotalPriceInCart(){
        return 999;
    }

    function removeItem(id){
        setCart(cart.pop())
    }

    const valor = {
        cart,
        addItem,
        getTotalitems,
        getTotalPriceInCart,
        removeItem
    }

    return (
        <cartContext.Provider value={valor}>{props.children}</cartContext.Provider>
    )
}