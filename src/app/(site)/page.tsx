import styles from "../../styles/home.module.scss";

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.avatar}></div>
        <div className={styles.headerTextBox}>
          <h1 className={styles.headingPrimary}>Abhinav Sorate</h1>
          <h2 className={styles.headingSecondary}>
            <span></span>
          </h2>
          <p className={styles.headingTertiary}>
            Hi, I&apos;m a web and app developer based in Bengaluru, India. I
            create modern websites, web apps and mobile apps that are fast,
            responsive & easy to use.
          </p>
        </div>
        <div className={styles.socialMedia}>
          <a href="https://linkedin.com">
            <FaLinkedin />
          </a>
          <a href="https://github.com/">
            <FaGithub />
          </a>
          <a href="https://twitter.com/">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/">
            <FaInstagram />
          </a>
        </div>
      </header>
    </>
  );
}
