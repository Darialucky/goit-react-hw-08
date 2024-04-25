import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const selectContacts = (state) => state.contacts.items;
  const selectNameFilter = (state) => state.filters.name;
  const storedContacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  const visibleContacts = storedContacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {visibleContacts.map((contact) => (
        <li className={styles.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
