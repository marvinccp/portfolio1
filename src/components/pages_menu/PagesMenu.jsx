import Link from 'next/link';
import React from 'react'
import styles from  './PagesMenu.module.css'

const PagesMenu = () => {
  return (
    <nav className={styles.menu_container}>
      {" "}
      <Link href={"/"}>
        <p>home</p>
      </Link>
      <Link href={"/contact"}>
        <p>contact</p>
      </Link>
      <Link href={"/projects"}>
        <p>projects</p>
      </Link>
    </nav>
  );
}

export default PagesMenu