import Item from "../../item/item";

function CardGenerator(props) {
    return (
        <div className="centerFlex">
            {props.products.map((item) => (
        <Item
        key={item.id}
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        />
    ))}
        </div>
    );
}

export default CardGenerator