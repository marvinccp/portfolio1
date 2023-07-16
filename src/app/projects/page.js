import React from "react";
import styles from "./projects.module.css";
import ImageLayout from "@/components/Image";

const dataProjects = [
  {
    id:1,
    title: "Project 1",
    description: 'lorem ipsum nfgdfg ethewtru wegasgesh st eth  eth ',
    link: 'https://google.com',
    github: 'https://github.com',
    image: 'https://picsum.photos/200/300',
    tags: ['react', 'javascript', 'css'],
    youtube:'https://www.youtube.com'
  
  },
  {
    id:1,
    title: "Project 1",
    description: 'lorem ipsum nfgdfg ethewtru wegasgesh st eth  eth ',
    link: 'https://google.com',
    github: 'https://github.com',
    image: 'https://picsum.photos/200/301',
    tags: ['react', 'javascript', 'css'],
    youtube:'https://www.youtube.com'
  
  },
  {
    id:1,
    title: "Project 1",
    description: 'lorem ipsum nfgdfg ethewtru wegasgesh st eth  eth ',
    link: 'https://google.com',
    github: 'https://github.com',
    image: 'https://picsum.photos/202/300',
    tags: ['react', 'javascript', 'css'],
    youtube:'https://www.youtube.com'
  
  },
  {
    id:1,
    title: "Project 1",
    description: 'lorem ipsum nfgdfg ethewtru wegasgesh st eth  eth ',
    link: 'https://google.com',
    github: 'https://github.com',
    image: 'https://picsum.photos/205/300',
    tags: ['react', 'javascript', 'css'],
    youtube:'https://www.youtube.com'
  
  },
]


const Projects = () => {
  return (
    <section className={styles.container}>
      <h1>Aquí 7 Projects</h1>
      <main className={styles.main}>
        {
          dataProjects.map((project) => (
            <div className={styles.card} key={project.id}>
              <h2>{project.title}</h2>
              <ImageLayout 
              src={project.image} 
              alt={project.title}
              width={300}
              height={300}
               />
              <p>{project.description}</p>
            </div>
          ))
        }
      </main>
    </section>
  );
};

export default Projects;
