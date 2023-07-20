import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { config } from "@/app/utils/particlesConfig";
const BackGround = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  const particlesLoaded =  (container) => {
    console.log(container);
  };

  

  return (
    <Particles
      loaded={particlesLoaded}
      init={particlesInit}
      options={config}
    />
  );
};

export default BackGround;
