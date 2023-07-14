'use client'
import Image from "next/image";
import styles from "../styles/page.module.css";
import Link from "next/link";
import Main from "@/components/Main";
import BackGround from "@/components/BackGround";

export default function Home() {
  return (
    <section className={styles.container}>
      <BackGround />
      <Main />
    </section>
  );
}
