import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import footerData from '@data/footer.json'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>House of Ravya</h3>
            <p className={styles.footerDescription}>
              {footerData.company.description}
            </p>
            <div className={styles.sustainability}>
              <span className={styles.sustainabilityBadge}>
                🌱 Sustainable Manufacturing
              </span>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              {footerData.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Products</h4>
            <ul className={styles.footerLinks}>
              {footerData.products.map((product, index) => (
                <li key={index}>
                  <span className={styles.footerLink}>{product}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contact Info</h4>
            <div className={styles.contactInfo}>
              <p>{footerData.contact.email}</p>
              <p>{footerData.contact.phone}</p>
              <p>{footerData.contact.address}</p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} House of Ravya. All rights reserved.
          </p>
          <p className={styles.tagline}>
            Sustainable Manufacturing for a Better Tomorrow
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
