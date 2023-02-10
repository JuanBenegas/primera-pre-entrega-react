


export default function Button(props){
    return(
        <button>
            {props.text}
        </button>
    )
}

export function ButtonChild(props){
    function handleClick(){
        props.onToch()
    }

    return(
        <button
            onClick={handleClick}
        >
            {props.children}
        </button>
    )
}