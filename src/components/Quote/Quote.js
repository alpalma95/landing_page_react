import Container from "../UI/Container";
import "./Quote.css";

export default function Quote(props) {
  return (
    <div className="quote">
      <Container className="quote__title">
        <p>
          <em>{props.text}</em>
        </p>
        <p className="quote__subtitle">{props.text2}</p>
      </Container>
    </div>
  );
}
