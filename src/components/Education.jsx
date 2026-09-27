import { certifications, education, publications } from '../data/profile'
import { AwardIcon, BookIcon, CapIcon } from './Icons'
import Section from './Section'

const MaybeLink = ({ url, children }) =>
  url ? (
    <a href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    children
  )

export default function Education() {
  return (
    <Section id="education" eyebrow="Education & Credentials" title="Qualifications">
      <div className="grid grid--edu">
        {education.map((e) => (
          <article key={e.degree} className="card edu">
            <span className="edu__icon"><CapIcon /></span>
            <span className="badge">{e.period}</span>
            <h3>{e.degree}</h3>
            <p className="job__company">
              {e.school} <span className="muted">· {e.location}</span>
            </p>
            {e.note && <p className="muted small">{e.note}</p>}
          </article>
        ))}
      </div>

      <div className="creds">
        <div className="card">
          <h3 className="creds__title"><AwardIcon /> Certifications</h3>
          <ul className="cred-list">
            {certifications.map((c) => (
              <li key={c.title}>
                <MaybeLink url={c.url}>
                  <strong>{c.title}</strong>
                </MaybeLink>
                <span className="muted small">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3 className="creds__title"><BookIcon /> Publications</h3>
          <ul className="cred-list">
            {publications.map((p) => (
              <li key={p.title}>
                <MaybeLink url={p.url}>
                  <strong>{p.title}</strong>
                </MaybeLink>
                <span className="muted small">{p.venue}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
