import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          {/* Optional logo */}
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">home</Link></li>
            {/* <li><Link href="/blog">blog</Link></li> */}
            <li><Link href="/contact">contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>
      
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} runbin</p>
      </footer>
    </div>
  );
}
