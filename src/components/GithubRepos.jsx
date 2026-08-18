import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GITHUB_USERNAME } from '../data/content'
import Reveal, { RevealGroup, revealItemVariants } from './Reveal'

export default function GithubRepos() {
  const [repos, setRepos] = useState([])
  const [profile, setProfile] = useState(null)
  const [status, setStatus] = useState('loading') // loading | ok | error

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
          ),
        ])
        if (!profileRes.ok || !reposRes.ok) throw new Error('GitHub API request failed')
        const profileData = await profileRes.json()
        const reposData = await reposRes.json()
        if (cancelled) return
        setProfile(profileData)
        setRepos(reposData.filter((r) => !r.fork))
        setStatus('ok')
      } catch (err) {
        if (!cancelled) setStatus('error')
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="github" className="github-section">
      <div className="container">
        <Reveal>
          <span className="section-label">03 · Open source</span>
          <h2 className="section-title">GitHub</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            className="github-profile-card"
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="github-profile-avatar"
              src={profile?.avatar_url ?? `https://github.com/${GITHUB_USERNAME}.png`}
              alt={GITHUB_USERNAME}
            />
            <div className="github-profile-meta">
              <div>@{GITHUB_USERNAME}</div>
              <span>github.com/{GITHUB_USERNAME} →</span>
            </div>
          </a>
        </Reveal>

        {status === 'loading' && <p className="repo-status">Loading repositories…</p>}
        {status === 'error' && (
          <p className="repo-status">
            Couldn't load repos right now — visit{' '}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--accent)' }}
            >
              github.com/{GITHUB_USERNAME}
            </a>{' '}
            directly.
          </p>
        )}

        {status === 'ok' && (
          <RevealGroup className="repo-grid">
            {repos.map((repo) => (
              <motion.a
                key={repo.id}
                variants={revealItemVariants}
                className="repo-card"
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="repo-card-name">{repo.name}</span>
                <p className="repo-card-desc">{repo.description || 'No description yet.'}</p>
                <div className="repo-card-meta">
                  {repo.language && <span>{repo.language}</span>}
                  <span>★ {repo.stargazers_count}</span>
                </div>
              </motion.a>
            ))}
          </RevealGroup>
        )}
      </div>
    </section>
  )
}
