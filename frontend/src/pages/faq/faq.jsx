//? styles
import faqs from "./faq.module.css";

//? components
import Medie from "../../components/medie/medie";
import Main from "../../components/main/main";

//? hooks
import { faqHook } from "../../hooks/faqHook";

//? Page
export default function FAQ() {
  const { faq } = faqHook();
  return (
    <>
      <section className={faqs.container}>
        <Main
          sub="OFTE STILLEDE SPØRGSMÅL"
          header="DE MEST ALMINDELIGE SPØRGSMÅL, VI FÅR"
          text="Her finder du svar på de spørgsmål, vi oftest bliver stillet om vores processer, tjenester og produktioner. Har du brug for yderligere information? Tøv ikke med at kontakte os!"
        />

        {faq.length !== 0 ? (
          faq.map((item) => (
            <details key={item._id}>
              <summary>
                {item.question}
                <i className={"fa-solid fa-chevron-up " + faqs.close}></i>
                <i className={"fa-solid fa-chevron-down " + faqs.open}></i>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))
        ) : (
          <h1>loading...</h1>
        )}
      </section>

      <Medie />
    </>
  );
}
