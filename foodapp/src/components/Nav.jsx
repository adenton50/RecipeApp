import styles from "./nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div>
        <h1>🍔 Adam's Recipes</h1>
      </div>
      <div>
        <ul className={styles.list}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/myrecipes">My Recipes</Link>
          </li>
          <li>
            <Link to="/ourfavorites">Our Favorites</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
