import Item from "../item/item";

function CardGenerator(props) {
    return (
        <div className="centerFlex">
            {props.products.map((item) => (
        <Item key={item.id} {...item}
        
        />
    ))}
        </div>
    );
}

export default CardGenerator