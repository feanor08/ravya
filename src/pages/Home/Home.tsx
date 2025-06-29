import React from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '@components/Hero/Hero'
import ProductCard from '@components/ProductCard/ProductCard'
import styles from './Home.module.css'
import homeData from '@data/home.json'

const Home: React.FC = () => {
  const navigate = useNavigate()

  const handlePrimaryCta = () => {
    navigate('/products')
  }

  const handleSecondaryCta = () => {
    navigate('/contact')
  }

  return (
    <div className={styles.home}>
      <Hero
        title={homeData.home.hero.title}
        subtitle={homeData.home.hero.subtitle}
        description={homeData.home.hero.description}
        primaryCta={{
          text: homeData.home.hero.primaryCta,
          action: handlePrimaryCta
        }}
        secondaryCta={{
          text: homeData.home.hero.secondaryCta,
          action: handleSecondaryCta
        }}
        backgroundImage={homeData.home.hero.imagePath}
      />

      <section className={styles.features}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{homeData.home.features.title}</h2>
            <p>{homeData.home.features.description}</p>
          </div>

          <div className="grid grid-3">
            {homeData.home.features.items.map((feature, index) => (
              <div key={index} className="card">
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.products}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{homeData.home.products.title}</h2>
            <p>{homeData.home.products.description}</p>
          </div>

          <div className="grid grid-2">
            {homeData.home.products.featured.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                features={product.features}
                sustainable={product.sustainable}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>{homeData.home.cta.title}</h2>
            <p>{homeData.home.cta.description}</p>
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/contact')}
            >
              {homeData.home.cta.buttonText}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
