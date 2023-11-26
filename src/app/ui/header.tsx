"use client";

import Link from "next/link";
import styles from "@/styles/header.module.scss";
import { FaHome, FaAngleDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  function showMenu(): void {
    setToggle((toggle) => !toggle);
  }

  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/">
              <span>
                <FaHome className={styles.icon} />
              </span>
              Home
            </Link>
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
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.menubar}>
        <div onClick={() => showMenu()} className={styles.dropdownButton}>
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
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
