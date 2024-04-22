import React from "react";
import styles from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div className={styles.searchBox}>
      <label className={styles.label} htmlFor="search">
        Find contact by name:
      </label>
      <input
        id="search"
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
