import { certifications, education, experience, languages, profile, projects, publications, skills } from '../data/profile'

// Builds an A4 PDF CV from the same data the website renders, so the two
// never drift apart. jsPDF is loaded on demand to keep the page bundle small.

const PAGE_W = 210
const PAGE_H = 297
const M = 16 // page margin (mm)
const CONTENT_W = PAGE_W - M * 2

const ACCENT = [79, 70, 229]
const TEXT = [15, 23, 42]
const MUTED = [91, 100, 119]
const RULE = [226, 230, 239]

// Built-in PDF fonts only cover Latin-1, so swap typographic characters for plain ones
const clean = (s) =>
  String(s)
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/→/g, '->')
    .replace(/…/g, '...')

export async function downloadCv() {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  let y = M

  const setFont = (size, style = 'normal', color = TEXT) => {
    doc.setFont('helvetica', style)
    doc.setFontSize(size)
    doc.setTextColor(...color)
  }
  const lineH = (size) => size * 0.42 // mm per line for a given pt size

  const ensure = (h) => {
    if (y + h > PAGE_H - M - 6) {
      doc.addPage()
      y = M
    }
  }

  const paragraph = (text, { size = 9.5, style = 'normal', color = TEXT, indent = 0, gap = 1.5 } = {}) => {
    setFont(size, style, color)
    const lines = doc.splitTextToSize(clean(text), CONTENT_W - indent)
    lines.forEach((ln) => {
      ensure(lineH(size))
      doc.text(ln, M + indent, y + lineH(size) * 0.8)
      y += lineH(size)
    })
    y += gap
  }

  const bullet = (text, size = 9.5) => {
    setFont(size)
    const lines = doc.splitTextToSize(clean(text), CONTENT_W - 5)
    ensure(lineH(size))
    doc.setFillColor(...ACCENT)
    doc.circle(M + 1.3, y + lineH(size) * 0.5, 0.55, 'F')
    lines.forEach((ln) => {
      ensure(lineH(size))
      doc.text(ln, M + 5, y + lineH(size) * 0.8)
      y += lineH(size)
    })
    y += 0.8
  }

  const heading = (title) => {
    ensure(28) // keep the heading with the first entry below it
    y += 3
    setFont(11, 'bold', ACCENT)
    doc.text(title.toUpperCase(), M, y + 4)
    y += 6
    doc.setDrawColor(...RULE)
    doc.setLineWidth(0.3)
    doc.line(M, y, PAGE_W - M, y)
    y += 3
  }

  // Title line on the left with a right-aligned date on the same baseline
  const titleRow = (left, right, size = 10.5) => {
    ensure(lineH(size) + 16) // keep the title with at least a couple of lines below it
    setFont(size, 'bold')
    const rightW = right ? doc.getTextWidth(clean(right)) + 4 : 0
    const lines = doc.splitTextToSize(clean(left), CONTENT_W - rightW)
    if (right) {
      setFont(9, 'normal', MUTED)
      doc.text(clean(right), PAGE_W - M, y + lineH(size) * 0.8, { align: 'right' })
      setFont(size, 'bold')
    }
    lines.forEach((ln) => {
      doc.text(ln, M, y + lineH(size) * 0.8)
      y += lineH(size)
    })
    y += 0.5
  }

  // ---------- Header ----------
  setFont(22, 'bold')
  doc.text(clean(profile.name), M, y + 8)
  y += 11
  setFont(11.5, 'bold', ACCENT)
  doc.text(clean(`${profile.role}  |  ${profile.tagline}`), M, y + 4)
  y += 7

  const { email, phone, linkedin, github } = profile.contact
  const contacts = [
    { text: email, url: `mailto:${email}` },
    phone && { text: phone },
    { text: profile.location },
    { text: linkedin.replace(/^https?:\/\/(www\.)?/, ''), url: linkedin },
    github && { text: github.replace(/^https?:\/\//, ''), url: github },
  ].filter(Boolean)

  setFont(9, 'normal', MUTED)
  let x = M
  contacts.forEach((c, i) => {
    const t = clean(c.text)
    const w = doc.getTextWidth(t)
    const sepW = doc.getTextWidth('   |   ')
    if (x + w > PAGE_W - M) {
      x = M
      y += lineH(9) + 0.5
    }
    if (c.url) doc.textWithLink(t, x, y + 3, { url: c.url })
    else doc.text(t, x, y + 3)
    x += w
    if (i < contacts.length - 1) {
      doc.text('   |   ', x, y + 3)
      x += sepW
    }
  })
  y += 6

  const site = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : ''
  if (site.startsWith('http') && !site.includes('localhost')) {
    setFont(9, 'normal', MUTED)
    doc.text('Portfolio: ', M, y + 3)
    const lw = doc.getTextWidth('Portfolio: ')
    doc.setTextColor(...ACCENT)
    doc.textWithLink(site.replace(/^https?:\/\//, ''), M + lw, y + 3, { url: site })
    y += 6
  }

  // ---------- Summary ----------
  heading('Professional Summary')
  paragraph(profile.summary)

  // ---------- Skills ----------
  heading('Technical Skills')
  skills.forEach((g) => {
    setFont(9.5, 'bold')
    const label = `${clean(g.group)}: `
    const labelW = doc.getTextWidth(label) + 1.2
    setFont(9.5)
    const lines = doc.splitTextToSize(clean(g.items.join(', ')), CONTENT_W - labelW)
    ensure(lineH(9.5) * lines.length)
    setFont(9.5, 'bold')
    doc.text(label, M, y + lineH(9.5) * 0.8)
    setFont(9.5)
    lines.forEach((ln, i) => {
      doc.text(ln, M + labelW, y + lineH(9.5) * 0.8)
      y += lineH(9.5)
      if (i === 0 && lines.length > 1) ensure(lineH(9.5))
    })
    y += 1
  })

  // ---------- Experience ----------
  heading('Professional Experience')
  experience.forEach((job) => {
    titleRow(job.role, job.period)
    paragraph(`${job.company}  ·  ${job.location}`, { size: 9.5, color: MUTED, gap: 1 })
    job.points.forEach((p) => bullet(p))
    y += 2
  })

  // ---------- Projects ----------
  heading('Key Projects')
  projects.forEach((p) => {
    titleRow(p.title, p.status ? `${p.category} · ${p.status}` : p.category, 10)
    paragraph(`${p.client}  ·  ${p.stack.join(', ')}`, { size: 8.5, style: 'italic', color: MUTED, gap: 1 })
    paragraph(p.summary, { gap: 1 })
    p.highlights.forEach((h) => bullet(h, 9))
    p.links?.forEach((l) => {
      setFont(8.5, 'normal', ACCENT)
      ensure(lineH(8.5))
      doc.textWithLink(clean(l.url.replace(/^https?:\/\//, '')), M + 5, y + lineH(8.5) * 0.8, { url: l.url })
      y += lineH(8.5) + 0.5
    })
    y += 2
  })

  // ---------- Education ----------
  heading('Education')
  education.forEach((e) => {
    titleRow(e.degree, e.period, 10)
    paragraph(`${e.school}  ·  ${e.location}`, { size: 9.5, color: MUTED, gap: 0.5 })
    if (e.note) paragraph(e.note, { size: 9, gap: 2 })
  })

  // ---------- Certifications & Publications ----------
  heading('Certifications')
  certifications.forEach((c) => bullet(`${c.title} - ${c.issuer}`, 9.5))

  if (publications.length) {
    heading('Publications')
    publications.forEach((p) => bullet(`${p.title} - ${p.venue}`, 9.5))
  }

  // ---------- Languages ----------
  heading('Languages')
  paragraph(languages.map((l) => `${l.name} - ${l.level}`).join('   |   '))

  // ---------- Footer: page numbers ----------
  const pages = doc.getNumberOfPages()
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i)
    setFont(8, 'normal', MUTED)
    doc.text(`${clean(profile.name)}  -  CV`, M, PAGE_H - 8)
    doc.text(`Page ${i} of ${pages}`, PAGE_W - M, PAGE_H - 8, { align: 'right' })
  }

  doc.setProperties({ title: `${profile.name} - CV`, author: profile.name, subject: profile.role })
  doc.save(`${profile.name.replace(/\s+/g, '_')}_CV.pdf`)
}
