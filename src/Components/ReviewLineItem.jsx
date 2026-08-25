// src/Components/ReviewLineItem.jsx
function ReviewLineItem({
  name,
  image,
  price,
  comparePrice,
  quantity,
  onQuantityChange,
  isFree,
  itemKey,
  isMonthly,
  showStepper = true,
}) {
  return (
    <div className="review-line">
      <div className="review-line-info">
        {image && <img src={image} alt={name} className="review-thumb" />}
        <span className="review-name">{name}</span>
      </div>
      <div className="review-line-right">
        {showStepper && (
          <div className="quantity-stepper small">
            <button onClick={() => onQuantityChange(itemKey, Math.max(0, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => onQuantityChange(itemKey, quantity + 1)}>+</button>
          </div>
        )}
        {/* السعر مرصوص فوق بعض: السعر الأصلي مشطوب فوق، والسعر الفعلي تحت */}
        <div className="review-price-stack">
          {comparePrice != null && (
            <span className="review-compare-price">
              ${comparePrice.toFixed(2)}
              {isMonthly ? '/mo' : ''}
            </span>
          )}
          <span className="review-active-price">
            {isFree ? 'FREE' : `$${price.toFixed(2)}${isMonthly ? '/mo' : ''}`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ReviewLineItem
