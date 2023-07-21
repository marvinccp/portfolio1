import React from "react";
import styles from "./about.module.css";
import ImageLayout from "@/components/Image";
import Link from "next/link";

const About = () => {
  return (
    <main className={styles.container_about}>
      <div className={styles.menu_inline_about}>
        <div className={styles.line_about}></div>
        <Link href={"/"}>
        <p>home</p>
        </Link>
        <Link href={"/contact"}>
        <p>contact</p>
        </Link>
        <Link href={"/projects"}>
        <p>projects</p>
        </Link>
      </div>
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
            En realidad, primero me forme como terapeuta deportivo y ejerci
            durante mas de 13 años, pero despues de un proceso de reinvención en
            2015 decidí fromarme como comunicador audiovisual y hace 2 años me
            sumergi en el mundo del desarrollo web, y aquí estoy combinando dos
            grandes pasiones la creatividad y la tecnologia. te invito a
            explorar mi portafolio para que veas mi trabajo y me conozcas un
            poco a tarves de el. gracias por estar aquí.
          </p>
        </div>
        <div className={styles.text_about}>
          <div className={styles.subtitle_about}>
            <p>
              Skills{" "}
            </p>
          </div>
          <p>
            HTML / CSS / JavaScript / React / Next.js / Node.js / Express / Python / Django / Docker / Postgres / Photoshop / Premiere
          </p>
        </div>
        <div className={styles.text_about}>
          <div className={styles.subtitle_about}>
            <p>
              Experiencia{" "}
            </p>
          </div>
          <p>
            - 7 años de experiencia como desarrollador web Frontend con gestores de contenido (Worpress  & Joomla)
            <br />
            <br />
            - 8 años de experiencia como editor de video (Premiere)
            <br />
            <br />
            - 2 años de experiencia como Desarrollador Web
          </p>
        </div>
      </main>
    </main>
  );
};

export default About;
