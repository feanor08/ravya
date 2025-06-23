import React from 'react'
import styles from './Services.module.css'
import servicesData from '@data/content.json'

const Services: React.FC = () => {
  return (
    <div className={styles.services}>
      <section className={styles.hero}>
        <div className="container">
          <h1>{servicesData.services.hero.title}</h1>
          <p className={styles.heroDescription}>
            {servicesData.services.hero.description}
          </p>
        </div>
      </section>

      <section className={styles.servicesList}>
        <div className="container">
          <div className="grid grid-2">
            {servicesData.services.list.map((service, index) => (
              <div key={index} className="card">
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className="container">
          <h2 className="text-center">{servicesData.services.process.title}</h2>
          <div className="grid grid-4">
            {servicesData.services.process.steps.map((step, index) => (
              <div key={index} className={styles.processStep}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
