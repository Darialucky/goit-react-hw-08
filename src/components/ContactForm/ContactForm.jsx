import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value;
    dispatch(addContact({ name, number }));
    toast.success("Successfully add");
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form_container}>
      <div className={css.formField}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          className={css.input}
          required
        />
      </div>
      <div className={css.formField}>
        <label htmlFor="number">Number:</label>
        <input
          type="number"
          name="number"
          id="number"
          className={css.input}
          required
        />
      </div>
      <button type="submit" className={css.formBtn}>
        Add
      </button>
    </form>
  );
};

export default ContactForm;
