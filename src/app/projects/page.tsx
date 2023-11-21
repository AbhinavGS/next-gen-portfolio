import styles from "../../styles/projects.module.scss";
import ProjectCard from "../ui/projectCard";
import projects from "@/app/ui/placeholder-data";

export default function Page() {
  return (
    <>
      <section className={styles.textSection}>
        <h1 className={styles.title}>
          Things I&apos;ve made trying to put my dent in the universe.
        </h1>
        <p className={styles.subTitle}>
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </section>
      <section className={styles.cardsSection}>
        <div className={styles.gridContainer}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          {/* {projects.map((project) => (
            <ProjectCard key={project.id} />
          ))} */}
        </div>
      </section>
    </>
  );
}
