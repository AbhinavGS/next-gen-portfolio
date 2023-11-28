"use client";

import Link from "next/link";
import styles from "@/styles/navbar.module.scss";
import { FaHome, FaAngleDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

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
          <div className={styles.dropdownOptions}>
            <div className={styles.dropdownHeader}>
              <span>Navigation</span>
              <button onClick={() => setToggle(false)}>
                <IoClose />
              </button>
            </div>
            <ul>
              <li>
                <Link onClick={() => setToggle(false)} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => setToggle(false)} href="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link onClick={() => setToggle(false)} href="/skills">
                  Skills
                </Link>
              </li>
              <li>
                <Link onClick={() => setToggle(false)} href="/articles">
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  className={styles.lastLink}
                  onClick={() => setToggle(false)}
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
