import { languages, profile } from '../data/profile'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Bridging tech and business">
      <div className="about">
        <div className="about__text">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <aside className="card about__side">
          <h3>Languages</h3>
          <ul className="lang-list">
            {languages.map((l) => (
              <li key={l.name}>
                <span>{l.name}</span>
                <span className="muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}
