import React from "react";
import styles from "./projects.module.css";
import ImageLayout from "../../components/Image";
import Link from "next/link";
import { dataProjects } from "../utils/dataProjects";
console.log(dataProjects);
const ListProjects = () => {
  return (
    <section className={styles.container}>


      <div className={styles.title}>
        <div className={styles.menu_inline}>
          <div className={styles.line}></div>
          <Link href={"/"}>
            <p>home</p>
          </Link>
          <Link href={"/contact"}>
            <p>contact</p>
          </Link>
          <Link href={"/about"}>
            <p>about</p>
          </Link>
        </div>
        <h1>Projects</h1>
      </div>


      <main className={styles.main}>
        {dataProjects.map(({ id, image, title }) => (
          <Link key={id} href={`/projects/${id}`}>
            <div className={styles.card}>
              <ImageLayout
                src={image}
                alt={title}
                width={200}
                height={93}
                className={styles.image}
              />
            </div>
          </Link>
        ))}
      </main>



      
    </section>
  );
};

export default ListProjects;
