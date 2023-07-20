import React from "react";
import styles from "./contact.module.css";
import Link from "next/link";
import ImageLayout from "@/components/Image";

const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <div className={styles.menu_inline}>
          <div className={styles.line}></div>
          <Link href={"/"}>
            <p>home</p>
          </Link>
          <Link href={"/projects"}>
            <p>projects</p>
          </Link>
          <Link href={"/about"}>
            <p>about</p>
          </Link>
        </div>
        <h1>Contact</h1>
        <p className={styles.subtitle}>
          Hola, dejame saber si puedo ayudarte en algo
        </p>
        <h3>Email:</h3>
        <Link href={"mailto:contacto@marvinberrio.com"}>
          <p className={styles.subtitle}>contacto@marvinberrio.com</p>
        </Link>
        <section className={styles.rrss}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://wa.me/34641732384"}
          >
            <ImageLayout
              src={"/icons/whatsapp.svg"}
              alt={"whatsapp_logo"}
              width={42}
              height={42}
              className={styles.icon}
            />
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.linkedin.com/in/marvinberrio/"}
          >
            <ImageLayout
              src={"/icons/linkedin.svg"}
              alt={"linkedin_logo"}
              width={42}
              height={42}
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
              width={41}
              height={41}
              className={styles.icon}
            />
          </Link>
        </section>
      </div>
    </section>
  );
};

export default Contact;
