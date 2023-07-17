import React from "react";
import ImageLayout from "./Image";
import styles from "../styles/modal.module.css";
const Content = ( { data } ) => {
  const { id, image, title } = data
  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        {title}
        <ImageLayout src={image} width={300} height={200} alt="image" />
        {id}
      </div>
    </div>
  );
};

export default Content;
