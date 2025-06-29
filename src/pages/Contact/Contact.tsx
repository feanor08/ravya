import styles from './Contact.module.css'
import contactData from '@data/contact.json'

const Contact: React.FC = () => {
 



  return (
    <div className={styles.contact}>
      <section className={styles.hero}>
        <div className="container">
          <h1>{contactData.contact.hero.title}</h1>
          <p className={styles.heroDescription}>
            {contactData.contact.hero.description}
          </p>
        </div>
      </section>

      <section className={styles.contactContent}>
        <div className="container">
          <div className="grid grid-2">
            <div className={styles.contactInfo}>
              <h2>Get in Touch</h2>
              <div className={styles.contactMethods}>
                {contactData.contact.methods.map((method, index) => (
                  <div key={index} className={styles.contactMethod}>
                    <div className={styles.methodIcon}>{method.icon}</div>
                    <div>
                      <h4>{method.title}</h4>
                      <p>{method.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
