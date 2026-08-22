import { Fragment } from 'react'
import { profile, socialLinks, about } from '../data/content'
import Icon from './Icons'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <Reveal>
          <span className="section-label">01 · Get to know me</span>
          <h2 className="section-title">{about.title}</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={0.1}>
            <div className="about-photo-wrap">
              <div className="about-photo">
                {profile.photo ? (
                  <img src={profile.photo} alt={profile.name} />
                ) : (
                  <span className="about-photo-initials">{profile.initials}</span>
                )}
              </div>
              <div className="about-personal-info">
                <dl>
                  {about.personalInfo.map((item) => (
                    <Fragment key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </Fragment>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h3 className="about-body-title">{profile.name}</h3>
              <p className="about-short-bio">{about.shortBio}</p>

              <div className="about-socials">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-link"
                    aria-label={link.label}
                  >
                    <Icon name={link.icon} size={17} />
                  </a>
                ))}
              </div>

              <div className="about-long-bio">
                {about.longBio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
