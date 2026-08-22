// ---------------------------------------------------------------------------
// All real content lives here. Edit this file for text/link updates —
// nothing else in src/ needs to change for a content update.
// ---------------------------------------------------------------------------

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
  location: 'Colorado',
  email: 'charugundla.adarsh@gmail.com',
  photo: null, // put a file at public/profile.jpg and set this to '/profile.jpg'
}

export const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/AdarshChar', icon: 'github' },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/adarsh-charugundla-76855924a/',
    icon: 'linkedin',
  },
  { label: 'Email', url: 'mailto:charugundla.adarsh@gmail.com', icon: 'mail' },
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
    { label: 'Location', value: 'Colorado' },
    { label: 'Email', value: 'charugundla.adarsh@gmail.com' },
    { label: 'Education', value: 'University of Colorado Boulder' },
  ],
}

export const GITHUB_USERNAME = 'AdarshChar'

export const portfolioCategories = ['All', 'Experience', 'Projects']

export const portfolioItems = [
  {
    id: 'skyit-devops-intern',
    category: 'Experience',
    title: 'DevOps Engineer (Intern) — SkyIT (GBCS Group)',
    period: 'Dec 2025 — Apr 2026',
    description:
      'Provisioned secure multi-environment AWS infrastructure with Terraform, containerized services with Docker/ECR, orchestrated Kubernetes workloads, and built GitHub Actions CI/CD pipelines.',
    tags: ['Terraform', 'AWS', 'Kubernetes', 'Docker', 'OIDC', 'CI/CD'],
    link: 'https://skyit.services',
  },
  {
    id: 'iam-least-privilege-audit',
    category: 'Projects',
    title: 'FrazyCorp IAM Least-Privilege Enforcement',
    period: '',
    description:
      'Terraform-managed IAM enforcement system for a simulated multi-department AWS environment, reducing overpermissioned roles from 4 to 0. Automated compliance auditing with AWS Config and IAM Access Analyzer, plus a GitHub Actions OIDC security gate blocking overpermissive policies before they reach AWS.',
    tags: ['Terraform', 'AWS IAM', 'AWS Config', 'GitHub Actions', 'Python', 'boto3'],
    link: 'https://github.com/AdarshChar/iam-least-privilege-audit',
  },
  {
    id: 'gtsdb-roadsign-classifier',
    category: 'Projects',
    title: 'Traffic Sign Detection System',
    period: '',
    description:
      'Trained YOLOv8n on the GTSDB dataset (43 classes), improving recall by 31.3% via a custom photometric augmentation pipeline. Built a preprocessing pipeline converting PPM annotations to YOLO format across 852 ground-truth entries.',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Roboflow', 'NumPy'],
    link: 'https://github.com/AdarshChar/GTSDB-Roadsign-Classifier',
  },
]

export const experience = {
  role: 'DevOps Engineer (Intern)',
  company: 'SkyIT (GBCS Group)',
  companyUrl: 'https://skyit.services',
  period: 'Dec 2025 — Apr 2026',
  stack: 'Terraform, AWS (VPC, RDS, ECR), Kubernetes, Docker, OIDC, CI/CD',
  bullets: [
    'Provisioned secure AWS infrastructure across three isolated environments (LokoMotive, Aukai, Orion) using Terraform IaC, designing custom VPC topologies with CIDR-level network segmentation.',
    'Automated RDS deployments via reusable Terraform modules, authoring tfvars configurations and smoke-testing procedures that standardized provisioning, ensured high-availability storage, and reduced manual configuration errors.',
    'Containerized frontend and backend services with Docker, building, tagging, and managing images through secure ECR pipelines for consistent deployments across all environments.',
    'Built GitHub Actions CI/CD pipelines to automate build, test, and release stages, reducing manual intervention and ensuring stable, repeatable releases across all environments.',
    'Orchestrated containerized workloads on Kubernetes across development and production, deploying via Docker images and ECR pipelines while managing pod scheduling, autoscaling, and service networking for reliable releases.',
  ],
}

export const research = {
  title: 'Traffic Sign Detection Using YOLOv8',
  authors: 'Adarsh Charugundla',
  venue: 'Impact of Data Augmentation on GTSDB Detection Performance',
  summary:
    'Investigates the effect of image-based data augmentation (blur, brightness variation, additive noise) on a YOLOv8s model trained for traffic sign recognition on the German Traffic Sign Detection Benchmark (GTSDB). The augmented model improved mAP50 from 0.610 to 0.650 and recall by 31.3% (0.501 → 0.658) over the baseline, with no architecture changes.',
  pdfUrl: '/research-paper.pdf', // put your PDF at public/research-paper.pdf
}

export const resume = {
  pdfUrl: '/resume.pdf', // put your PDF at public/resume.pdf
}
