'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <div className={styles.container}>
        <Link href="#hero" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoText}>AURUM</span>
          <span className={styles.logoTagline}>Fine Dining</span>
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {['about', 'menu', 'chef', 'reviews'].map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={styles.link} onClick={closeMenu}>
                {id === 'chef' ? 'Our Chef' : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <a href="#reservation" className={styles.btnReserve}>Reserve a Table</a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          id="hamburger"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
