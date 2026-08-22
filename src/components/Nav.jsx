import { useEffect, useState } from 'react'
import useActiveSection from '../hooks/useActiveSection'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'github', label: 'GitHub' },
  { id: 'research', label: 'Research' },
  { id: 'resume', label: 'Resume' },
]

// Hoisted so this array has a stable reference across renders — passing a
// fresh array to useActiveSection every render would tear down and rebuild
// its IntersectionObserver on every render, which can drop updates.
const SECTION_IDS = SECTIONS.map((s) => s.id)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <span className="nav-logo">AC.</span>
        <button className="nav-toggle" onClick={() => setOpen((o) => !o)}>
          {open ? 'close' : 'menu'}
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <button
                className={active === s.id ? 'active' : ''}
                onClick={() => scrollTo(s.id)}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
