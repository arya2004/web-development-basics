import Link from "next/link";
import Links from "./links/links";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div>
            <Links/>
        </div>
    </div>
  );
}

export default Navbar;