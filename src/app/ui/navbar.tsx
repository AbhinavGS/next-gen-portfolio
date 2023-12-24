"use client";

import Link from "next/link";
import styles from "@/styles/navbar.module.scss";
import { FaHome, FaAngleDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    var homepageElement = document.querySelector(".wrapper");
    var homepageHTMLElement = homepageElement as HTMLElement;

    if (homepageElement && toggle) {
      homepageHTMLElement.style.filter = "blur(5px)";
    } else if (homepageElement) {
      homepageHTMLElement.style.filter = "blur(0px)";
    }
  }, [toggle]);

  return (
    <div className={styles.navContainer}>
      <nav className={styles.navbar}>
        <ul>
          <li className={pathname == "/" ? styles.activeLink : ""}>
            <Link href="/">
              <span>
                <FaHome className={`${styles.icon} ${styles.icon2}`} />
              </span>
              Home
            </Link>
          </li>
          <li className={pathname == "/projects" ? styles.activeLink : ""}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={pathname == "/skills" ? styles.activeLink : ""}>
            <Link href="/skills">Skills</Link>
          </li>
          <li className={pathname == "/articles" ? styles.activeLink : ""}>
            <Link href="/articles">Articles</Link>
          </li>
          <li className={pathname == "/contact" ? styles.activeLink : ""}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.menubar}>
        <div
          onClick={() => setToggle((prev) => !prev)}
          className={styles.dropdownButton}
        >
          <span>Menu</span>
          <span>
            <FaAngleDown />
          </span>
        </div>
        {toggle && (
          <div className={styles.modal} onClick={() => setToggle(false)}>
            <div className={styles.dropdownOptions}>
              <div className={styles.dropdownHeader}>
                <span>Navigation</span>
                <button>
                  <IoClose />
                </button>
              </div>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                <li>
                  <Link href="/skills">Skills</Link>
                </li>
                <li>
                  <Link href="/articles">Articles</Link>
                </li>
                <li>
                  <Link className={styles.lastLink} href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
