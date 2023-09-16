import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, seterror] = useState(false);
  const [message, setMessage] = useState("")

  const sendForm = (e) => {
    e.preventDefault();
    if (name.length <= 5) return seterror(true);
    if (!email.includes("@")) return seterror(true);
    setMessage("Gracias " + name + " , te contactaremos cuado antes vía email")
    setTimeout(() => {
      setMessage("")
    }, 5000);
  };

  return (
    <div>
      <form onSubmit={sendForm}>
        <label htmlFor="id">Nombre completo:</label>
        <input
          id="name"
          placeholder="Nombre"
          onChange={(e) => {
            setName(e.target.value);
            seterror(false);
          }}
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value)
            seterror(false)
          }}
        ></input>
        <button type="submit">Enviar</button>
      </form>
      { error && <span>Por favor verifique su información nuevamente</span>}
      { message && <span>{message}</span>}
    </div>
  );
};

export default Form;
