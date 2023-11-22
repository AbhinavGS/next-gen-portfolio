import styles from "../../../styles/about.module.scss";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Page() {
  return (
    <div className={styles.sectionContainer}>
      <section className={styles.textSection}>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </h1>
        <p className={styles.subTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          delectus? Vero id atque rem est quis. Architecto adipisci id, iste
          recusandae obcaecati porro doloremque? Accusantium at blanditiis quis
          molestias doloribus.
        </p>
        <p className={styles.subTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          delectus? Vero id atque rem est quis. Architecto adipisci id, iste
          recusandae obcaecati porro doloremque? Accusantium at blanditiis quis
          molestias doloribus.
        </p>
        <p className={styles.subTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          delectus? Vero id atque rem est quis. Architecto adipisci id, iste
          recusandae obcaecati porro doloremque? Accusantium at blanditiis quis
          molestias doloribus.
        </p>
        <p className={styles.subTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          delectus? Vero id atque rem est quis. Architecto adipisci id, iste
          recusandae obcaecati porro doloremque? Accusantium at blanditiis quis
          molestias doloribus.
        </p>
        <p className={styles.subTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          delectus? Vero id atque rem est quis. Architecto adipisci id, iste
          recusandae obcaecati porro doloremque? Accusantium at blanditiis quis
          molestias doloribus.
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
  );
}
