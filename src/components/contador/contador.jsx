import { useState } from "react";
import Button, { ButtonChild } from "../button/Button";

function ItemCount({ onAddToCart, stock }) {
    const [count, setCount] = useState(0);

    function handleAdd() {
        if (count < stock) setCount(count + 1);
    }

    function handleSubstract() {
        // validar -1 -2
        setCount(count - 1);
    }

    return (
        <div>
            <small>Agregá la cantidad deseada al carrito</small>
            <div>
                <button onClick={handleSubstract}>
                    -
                </button>
                <span>{count}</span>
                <button onClick={handleAdd}>
                    +
                </button>
            </div>

            <div>
                <button onClick={() => onAddToCart(count)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default ItemCount;
