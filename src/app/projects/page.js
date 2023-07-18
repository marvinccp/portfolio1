import React from "react";
import styles from "../../styles/projects.module.css";
import ImageLayout from "../../components/Image";
import Link from "next/link";
import { dataProjects } from "../utils/dataProjects";
console.log(dataProjects);
const ListProjects = () => {
  return (
    <section className={styles.container}>
      <main className={styles.main}>
        {dataProjects.map(({ id, image, title }) => (
          <Link key={id} href={`/projects/${id}`}>
            <div className={styles.card}>
              <ImageLayout
                src={image}
                alt={title}
                width={200}
                height={63}
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
