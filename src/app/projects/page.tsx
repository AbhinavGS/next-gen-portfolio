import styles from "../../styles/projects.module.scss";
import ProjectCard from "../ui/projectCard";
import projects from "@/app/ui/placeholder-data";

export default function Page() {
  return (
    <>
      <section className={styles.textSection}>
        <h1 className={styles.title}>
          Lorem ipsum dolor, sit amet elit. Omnis, enim!
        </h1>
        <p className={styles.subTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          blanditiis ad pariatur autem quidem praesentium dignissimos nobis,
          reiciendis harum odio temporibus culpa dicta nemo suscipit quisquam,
          sed cum libero. Accusantium!
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
