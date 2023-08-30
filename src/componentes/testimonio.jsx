import '../componentes/hojasDeEstilo/Testimonio.css'



export function Testimonio(props) {
  return (
    <div className="cont-testimonio">
      <img
        className="img-testimonio"
        src={require(`../imagenes/img${props.img}.png`)}
        alt="{props.img}"
      />
      <div className="cont-text-testimonio">
        <p className="nombreTestimonio">
          <strong> {props.nombre}</strong> en {props.pais}</p>
        <p className="cargoTestimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="textoTestimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

