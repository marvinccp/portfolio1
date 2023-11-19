"use client";
import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import ImageLayout from "../Image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <nav className={styles.menu_container_header}>
      <Link href={"/"}>
        <motion.h5
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
          className={styles.logo_header}
        >
          m
        </motion.h5>
      </Link>
      <section className={styles.container_header}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        >
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://wa.me/34641732384"}
          >
            <ImageLayout
              src={"/icons/whatsapp.svg"}
              alt={"whatsapp_logo"}
              width={30}
              height={30}
              className={styles.icon_header}
            />
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        >
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://github.com/marvinccp"}
          >
            <ImageLayout
              src={"/icons/github.svg"}
              alt={"github_logo"}
              width={30}
              height={30}
              className={styles.icon_header}
            />
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        >
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.youtube.com/@tevstudio"}
          >
            <ImageLayout
              src={"/icons/youtube.svg"}
              alt={"youtube_logo"}
              width={29}
              height={29}
              className={styles.icon_header}
            />
          </Link>
        </motion.div>
      </section>
    </nav>
  );
};

export default Header;
