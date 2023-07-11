import React from "react";
import styles from "../styles/main.module.css";
import ImageLayout from "../components/Image";
import Link from "next/link";
const Main = () => {
  return (
    <section className={styles.container}>
      <ImageLayout
        src="/images/myAvatar.png"
        width={120}
        height={120}
        alt="avatar_logo_main"
        className={styles.avatar}
      />
      <main className={styles.main}>
        <div className={styles.text}>
          <p>
            ¡Hola! Me llamo Marvin Berrio, soy
            comunicador audiovisual y me preparo desde hace 2 años como desarrollador web. Mi pasión abarca la
            creatividad y la tecnología.  Te invito a explorar mi portafolio para descubrir más
            sobre mi trabajo. Si necesitas más información, no dudes en contactarme.
          </p>
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
