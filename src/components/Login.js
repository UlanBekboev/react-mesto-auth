import useFormValidation from "./FormValidator";

const Login = ({onLogin}) => {
  const { enteredValues, errors, handleChange } = useFormValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!enteredValues.email || !enteredValues.password) {
      return;
    }
    onLogin(enteredValues);
  }

  return (
    <section className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form form" onSubmit={handleSubmit} noValidate>
        <input 
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          autoComplete="email"
          value={enteredValues.email || ''}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="login__error">{errors.email}</span>}
        <input
          type="password"
          minLength="8"
          name="password"
          id="password"
          placeholder="Пароль"
          autoComplete="password"
          value={enteredValues.password || ''}
          onChange={handleChange}
          required
        />
        {errors.password && <span className="login__error">{errors.password}</span>}
        <button type="submit">Войти</button>
      </form>
    </section>
  );
}

export default Login;