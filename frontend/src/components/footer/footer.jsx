//? styling
import footer from "./footer.module.css";

//? images
import logo from "../../assets/images/logo.png";
import background from "../../assets/images/liquifer.png";

//? component
export default function Footer() {
  return (
    <footer className={footer.container}>
      <img
        src={background}
        alt="liquifer background"
        className={footer.background}
      />
      <img src={logo} alt="logo" />
      <p>COPYRIGHT 2025 &copy; CINESTAR | POWERED BY ROMETHEM E STUDIO</p>
    </footer>
  );
}
