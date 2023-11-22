import styles from "../../../styles/contact.module.scss";

export default function Page() {
  return (
    <>
      <section className={styles.textSection}>
        <h1 className={styles.title}>Let&apos;s start a conversation</h1>
      </section>
      <section className={styles.contactForm}>
        <input type="text" placeholder="Enter your name" name="name" />
        <input type="text" placeholder="Enter your email" name="email" />
        <textarea
          placeholder="Enter your message"
          name="message"
          cols={30}
          rows={10}
        ></textarea>
        <button>Send message</button>
      </section>
    </>
  );
}
