import "../CSS/Ad.css";
//to display child component need interface
interface AdProperties {
    flavor: string,
    isLight: boolean,
    fontSize: number
}

//props go from
export function Ad(props:AdProperties) {
    let className = "Ad " + (props.isLight ? "Ad--light" : "Ad--dark");
    //Ad Ad--light
    //Ad Ad--light
    return (
        <div className={className}>
                 
        {/* <p>{props.isLight.toString()}</p>
        <p>{props.fontSize}</p> */}
            <p>Vote For:</p>
            {/* <p>{props.flavor}</p> */}
        <p style={{ fontSize: props.fontSize}}>{props.flavor}</p>
        </div>
    )
}
