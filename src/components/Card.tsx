interface Card{
  title : string;
  text : string;
  url : string;
  children : string | JSX.Element | JSX.Element[]
}

function Card(props : Card) {
  return (
    <div className="card">
      {props.children}

      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.url} className="btn btn-primary">Go somewhere</a>
      </div>

    </div>
  );
}

export default Card