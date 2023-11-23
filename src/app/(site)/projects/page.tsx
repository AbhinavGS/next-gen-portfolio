import ProjectCard from "@/app/ui/projectCard";
import { getProjects } from "../../../../sanity/sanity-utils";
import styles from "../../../styles/projects.module.scss";

export default async function Page() {
  const projects = await getProjects();
  return (
    <>
      <section className={styles.textSection}>
        <h1 className={styles.title}>
          Exploring My Universe: Showcase of Creative Endeavors
        </h1>
        <p className={styles.subTitle}>
          Embark on a captivating exploration through a curated collection of my
          proudest projects, meticulously crafted to reflect my unwavering
          dedication and unparalleled expertise in the dynamic realm of software
          development. Your journey into the boundless landscape of digital
          innovation begins here, where each project tells a compelling story of
          creativity, precision, and technological mastery.
        </p>
      </section>
      <section className={styles.cardsSection}>
        <div className={styles.gridContainer}>
          {projects.map((project: any) => (
            <ProjectCard key={project._id} data={project} />
          ))}
          {/* <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div> */}
        </div>
      </section>
    </>
  );
}
