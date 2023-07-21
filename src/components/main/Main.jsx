"use client";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
import styles from "./main.module.css";
import Link from "next/link";
import BackGround from "../BackGround";

const Main = () => {
  const [rotation, setRotation] = useState(0);
  const listRef = React.useRef(null);

  const bind = useGesture(
    {
      onMove: ({ xy }) => {
        const element = listRef.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const mouseX = xy[0] - rect.left;
          const containerWidth = rect.width;
          const halfContainerWidth = containerWidth / 2;
          const maxRotation = 20;

          const newRotation =
            (mouseX - halfContainerWidth) * (maxRotation / halfContainerWidth);
          setRotation(newRotation);
        }
      },
      onHover: () => {
        setRotation(0);
      },
    },
    { domTarget: listRef }
  );

  const animation = useSpring({
    transform: `perspective(600px) rotateY(${rotation}deg)`,
    config: { mass: 5, tension: 180, friction: 12 },
  });
  const animation2 = useSpring({
    transform: `perspective(600px) rotateY(${rotation}deg)`,
    config: { mass: 5, tension: 180, friction: 12 },
  });

  return (
    <section className={styles.container_main}>
      <BackGround />
      <video src="/videos/fondo2short.mp4" loop autoPlay muted type="video/mp4">
        {" "}
      </video>
      <main className={styles.main_main}>
        <div className={styles.text_main}>
          <h1 className={styles.hola_main}>Hola,</h1>
          <h1 className={styles.soy_main}>Soy</h1>
          <h1 className={styles.marvin_main}>Marvin</h1>
          <div className={styles.profesion_main}>
            <animated.h2 ref={listRef} {...bind()} style={animation}>
              Comunicador Audiovisual & Desarrollador Web
            </animated.h2>
          </div>
        </div>
        <div className={styles.menu_main}>
          <Link href={"/about"}>
            <p>ABOUT</p>
          </Link>
          <Link href={"/projects"}>
            <div className={styles.effect_main}>
              <p>PROJECTS</p>
            </div>
          </Link>
          <Link href={"/contact"}>
            <p>CONTACT</p>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Main;
