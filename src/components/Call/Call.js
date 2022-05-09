import Container from "../UI/Container";
import Button from "../UI/Button";
import "./Call.css";

export default function Call(props) {
  return (
    <div className="call">
      <Container>
        <div className="call__form">
          <h2>It's time to have a great day!</h2>
          <p>Are you brave enough?</p>
          <Button className="call__btn" text="Yes!" />
        </div>
      </Container>
    </div>
  );
}
