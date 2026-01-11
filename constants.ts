
import { Experience, Project, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Pranav Nichal Suryawanshi",
  role: "Associate IT Developer",
  email: "surywanshipranav4@gmail.com",
  phone: "9767349080",
  location: "Pune, Maharashtra, India",
  linkedin: "linkedin.com/in/pranav-surywanshi",
  github: "github.com/pranav2216",
  // Using the direct content link for the Google Drive ID provided
  profileImage: "https://lh3.googleusercontent.com/d/1w1KaPNhQX7F1glJXAJJYpzotCCFzS4T5" 
};

export const SKILLS = [
  "Java", "Spring Boot", "Hibernate", "MySQL", "GCP Cloud", "App Script", 
  "JavaScript", "App Engine", "Git", "Google API", "Firebase", "Rest Api", 
  "MSSQL", "Big Query", "Vertex AI", "Redis", "Docker", "Jenkins", "Postgres SQL"
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Associate IT Developer",
    company: "Scalevista",
    period: "June 2025 - Present",
    location: "Pune, Maharashtra",
    achievements: [
      "Designed, developed, and optimized Java-based backend applications and microservices using Spring Boot, focusing on scalability, performance, and maintainability.",
      "Built and maintained CI/CD pipelines using Jenkins, automating build, test, and deployment workflows and significantly reducing release cycles and manual intervention.",
      "Containerized applications using Docker to ensure consistent deployments across development, staging, and production environments.",
      "Actively collaborated with cross-functional teams in an Agile/Scrum environment, performing code reviews, managing version control with Git, and contributing to debugging and production support."
    ]
  },
  {
    role: "Software Engineer",
    company: "UMS-IOT",
    period: "March 2023 - June 2025",
    location: "Nashik, Maharashtra",
    achievements: [
      "Worked with cutting-edge technologies like Java, Spring Boot, Hibernate, GCP, and Vertex AI to build innovative products.",
      "Gained hands-on experience in MSSQL, Big Query, Microservices, and REST APIs.",
      "Refined technical expertise, analytical thinking, and problem-solving skills through impactful product development.",
      "Developed leadership qualities including team management, effective communication, and strategic decision-making."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "Konsola Infotech",
    period: "Aug 2021 - Sept 2021",
    location: "Nashik, Maharashtra",
    achievements: [
      "Gained experience in front-end technologies such as HTML, CSS, JavaScript, Bootstrap, and React.js.",
      "Developed a personal portfolio and client website, strengthening UX optimization and responsive design skills.",
      "Collaborated with team members to implement new features and improve functionality."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Agentic Ai Bot",
    description: "AI-Powered Personalized Bot for Jindal Group using Vertex AI and Gemini models. Extracts insights from structured and unstructured data stored in MS SQL and Big Query via OCR parsers.",
    tags: ["Java", "Spring Boot", "Vertex AI", "GCP", "Big Query"]
  },
  {
    title: "Email Recall Tool",
    description: "Gmail add-on providing users ability to recall (unsend) emails using Gmail API and Admin Console. Built with Apps Script and Java, hosted on App Engine.",
    tags: ["Apps Script", "Java", "Spring Boot", "Gmail API"]
  },
  {
    title: "Gmail Data Classification",
    description: "DLP and email classification system to identify sensitive information using labels and severity levels. Implemented real-time security alerts.",
    tags: ["Security", "Data Loss Prevention", "Java", "GCP"]
  },
  {
    title: "Creatics OTT Platform",
    description: "Backend services for an OTT platform supporting movies, episodes, and user interactions. Optimized RESTful APIs and ensured transactional consistency.",
    tags: ["Spring Boot", "MySQL", "Swagger", "Jenkins", "AWS"]
  },
  {
    title: "Content Moderation & Access Control",
    description: "System using OpenAI and Spring Boot to regulate content visibility. Developed RBAC mechanisms to manage permissions for different user roles.",
    tags: ["OpenAI", "RBAC", "Java", "Spring Boot"]
  }
];

export const EDUCATION: Education = {
  degree: "Bachelor of Technology in Computer Science and Engineering",
  institution: "Sandip University",
  location: "Nashik, Maharashtra",
  year: "2023",
  grade: "8.23 CGPA"
};

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Google Data Analytics",
    issuer: "Google",
    year: "2023",
    url: "https://coursera.org/verify/professional-cert/EYV8GH24QQFH",
    details: [
      "Completed eight courses covering data cleaning, visualization, and analysis.",
      "Hands-on practice with introductory-level data analytics tools."
    ]
  },
  {
    name: "Java (Basic)",
    issuer: "HackerRank",
    year: "2022",
    url: "https://www.hackerrank.com/certificates/9377e49f27a5",
    details: [
      "HackerRank Certified Professional in Java fundamentals.",
      "Credential ID: 9377E49F27A5",
      "Issued August 2022"
    ]
  }
];
