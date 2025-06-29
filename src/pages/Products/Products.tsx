import React from 'react'
import ProductCard from '@components/ProductCard/ProductCard'
import styles from './Products.module.css'
import productsData from '@data/products.json'
import Hero from '@/components/Hero/Hero'

const Products: React.FC = () => {
  return (
    <div className={styles.products}>
      <Hero
        title={productsData.hero.title}
        description={productsData.hero.description}
        backgroundImage={productsData.hero.imagePath}
      />

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
                  image={product.imagePath}
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
