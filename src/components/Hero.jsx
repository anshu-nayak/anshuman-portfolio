import { profile } from '../data/profile'
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from './Icons'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__status">
            <span className="dot" /> {profile.availability}
          </p>
          <h1>
            Hi, I’m {profile.name.split(' ')[0]}.
            <span className="hero__role">{profile.role}</span>
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__summary">{profile.summary}</p>
          <p className="hero__loc">
            <PinIcon width={16} height={16} /> {profile.location}
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects">
              View projects <ArrowIcon width={18} height={18} />
            </a>
            <a className="btn" href={`mailto:${profile.contact.email}`}>
              <MailIcon width={18} height={18} /> Email me
            </a>
            {profile.resumeUrl && (
              <a className="btn" href={profile.resumeUrl} download>
                <DownloadIcon width={18} height={18} /> Résumé
              </a>
            )}
            <a className="btn btn--icon" href={profile.contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon width={18} height={18} />
            </a>
            {profile.contact.github && (
              <a className="btn btn--icon" href={profile.contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitHubIcon width={18} height={18} />
              </a>
            )}
          </div>
        </div>

        <div className="hero__card">
          {profile.photo ? (
            <img className="avatar avatar--photo" src={profile.photo} alt={profile.name} width="160" height="160" />
          ) : (
            <div className="avatar" aria-hidden="true">{profile.initials}</div>
          )}
          <div className="hero__stats">
            {profile.stats.map((s) => (
              <div key={s.label} className="stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
