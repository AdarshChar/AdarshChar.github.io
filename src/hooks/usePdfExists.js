import { useEffect, useState } from 'react'

// Probes for the file before embedding it, to avoid a broken iframe.
export default function usePdfExists(url) {
  const [exists, setExists] = useState(null) // null = checking, true/false = result

  useEffect(() => {
    let cancelled = false
    fetch(url, { method: 'HEAD' })
      .then((res) => {
        // Dev servers return 200 for missing paths via SPA fallback: check content-type too.
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
