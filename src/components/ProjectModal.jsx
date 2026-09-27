import { useEffect, useRef } from 'react'
import { CloseIcon } from './Icons'

export default function ProjectModal({ project, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Close when clicking the backdrop (outside the dialog box)
  const onClick = (e) => {
    if (e.target === ref.current) onClose()
  }

  return (
    <dialog ref={ref} className="modal" onClose={onClose} onClick={onClick} aria-labelledby="modal-title">
      <div className="modal__body">
        <header className="modal__head">
          <div>
            <span className={`badge badge--${project.category.toLowerCase()}`}>{project.category}</span>
            <h3 id="modal-title">{project.title}</h3>
            <p className="muted small">{project.client}</p>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </header>

        <p>{project.summary}</p>

        <h4>Highlights</h4>
        <ul className="bullets">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        {project.details?.map((d) => (
          <div key={d.heading}>
            <h4>{d.heading}</h4>
            {Array.isArray(d.body) ? (
              <ul className="bullets">
                {d.body.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : (
              <p>{d.body}</p>
            )}
          </div>
        ))}

        <h4>Tech stack</h4>
        <div className="chips">
          {project.stack.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>

        {project.links?.length > 0 && (
          <div className="modal__links">
            {project.links.map((l) => (
              <a key={l.url} className="btn" href={l.url} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </dialog>
  )
}
