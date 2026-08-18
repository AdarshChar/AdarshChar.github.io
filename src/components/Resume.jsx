import { resume, profile } from '../data/content'
import Reveal from './Reveal'
import PdfViewer from './PdfViewer'

export default function Resume() {
  return (
    <section id="resume" className="pdf-section alt-bg">
      <div className="container">
        <Reveal>
          <span className="section-label">05 · Resume</span>
          <h2 className="section-title">Resume</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a className="pdf-download-btn" href={resume.pdfUrl} download>
            Download PDF
          </a>
        </Reveal>

        <Reveal delay={0.2} y={16}>
          <PdfViewer
            url={resume.pdfUrl}
            placeholderText={`No resume uploaded yet — drop ${profile.name.split(' ')[0]}'s PDF at public/resume.pdf`}
          />
        </Reveal>
      </div>
    </section>
  )
}
