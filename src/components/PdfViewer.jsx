import usePdfExists from '../hooks/usePdfExists'

export default function PdfViewer({ url, placeholderText }) {
  const exists = usePdfExists(url)

  if (exists === false) {
    return (
      <div className="pdf-placeholder">
        <p>{placeholderText}</p>
        <code>{url}</code>
      </div>
    )
  }

  return (
    <div className="pdf-viewer-frame">
      <iframe src={url} title="PDF viewer" />
    </div>
  )
}
