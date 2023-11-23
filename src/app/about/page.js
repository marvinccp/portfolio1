'use client'
import React from "react";
import styles from "./about.module.css";
import ImageLayout from "@/components/Image";
import Link from "next/link";
import PagesMenu from "@/components/pages_menu/PagesMenu";
const About = () => {
  return (
    <section className={styles.container_a}>
      <div className={styles.menu_container}>
        <PagesMenu item1={"home"} item2={"projects"} item3={"contact"} />
      </div>
      <main className={styles.container_about}>
        <main className={styles.main_about}>
          <header className={styles.header_about}>
            <h1>About</h1>
            <Link href={"/"}>
              <ImageLayout
                src={"/images/marvin.jpg"}
                alt={"whatsapp_logo"}
                width={100}
                height={100}
                className={styles.image}
              />
            </Link>
          </header>

          <div className={styles.text_about}>
            <div className={styles.subtitle_about}>
              <p>
                Hola, soy Marvin Berrio, comunicador audiovisual y desarrollador
                web.{" "}
              </p>
            </div>
            <p>
              Después de 13 años trabajando como terapeuta deportivo, en 2015
              decidí reinventarme y formarme como comunicador audiovisual. Hace
              2 años me sumergí en el mundo del desarrollo web, donde combino
              mis dos grandes pasiones: la creatividad y la tecnología. Te
              invito a explorar mi portafolio para que veas mi trabajo y me
              conozcas un poco a través de él. Gracias por estar aquí..
            </p>
          </div>
          <div className={styles.text_about}>
            <div className={styles.subtitle_about}>
              <p>Skills </p>
            </div>
            <p>
              HTML / CSS / JavaScript / React / Next.js / Node.js / Express /
              Python / Django / Docker / Postgres / Photoshop / Premiere /
              Angular
            </p>
          </div>
          <div className={styles.text_about}>
            <div className={styles.subtitle_about}>
              <p>Experiencia </p>
            </div>
            <p>
              - 7 años de experiencia como desarrollador web Frontend con
              gestores de contenido (Worpress & Joomla)
              <br />
              <br />
              - 8 años de experiencia como editor de video (Premiere)
              <br />
              <br />- 2 años de experiencia como Desarrollador Web
            </p>
          </div>
        </main>
      </main>
    </section>
  );
};

export default About;
