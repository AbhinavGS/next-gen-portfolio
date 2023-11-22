import styles from "../../styles/projects.module.scss";
import Image from "next/image";

export default function ProjectCard({ data }) {
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
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      {/* <div>{data.repositoryLink}</div>
      <div>{data.link}</div> */}
    </div>
  );
}
