import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.container}>
      <div className={css.label}>
        <label className={css.text}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.text}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit" className={css.btn}>
          Log In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
