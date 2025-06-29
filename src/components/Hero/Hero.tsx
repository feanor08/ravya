import React from 'react'
import styles from './Hero.module.css'

interface HeroProps {
  title: string
  subtitle?: string
  description: string
  primaryCta?: {
    text: string
    action: () => void
  }
  secondaryCta?: {
    text: string
    action: () => void
  }
  backgroundImage?: string
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage
}) => {
  return (
    <section className={styles.hero}>
      {backgroundImage && (
        <div className={styles.backgroundWrapper}>
          <img
            src={backgroundImage}
            alt="Background"
            className={styles.backgroundImage}
          />
          <div className={styles.gradientTint} />
        </div>
      )}

      <div className={styles.heroOverlay}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>

            <div className={styles.ctaButtons}>
              {primaryCta && (
                <button 
                  className={`btn btn-primary ${styles.ctaButton}`}
                  onClick={primaryCta.action}
                >
                  {primaryCta.text}
                </button>
              )}
              {secondaryCta && (
                <button 
                  className={`btn btn-outline ${styles.ctaButton}`}
                  onClick={secondaryCta.action}
                >
                  {secondaryCta.text}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
