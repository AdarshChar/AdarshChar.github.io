// Single source of truth for site content. Nothing else in src/ needs to change here.

export const profile = {
  name: 'Adarsh Charugundla',
  initials: 'AC',
  roles: [
    'DevOps Engineer',
    'Cloud Architect',
    'Software Developer',
    'Computer Scientist',
    'AI/ML Engineer',
  ],
  location: 'Boulder, Colorado',
  email: 'livingglitch321@gmail.com',
  photo: '/profile.jpg',
}

export const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/AdarshChar', icon: 'github' },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/adarsh-charugundla-76855924a/',
    icon: 'linkedin',
  },
  { label: 'Email', url: 'mailto:livingglitch321@gmail.com', icon: 'mail' },
]

export const about = {
  title: 'About Me',
  shortBio:
    'CS @ CU Boulder | Building with AI & VR | Seeking SWE / DevOps / Cloud roles | Python · AWS · Kubernetes',
  longBio: [
    'Computer Science & Engineering student at CU Boulder (Business minor), working in cloud infrastructure and DevOps.',
    'I build secure, multi-environment AWS with Terraform, run containerized workloads on Docker, ECR, and Kubernetes, and automate build, test, and release with GitHub Actions. Recent work includes an IAM least-privilege enforcement system that reduced overpermissioned roles from 4 to 0, and infrastructure spanning three isolated AWS environments.',
    'Focused on security automation, least-privilege IAM, and deployments.',
    'Open to DevOps, Cloud, and SRE roles.',
    'Interests: guitar, bass, drums, piano, music production, music engineering/mastering.',
  ],
  personalInfo: [
    { label: 'Location', value: 'Boulder, Colorado' },
    { label: 'Email', value: 'livingglitch321@gmail.com' },
    { label: 'Education', value: 'University of Colorado Boulder' },
  ],
}

export const GITHUB_USERNAME = 'AdarshChar'

export const portfolioCategories = ['All', 'Experience', 'Projects']

export const portfolioItems = [
  {
    id: 'skyit-devops-intern',
    category: 'Experience',
    title: 'DevOps Team Lead (Intern): SkyIT',
    period: 'Current',
    description:
      'Led deployment of secure, scalable AWS infrastructure as DevOps Team Lead. Directed Terraform IaC initiatives across three isolated VPC environments (LokoMotive, Aukai, Orion), automated RDS provisioning, and containerized full-stack apps via Docker/ECR.',
    tags: ['Terraform', 'AWS', 'OIDC', 'CI/CD', 'Docker', 'ECR'],
    link: 'https://skyit.services',
  },
  {
    id: 'nodejs-postgresql-api',
    category: 'Projects',
    title: 'NodeJS PostgreSQL API',
    period: '',
    description:
      'Built a RESTful API with Node.js and Express.js backed by PostgreSQL, implementing full CRUD across multiple endpoints with proper HTTP methods, status codes, and error handling. Applied SQL query optimization, connection pooling, and MVC architecture with custom middleware.',
    tags: ['Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'REST API'],
    link: 'https://github.com/AdarshChar/NodeJS',
  },
  {
    id: 'road-sign-detector',
    category: 'Projects',
    title: 'Road Sign Detector: YOLOv8 Transfer Learning Study',
    period: '2025',
    description:
      'Trained and compared two YOLOv8s models on a stratified 7,500-image subset of GTSRB (43 classes) to study the impact of harsh-condition augmentation on detection robustness. Built a custom Albumentations pipeline simulating night driving, motion blur, fog, and compression artifacts, improving mAP resilience on a synthetically degraded test set versus an unaugmented baseline.',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Albumentations', 'Google Colab'],
    link: 'https://github.com/AdarshChar/GTSDB-Roadsign-Classifier',
  },
]

export const experience = {
  role: 'DevOps Team Lead (Intern)',
  company: 'SkyIT',
  companyUrl: 'https://skyit.services',
  period: 'Current',
  stack: 'Terraform, AWS, OIDC, CI/CD',
  bullets: [
    'Led the deployment of secure, scalable AWS infrastructure for enterprise applications. Directed Infrastructure as Code (IaC) initiatives using Terraform to automate provisioning, optimize RDS architectures, and enforce strict network isolation via custom VPC configurations across all environments.',
    'Architected secure cloud networks: designed and implemented isolated Virtual Private Cloud (VPC) topologies utilizing custom CIDR blocks for the LokoMotive, Aukai, and Orion environments, ensuring robust network security and strict traffic segmentation.',
    'Automated database provisioning: configured and deployed highly resilient Relational Database Service (RDS) modules via Terraform, streamlining backend data management and establishing high-availability storage for mission-critical applications.',
    'Streamlined infrastructure deployment: authored comprehensive deployment documentation, Terraform variable (tfvars) configurations, and smoke testing procedures, significantly reducing manual configuration errors and accelerating new project onboarding.',
    'Cross-functional collaboration: partnered with engineering leads and deployment teams to coordinate seamless application migrations, orchestrate task scheduling, and manage secure container registries utilizing AWS ECR.',
    'Team leadership and orchestration: acted as DevOps Team Lead, coordinating with project leads and engineering teams to streamline application migrations and automate infrastructure workflows.',
    'Containerized full-stack applications: Dockerized frontend and backend repositories, built and tagged container images, and pushed them to AWS Elastic Container Registry (ECR) to enable consistent, repeatable deployments across environments.',
    'CI/CD pipeline integration: worked within existing CI/CD pipeline frameworks to automate build, test, and deployment stages, reducing manual intervention and ensuring stable, repeatable release processes across development and production environments.',
  ],
}

export const education = {
  school: 'University of Colorado Boulder',
  degree: 'B.A. in Computer Science & Engineering',
  minor: 'Minor in Business',
  gpa: 'Cumulative GPA: 3.6',
  period: 'May 2026',
}

export const technicalSkills = [
  {
    category: 'Computer Languages',
    items: ['C/C++', 'JavaScript (ES6, ES5)', 'TypeScript', 'Python', 'Bash', 'SQL', 'HTML/CSS', 'Scala'],
  },
  {
    category: 'Protocols & APIs',
    items: ['XML', 'JSON', 'Node.js', 'Express.js', 'REST API', 'HTTP/HTTPS'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'Microsoft SQL', 'Oracle'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Vim', 'Docker', 'xUnit', 'Jest', 'JUnit'],
  },
]

export const research = {
  title: 'Traffic Sign Detection Using YOLOv8',
  authors: 'Adarsh Charugundla',
  venue: 'Impact of Data Augmentation on GTSDB Detection Performance',
  summary:
    'Investigates the effect of image-based data augmentation (blur, brightness variation, additive noise) on a YOLOv8s model trained for traffic sign recognition on the German Traffic Sign Detection Benchmark (GTSDB). The augmented model improved mAP50 from 0.610 to 0.650 and recall by 31.3% (0.501 → 0.658) over the baseline, with no architecture changes.',
  pdfUrl: '/research-paper.pdf', // put your PDF at public/research-paper.pdf
}

