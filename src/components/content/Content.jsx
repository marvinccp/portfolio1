"use client";
import React from "react";
import ImageLayout from "../Image";
import styles from "./content.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Content = ({ data }) => {
  const { image, title, description, tec, tags, github, youtube, link } = data;
  const router = useRouter();

  return (
    <section className={styles.content_content}>
      <div className={styles.back_container_content}>
        <span onClick={() => router.back()}></span>
        <h5 onClick={() => router.back()}>Back to projects</h5>
      </div>
      <section className={styles.main_content}>
        <header>
          <ImageLayout className={styles.image_content} src={image} width={150} height={63} alt={title} />
          <div className={styles.text_container_content}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </header>
        <main>
          <h3>Tecnologías</h3>
          <section className={styles.tec_container_content}>
            {tec.map(({ tec, image }) => (
              <ImageLayout
                key={tec}
                src={image}
                width={40}
                height={40}
                alt={tec}
                className={styles.tec_content}
              />
            ))}
          </section>
          <div className={styles.links_content}>
            <h3>Links</h3>
            <section className={styles.demo_links_content}>
              <Link target="_blank" rel="noopener noreferrer" href={github}>
                <ImageLayout
                  src={"/icons/github.svg"}
                  alt={"github_logo"}
                  width={40}
                  height={40}
                  className={styles.icon_content}
                />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href={youtube}>
                <ImageLayout
                  src={"/icons/youtube.svg"}
                  alt={"youtube_logo"}
                  width={40}
                  height={40}
                  className={styles.icon_content}
                />
              </Link>
            </section>
          </div>
        </main>
        <footer>
          <h3>Tags</h3>
          <h5>{tags.join("    ,    ")}</h5>
        </footer>
      </section>
      <Link target="_blank" rel="noopener noreferrer" href={link}>
        <div className={styles.button_container_content}>
          <button>
            Open Project
            <ImageLayout
              src={"/icons/go.png"}
              alt={"youtube_logo"}
              width={25}
              height={25}
              className={styles.icon_content}
            />
          </button>
        </div>
      </Link>
    </section>
  );
};

export default Content;
