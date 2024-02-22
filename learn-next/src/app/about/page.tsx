import Image from "next/image";
import styles from "./about.module.css";
const AboutPage = () => {
    return (
        <div>
        <h1>About</h1>
        <p>This is the about page</p>
        <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill />
        </div>
        </div>
    );
}

export default AboutPage;