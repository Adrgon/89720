function Card({title, children}){
    console.log(title, children)
    return (
        <div className="card-container">
            <h3>{title}</h3>
            <div className="card-content">
                {children}
            </div>
        </div>
    )
}

export default Card;
