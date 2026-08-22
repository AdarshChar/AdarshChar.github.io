import { experience } from '../data/content'
import Reveal from './Reveal'

export default function Experience() {
  return (
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
  )
}
