import ProductCard from './ProductCard'

function AccordionStep({ step, isOpen, onToggle, quantities, onQuantityChange, onNext }) {
  const selectedCount = step.products.reduce((count, product) => {
    if (product.variants && product.variants.length > 0) {
      const anySelected = product.variants.some(
        (v) => (quantities[`${product.id}-${v.id}`] || 0) > 0
      )
      return count + (anySelected ? 1 : 0)
    }
    return count + ((quantities[product.id] || 0) > 0 ? 1 : 0)
  }, 0)

  return (
    <div className="accordion-step">
      <div className="accordion-header" onClick={onToggle}>
        <div>
          <p className="step-label">STEP {step.stepNumber} OF 4</p>
          <h2 className="step-title">{step.title}</h2>
        </div>
        <span className="step-indicator">
          {selectedCount} selected {isOpen ? '▲' : '▼'}
        </span>
      </div>

      {isOpen && (
        <div className="accordion-body">
          <div className="product-grid">
            {step.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                quantities={quantities}
                onQuantityChange={onQuantityChange}
              />
            ))}
          </div>
          {onNext && (
            <button className="next-button next-button-outline" onClick={onNext.onClick}>
              Next: {onNext.label}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default AccordionStep
