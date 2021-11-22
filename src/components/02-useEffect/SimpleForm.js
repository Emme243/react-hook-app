import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Message from "./Message";
import "./effects.css";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { email, name } = formState;

  useEffect(() => {
    // console.log("hey");
  }, []);

  useEffect(() => {
    // console.log("Cambió el formulario");
  }, [formState]);

  useEffect(() => {
    // console.log("email cambió");
  }, [email]);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr></hr>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group mt-3">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === "123" && <Message />}
    </>
  );
};

export default SimpleForm;
