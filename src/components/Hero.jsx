import { motion } from 'framer-motion'
import { profile, socialLinks } from '../data/content'
import Icon from './Icons'
import RotatingTagline from './RotatingTagline'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <motion.div
        className="container hero-content"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="hero-eyebrow">Hi, I'm</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-tagline">
          <RotatingTagline roles={profile.roles} />
        </p>
        <div className="hero-socials">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label={link.label}
            >
              <Icon name={link.icon} />
            </a>
          ))}
        </div>
      </motion.div>
      <div className="scroll-cue">
        <span>SCROLL</span>
        <div className="scroll-cue-line" />
      </div>
    </section>
  )
}
