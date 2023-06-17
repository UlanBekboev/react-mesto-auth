import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import useFormValidation from "../hooks/useFormValidation";

const Register = ({onRegister}) => {
  const { enteredValues, errors, handleChange } = useFormValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(enteredValues);
  }

  return (
    <section className="login">
      <h2 className="login__title">Регистрация</h2>
      <AuthForm 
        onSubmit={handleSubmit}
        enteredValues={enteredValues}
        errors={errors}
        handleChange={handleChange}
      >
        <button type="submit">Зарегистрироваться</button>
      </AuthForm>
      <p className="login__text">Уже зарегистрированы? <Link to="/sign-in" className="login__link">Войти</Link> </p> 
    </section>
  );
}

export default Register;