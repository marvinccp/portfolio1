import React from "react";
import styles from "./contact.module.css";
import Link from "next/link";
import ImageLayout from "@/components/Image";
import PagesMenu from "@/components/pages_menu/PagesMenu";

const Contact = () => {
  return (
    <main className={styles.container_contact}>
      <div className={styles.menu_inline_contact}>
        <PagesMenu item1={"home"} item2={"projects"} item3={"about"} />
      </div>
      <main className={styles.main_contact}>
        <header className={styles.header_contact}>
          <h1>Contact</h1>
        </header>

        <div className={styles.text_contact}>
          <div className={styles.subtitle_contact}>
            <p>
              Hola, será para mí un placer hacer parte de tu proyecto o
              responder tus dudas. Puedes contactarme a través de los siguientes
              canales.{" "}
            </p>
          </div>
        </div>
        <div className={styles.contact_icons}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://wa.me/34641732384"}
          >
            <ImageLayout
              src={"/icons/whatsapp.svg"}
              alt={"whatsapp_logo"}
              width={80}
              height={80}
              className={styles.icon_header}
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"mailto:marvinccp@gmail.com"}
          >
            <ImageLayout
              src={"/icons/email.png"}
              alt={"email_logo"}
              width={100}
              height={100}
              className={styles.icon_header}
            />
          </Link>
        </div>
      </main>
    </main>
  );
};

export default Contact;
