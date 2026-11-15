import { 
  PersonalInfo, 
  EducationItem, 
  SkillItem, 
  ProjectItem, 
  CertificationItem, 
  AchievementItem 
} from '../types/portfolio';

/**
 * ============================================================================
 * PERSONAL PORTFOLIO CONFIGURATION & DATA
 * Customize your details, projects, certificates, and resume path here.
 * ============================================================================
 */

export const personalData: PersonalInfo = {
  fullName: "BODLA NAGABHARGAVI",
  title: "Aspiring Software Developer",
  degree: "B.Tech",
  branch: "Information Technology",
  college: "Sridevi Women's Engineering College",
  cgpa: "8.99",
  location: "Hyderabad, Telangana, India",
  email: "your.email@example.com", // EDITABLE: Replace with your actual email
  githubUrl: "https://github.com",   // EDITABLE: Replace with your GitHub profile
  linkedinUrl: "https://linkedin.com", // EDITABLE: Replace with your LinkedIn profile
  
  // EDITABLE RESUME PATH: Place your resume PDF in the /public folder (e.g., public/resume.pdf)
  resumePath: "/resume.pdf",

  // EDITABLE PHOTO PATH: Place your profile picture in public folder or supply an image URL
  avatarPlaceholderUrl: "/profile.jpg", 

  tagline: "Dedicated Information Technology student with a strong academic foundation (8.99 CGPA) and a drive for engineering robust software solutions.",
  
  bioIntroduction: 
    "I am an Information Technology student at Sridevi Women's Engineering College with an 8.99 CGPA and an aspiring software developer. Driven by curiosity and a commitment to continuous learning, I focus on building solid software foundations using Python, Java, HTML, CSS, and exploring data analytics.",

  aboutDetails: [
    "Currently pursuing my B.Tech degree in Information Technology with a strong academic record (8.99 CGPA) at Sridevi Women's Engineering College.",
    "Passionate about core programming languages like Java and Python, modern web development standards, and analytical problem-solving.",
    "Eager to contribute to software engineering projects, collaborate with development teams, and develop scalable and impactful technology solutions."
  ],

  interests: [
    "Software Development",
    "Object-Oriented Programming (Java)",
    "Python Programming",
    "Web Development (HTML & CSS)",
    "Basic Data Analytics & Insights",
    "Algorithm Design & Problem Solving"
  ]
};

/**
 * EDUCATION SECTION DATA
 */
export const educationList: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.Tech – Information Technology",
    institution: "Sridevi Women's Engineering College",
    branch: "Information Technology",
    cgpaOrGrade: "CGPA: 8.99",
    description: "Pursuing Bachelor of Technology in Information Technology with a strong academic foundation (8.99 CGPA) focusing on software development and computer science core subjects.",
    isCompleted: false
  },
  {
    id: "edu-2",
    degree: "Intermediate (10+2)",
    institution: "SRIMEDHA JUNIOR COLLEGE",
    cgpaOrGrade: "Result: 950 Marks",
    description: "Completed intermediate education with academic distinction scoring 950 marks.",
    isCompleted: true
  },
  {
    id: "edu-3",
    degree: "Secondary School Certificate (SSC)",
    institution: "AKSHAYA IIT FOUNDATION SCHOOL",
    cgpaOrGrade: "Result: 10 GPA",
    description: "Completed secondary school certification with a perfect academic score of 10 GPA.",
    isCompleted: true
  }
];

/**
 * TECHNICAL SKILLS
 * Strictly displaying: HTML, CSS, Python, Java, Basic Data Analytics.
 * Note: Skill percentages are NOT invented per instructions.
 */
export const technicalSkills: SkillItem[] = [
  {
    name: "Python",
    category: "Programming Languages",
    icon: "code",
    description: "Versatile programming language used for scripting, algorithmic problem solving, logic building, and foundational data processing."
  },
  {
    name: "Java",
    category: "Programming Languages",
    icon: "coffee",
    description: "Object-oriented programming language applying core concepts such as OOP, classes, inheritance, polymorphism, and modular design."
  },
  {
    name: "HTML",
    category: "Web Technologies",
    icon: "layout",
    description: "Semantic markup language structuring modern web pages, accessible content, tables, and document hierarchies."
  },
  {
    name: "CSS",
    category: "Web Technologies",
    icon: "palette",
    description: "Cascading style sheets for crafting responsive layouts, visual aesthetics, color themes, and modern UI designs."
  },
  {
    name: "Basic Data Analytics",
    category: "Data & Analytics",
    icon: "bar-chart",
    description: "Foundational techniques in understanding datasets, data exploration, pattern identification, and extracting analytical insights."
  }
];

