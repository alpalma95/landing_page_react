import Container from "../UI/Container";
import logo from "../../img/header-icon.jpg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <Container className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="Hiroshi" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
