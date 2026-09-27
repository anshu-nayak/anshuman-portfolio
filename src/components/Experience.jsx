import { experience } from '../data/profile'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I’ve worked" alt>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="timeline__item">
            <span className={`timeline__dot ${job.current ? 'is-current' : ''}`} />
            <article className="card">
              <div className="job__head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="job__company">
                    {job.company} <span className="muted">· {job.location}</span>
                  </p>
                </div>
                <span className={`badge ${job.current ? 'badge--accent' : ''}`}>{job.period}</span>
              </div>
              <ul className="bullets">
                {job.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <div className="chips">
                {job.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}
