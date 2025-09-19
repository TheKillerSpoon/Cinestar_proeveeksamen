//? styles
import kontakt from "./kontakt.module.css";

//? components
import Main from "../../components/main/main";
import Message from "../../components/message/message.jsx";
import Address from "../../components/address/address.jsx";

export default function Kontakt() {
  return (
    <section className={kontakt.container}>
      <Main
        sub="KONTAKT"
        header="TØV IKKE MED AT TAGE KONTAKT"
        text="Har du spørgsmål eller brug for mere information om vores tjenester og processer? Vores team står klar til at hjælpe dig. Kontakt os, og lad os tage en uforpligtende samtale om dine behov og idéer."
      />
      <Address />
      <Message />
    </section>
  );
}
