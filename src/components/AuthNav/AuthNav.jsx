import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.container}>
      <NavLink to="/register" className={css.text}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.text}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
