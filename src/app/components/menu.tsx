"use client";
import { useState } from 'react';
import styles from '../styles/Menu.module.css';
import Link from 'next/link';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.hamburgerMenu}>
      {/* Hamburger Icon */}
      <button className={styles.hamburgerIcon} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isOpen ? styles.open : ''}`} />
        <div className={`${styles.bar} ${isOpen ? styles.open : ''}`} />
        <div className={`${styles.bar} ${isOpen ? styles.open : ''}`} />
      </button>

      {/* Menu Items */}
      <nav className={`${styles.menu} ${isOpen ? styles.show : ''}`}>
        <Link href="/" className={styles.link} onClick={closeMenu}>Home</Link>
        <Link href="./about" className={styles.link} onClick={closeMenu}>About</Link>
        <Link href="./contact" className={styles.link} onClick={closeMenu}>Contact</Link>
      </nav>
    </div>
  );
}

export default HamburgerMenu;