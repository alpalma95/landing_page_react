import "./Card.css";

export default function Card(props) {
  const styles = "card " + props.className;
  return (
    <div className={styles}>
      <div className="card__img">
        <img src={props.source} alt={props.altText} />
      </div>
      <h3 className="card__title">{props.title}</h3>
      <p className="card__text">{props.text}</p>
    </div>
  );
}
