
import React from "react";
import styles from "../styles/main.module.css";
import Link from "next/link";
const Main = () => {




  return (
    <section className={styles.container}>
      <video
        src="/videos/fondo2short.mp4"
        loop
        autoPlay
        muted
        type="video/mp4"
      ></video>
      <main className={styles.main}>
        <div className={styles.text}>
          <h1 className={styles.hola}>Hola,</h1>
          <h1 className={styles.soy}>Soy</h1>
          <h1 className={styles.marvin}>Marvin</h1>
          <div className={styles.profesion}>
            <h2>Comunicador Audiovisual & Desarrollador Web</h2>
          </div>
        </div>
        <div className={styles.menu}>
          <Link href={"/about"}>
            <h2>About</h2>
          </Link>
          <Link href={"/projects"}>
            <div className={styles.effect}>
              <h2>Projects</h2>
            </div>
          </Link>
          <Link href={"/contact"}>
            <h2>Contact</h2>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Main;