/**
 * PROJECTS SECTION
 * Clean, structured, editable placeholders so you can easily paste your real project details.
 * (No completed projects were invented).
 */
export const projectPlaceholders: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Software Project Placeholder #1",
    description: "Editable placeholder for your primary academic or personal software project. Describe the problem your project solves, key features implemented, and architecture highlights.",
    technologies: ["Python", "HTML", "CSS"],
    githubUrl: "https://github.com/your-username/project-one",
    liveDemoUrl: "#",
    isPlaceholder: true,
    statusBadge: "Project Template"
  },
  {
    id: "proj-2",
    title: "Java Application Placeholder #2",
    description: "Editable placeholder for an Object-Oriented Java project or application. Detail your class structure, algorithms utilized, or user interface.",
    technologies: ["Java", "OOP Concepts"],
    githubUrl: "https://github.com/your-username/project-two",
    liveDemoUrl: "#",
    isPlaceholder: true,
    statusBadge: "Project Template"
  },
  {
    id: "proj-3",
    title: "Data Analytics / Web Project Placeholder #3",
    description: "Editable placeholder for a data exploration or web dashboard project. Describe your dataset, visualization approach, and findings.",
    technologies: ["Python", "Data Analytics", "HTML/CSS"],
    githubUrl: "https://github.com/your-username/project-three",
    liveDemoUrl: "#",
    isPlaceholder: true,
    statusBadge: "Project Template"
  }
];

/**
 * CERTIFICATIONS SECTION
 * Displaying all available certificate files from public/certificates/
 */
export const certificationPlaceholders: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Introduction to HTML",
    organization: "Sololearn",
    date: "07 September, 2025",
    certificateLink: "/certificates/sololearnhtml.jpeg",
    certificateId: "CC-1CN9BUNP",
    imagePreview: "/certificates/sololearnhtml.jpeg",
    isPlaceholder: false
  },
  {
    id: "cert-2",
    title: "Introduction to CSS",
    organization: "Sololearn",
    date: "16 September, 2025",
    certificateLink: "/certificates/sololearncss.jpeg",
    certificateId: "CC-NZCE3RPD",
    imagePreview: "/certificates/sololearncss.jpeg",
    isPlaceholder: false
  },
  {
    id: "cert-3",
    title: "Java Course - Mastering the Fundamentals",
    organization: "Scaler Topics",
    date: "01 September 2026",
    certificateLink: "/certificates/j.jpeg",
    imagePreview: "/certificates/j.jpeg",
    isPlaceholder: false
  },
  {
    id: "cert-4",
    title: "AI Foundation",
    organization: "Hexart.In (Hexagon & Li2 Edu)",
    date: "14 Sep 2025",
    certificateLink: "/certificates/aifoundation.jpeg",
    certificateId: "68c6572311dbc6fa210cc9b9",
    imagePreview: "/certificates/aifoundation.jpeg",
    isPlaceholder: false
  }
];

export const certificationsList = certificationPlaceholders;

/**
 * ACHIEVEMENTS SECTION
 * Clean, editable achievement placeholders.
 * (No achievements were invented).
 */
export const achievementPlaceholders: AchievementItem[] = [
  {
    id: "achieve-1",
    title: "Academic Achievement – 8.99 CGPA Milestone",
    category: "Academic Excellence",
    date: "B.Tech Undergraduation",
    description: "Consistently maintained high academic standing with an 8.99 CGPA in Information Technology at Sridevi Women's Engineering College.",
    isPlaceholder: false
  },
  {
    id: "achieve-2",
    title: "Technical Hackathon / Coding Contest (Placeholder)",
    category: "Coding & Competitions",
    date: "Year / Event Date",
    description: "Editable placeholder: Detail your participation or rank in coding competitions, college hackathons, or project presentations.",
    isPlaceholder: true
  },
  {
    id: "achieve-3",
    title: "Workshop Participation / Seminar Presentation (Placeholder)",
    category: "Workshops & Leadership",
    date: "Year / Event Date",
    description: "Editable placeholder: Detail your participation in technical symposiums, student committees, or technical workshops.",
    isPlaceholder: true
  }
];

/**
 * NAVIGATION LINKS
 */
export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];
