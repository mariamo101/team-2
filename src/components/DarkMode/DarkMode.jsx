import {useState, useEffect} from "react";
import {Moon, Sun, ArrowUpLeft} from "lucide-react";
import styles from "./DarkMode.module.css";

function DarkMode() {
  const [theme, setTheme] = useState("light");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setIsVisible(false);
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light");
    }, 500);
  };

  return (
    <div className={styles.container}>
      <ArrowUpLeft
        size={40}
        color={theme === "light" ? "Navy" : "White"}
        className={`${styles.arrow} ${isVisible ? styles.arrowHidden : ""}`}
        onClick={() => setIsVisible(!isVisible)}
      />
      {theme === "light" ? (
        <Moon
          className={`${styles.icon} ${isVisible ? styles.iconVisible : styles.iconDisappearing}`}
          onClick={toggleTheme}
        />
      ) : (
        <Sun
          className={`${styles.icon} ${styles.iconSun} ${
            isVisible ? styles.iconVisible : styles.iconDisappearing
          }`}
          onClick={toggleTheme}
        />
      )}
    </div>
  );
}

export default DarkMode;
