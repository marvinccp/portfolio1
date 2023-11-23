import { useEffect, useState } from "react";

export const useTheme = () => {
  
  const initialState =
    typeof window !== "undefined"
      ? window.localStorage.getItem("theme")
      : false;

  const [theme, setTheme] = useState(initialState || "ligth");

  const light = () => {
    setTheme("light");
  };

  const dark = () => {
    setTheme("dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return {
    dark,
    light,
    theme,
  };
};
