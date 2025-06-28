import React, { useState } from 'react'
import styles from './Contact.module.css'
import contactData from '@data/contact.json'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

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

            <div className={styles.contactForm}>
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={styles.formTextarea}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
