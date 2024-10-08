"use client";
import React from "react";
import styles from "./projects.module.css";
import ImageLayout from "../../components/Image";
import Link from "next/link";
import { dataProjects } from "../utils/dataProjects";
import PagesMenu from "@/components/pages_menu/PagesMenu";
import { motion } from "framer-motion";

console.log(dataProjects[7]);
const ListProjects = () => {
  return (
    <>
      <div className={styles.menu_container}>
        <PagesMenu item1={"home"} item2={"about"} item3={"contact"} />
      </div>
      <section className={styles.container_projects}>
        <div className={styles.title_projects}>
          <h1>Projects</h1>
        </div>

        <main className={styles.main_projects}>
          {dataProjects.map(({ id, image, title, update }) => (
            <Link key={id} href={`/projects/${id}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                className={styles.card_projects}
              >
                {id == dataProjects.length ? (
                  <div className={styles.tagNew}>
                    <p>New</p>
                  </div>
                ) : update && (
                  <div className={styles.tagUpdate}>
                    <p>Update</p>
                  </div>
                )}

                <ImageLayout
                  src={image}
                  alt={title}
                  width={200}
                  height={93}
                  className={styles.image_projects}
                />
              </motion.div>
            </Link>
          ))}
        </main>
      </section>
    </>
  );
};

export default ListProjects;
