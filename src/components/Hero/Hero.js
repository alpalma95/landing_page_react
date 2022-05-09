import Container from "../UI/Container";
import Button from "../UI/Button";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <Container className="hero__content">
        <div className="hero__text">
          <h1>This is a static Landing page...</h1>
          <h2>...but made with React!</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Button text="Sign up" />
        </div>
        <div className="hero__img"></div>
      </Container>
    </div>
  );
}
