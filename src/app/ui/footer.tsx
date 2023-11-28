"use client";

import Link from "next/link";
import styles from "../../styles/footer.module.scss";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <div
      style={pathname == "/articles" ? { display: "none" } : {}}
      className={styles.container}
    >
      <div className={styles.links}>
        {pathname != "/" && <Link href="/">Home</Link>}
        {pathname != "/projects" && <Link href="/projects">Projects</Link>}
        {pathname != "/skills" && <Link href="/skills">Skills</Link>}
        {pathname != "/articles" && <Link href="/articles">Articles</Link>}
        {pathname != "/contact" && <Link href="/contact">Contact</Link>}
      </div>
      <div className={styles.credits}>Made with ❤️ by Abhinav Sorate</div>
    </div>
  );
}
