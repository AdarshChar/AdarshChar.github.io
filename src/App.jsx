import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import GithubRepos from './components/GithubRepos'
import Research from './components/Research'
import Resume from './components/Resume'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <GithubRepos />
        <Research />
        <Resume />
      </main>
      <Footer />
    </>
  )
}
