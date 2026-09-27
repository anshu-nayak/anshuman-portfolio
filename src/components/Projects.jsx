import { useMemo, useState } from 'react'
import { projects } from '../data/profile'
import { ArrowIcon } from './Icons'
import ProjectModal from './ProjectModal'
import Section from './Section'
import StatusBadge from './StatusBadge'

export default function Projects() {
  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], [])
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <Section id="projects" eyebrow="Projects" title="Things I’ve built and studied">
      <div className="filters" role="tablist" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            className={`filter ${filter === c ? 'is-active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid--projects">
        {visible.map((p) => (
          <article key={p.id} className="card project">
            <div className="project__top">
              <span className="project__badges">
                <span className={`badge badge--${p.category.toLowerCase()}`}>{p.category}</span>
                {p.status && <StatusBadge status={p.status} />}
              </span>
              <span className="muted small">{p.client}</span>
            </div>
            <h3>{p.title}</h3>
            <p className="project__summary">{p.summary}</p>
            <div className="chips">
              {p.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
            <button className="link-btn" onClick={() => setActive(p)}>
              View details <ArrowIcon width={16} height={16} />
            </button>
          </article>
        ))}
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </Section>
  )
}
