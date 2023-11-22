import ProjectCard from "@/app/ui/projectCard";
import { getProjects } from "../../../../sanity/sanity-utils";
import styles from "../../../styles/projects.module.scss";

export default async function Page() {
  const projects = await getProjects();
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
