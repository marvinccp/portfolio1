import React from "react";
import styles from "./contact.module.css";
import Link from "next/link";
import ImageLayout from "@/components/Image";

const Contact = () => {
  return (
    <section className={styles.container_contact}>
      <div className={styles.title_contact}>
        <div className={styles.menu_inline_contact}>
          <div className={styles.line_contact}></div>
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
        <p className={styles.subtitle_contact_a}>
          Hola, dejame saber si puedo ayudarte en algo
        </p>
        <main className={styles.main}>
          <Link href={"mailto:contacto@marvinberrio.com"}>
            <h3>Email:</h3>
            <p className={styles.subtitle_contact}>contacto@marvinberrio.com</p>
          </Link>

          <section className={styles.rrss_contact}>
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
                className={styles.icon_contact}
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
                className={styles.icon_contact}
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
                className={styles.icon_contact}
              />
            </Link>
          </section>
        </main>
      </div>
    </section>
  );
};

export default Contact;
