import styles from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.name}>
          <BsFillTelephoneFill /> {name}
        </p>
        <p className={styles.number}>
          <IoPerson />
          {number}
        </p>
      </div>
      <button className={styles.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
