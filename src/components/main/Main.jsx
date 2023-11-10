import PagesMenu from "../pages_menu/PagesMenu";
import styles from "./main.module.css";
import Link from "next/link";

const Main = () => {
  return (
    <section className={styles.container_main}>
      <video
        src="/videos/background_clouds.mp4"
        loop
        autoPlay
        muted
        type="video/mp4"
      >
        {" "}
      </video>
      <main className={`${styles.main_main}`}>
        <div className={`${styles.text_main}`}>
          <h1 className={styles.hola_main}>Hola,</h1>
          <h1 className={styles.soy_main}>Soy</h1>
          <h1 className={`${styles.marvin_main} ${styles.color_animate}`}>Marvin</h1>
          <div
            className={`${styles.profesion_main} ${styles.effect_container}`}
          >
            <h2 className={styles.h2_text}>
              Comunicador Audiovisual & Desarrollador Web
            </h2>
          </div>
        </div>

        <div className={styles.menu_main}>
          <Link href={"/about"}>
            <p>ABOUT</p>
          </Link>
          <Link href={"/projects"}>
            <div className={styles.effect_main}>
              <p>PROJECTS</p>
            </div>
          </Link>
          <Link href={"/contact"}>
            <p>CONTACT</p>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Main;
