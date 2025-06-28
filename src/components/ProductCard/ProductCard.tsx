import React from 'react'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  title: string
  description: string
  image: string
  features: string[]
  sustainable?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image,
  features,
  sustainable = false
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        {sustainable && (
          <span className={styles.sustainableBadge}>
            🌱 Sustainable
          </span>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.features}>
          {features.map((feature, index) => (
            <li key={index} className={styles.feature}>
              ✓ {feature}
            </li>
          ))}
        </ul>

     
      </div>
    </div>
  )
}

export default ProductCard
