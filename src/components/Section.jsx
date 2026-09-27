export default function Section({ id, eyebrow, title, children, alt = false }) {
  return (
    <section id={id} className={`section ${alt ? 'section--alt' : ''}`}>
      <div className="container">
        <header className="section__head">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2>{title}</h2>
        </header>
        {children}
      </div>
    </section>
  )
}
