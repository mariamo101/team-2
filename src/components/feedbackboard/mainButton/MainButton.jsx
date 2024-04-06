import styles from "./MainButton.module.css";
import { Link } from "react-router-dom";

export default function MainButton({ text, path }) {
  return (
    <>
      <Link to={path}>
          <button className={styles.purpleBtn}>{text}</button>
      </Link>
    </>
  );
}
