import { useEffect, useState } from 'react'

// Static PDFs are optional placeholders during development, so probe for the
// file before rendering an iframe pointed at a 404.
export default function usePdfExists(url) {
  const [exists, setExists] = useState(null) // null = checking, true/false = result

  useEffect(() => {
    let cancelled = false
    fetch(url, { method: 'HEAD' })
      .then((res) => {
        // Dev servers (and some static hosts) fall back to index.html with a
        // 200 for unknown paths, so a successful status alone isn't proof the
        // PDF exists — the content-type has to actually say so.
        const contentType = res.headers.get('content-type') || ''
        const isPdf = contentType.includes('pdf') || contentType.includes('octet-stream')
        if (!cancelled) setExists(res.ok && isPdf)
      })
      .catch(() => {
        if (!cancelled) setExists(false)
      })
    return () => {
      cancelled = true
    }
  }, [url])

  return exists
}
