import { useState } from "react"

function FAQ({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setOpen(!open)}>
        {question}
      </div>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

export default FAQ
