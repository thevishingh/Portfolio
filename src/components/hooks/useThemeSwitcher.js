import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme:dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const usePreference = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (usePreference) {
        let checked = usePreference === "dark" ? "dark" : "light";
        setMode(checked);
        if (checked === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let checked = mediaQuery.matches ? "dark" : "light";
        setMode(checked);
        window.localStorage.setItem(
          "theme", checked
        );
        if (checked === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.remove("dark");
        }
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } if(mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
