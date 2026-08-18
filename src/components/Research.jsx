import { research } from '../data/content'
import Reveal from './Reveal'
import PdfViewer from './PdfViewer'

export default function Research() {
  return (
    <section id="research" className="pdf-section">
      <div className="container">
        <Reveal>
          <span className="section-label">04 · Research</span>
          <h2 className="section-title">Research Paper</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="pdf-meta">
            <h3>{research.title}</h3>
            <span className="venue">
              {research.authors} — {research.venue}
            </span>
            <p>{research.summary}</p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <PdfViewer
            url={research.pdfUrl}
            placeholderText="No paper uploaded yet — drop your PDF at public/research-paper.pdf"
          />
        </Reveal>
      </div>
    </section>
  )
}
