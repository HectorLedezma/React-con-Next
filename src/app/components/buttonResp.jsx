


function ButtonResponsive(props){ 
    return(
        <div className="btn-res-box selectable border rounded flex p-1 items-center" role="button">
            <h3 className="btn-res-text text-lg">{props.text}</h3>
            <div className="btn-res-icon m-1">
                {props.icon}
            </div>
        </div>
    );
}

export default ButtonResponsive