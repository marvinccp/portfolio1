import React from "react";
import styles from "./footer.module.css";
import ImageLayout from "../Image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className={styles.container_footer}>
      <Link href={'/'}>
        {/* <ImageLayout
          src="/images/fav.png"
          width={40}
          height={40}
          alt="avatar_logo_main"
          className={styles.avatar}
        /> */}
        <h5 className={styles.logo_footer}>m</h5>
      </Link>
    </section>
  );
};

export default Footer;
