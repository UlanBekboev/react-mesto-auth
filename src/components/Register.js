import { Link } from "react-router-dom";
import useFormValidation from "./FormValidator";

const Register = ({onRegister}) => {
  const { enteredValues, errors, handleChange } = useFormValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(enteredValues);
  }

  return (
    <section className="login">
      <h2 className="login__title">Регистрация</h2>
      <form className="login__form form" onSubmit={handleSubmit}>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          value={enteredValues.email || ''}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="login__error">{errors.email}</span>}
        <input
          id="password"
          name="password"
          type="password"
          minLength="8"
          placeholder="Пароль"
          autoComplete="password"
          value={enteredValues.password || ''}
          onChange={handleChange}
          required
        />
        {errors.password && <span className="login__error">{errors.password}</span>}
        <button type="submit" onSubmit={handleSubmit}>Зарегистрироваться</button>
      </form>
      <p className="login__text">Уже зарегистрированы? <Link to="/sign-in" className="login__link">Войти</Link> </p>
    </section>
  );
}

export default Register;