import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import navigationData from '@data/navigation.json'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>House of Ravya</span>
          <span className={styles.logoSubtext}>Sustainable Manufacturing</span>
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {navigationData.mainMenu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navLink} ${
                location.pathname === item.path ? styles.navLinkActive : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>
      </div>
    </header>
  )
}

export default Header
