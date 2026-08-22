import { motion } from 'framer-motion'
import { profile, socialLinks } from '../data/content'
import Icon from './Icons'
import RotatingTagline from './RotatingTagline'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm
        </motion.p>
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <RotatingTagline roles={profile.roles} />
        </motion.p>
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
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
        </motion.div>
      </div>
      <div className="scroll-cue">
        <span>SCROLL</span>
        <div className="scroll-cue-line" />
      </div>
    </section>
  )
}
