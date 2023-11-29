import {
  getExperiences,
  getHomepageContent,
  getProjects,
} from "../../../sanity/sanity-utils";
import styles from "../../styles/home.module.scss";

import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaDownload,
} from "react-icons/fa";
import ExperienceCard from "../ui/experienceCard";

export default async function Home() {
  const homepageContent = await getHomepageContent();
  const experiences = await getExperiences();
  return (
    <>
      <header className={styles.header}>
        <div className={styles.avatar}></div>
        <div className={styles.headerTextBox}>
          <h1 className={styles.headingPrimary}>{homepageContent[0].name}</h1>
          <h2 className={styles.headingSecondary}>
            <span></span> {/* for typing animation */}
          </h2>
          <p className={styles.headingTertiary}>
            {homepageContent[0].shortIntroduction}
          </p>
        </div>
        <div className={styles.social}>
          <a href="#">
            <div className={styles.cv}>
              <span>Download CV</span> <FaDownload />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/abhinav-sorate-42a959140/">
            <div className={styles.icons}>
              <FaLinkedin size={25} />
            </div>
          </a>
          <a href="https://github.com/AbhinavGS">
            <div className={styles.icons}>
              <FaGithub size={25} />
            </div>
          </a>
        </div>
      </header>
      <section className={styles.introductionSection}>
        <div className={styles.sectionContainer}>
          <section className={styles.textSection}>
            <h1 className={styles.title}>
              {homepageContent[0].introductionTitle}
            </h1>
            {homepageContent[0].introduction.map((para: any) => (
              <p key={para.children[0]._key} className={styles.subTitle}>
                {para.children[0].text}
              </p>
            ))}
          </section>
          <section className={styles.imageSection}>
            <div className={styles.aboutImage}></div>
            <div className={styles.contactContainer}>
              <ul>
                <li>
                  <span>
                    <FaTwitter className={styles.icon} />
                  </span>
                  <span>Follow on Twitter</span>
                </li>
                <li>
                  <span>
                    <FaInstagram className={styles.icon} />
                  </span>
                  <span>Follow on Instagram</span>
                </li>
                <li>
                  <span>
                    <FaGithub className={styles.icon} />
                  </span>
                  <span>Follow on GitHub</span>
                </li>
                <li>
                  <span>
                    <FaLinkedin className={styles.icon} />
                  </span>
                  <span>Follow on LinkedIn</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
      <section className={styles.experiencesSection}>
        <h1 className={styles.title}>{homepageContent[0].experiencesTitle}</h1>
        <div className={styles.experiencesContainer}>
          {experiences.map((experience: any) => (
            <ExperienceCard key={experience._id} data={experience} />
          ))}
        </div>
      </section>
    </>
  );
}
