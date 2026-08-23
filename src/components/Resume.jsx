import { useState } from 'react'
import { motion } from 'framer-motion'
import { experience, portfolioItems, technicalSkills, education } from '../data/content'
import Icon from './Icons'

function ResumeBlock({ id, title, subtitle, isOpen, onToggle, children }) {
  return (
    <div className="resume-block">
      <button
        className="resume-block-header"
        onClick={() => onToggle(id)}
        aria-expanded={isOpen}
      >
        <span>
          <span className="resume-block-title">{title}</span>
          {subtitle && <span className="resume-block-subtitle">{subtitle}</span>}
        </span>
        <span className={`resume-block-chevron ${isOpen ? 'open' : ''}`}>
          <Icon name="chevron" size={18} />
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={{ overflow: 'hidden' }}
      >
        <div className="resume-block-body">{children}</div>
      </motion.div>
    </div>
  )
}

export default function Resume() {
  const [open, setOpen] = useState(() => new Set(['experience']))

  const toggle = (id) => {
    setOpen((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const projects = portfolioItems.filter((item) => item.category === 'Projects')

  return (
    <section id="resume" className="pdf-section alt-bg">
      <div className="container">
        <span className="section-label">06 · Resume</span>
        <h2 className="section-title">Resume</h2>

        <div className="resume-blocks">
            <ResumeBlock
              id="experience"
              title={experience.role}
              subtitle={`${experience.company} · ${experience.period}`}
              isOpen={open.has('experience')}
              onToggle={toggle}
            >
              <p className="experience-stack">{experience.stack}</p>
              <ul className="experience-bullets">
                {experience.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </ResumeBlock>

            <ResumeBlock
              id="projects"
              title="Projects"
              subtitle={`${projects.length} featured`}
              isOpen={open.has('projects')}
              onToggle={toggle}
            >
              <div className="resume-projects">
                {projects.map((project) => (
                  <div className="resume-project" key={project.id}>
                    <div className="portfolio-card-top">
                      <span className="portfolio-card-title">{project.title}</span>
                    </div>
                    <p className="portfolio-card-desc">{project.description}</p>
                    <div className="portfolio-card-tags">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        className="modal-link"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View project →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </ResumeBlock>

            <ResumeBlock
              id="skills"
              title="Technical Strengths"
              subtitle={`${technicalSkills.length} categories`}
              isOpen={open.has('skills')}
              onToggle={toggle}
            >
              <div className="skills-grid">
                {technicalSkills.map((group) => (
                  <div key={group.category}>
                    <span className="skills-category-label">{group.category}</span>
                    <div className="skills-tags">
                      {group.items.map((item) => (
                        <span className="tag" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ResumeBlock>

            <ResumeBlock
              id="education"
              title={education.school}
              subtitle={education.period}
              isOpen={open.has('education')}
              onToggle={toggle}
            >
              <p className="education-line">{education.degree}</p>
              <p className="education-line">{education.minor}</p>
              <p className="education-line">{education.gpa}</p>
            </ResumeBlock>
        </div>
      </div>
    </section>
  )
}
