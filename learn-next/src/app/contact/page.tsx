import Image from "next/image";
import styles from "./contact.module.css";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Contact",
    description: "Contact Page",
  };

const ContactPage = () => {
    return (
        <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" fill className={styles.img} />
        </div>
        <div className={styles.formContainer}>
          {/* <HydrationTestNoSSR/> */}
          {/* <div suppressHydrationWarning>{a}</div> */}
          <form action="" className={styles.form}>
            <input type="text" placeholder="Name and Surname" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number (Optional)" />
            <textarea
              name=""
              id=""
              
              placeholder="Message"
            ></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    );
}

export default ContactPage ;