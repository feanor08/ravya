import React from 'react'
import ProductCard from '@components/ProductCard/ProductCard'
import styles from './Products.module.css'
import productsData from '@data/products.json'

const Products: React.FC = () => {
  return (
    <div className={styles.products}>
      <section className={styles.hero}>
        <div className="container">
          <h1>{productsData.hero.title}</h1>
          <p className={styles.heroDescription}>
            {productsData.hero.description}
          </p>
        </div>
      </section>

      {productsData.categories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={styles.category}>
          <div className="container">
            <div className={styles.categoryHeader}>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>

            <div className="grid grid-3">
              {category.products.map((product, productIndex) => (
                <ProductCard
                  key={productIndex}
                  title={product.title}
                  description={product.description}
                  image={`https://picsum.photos/400/300?random=${categoryIndex * 10 + productIndex + 200}`}
                  features={product.features}
                  sustainable={product.sustainable}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Products
