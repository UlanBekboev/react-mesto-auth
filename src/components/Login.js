import useFormValidation from "../hooks/useFormValidation";
import AuthForm from "./AuthForm";

const Login = ({ onLogin }) => {
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
      <h2 className="login__title">Войти</h2>
      <AuthForm 
        onSubmit={handleSubmit}
        enteredValues={enteredValues}
        errors={errors}
        handleChange={handleChange}
      >
        <button type="submit">Войти</button>
      </AuthForm>
    </section>
  );
};

export default Login;
