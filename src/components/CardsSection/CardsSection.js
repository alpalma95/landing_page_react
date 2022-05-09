import Card from "./Card";
import Container from "../UI/Container";
import Img1 from "../../img/random1.jpg";
import Img2 from "../../img/random2.jpg";
import Img3 from "../../img/random3.jpg";
import Img4 from "../../img/random4.jpg";
import "./CardsSection.css";

export default function CardsSection(props) {
  let text1 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsam.`;
  let text2 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsam.`;
  let text3 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsam.`;
  let text4 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsam.`;

  return (
    <div>
      <Container className="cards-section">
        <Card
          className="cards-section__card"
          source={Img1}
          altText="random image 1"
          title="This is img 1!"
          text={text1}
        />
        <Card
          className="cards-section__card"
          source={Img2}
          altText="random image 2"
          title="This is img 2!"
          text={text2}
        />
        <Card
          className="cards-section__card"
          source={Img3}
          altText="random image 3"
          title="This is img 3!"
          text={text3}
        />
        <Card
          className="cards-section__card"
          source={Img4}
          altText="random image 4"
          title="This is img 4!"
          text={text4}
        />
      </Container>
    </div>
  );
}
