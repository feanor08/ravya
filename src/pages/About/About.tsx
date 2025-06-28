import React from 'react'
import styles from './About.module.css'
import aboutData from '@data/about.json'

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <div className="container">
          <h1>{aboutData.about.hero.title}</h1>
          <p className={styles.heroDescription}>
            {aboutData.about.hero.description}
          </p>
        </div>
      </section>

      <section className={styles.story}>
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>{aboutData.about.story.title}</h2>
              <p>{aboutData.about.story.content}</p>
            </div>
            <div className={styles.imageContainer}>
              <img 
                src="https://picsum.photos/600/400?random=50" 
                alt="Our Story"
                className={styles.storyImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <h2 className="text-center">{aboutData.about.values.title}</h2>
          <div className="grid grid-3">
            {aboutData.about.values.items.map((value, index) => (
              <div key={index} className="card">
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className="container">
          <h2 className="text-center">{aboutData.about.team.title}</h2>
          <p className="text-center">{aboutData.about.team.description}</p>
          <div className="grid grid-3">
            {aboutData.about.team.members.map((member, index) => (
              <div key={index} className="card">
                <img 
                  src={`https://picsum.photos/200/200?random=${index + 100}`}
                  alt={member.name}
                  className={styles.memberPhoto}
                />
                <h4>{member.name}</h4>
                <p className={styles.memberRole}>{member.role}</p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
