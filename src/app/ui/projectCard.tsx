import styles from "../../styles/projects.module.scss";
import Image from "next/image";

export default function ProjectCard({ data }:any) {
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
        <p className={styles.description}>{data.description}</p>
        {/* <div>{data.repositoryLink}</div>
      <div>{data.link}</div> */}
      </div>
    </div>
  );
}
