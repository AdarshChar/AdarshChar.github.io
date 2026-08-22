import { experience } from '../data/content'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <Reveal>
          <span className="section-label">02 · Where I've worked</span>
          <h2 className="section-title">Experience</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="experience-block">
            <div className="experience-header">
              <span className="experience-role">{experience.role}</span>
              <span className="experience-period">{experience.period}</span>
            </div>
            <a
              className="experience-company"
              href={experience.companyUrl}
              target="_blank"
              rel="noreferrer"
            >
              {experience.company}
            </a>
            <p className="experience-stack">{experience.stack}</p>
            <ul className="experience-bullets">
              {experience.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
