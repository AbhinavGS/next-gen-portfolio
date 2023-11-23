import Link from "next/link";
import styles from "@/styles/header.module.scss";
import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
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
  );
}
