import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import ImageLayout from "../Image";

const Header = () => {
  return (
    <nav className={styles.menu_container}>
      <Link href={"/"}>
        <h5 className={styles.logo}>m</h5>
      </Link>
      <section className={styles.container}>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://wa.me/34641732384"}
        >
          <ImageLayout
            src={"/icons/whatsapp.svg"}
            alt={"whatsapp_logo"}
            width={27}
            height={27}
            className={styles.icon}
          />
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/marvinccp"}
        >
          <ImageLayout
            src={"/icons/github.svg"}
            alt={"github_logo"}
            width={27}
            height={27}
            className={styles.icon}
          />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.youtube.com/@tevstudio"}
        >
          <ImageLayout
            src={"/icons/youtube.svg"}
            alt={"youtube_logo"}
            width={26}
            height={26}
            className={styles.icon}
          />
        </Link>
      </section>
    </nav>
  );
};

export default Header;
