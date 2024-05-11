import { Toaster } from "react-hot-toast";
import DocumentTitle from "../../DocumentTitle";
import RegisterForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div>
      <DocumentTitle className={css.title}>Registration</DocumentTitle>
      <RegisterForm />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default RegisterPage;
