import React from "react";
import styles from "./about.module.css";
import ImageLayout from "@/components/Image";
import Link from "next/link";
const About = () => {
  return (
    <section className={styles.container}>
      <video src="/videos/camara.mp4" loop autoPlay muted type="video/mp4">
        {" "}
      </video>
      <main className={styles.main}>
        <Link href={"/"}>
          <ImageLayout
            src={"/images/marvin.jpg"}
            alt={"whatsapp_logo"}
            width={150}
            height={150}
            className={styles.image}
          />
        </Link>
        <div className={styles.text}>
          <p>
            Hola, soy Marvin Berrio, comunicador audiovisual y desarrollador
            web. en realidad, primero me forme como terapeuta deportivo y ejerci
            durante mas de 13 años, pero despues de un proceso de reinvención en
            2015 decidí fromarme como comunicador audiovisual y hace 2 años me
            sumergi en el mundo del desarrollo web, y aquí estoy combinando dos
            grandes pasiones la creatividad y la tecnologia. te invito a
            explorar mi portafolio para que veas mi trabajo y me conozcas un
            poco a tarves de el. gracias por estar aquí.
          </p>
        </div>
      </main>
    </section>
  );
};

export default About;
