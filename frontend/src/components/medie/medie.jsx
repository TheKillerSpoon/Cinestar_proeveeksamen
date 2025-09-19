//? styles
import medie from "./medie.module.css";

//? Component
export default function Medie() {
  return (
    <section className={medie.container}>
      <h1>
        HAR DU EN IDÉ I TANKERNE? <br /> LAD OS STARTE DIT PROJEKT SAMMEN
      </h1>
      <address>
        <p>Cinestar Studio</p>
        <a href="tel:+4512345678">+45 12 34 56 78</a>
        <a href="mailto:cinestar@production.dk">cinestar@production.dk</a>
      </address>
      <ul className={medie.socials}>
        <li>
          <a href="#">FACEBOOK</a>
        </li>
        <li>
          <a href="#">TWITTER</a>
        </li>
        <li>
          <a href="#">LINKEDIN</a>
        </li>
        <li>
          <a href="#">INSTAGRAM</a>
        </li>
        <li>
          <a href="#">YOUTUBE</a>
        </li>
      </ul>
    </section>
  );
}
