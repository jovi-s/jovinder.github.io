type Project = {
  name: string
  description: string
  link: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Education = {
  school: string
  degree: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Skill = {
  name: string
}

type Conference = {
  name: string
  link: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'MRT Train Door Spotter Bot',
    description:
      'Telegram bot that recommends the door to stand at to exit the train seamlessly.',
    link: 'http://t.me/door_spotter_bot',
    id: 'project1',
  },
  {
    name: 'Climate Crisis Dashboard',
    description: 'A dashboard to track the climate crisis.',
    link: 'http://trackourclimate.com/',
    id: 'project2',
  },
  {
    name: 'Singapore COP29 Youth Delegation Report',
    description: 'Authored the Carbon Tax Rebates and Digital Technologies subsections.',
    link: 'https://drive.google.com/file/d/1WaB65ySWRLhENUX6VHrDHm7wCtIDw9TC/view',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Proofpoint',
    title: 'AI Engineer',
    start: '2023',
    end: 'Present',
    link: 'https://www.proofpoint.com/us',
    id: 'work1',
  },
  {
    company: 'IBM',
    title: 'Senior Data Scientist',
    start: '2022',
    end: '2022',
    link: 'https://www.ibm.com/us-en',
    id: 'work2',
  },
  {
    company: 'AI Singapore',
    title: 'AI Apprentice',
    start: '2021',
    end: '2021',
    link: 'https://aisingapore.org/',
    id: 'work3',
  },
  {
    company: 'Henkel',
    title: 'Data Scientist',
    start: '2019',
    end: '2021',
    link: 'https://www.henkel.com/',
    id: 'work4',
  },
  {
    company: 'Wunderman Thompson',
    title: 'Data Analyst',
    start: '2018',
    end: '2019',
    link: 'https://www.vml.com/singapore',
    id: 'work5',
  },
]

export const EDUCATION: Education[] = [
  {
    school: 'National University of Singapore',
    degree: 'Master of Science in Mathematics',
    start: '2020',
    end: '2024',
    link: 'https://www.math.nus.edu.sg/pg/msc-cwk/',
    id: 'education1',
  },
  {
    school: 'Brock University',
    degree: 'Bachelor of Science (Honours) in Mathematics',
    start: '2012',
    end: '2016',
    link: 'https://brocku.ca/mathematics-science/mathematics/mica-mathematics-integrated-with-computers-and-applications/',
    id: 'education2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Predicting Gold Prices with AI',
    description: 'Time series forecasting with Prophet',
    link: '/blog/gold-price-prediction',
    uid: 'blog-1',
  },
  {
    title: 'Relevant keywords from job descriptions',
    description:
      'Extracting keywords from job descriptions that are relevant to the job title',
    link: '/blog/job-description-keywords',
    uid: 'blog-2',
  },
  {
    title: 'Supermarket Product Detection',
    description:
      'Object detection in a supermarket using YOLO',
    link: '/blog/supermarket-object-detection',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/jovi-s',
  },
  {
    label: 'Website',
    link: 'https://linktr.ee/sjove',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jovindersingh/',
  },
]

export const EMAIL = 'jovinder@yahoo.com'

export const SKILLS: Skill[] = [
  {
    name: 'Python',
  },
  {
    name: 'Machine Learning',
  },
  {
    name: 'Deep Learning',
  },
  {
    name: 'Computer Vision',
  },
  {
    name: 'NLP',
  },
  {
    name: 'Data Science',
  },
  {
    name: 'Next.js',
  },
  {
    name: 'Data Analytics',
  },
  {
    name: 'Data Engineering',
  },
  {
    name: 'Data Visualization',
  },
  {
    name: 'Model Deployment',
  },
  {
    name: 'Model Evaluation',
  },
  {
    name: 'Exploratory Data Analysis',
  },
  {
    name: 'Model Interpretability',
  },
  {
    name: 'Model Optimization',
  },
  {
    name: 'Feature Engineering',
  },
  {
    name: 'Transfer Learning',
  },
  {
    name: 'Model Fine-tuning',
  },
  {
    name: 'Unsupervised Learning',
  },
  {
    name: 'HTML',
  },
  {
    name: 'PySpark',
  },
  {
    name: 'Databricks',
  },
  {
    name: 'AWS',
  },
  {
    name: 'Docker',
  }
]

export const CONFERENCES: Conference[] = [
  {
    name: 'ICLR 2025',
    link: 'https://iclr.cc/',
    id: 'conference1',
  },
  {
    name: 'UNFCCC COP29 2024',
    link: 'https://unfccc.int/cop29',
    id: 'conference2',
  },
  {
    name: 'Singapore Fintech Festival 2022',
    link: 'https://www.visitsingapore.com/mice/en/why-singapore/success-stories/singapore-fintech-festival-2022/',
    id: 'conference3',
  },
]
