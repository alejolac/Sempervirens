import "./styles/tituloSeccion.css";

function TituloSeccion({txt}) {
    return (
        <div className="titulo-seccion">
            <h2>{txt}</h2>
            <div className="linea"></div>
        </div>
    );
}

export default TituloSeccion;
