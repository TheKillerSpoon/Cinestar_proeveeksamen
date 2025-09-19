//? styles
import main from "./main.module.css";

//? Components
export default function Main({ sub, header, text }) {
  return (
    <main className={main.container}>
      <h2>{sub}</h2>
      <h1>{header}</h1>
      <p>{text}</p>
      <br />
    </main>
  );
}
