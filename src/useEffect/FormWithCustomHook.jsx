import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { state, onInputChange, username, email, password, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  //const {username, email, password} = state;

  // useEffect(() => {
  //   console.log('use effect!')
  // }, [email]);

  return (
    <>
      <h1>Formulario Simple con custom hook</h1>
      <hr />
      <input
        type="text"
        name="username"
        className="form-control"
        placeholder="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        name="email"
        className="form-control mt-2"
        placeholder="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        name="password"
        className="form-control mt-2"
        placeholder="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Reset
      </button>
    </>
  );
};
