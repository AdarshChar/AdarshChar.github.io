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
  location: 'Aurora, Colorado',
  email: 'charugundla.adarsh@gmail.com',
  photo: '/profile.jpg',
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
    { label: 'Location', value: 'Aurora, Colorado' },
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
    title: 'DevOps Engineer (Intern): SkyIT (GBCS Group)',
    period: 'Nov 2025 - Apr 2026',
    description:
      'Provisioned secure multi-environment AWS infrastructure with Terraform, containerized and orchestrated services on Kubernetes across dev/production, and built GitHub Actions CI/CD pipelines for repeatable releases.',
    tags: ['Terraform', 'AWS', 'Kubernetes', 'Docker', 'OIDC', 'CI/CD'],
    link: 'https://skyit.services',
  },
  {
    id: 'iam-least-privilege-audit',
    category: 'Projects',
    title: 'FrazyCorp IAM Least-Privilege Enforcement',
    period: '',
    description:
      'Terraform-managed IAM enforcement system for a simulated multi-department AWS environment, reducing overpermissioned roles from 4 to 0. Automated compliance auditing with AWS Config and IAM Access Analyzer, plus a GitHub Actions OIDC security gate blocking overpermissive policies pre-merge.',
    tags: ['Terraform', 'AWS IAM', 'AWS Config', 'Access Analyzer', 'GitHub Actions', 'Python', 'boto3'],
    link: 'https://github.com/AdarshChar/iam-least-privilege-audit',
  },
  {
    id: 'pr2-mobile-manipulation',
    category: 'Projects',
    title: 'Autonomous Mobile Manipulation (PR2)',
    period: '',
    description:
      'Programmed a PR2 robot to autonomously navigate a warehouse, grasp a target object, and transport it to a drop zone, implementing forward kinematics from Denavit-Hartenberg parameters and a gradient-descent IK solver over a numerically computed Jacobian. Designed a zone-based potential field navigation controller over live LiDAR for reliable obstacle avoidance.',
    tags: ['Python', 'Webots', 'NumPy', 'Robot Kinematics', 'LiDAR'],
    link: 'https://github.com/AdarshChar/pr2-mobile-manipulation',
  },
  {
    id: 'gtsdb-roadsign-classifier',
    category: 'Projects',
    title: 'Traffic Sign Detection System',
    period: '',
    description:
      'Fine-tuned YOLOv8s on GTSDB (443 annotated road-scene images, 43 classes), improving mAP@0.5 from 0.61 to 0.65 with a custom photometric augmentation pipeline, improving recall by 31.3% with no architectural changes.',
    tags: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'Roboflow', 'NumPy'],
    link: 'https://github.com/AdarshChar/GTSDB-Roadsign-Classifier',
  },
]

export const experience = {
  role: 'DevOps Engineer (Intern)',
  company: 'SkyIT (GBCS Group)',
  companyUrl: 'https://skyit.services',
  period: 'Nov 2025 - Apr 2026',
  stack: 'Terraform, AWS (VPC, RDS, ECR), Kubernetes, Docker, OIDC, CI/CD',
  bullets: [
    'Provisioned secure AWS infrastructure across three isolated environments (LokoMotive, Aukai, Orion) using Terraform IaC, designing custom VPC topologies with CIDR-level network segmentation.',
    'Containerized frontend and backend services with Docker and orchestrated them on Kubernetes across dev and production, managing ECR image delivery, pod scheduling, autoscaling, and service networking.',
    'Built GitHub Actions CI/CD pipelines automating build, test, and release stages, reducing manual intervention and ensuring repeatable releases across all environments.',
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
    category: 'Cloud & DevOps',
    items: ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'ECR', 'CI/CD', 'GitHub Actions', 'OIDC'],
  },
  {
    category: 'Languages & Web',
    items: ['Python', 'C/C++', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'Bash', 'React', 'Node.js'],
  },
  {
    category: 'Security & Data',
    items: ['IAM Least Privilege', 'AWS Config', 'Access Analyzer', 'Checkov', 'PostgreSQL', 'Git'],
  },
  {
    category: 'ML & Robotics',
    items: ['PyTorch', 'YOLOv8', 'ResNet', 'HuggingFace', 'OpenCV', 'NumPy', 'Webots', 'Roboflow'],
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

