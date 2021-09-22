import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { MyButton, Container, input } from "../styledComponents";

export default function Login({ setLogin }) {
  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("usuário obrigatório"),
    password: yup
      .string()
      .required("Digite sua senha.")
      .max(4, "Sua senha deve conter 4 dígitos."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    // data.preventDefault();
    console.log(data);
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", data)
      .then((res) => {
        setError(false);
        console.log(res);
        setLogin(true);
      })
      .catch((_) => setError(true));
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)}>
        <h3>Login</h3>
        <div>
          <input
            placeholder="Usuário"
            onChange={() => setError(false)}
            {...register("username")}
          />
          {errors.userName?.message}
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password?.message}
        </div>
        <div>
          {error && <p>Usuário ou senha incorreto, verifique seus dados.</p>}
        </div>
        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </>
  );
}
