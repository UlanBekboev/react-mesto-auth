const AuthForm = ({ handleSubmit, enteredValues, handleChange, errors, ...props }) => {

  return (
    <form className="login__form form" onSubmit={handleSubmit} noValidate>
      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        autoComplete="email"
        value={enteredValues.email || ""}
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
        value={enteredValues.password || ""}
        onChange={handleChange}
        required
      />
      {errors.password && (
        <span className="login__error">{errors.password}</span>
      )}
      {props.children} 
    </form>
  );
};


export default AuthForm; 