// ---------------------------------------------------------------------------
// All placeholder content lives here. Replace the values below with your
// real info — nothing else in src/ needs to change for a content update.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Adarsh Char',
  initials: 'AC',
  tagline: 'Software Engineer & Builder',
  location: 'Placeholder, USA',
  email: 'you@example.com',
  photo: null, // put a file at public/profile.jpg and set this to '/profile.jpg'
}

export const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/AdarshChar', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/PLACEHOLDER', icon: 'linkedin' },
  { label: 'Email', url: 'mailto:you@example.com', icon: 'mail' },
  { label: 'X', url: 'https://x.com/PLACEHOLDER', icon: 'x' },
]

export const about = {
  title: 'About Me',
  shortBio:
    'Placeholder short bio — one or two sentences that summarize who you are and what you do.',
  longBio: [
    'Placeholder paragraph one of your longer about-me section. Talk about your background, what got you into software/research, and what drives you.',
    'Placeholder paragraph two. Talk about your current focus, interests, or what you are looking for next (roles, collaborations, etc.).',
  ],
  personalInfo: [
    { label: 'Location', value: 'Placeholder, USA' },
    { label: 'Email', value: 'you@example.com' },
    { label: 'Education', value: 'Placeholder University' },
  ],
}

export const GITHUB_USERNAME = 'AdarshChar'

export const portfolioCategories = ['All', 'Experience', 'Projects']

export const portfolioItems = [
  {
    id: 'placeholder-exp-1',
    category: 'Experience',
    title: 'Placeholder Role — Company Name',
    period: '20XX — Present',
    description: 'Placeholder description of what you did in this role and its impact.',
    tags: ['Placeholder', 'Tag'],
    link: null,
  },
  {
    id: 'placeholder-proj-1',
    category: 'Projects',
    title: 'Placeholder Project One',
    period: '20XX',
    description: 'Placeholder description of the project, the problem it solves, and tech used.',
    tags: ['React', 'Node'],
    link: 'https://github.com/AdarshChar',
  },
  {
    id: 'placeholder-proj-2',
    category: 'Projects',
    title: 'Placeholder Project Two',
    period: '20XX',
    description: 'Another placeholder project description — swap in your real work here.',
    tags: ['Python', 'ML'],
    link: 'https://github.com/AdarshChar',
  },
]

export const research = {
  title: 'Placeholder Research Paper Title',
  authors: 'Adarsh Char, et al.',
  venue: 'Placeholder Conference/Journal, 20XX',
  summary:
    'Placeholder one-paragraph summary of the research paper — what problem it addresses and what the contribution is.',
  pdfUrl: '/research-paper.pdf', // put your PDF at public/research-paper.pdf
}

export const resume = {
  pdfUrl: '/resume.pdf', // put your PDF at public/resume.pdf
}
