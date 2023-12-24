"use client";

import styles from "../../../styles/contact.module.scss";
import { FiMail } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";
import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Page() {
  const form = useRef<HTMLFormElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);

  const [loading, setLoading] = useState(false);

  const areAllFormFieldsFilled = () => {
    if (
      nameInput.current?.value !== "" &&
      emailInput.current?.value !== "" &&
      messageInput.current?.value !== ""
    )
      return true;

    return false;
  };

  const isEmailValid = () => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        emailInput.current?.value as string
      )
    )
      return true;

    return false;
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();
    if (areAllFormFieldsFilled() && isEmailValid()) {
      setLoading(true);
      try {
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_SANITY_MAILJS_SERVICE_ID ?? "",
          process.env.NEXT_PUBLIC_SANITY_MAILJS_TEMPLATE_ID ?? "",
          form.current ?? "",
          process.env.NEXT_PUBLIC_SANITY_MAILJS_PUBLIC_KEY
        );
        console.log(result.text);
        form.current!.reset();
        setLoading(false);
      } catch (error: any) {
        console.error(error.text);
        form.current!.reset();
        setLoading(false);
      }
    } else {
      console.log("Please fill all the fields appropriately");
    }
  };

  return (
    <div className="wrapper">
      <div className={styles.container}>
        <section className={styles.textSection}>
          <h1 className={styles.title}>Let&apos;s start a conversation</h1>
        </section>
        <div className={styles.contactSection}>
          <form ref={form} className={styles.contactForm}>
            <input
              ref={nameInput}
              type="text"
              placeholder="Enter your name"
              name="name"
            />
            <input
              ref={emailInput}
              type="text"
              placeholder="Enter your email"
              name="email"
            />
            <textarea
              ref={messageInput}
              placeholder="Enter your message"
              name="message"
              cols={30}
              rows={10}
            ></textarea>
            {loading ? (
              <span className={styles.loader}></span>
            ) : (
              <button onClick={(e) => sendEmail(e)}>Send message</button>
            )}
          </form>
          <section className={styles.contactInfo}>
            <div className={styles.mail}>
              <div className={styles.mailIcon}>
                <FiMail size={40} />
              </div>
              <div className={styles.mailText}>
                <div>Mail me at</div>
                <Link href={"mailto: abhinavsorate01@gmail.com"}>
                  abhinavsorate01@gmail.com
                </Link>
              </div>
            </div>
            <div className={styles.phone}>
              <div className={styles.phoneIcon}>
                <BsPhone size={40} />
              </div>
              <div className={styles.phoneText}>
                <div>Call me at</div>
                <Link href={"tel: 955-277-3945"}>955-277-3945</Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
