import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} {profile.name}. Built with React + Vite, hosted on GitHub
        Pages.
      </div>
    </footer>
  )
}
