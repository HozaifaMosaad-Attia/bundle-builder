import { useState, useEffect } from 'react'
import { steps, initialQuantities } from './data'
import AccordionStep from './Components/AccordionStep'
import ReviewPanel from './Components/ReviewPanel'
import './App.css'

const STORAGE_KEY = 'bundle-builder-quantities'

function App() {
  const [openStepId, setOpenStepId] = useState(steps[0].id)

  const [quantities, setQuantities] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : initialQuantities
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(quantities))
  }, [quantities])

  const handleQuantityChange = (key, value) => {
    setQuantities((prev) => ({ ...prev, [key]: value }))
  }

  const handleToggle = (stepId) => {
    setOpenStepId((prev) => (prev === stepId ? null : stepId))
  }

  return (
    <div className="app">
      <div className="builder-column">
        {steps.map((step, index) => {
          const nextStep = steps[index + 1]
          return (
            <AccordionStep
              key={step.id}
              step={step}
              isOpen={openStepId === step.id}
              onToggle={() => handleToggle(step.id)}
              quantities={quantities}
              onQuantityChange={handleQuantityChange}
              onNext={
                nextStep
                  ? { label: nextStep.title, onClick: () => setOpenStepId(nextStep.id) }
                  : null
              }
            />
          )
        })}
      </div>

      <ReviewPanel quantities={quantities} onQuantityChange={handleQuantityChange} />
    </div>
  )
}

export default App
