import Link from "next/link";
import React from "react";
import styles from "../styles/navigation.module.css";
import ImageLayout from "./Image";

const Header = () => {
  return (
    <nav className={styles.menu_container}>
      <Link href={"/"}>
      <h5 className={styles.logo}>m</h5>
      </Link>
      <section className={styles.container}>
          <Link href={"/"}>
            <ImageLayout
              src={"/icons/whatsapp.svg"}
              alt={"whatsapp_logo"}
              width={27}
              height={27}
              className={styles.icon}
            />
          </Link>

          <Link href={"/"}>
            <ImageLayout
              src={"/icons/github.svg"}
              alt={"github_logo"}
              width={27}
              height={27}
              className={styles.icon}
            />
          </Link>
          {/* <Link href={"/"}>
            <ImageLayout
              src={"/icons/facebook.svg"}
              alt={"facebook_logo"}
              width={20}
              height={20}
              className={styles.icon}
            />
          </Link>
          <Link href={"/"}>
            <ImageLayout
              src={"/icons/instagram.svg"}
              alt={"instagram_logo"}
              width={20}
              height={20}
              className={styles.icon}
            />
          </Link> */}
          <Link href={"/"}>
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
