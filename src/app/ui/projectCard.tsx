import styles from "../../styles/projects.module.scss";
import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className={styles.cardContainer}>
      <Image
        src="/placeholder-image.png"
        width={300}
        height={200}
        alt=""
      ></Image>
      <h3>Title</h3>
      <p>Description</p>
      <span>demo</span>
      <span>code</span>
    </div>
  );
}
