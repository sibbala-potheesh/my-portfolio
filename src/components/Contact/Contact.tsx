import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:sibbalapotheesh@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:sibbalapotheesh@gmail.com">
            sibbalapotheesh@gmail.com
          </a>
        </div>
        <div>
          <a href="tel:+918886349982">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+918886349982">(+91) 8886349982</a>
        </div>
      </div>
    </Container>
  );
}
