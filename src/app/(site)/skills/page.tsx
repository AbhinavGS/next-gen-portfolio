import SkillCard from "@/app/ui/skillCard";
import { getSkills } from "../../../../sanity/sanity-utils";
import styles from "../../../styles/skills.module.scss";

export default async function Page() {
  const skills = await getSkills();
  skills.sort((a: any, b: any) => a.index - b.index);
  return (
    <>
      <section className={styles.textSection}>
        <h1 className={styles.title}>Skills I Achieved Over the Years</h1>
        <p className={styles.subTitle}>
          In the rapidly evolving digital landscape, my skills set me apart as a
          versatile and adept professional. From crafting captivating content to
          navigating complex coding challenges, I bring a unique blend of
          technical prowess and creative finesse to the table. Explore my
          proficiency in web development, app development and strategic
          problem-solving as I continue to push the boundaries of what&apos;s
          possible in the digital realm.
        </p>
      </section>
      <section className={styles.cardsSection}>
        {skills.map((skill: any) => (
          <SkillCard key={skill._id} data={skill} />
        ))}
      </section>
    </>
  );
}
