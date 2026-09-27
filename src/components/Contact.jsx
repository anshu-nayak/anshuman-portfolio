import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from './Icons'
import Section from './Section'

export default function Contact() {
  const { email, phone, linkedin, github } = profile.contact
  const items = [
    { icon: <MailIcon />, label: 'Email', value: email, href: `mailto:${email}` },
    phone && { icon: <PhoneIcon />, label: 'Phone', value: phone, href: `tel:${phone.replace(/\s/g, '')}` },
    { icon: <LinkedInIcon />, label: 'LinkedIn', value: 'anshuman-nayak', href: linkedin, external: true },
    github && { icon: <GitHubIcon />, label: 'GitHub', value: github.replace('https://github.com/', ''), href: github, external: true },
  ].filter(Boolean)

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s work together" alt>
      <p className="contact__lead">
        I’m open to frontend engineering, data analytics and consulting roles, as well as freelance work and collaborations. The quickest way to reach me is email.
      </p>
      <div className="grid grid--contact">
        {items.map((it) => (
          <a
            key={it.label}
            className="card contact"
            href={it.href}
            {...(it.external ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            <span className="contact__icon">{it.icon}</span>
            <span>
              <span className="muted small">{it.label}</span>
              <strong className="contact__value">{it.value}</strong>
            </span>
          </a>
        ))}
      </div>
    </Section>
  )
}
