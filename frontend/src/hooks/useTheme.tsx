import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    root.className = `${theme}`;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = (theme: string) => {
    setTheme(theme);
  };

  return { theme, changeTheme };
}
