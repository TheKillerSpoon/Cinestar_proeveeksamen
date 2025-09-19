//? styles
import messages from "./message.module.css";

//? pakages
import { useForm } from "react-hook-form";

//? hooks
import { messageHook } from "../../hooks/messagehook.jsx";
import { useEffect } from "react";

//? component
export default function Message() {
  const { register, handleSubmit, setValue } = useForm();
  const { sendMessage, message, setMessage } = messageHook();

  useEffect(() => {
    if (message.length !== 0) {
      setValue("name", "");
      setValue("subject", "");
      setValue("description", "");
    }
  }, [message]);

  return (
    <>
      {message.length !== 0 && (
        <div className={messages.modal}>
          <h1>Tak for din besked {message.name}!</h1>
          <p>
            Vi bestræber os på at kontakte dig via din email indenfor 24 timer.
          </p>
          <button onClick={() => setMessage([])}>Luk</button>
        </div>
      )}

      <form
        className={messages.container}
        onSubmit={handleSubmit((data) => sendMessage(data))}
      >
        <input
          type="text"
          placeholder="Navn"
          id="name"
          required
          {...register("name", { required: true })}
        />
        <input
          type="text"
          placeholder="Emne"
          id="subject"
          required
          {...register("subject", { required: true })}
        />
        <textarea
          id="description"
          placeholder="Besked"
          required
          {...register("description", { required: true })}
        ></textarea>
        <button value="submit">Send Besked</button>
      </form>
    </>
  );
}
