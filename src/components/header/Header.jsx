import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import ImageLayout from "../Image";

const Header = () => {
  return (
    <nav className={styles.menu_container_header}>
      <Link href={"/"}>
        <h5 className={styles.logo_header}>m</h5>
      </Link>
      <section className={styles.container_header}>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://wa.me/34641732384"}
        >
          <ImageLayout
            src={"/icons/whatsapp.svg"}
            alt={"whatsapp_logo"}
            width={30}
            height={30}
            className={styles.icon_header}
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
            width={30}
            height={30}
            className={styles.icon_header}
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
            width={29}
            height={29}
            className={styles.icon_header}
          />
        </Link>
      </section>
    </nav>
  );
};

export default Header;
