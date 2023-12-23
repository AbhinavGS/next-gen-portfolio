import Link from "next/link";
import styles from "../../styles/projects.module.scss";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";

export default function ProjectCard({ data }: any) {
  return (
    <div className={styles.card}>
      <Image
        src={data.image}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt=""
      ></Image>
      <div className={styles.cardInfo}>
        <p className={styles.title}>{data.title}</p>
        <div className={styles.linkWrapper}>
          <span className={styles.links}>
            <a href={data.link}>
              <FaLink size={15} />
              <span>View Demo</span>
            </a>
          </span>
          <span className={styles.links}>
            <a href={data.repositoryLink}>
              <FaGithub size={15} />
              <span>View Code</span>
            </a>
          </span>
        </div>
        <p className={styles.description}>{data.description}</p>
      </div>
    </div>
  );
}
