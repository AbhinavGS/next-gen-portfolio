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
            <span></span> {/* for typing animation */}
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
      <div className={styles.sectionContainer}>
        <section className={styles.textSection}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className={styles.subTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            delectus? Vero id atque rem est quis. Architecto adipisci id, iste
            recusandae obcaecati porro doloremque? Accusantium at blanditiis
            quis molestias doloribus.
          </p>
          <p className={styles.subTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            delectus? Vero id atque rem est quis. Architecto adipisci id, iste
            recusandae obcaecati porro doloremque? Accusantium at blanditiis
            quis molestias doloribus.
          </p>
          <p className={styles.subTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            delectus? Vero id atque rem est quis. Architecto adipisci id, iste
            recusandae obcaecati porro doloremque? Accusantium at blanditiis
            quis molestias doloribus.
          </p>
          <p className={styles.subTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            delectus? Vero id atque rem est quis. Architecto adipisci id, iste
            recusandae obcaecati porro doloremque? Accusantium at blanditiis
            quis molestias doloribus.
          </p>
          <p className={styles.subTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            delectus? Vero id atque rem est quis. Architecto adipisci id, iste
            recusandae obcaecati porro doloremque? Accusantium at blanditiis
            quis molestias doloribus.
          </p>
        </section>
        <section className={styles.imageSection}>
          <div className={styles.aboutImage}></div>
          <div className={styles.contactContainer}>
            <ul>
              <li>
                <span>
                  <FaTwitter className={styles.icon} />
                </span>
                <span>Follow on Twitter</span>
              </li>
              <li>
                <span>
                  <FaInstagram className={styles.icon} />
                </span>
                <span>Follow on Instagram</span>
              </li>
              <li>
                <span>
                  <FaGithub className={styles.icon} />
                </span>
                <span>Follow on GitHub</span>
              </li>
              <li>
                <span>
                  <FaLinkedin className={styles.icon} />
                </span>
                <span>Follow on LinkedIn</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
