import { steps, reviewIcons } from '../data'
import ReviewLineItem from './ReviewLineItem'

function getFlatItems() {
  const items = []
  steps.forEach((step) => {
    step.products.forEach((product) => {
      if (product.variants && product.variants.length > 0) {
        product.variants.forEach((variant) => {
          items.push({
            key: `${product.id}-${variant.id}`,
            name: product.name,
            image: variant.image,
            price: product.price,
            comparePrice: product.comparePrice,
            category: step.reviewLabel,
            isMonthly: product.isMonthly || false,
          })
        })
      } else {
        items.push({
          key: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          comparePrice: product.comparePrice,
          category: step.reviewLabel,
          isMonthly: product.isMonthly || false,
        })
      }
    })
  })
  return items
}

const CATEGORY_ORDER = ['Cameras', 'Sensors', 'Accessories', 'Plan']

function ReviewPanel({ quantities, onQuantityChange }) {
  const flatItems = getFlatItems()
  const selectedItems = flatItems.filter((item) => (quantities[item.key] || 0) > 0)

  const oneTimeItems = selectedItems.filter((item) => !item.isMonthly)
  const total = oneTimeItems.reduce((sum, item) => sum + item.price * (quantities[item.key] || 0), 0)
  const originalTotal = oneTimeItems.reduce(
    (sum, item) => sum + (item.comparePrice ?? item.price) * (quantities[item.key] || 0),
    0
  )
  const savings = originalTotal - total

  return (
    <div className="review-panel">
      <p className="review-heading">REVIEW</p>
      <h2 className="review-title">Your security system</h2>
      <p className="review-subtitle">
        Review your personalized protection system designed to keep what matters most safe.
      </p>

      {CATEGORY_ORDER.map((category) => {
        const itemsInCategory = selectedItems.filter((item) => item.category === category)
        if (itemsInCategory.length === 0) return null

        return (
          <div key={category} className="review-category">
            <p className="review-category-label">{category.toUpperCase()}</p>
            {itemsInCategory.map((item) => (
              <ReviewLineItem
                key={item.key}
                itemKey={item.key}
                name={item.name}
                image={item.image}
                price={item.price}
                comparePrice={item.comparePrice}
                quantity={quantities[item.key] || 0}
                isFree={item.price === 0}
                isMonthly={item.isMonthly}
                showStepper={category !== 'Plan'}
                onQuantityChange={onQuantityChange}
              />
            ))}
          </div>
        )
      })}

      <div className="review-extra-row">
        <div className="review-extra-info">
          <img src={reviewIcons.fastShipping} alt="" className="review-extra-icon" />
          <span>Fast Shipping</span>
        </div>
        <div className="review-price-stack">
          <span className="review-compare-price">$5.99</span>
          <span className="review-active-price">FREE</span>
        </div>
      </div>

      <div className="review-satisfaction-row">
        <img src={reviewIcons.satisfaction} alt="" className="satisfaction-icon" />
        <div className="review-total-block">
          <span className="financing-tag">as low as $19.19/mo</span>
          <div className="review-price-stack align-right">
            <span className="review-compare-price">${originalTotal.toFixed(2)}</span>
            <span className="review-total-price">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {savings > 0 && (
        <p className="savings-text">
          Congrats! You're saving ${savings.toFixed(2)} on your security bundle!
        </p>
      )}

      <button className="checkout-button">Checkout</button>
      <p className="save-link">Save my system for later</p>
    </div>
  )
}

export default ReviewPanel
