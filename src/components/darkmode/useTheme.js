import { useEffect, useState } from "react";

export const useTheme = () => {
  const initialState =
    typeof window !== "undefined" ? localStorage.getItem("theme") : "light";

  const [theme, setTheme] = useState(initialState || "light");

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
