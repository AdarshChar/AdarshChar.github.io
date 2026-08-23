import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { portfolioCategories, portfolioItems } from '../data/content'

export default function Portfolio() {
  const [category, setCategory] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered =
    category === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === category)

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <span className="section-label">03 · What I've built</span>
        <h2 className="section-title">Portfolio</h2>

        <div className="portfolio-filters">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${category === cat ? 'active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                className="portfolio-card"
                onClick={() => setSelected(item)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <div className="portfolio-card-top">
                  <span className="portfolio-card-title">{item.title}</span>
                  <span className="portfolio-card-period">{item.period}</span>
                </div>
                <p className="portfolio-card-desc">{item.description}</p>
                <div className="portfolio-card-tags">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setSelected(null)}
          >
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelected(null)}>
                ×
              </button>
              <span className="section-label">{selected.category}</span>
              <h3 className="about-body-title">{selected.title}</h3>
              <p className="portfolio-card-period">{selected.period}</p>
              <p className="pdf-meta" style={{ marginTop: 12 }}>
                {selected.description}
              </p>
              <div className="portfolio-card-tags">
                {selected.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {selected.link && (
                <a
                  className="modal-link"
                  href={selected.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View more →
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
