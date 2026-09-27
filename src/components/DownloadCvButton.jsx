import { useState } from 'react'
import { profile } from '../data/profile'
import { DownloadIcon } from './Icons'

// Downloads profile.resumeUrl if one is set, otherwise builds the CV PDF from site data.
export default function DownloadCvButton({ className = 'btn', label = 'Download CV', compact = false }) {
  const [busy, setBusy] = useState(false)

  const onClick = async () => {
    if (busy) return
    setBusy(true)
    try {
      const { downloadCv } = await import('../utils/generateCv')
      await downloadCv()
    } catch (err) {
      console.error('CV generation failed', err)
      alert('Sorry, the CV could not be generated. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  const content = (
    <>
      <DownloadIcon width={18} height={18} />
      <span className={compact ? 'cv-btn__label' : undefined}>{busy ? 'Preparing…' : label}</span>
    </>
  )

  if (profile.resumeUrl) {
    return (
      <a className={className} href={profile.resumeUrl} download aria-label={label}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={className} onClick={onClick} disabled={busy} aria-label={label} aria-busy={busy}>
      {content}
    </button>
  )
}
