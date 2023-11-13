import Link from "next/link";
import React from "react";
import styles from "./PagesMenu.module.css";

const PagesMenu = ({ item1, item2, item3}) => {
  return (
    <nav className={styles.menu_container}>
      <ul>
        <Link className={styles.link} href={"/"}>
          <li className={styles.item}>{item1}</li>
        </Link>
        <Link className={styles.link} href={`/${item2}`}>
          <li>{item2}</li>
        </Link>
        <Link className={styles.link} href={`/${item3}`}>
          <li>{item3}</li>
        </Link>
      </ul>
    </nav>
  );
};

export default PagesMenu;
