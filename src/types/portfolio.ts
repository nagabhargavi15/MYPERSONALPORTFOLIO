export interface EducationItem {
  id: string;
  degree: string;
  institution?: string;
  branch?: string;
  cgpaOrGrade: string;
  duration?: string;
  description: string;
  isCompleted?: boolean;
}

export interface SkillItem {
  name: string;
  category: 'Programming Languages' | 'Web Technologies' | 'Data & Analytics';
  icon: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl: string;
  isPlaceholder?: boolean;
  statusBadge?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  certificateLink: string;
  certificateId?: string;
  imagePreview?: string;
  isPlaceholder?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface PersonalInfo {
  fullName: string;
  title: string;
  branch: string;
  degree: string;
  college: string;
  cgpa: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumePath: string; // Editable resume file path
  avatarPlaceholderUrl: string; // Editable profile photo path
  tagline: string;
  bioIntroduction: string;
  aboutDetails: string[];
  interests: string[];
}
