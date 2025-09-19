//? styles
import forside from "./forside.module.css";

//? components
import Medie from "../../components/medie/medie";
import Main from "../../components/main/main";
import Message from "../../components/message/message.jsx";
import Address from "../../components/address/address.jsx";

//? images
//* award
import award1Image from "../../assets/images/awards/award1.png";
import award2Image from "../../assets/images/awards/award2.png";
import award3Image from "../../assets/images/awards/award3.png";
//* kontakt
import kontaktImage from "../../assets/images/studie2.jpg";

//? hooks
import { blogHook } from "../../hooks/blogHook";
import { useEffect } from "react";

//? page
export default function Forside() {
  const { blog, fetchBlog, setBlog } = blogHook();

  useEffect(() => {
    if (blog.length == 0) {
      fetchBlog();
    } else if (blog.length > 1) {
      setBlog(
        blog
          .map((b) => b)
          .sort((a, b) => new Date(b.created) - new Date(a.created))
          .slice(0, 1)
      );
    }
  }, [blog]);

  return (
    <>
      <section className={forside.award}>
        <img src={award1Image} alt="award 1" />
        <img src={award2Image} alt="award 2" />
        <img src={award3Image} alt="award 3" />
      </section>
      <section className={forside.studio}>
        <Main
          sub="CINESTAR STUDIO"
          header="HAR DU EN IDÉ TIL DIT NÆSTE PROJEKT ?"
          text="Lad os omsætte dine visioner til levende billeder, der fænger dit publikum. Hos os får du en professionel, kreativ proces fra idéudvikling til færdig produktion."
        />
      </section>
      <section className={forside.portfolio}>
        <Main sub="PORTFOLIO" header="UDVALGTE PROJEKTER" />
      </section>
      <section className={forside.service}>
        <Main sub="SERVICE" header="HVILKEN SERVICE TILBYDER VI ?" />
      </section>
      <section className={forside.historien}>
        <Main
          sub="HISTORIEN"
          header="HISTORIEN BAG CINESTAR"
          text="Cinestar blev grundlagt med en passion for at fortælle historier, der fanger og bevæger sit publikum. Virksomheden begyndte som en lille uafhængig film- og tv-produktionsenhed med et klart fokus på originalt og visuelt engagerende indhold."
        />
      </section>
      <section className={forside.udtalelser}>
        <Main
          sub="UDTALELSER"
          header="HVAD SIGER VORES SAMARBEJDSPARTNERE OM OS?"
          text="“Cinestar er en fantastisk samarbejdspartner, der formår at kombinere kreativitet med professionalisme. Deres evne til at skabe unikke og engagerende produktioner er imponerende, og resultatet taler altid for sig selv.”"
        />
      </section>
      <section className={forside.kontakt}>
        <Main
          sub="KONTAKT"
          header="BOOK EN SAMTALE MED OS"
          text="Har du spørgsmål eller ønsker du at vide mere om, hvordan vi kan hjælpe med dit næste projekt? Udfyld formularen, og vi kontakter dig hurtigst muligt. Vi ser frem til at samarbejde med dig!"
        />
        <Address />
        <Message />
        <img src={kontaktImage} alt="studie 2" />
      </section>
      <section className={forside.blogs}>
        <Main
          sub="BLOG"
          header="VORES SENESTE BLOG"
          text="Hold dig opdateret med de seneste nyheder, indblik og historier fra Cinestar. Vi deler inspiration, tips og bag kulisserne fra vores spændende projekter og produktioner."
        />
        {blog.length == 1 && (
          <article>
            <img src={blog[0].image} alt={blog[0].title} />
            <h1>{blog[0].title}</h1>
            <p>{blog[0].teaser}</p>
            <time dateTime={blog[0].created}>
              Oprettet d.{" "}
              {new Date(blog[0].created).toLocaleDateString("da-DK", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </article>
        )}
      </section>
      <Medie />
    </>
  );
}
