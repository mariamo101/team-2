import ButtonBoard from "./buttonBoard/ButtonBoard";
import styles from "./SideBar.module.css";
import RoadBoard from "./roadBoard/RoadBoard";

export default function SideBar({ menu, toggleMenu }) {
  return (
    <>
      <div className={styles.sidebar + (menu ? ` ${styles.open}` : "")}>
        {menu && (
          <div className={styles.content}>
            <ButtonBoard />
            <RoadBoard />
          </div>
        )}
      </div>
      {menu && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </>
  );
}
