import { skills } from '../data/profile'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with" alt>
      <div className="grid grid--skills">
        {skills.map((g) => (
          <div key={g.group} className="card">
            <h3 className="skill__title">{g.group}</h3>
            <div className="chips">
              {g.items.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
