//? styling
import navigation from "./navigation.module.css";

//? images
import logo from "../../assets/images/logo.png";

//? packages
import { useLocation } from "react-router-dom";

//? component
export default function Navigation() {
  const location = useLocation();

  const pages = [
    { name: "Frontpage", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  return (
    <nav className={navigation.container}>
      <details>
        <summary>
          <i className={"fa-solid fa-bars " + navigation.open}></i>
          <i className={"fa-solid fa-xmark " + navigation.close}></i>
        </summary>
        <ul>
          {pages.map((page) => {
            return page.path !== location.pathname ? (
              <li key={page.name}>
                <a href={page.path}>{page.name}</a>
              </li>
            ) : (
              <li key={page.name} className={navigation.active}>
                {page.name}
              </li>
            );
          })}
        </ul>
      </details>
      {location.pathname === "/" ? (
        <img src={logo} alt="Cinestar Logo" />
      ) : (
        <a href="/">
          <img src={logo} alt="Cinestar Logo" />
        </a>
      )}
    </nav>
  );
}
