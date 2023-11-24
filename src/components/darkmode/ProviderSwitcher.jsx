// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme('light');

  useEffect(() => {
    setMounted(true);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  if (!mounted) return null;

  const dark = (e) =>{
    e.preventDefault()
setTheme("dark");
  }


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
          onClick={() => setTheme("light")}
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
