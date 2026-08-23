import { research } from '../data/content'
import PdfViewer from './PdfViewer'

export default function Research() {
  return (
    <section id="research" className="pdf-section">
      <div className="container">
        <span className="section-label">05 · Research</span>
        <h2 className="section-title">Research Paper</h2>

        <div className="pdf-meta">
          <h3>{research.title}</h3>
          <span className="venue">
            {research.authors}: {research.venue}
          </span>
          <p>{research.summary}</p>
        </div>

        <PdfViewer
          url={research.pdfUrl}
          placeholderText="No paper uploaded yet: drop your PDF at public/research-paper.pdf"
        />
      </div>
    </section>
  )
}
