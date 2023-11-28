import styles from "../../../styles/contact.module.scss";
import { FiMail } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";
import Link from "next/link";

export default function Page() {
  return (
    <div className={styles.container}>
      <section className={styles.textSection}>
        <h1 className={styles.title}>Let&apos;s start a conversation</h1>
      </section>
      <div className={styles.contactSection}>
        <section className={styles.contactForm}>
          <input type="text" placeholder="Enter your name" name="name" />
          <input type="text" placeholder="Enter your email" name="email" />
          <textarea
            placeholder="Enter your message"
            name="message"
            cols={30}
            rows={10}
          ></textarea>
          <button>Send message</button>
        </section>
        <section className={styles.contactInfo}>
          <div className={styles.mail}>
            <div className={styles.mailIcon}>
              <FiMail size={40} />
            </div>
            <div className={styles.mailText}>
              <div>Mail me at</div>
              <Link href={"mailto: abhinavsorate01@gmail.com"}>
                abhinavsorate01@gmail.com
              </Link>
            </div>
          </div>
          <div className={styles.phone}>
            <div className={styles.phoneIcon}>
              <BsPhone size={40} />
            </div>
            <div className={styles.phoneText}>
              <div>Call me at</div>
              <Link href={"tel: 955-277-3945"}>955-277-3945</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
