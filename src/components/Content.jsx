import React from "react";
import ImageLayout from "./Image";
import styles from '../styles/content.module.css'
const Content = ( { data } ) => {
  const { id, image, title } = data
  return (
    <div className={styles.container}>
        <h3>{title}</h3>
        <ImageLayout src={image} width={200} height={200} alt="image" />
    </div>
  );
};

export default Content;
