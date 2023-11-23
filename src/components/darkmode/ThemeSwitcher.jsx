"use client";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import { useTheme } from './useTheme'
import { motion } from 'framer-motion'
export function ThemeSwitcher() {

  const { dark, light, theme } = useTheme()
 
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      style={{
        marginLeft: "30px",
      }}
    >
      {theme === "dark" ? (
        <BsSun
          size={25}
          style={{ color: "rgb(202, 202, 202)", cursor: "pointer" }}
          onClick={light}
        />
      ) : (
        <FiMoon
          style={{ color: "rgb(60, 60, 60)", cursor: "pointer" }}
          onClick={dark}
          size={25}
        />
      )}
    </motion.div>
  );
}
