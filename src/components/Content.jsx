import React from "react";
import ImageLayout from "./Image";
import styles from "../styles/content.module.css";
const Content = ({ data }) => {
  const { id, image, title } = data;
  return (
    <section className={styles.content}>
      <header className={styles.container}>
        <ImageLayout src={image} width={150} height={63} alt={title} />
      </header>
      <main>
        <h3>{title}</h3>
        <h1>main</h1>
      </main>
      <footer>
        <h1>footer</h1>
      </footer>
    </section>
  );
};

export default Content;
