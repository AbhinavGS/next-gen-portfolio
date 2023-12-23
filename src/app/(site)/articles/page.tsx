import styles from "../../../styles/articles.module.scss";

export default function Page() {
  return (
    <div className={`${styles.comingSoon} wrapper`}>
      <h1>Coming Soon</h1>
      <p>We&apos;re working hard to bring you something amazing. Stay tuned!</p>
    </div>
  );
}
