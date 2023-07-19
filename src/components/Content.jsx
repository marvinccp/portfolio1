"use client";
import React from "react";
import ImageLayout from "./Image";
import styles from "../styles/content.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Content = ({ data }) => {
  const { id, image, title, description, tec, tags } = data;
  const router = useRouter();

  return (
    <section className={styles.content}>
      <div className={styles.back_container}>
        <span onClick={() => router.back()}></span>
        <h5 onClick={() => router.back()}>Back to projects</h5>
      </div>
      <header>
        <ImageLayout src={image} width={150} height={63} alt={title} />
        <div className={styles.text_container}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </header>
      <main>
        <h3>Tecnologías</h3>
        <section className={styles.tec_container}>
          {tec.map(({ tec, image }) => (
            <ImageLayout
              key={tec}
              src={image}
              width={30}
              height={30}
              alt={tec}
            />
          ))}
        </section>
        <div className={styles.links}>
          <h3>Links</h3>
          <section className={styles.demo_links}>
            <Link href={"/"}>
              <ImageLayout
                src={"/icons/github.svg"}
                alt={"github_logo"}
                width={50}
                height={50}
                className={styles.icon}
              />
            </Link>
            <Link href={"/"}>
              <ImageLayout
                src={"/icons/youtube.svg"}
                alt={"youtube_logo"}
                width={50}
                height={50}
                className={styles.icon}
              />
            </Link>
          </section>
        </div>
      </main>
      <footer>
        <h3>Tags</h3>
        <h5>{tags.join("    ,    ")}</h5>
        <button>
          Open Project
          <ImageLayout
            src={"/icons/go.png"}
            alt={"youtube_logo"}
            width={25}
            height={25}
            className={styles.icon}
          />
        </button>
      </footer>
    </section>
  );
};

export default Content;
