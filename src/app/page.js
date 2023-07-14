import Image from "next/image";
import styles from "../styles/page.module.css";
import Link from "next/link";
import Main from "@/components/Main";

export default function Home() {
  return (
    <section className={styles.container}>
      <Main />
    </section>
  );
}
