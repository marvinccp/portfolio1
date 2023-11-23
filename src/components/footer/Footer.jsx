'use client'
import React from "react";
import styles from "./footer.module.css";
import { motion } from 'framer-motion'
import Link from "next/link";


const Footer = () => {
  return (
    <section className={styles.container_footer}>
      <Link href={"/"}>
        {/* <ImageLayout
          src="/images/fav.png"
          width={40}
          height={40}
          alt="avatar_logo_main"
          className={styles.avatar}
        /> */}
        <motion.h5
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
          className={styles.logo_footer}
        >
          m
        </motion.h5>
      </Link>
    </section>
  );
};

export default Footer;
