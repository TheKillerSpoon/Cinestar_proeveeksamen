//? styles
import header from "./header.module.css";

//? packages
import { useLocation } from "react-router-dom";

//? images
import image from "../../assets/images/studio.jpg";

//? component
export default function Header() {
  const location = useLocation();

  const pages = [
    { name: "BLOG ARKIV", subName: "BLOG", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "KONTAKT", path: "/kontakt" },
  ];

  return (
    <>
      {location.pathname == "/" ? (
        <header className={header.container + " " + header.home}>
          <img src={image} alt="studio" />
          <h2>CINESTAR STUDIO</h2>
          <h1>
            FILM & TV <span className={header.active}>PRODUKTION</span>
          </h1>
          <p>
            Vi skaber levende fortællinger, der fanger dit publikum. Fra idé til
            færdigt produkt leverer vi professionelle film- og tv-løsninger, der
            gør din historie uforglemmelig.
          </p>
        </header>
      ) : (
        pages.map((page, index) => {
          if (
            page.path == location.pathname ||
            page.path == `/${location.pathname.split("/")[1]}`
          ) {
            return (
              <header key={index} className={header.container}>
                <img src={image} alt="studio" />
                <h2>{page.name}</h2>

                <p>
                  <span>
                    <a href="/">Forside</a>
                  </span>
                  <span> / </span>
                  {page.path !== location.pathname ? (
                    <>
                      <span>
                        <a href={page.path}>{page.name}</a>
                      </span>
                      <span> / </span>
                      <span className={header.active}>{page.subName}</span>
                    </>
                  ) : (
                    <>
                      <span className={header.active}>{page.name}</span>
                    </>
                  )}
                </p>
              </header>
            );
          }
        })
      )}
    </>
  );
}
