import "./componenteTipos_css.css";

export default function ComponenteTipos(props) {
  if (!props.tipo) {
    return <p>carregando</p>;
  } else {
    const tipoDoCard = mudarTipo(props.tipo.name);

    return (
      <div>
        <p className={`pokemon-tipo ${tipoDoCard}`}>{props.tipo.name}</p>
      </div>
    );
  }
}

function mudarTipo(tipoDoPokemon) {
  switch (tipoDoPokemon) {
    case "normal":
      return "normal";
    case "fire":
      return "fire";
    case "water":
      return "water";
    case "electric":
      return "electric";
    case "grass":
      return "grass";
    case "ice":
      return "ice";
    case "fighting":
      return "fighting";
    case "poison":
      return "poison";
    case "ground":
      return "ground";
    case "flying":
      return "flying";
    case "psychic":
      return "psychic";
    case "bug":
      return "bug";
    case "rock":
      return "rock";
    case "ghost":
      return "ghost";
    case "dragon":
      return "dragon";
    default:
      return "unknown";
  }
}
