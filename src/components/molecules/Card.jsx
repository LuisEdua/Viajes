import '../../assets/styles/Card.css';
function Card({img, nombre, precio, info}) {
    return(
       <div className="card">
            <div className="imagen-destino">
                <img className="card-img" src={img} alt={nombre}/>
            </div>
            <div className="info-destino">
                <h2>{nombre}</h2>
                <p>{info}</p>
                <p>Costo:{precio}</p>
            </div>
       </div>
    )
}
export default Card;