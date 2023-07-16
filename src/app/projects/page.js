import React from "react";
import styles from "./projects.module.css";
import ImageLayout from "@/components/Image";
import Link from "next/link";

const dataProjects = [
  {
    id: 1,
    title: "Youtube Hub",
    description: "lorem ipsum nfgdfg ethewtru wegasgesh st eth  eth ",
    link: "https://google.com",
    github: "https://github.com",
    image: "/images/youtubeHub.png",
    tags: ["React", "Javascript", "CSS"],
    youtube: "https://www.youtube.com",
  },
  {
    id: 1,
    title: "Project 1",
    description: "lorem ipsum nfgdfg ethewtru wegasgesh st eth  eth ",
    link: "https://google.com",
    github: "https://github.com",
    image: "https://picsum.photos/200/301",
    tags: ["react", "javascript", "css"],
    youtube: "https://www.youtube.com",
  },
  {
    id: 1,
    title: "Project 1",
    description: "lorem ipsum nfgdfg ethewtru wegasgesh st eth  eth ",
    link: "https://google.com",
    github: "https://github.com",
    image: "https://picsum.photos/202/300",
    tags: ["react", "javascript", "css"],
    youtube: "https://www.youtube.com",
  },
  {
    id: 1,
    title: "Project 1",
    description: "lorem ipsum nfgdfg ethewtru wegasgesh st eth  eth ",
    link: "https://google.com",
    github: "https://github.com",
    image: "https://picsum.photos/205/300",
    tags: ["react", "javascript", "css"],
    youtube: "https://www.youtube.com",
  },
];

const Projects = () => {
  return (
    <section className={styles.container}>
      <h1>Projects</h1>
      <main className={styles.main}>
        {dataProjects.map((project) => (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            tab
            key={project.id}
            href={project.link}
          >
            <div className={styles.card}>
              <h2 className={styles.title}>{project.title}</h2>
              <ImageLayout
                src={project.image}
                alt={project.title}
                width={280}
                height={210}
                className={styles.image}
              />
              <p className={styles.description}>{project.tags.join("     |    ")}</p>
            </div>
          </Link>
        ))}
      </main>
    </section>
  );
};

export default Projects;
