import styles from "../../styles/experience.module.scss";
import Image from "next/image";
import { TbWorldWww } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { dateFormatter } from "@/utils/utils";

export default function ExperienceCard({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.logoSection}>
        <div className={styles.logo}>
          <Image src={data.companyLogo} width={50} height={50} alt="" />
        </div>
        <div className={styles.icons}>
          <TbWorldWww />
          <FaLinkedin />
        </div>
      </div>
      <section className={styles.companyInfo}>
        <h4>{data.organization}</h4>
        <div className={styles.tenureDetails}>
          <span>{data.employmentType}</span>
          <span> · </span>
          <span>{`${dateFormatter(data.dateOfJoining)} - ${dateFormatter(
            data.dateOfSeparation
          )}`}</span>
        </div>
        <div className={styles.locationDetails}>
          <span>{data.location}</span>
          <span> · </span>
          <span>{data.locationType}</span>
        </div>
      </section>
      <section className={styles.selfInfo}>
        <h4>{data.designation}</h4>
        {data.description.map((desc: any) => (
          <p key={desc.children[0]._key}>{desc.children[0].text}</p>
        ))}
      </section>
    </div>
  );
}
