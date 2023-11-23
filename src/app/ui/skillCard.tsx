import styles from "../../styles/skills.module.scss";
import Image from "next/image";

export default function SkillCard({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={data.image} width={50} height={50} alt="" />
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.title}>{data.name}</p>
      </div>
    </div>
  );
}
