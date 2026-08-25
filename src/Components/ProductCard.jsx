// src/Components/ProductCard.jsx
import { useState } from 'react'

function ProductCard({ product, quantities, onQuantityChange }) {
  const hasVariants = product.variants && product.variants.length > 0
  const [activeVariant, setActiveVariant] = useState(
    hasVariants ? product.variants[0].id : null
  )

  const currentKey = hasVariants ? `${product.id}-${activeVariant}` : product.id
  const currentQty = quantities[currentKey] || 0
  const currentImage = hasVariants
    ? product.variants.find((v) => v.id === activeVariant)?.image
    : product.image

  const isSelected = currentQty > 0

  const handleIncrease = () => onQuantityChange(currentKey, currentQty + 1)
  const handleDecrease = () => onQuantityChange(currentKey, Math.max(0, currentQty - 1))

  return (
    <div className={`product-card ${isSelected ? 'selected' : ''}`}>
      {product.badge && <span className="badge">{product.badge}</span>}

      <img src={currentImage} alt={product.name} className="product-image" />

      <h3 className="product-name">{product.name}</h3>
      {product.description && (
        <p className="product-description">
          {product.description} <a href="#">Learn More</a>
        </p>
      )}

      {hasVariants && (
        <div className="variant-selector">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              className={`variant-chip ${activeVariant === variant.id ? 'active' : ''}`}
              onClick={() => setActiveVariant(variant.id)}
            >
              {variant.label}
            </button>
          ))}
        </div>
      )}

      <div className="product-footer">
        <div className="price">
          {product.comparePrice != null && (
            <span className="compare-price">${product.comparePrice.toFixed(2)}</span>
          )}
          <span className="active-price">
            {product.price === 0 ? 'FREE' : `$${product.price.toFixed(2)}`}
            {product.isMonthly ? '/mo' : ''}
          </span>
        </div>

        <div className="quantity-stepper">
          <button onClick={handleDecrease}>-</button>
          <span>{currentQty}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
