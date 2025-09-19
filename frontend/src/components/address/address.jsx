//? styles
import address from "./address.module.css";

export default function Address() {
  return (
    <address className={address.container}>
      <ul>
        <li>
          <i className="fa-solid fa-phone"></i>
          <a href="tel:+4512345678">+45 12 34 56 78</a>
        </li>
        <li>
          <i className="fa-solid fa-location-dot"></i>
          <p>Fotovej 66, 8456 Cineby</p>
        </li>
        <li>
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:cinestar@production.dk">cinestar@production.dk</a>
        </li>
      </ul>
    </address>
  );
}
