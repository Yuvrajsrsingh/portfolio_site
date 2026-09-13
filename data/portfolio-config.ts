export interface ProjectItem {
  title: string;
  organization: string;
  period?: string;
  description: string;
  highlights?: string[];
  tech: string[];
  href?: string;
  boxClassName?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  track?: string;
  period: string;
  location: string;
  highlights: string[];
  boxClassName?: string;
  title?: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills?: string[];
  icon?: string;
  boxClassName?: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  description: string;
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  year: string;
}

export interface PortfolioConfig {
  personal: {
    name: string;
    alias?: string;
    role: string;
    phone: string;
    location: string;
    summary: string;
    bioParagraphs: {
      text: string;
      highlight?: string;
      link?: { text: string; url: string };
      afterLink?: string;
    }[];
    avatar: string;
  };
  socials: {
    linkedin: string;
    email: string;
    phone: string;
    github?: string;
    twitter?: string;
    youtube?: string;
    medium?: string;
  };
  blogPosts?: {
    title: string;
    publishedAt: string;
    summary: string;
    link: string;
    platform?: string;
  }[];
  skillCategories: SkillCategory[];
  experience: ExperienceItem[];
  companies: ExperienceItem[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
  education: EducationItem[];
  workWithMe: {
    consultationUrl?: string;
    hireUrl?: string;
    email: string;
    phone: string;
  };
  siteMetadata: {
    title: string;
    description: string;
    siteUrl: string;
    author: string;
  };
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Yuvraj Singh",
    alias: "Yuvi",
    role: "Data Analyst & BI Developer",
    phone: "+91-9665330070",
    location: "Nashik / Gurugram, India",
    summary:
      "Data Analyst and BI Developer with hands-on experience at Bosch and GlobalLogic, specializing in Power BI, SQL, data modelling, data transformation, and enterprise analytics. Experienced in working with Azure Databricks, Oracle Data Lake, SAP and MES data to build scalable reporting and analytical solutions for manufacturing operations. Strong Python and data-engineering foundation with additional experience in AI/ML and GenAI applications.",
    avatar: "/yuvraj.png",
    bioParagraphs: [
      {
        text: "I am a Data Analyst and BI Developer specializing in ",
        link: {
          text: "Power BI, SQL, Data Modelling & Enterprise Analytics",
          url: "https://www.linkedin.com/in/yuvraj-singh",
        },
        afterLink:
          " with hands-on experience at Bosch and GlobalLogic. I turn complex industrial data into scalable, actionable intelligence.",
      },
      {
        text: "At ",
        link: {
          text: "Bosch Limited",
          url: "https://www.bosch.com",
        },
        afterLink:
          " (Jan 2025 – Sept 2026), I develop enterprise Power BI solutions across Azure Databricks, Oracle Data Lake, SAP, and MES data covering ~600 machines across 3 production hangars. Previously at GlobalLogic (Hitachi), I built Python-based data processing pipelines and AI/ML workflows.",
      },
      {
        text: "With a strong foundation in Python, ETL/ELT, and cloud platforms (AWS, Azure), I also build GenAI, Agentic AI, and conversational analytics with Databricks Genie and Text-to-SQL. Connect with me on ",
        link: {
          text: "LinkedIn",
          url: "https://www.linkedin.com/in/yuvraj-singh",
        },
        afterLink: " or reach out directly below.",
      },
    ],
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/yuvraj-singh",
    email: "yuvrajsrsingh@gmail.com",
    phone: "+91-9665330070",
    github: "https://github.com",
    twitter: "https://x.com",
    medium: "https://medium.com/@yuvrajsrsingh",
  },
  blogPosts: [
    {
      title: "7 Habits to Boost Your Productivity and Well-Being: A Practical Guide",
      publishedAt: "2024-03-15",
      summary:
        "A practical guide exploring seven key daily habits to sustainably enhance focus, boost productivity, and nurture mental and physical well-being.",
      link: "https://medium.com/@yuvrajsrsingh/7-habits-to-boost-your-productivity-and-well-being-a-practical-guide-e64231219e83",
      platform: "Medium",
    },
  ],
  skillCategories: [
    {
      category: "BI & Data Analytics",
      skills: [
        "Power BI",
        "DAX",
        "Power Query",
        "Data Modelling",
        "Dashboard Development",
        "KPI Analytics",
      ],
    },
    {
      category: "SQL & Databases",
      skills: [
        "SQL",
        "T-SQL",
        "Oracle Data Lake",
        "SAP",
        "MES",
        "Query Optimization",
        "Data Validation",
      ],
    },
    {
      category: "Data Engineering",
      skills: [
        "ETL/ELT",
        "Data Transformation",
        "Data Cleansing",
        "Data Quality",
        "Azure Databricks",
        "PySpark",
      ],
    },
    {
      category: "Programming & APIs",
      skills: ["Python", "FastAPI", "REST APIs", "Git"],
    },
    {
      category: "Cloud & Data Platforms",
      skills: [
        "Azure Databricks",
        "AWS S3",
        "AWS Lambda",
        "EC2",
        "IAM",
        "Kubernetes",
        "Kafka",
        "Google Cloud Platform",
      ],
    },
    {
      category: "Analytics & AI",
      skills: [
        "Generative AI",
        "Databricks Genie",
        "Text-to-SQL",
        "Machine Learning",
        "NLP",
        "Computer Vision",
        "TensorFlow",
      ],
    },
  ],
  experience: [
    {
      company: "Bosch Limited",
      role: "Power BI Developer | Data Analytics & Python",
      track: "Graduate Apprentice • Nashik, India",
      period: "Jan 2025 – Sept 2026",
      location: "Nashik, India",
      boxClassName: "bg-linear-to-b from-red-500 to-red-700 ring-offset-red-500",
      title: "Bosch Limited",
      description:
        "Enterprise Power BI analytics, Azure Databricks, Oracle Data Lake, SAP & MES reporting, and FastAPI AI pipelines.",
      highlights: [
        "Developed enterprise Power BI dashboards and analytical solutions using SQL, DAX, Power Query and data modelling for KPI, OEE, throughput and operational performance analysis.",
        "Worked with Azure Databricks, Oracle Data Lake, SAP and MES to extract, transform, validate and analyze large-scale manufacturing datasets.",
        "Built SQL transformations and analytical data models to standardize business KPIs and support reliable reporting across manufacturing processes.",
        "Optimized SQL queries, Power BI data models and dashboard performance to enable faster analysis of process performance, bottlenecks and operational trends.",
        "Analyzed complex manufacturing data and translated operational requirements into interactive Power BI reports and scalable analytical solutions.",
        "Developed Python and FastAPI applications to support data-processing and analytics workflows.",
        "Collaborated with engineering and operations stakeholders to understand reporting requirements and deliver data-driven solutions.",
      ],
    },
    {
      company: "GlobalLogic (Hitachi)",
      role: "AI/ML Intern | Data Analytics & Intelligent Automation",
      track: "7 months • Gurugram, India",
      period: "May 2024 – Nov 2024",
      location: "Gurugram, India",
      boxClassName: "bg-linear-to-b from-blue-500 to-indigo-700 ring-offset-blue-500",
      title: "GlobalLogic (Hitachi)",
      description:
        "Python-based data processing, AI/ML workflows, NLP evaluation pipelines, and intelligent automation.",
      highlights: [
        "Developed Python-based data processing and AI/ML workflows to automate analysis of large and complex datasets across multilingual and visual-inspection use cases.",
        "Worked on data preparation, transformation, model evaluation and validation, converting raw data into structured inputs for analytical and AI driven applications.",
        "Built automation pipelines that improved the speed, consistency and scalability of data evaluation, reducing dependence on manual analysis.",
        "Applied NLP, Machine Learning techniques to solve business problems, strengthening analytical thinking and data-driven problem-solving skills.",
      ],
    },
  ],
  get companies() {
    return this.experience;
  },
  projects: [
    {
      title: "Enterprise KPI & Performance Analytics Platform",
      organization: "Bosch | Operations & Digital Analytics",
      period: "July 2026",
      description:
        "Developed an enterprise Power BI analytics platform using manufacturing MES data stored in Azure Databricks, covering approximately 4 years of operational data across 3 production hangars and ~600 machines.",
      tech: ["Power BI", "Azure Databricks", "DAX", "SQL", "MES"],
      boxClassName: "bg-linear-to-b from-blue-500 to-blue-700 ring-offset-blue-500",
      highlights: [
        "Built SQL-based data transformations and analytical data models to standardize operational KPIs and reporting logic.",
        "Developed DAX measures and interactive Power BI visualizations for KPI, downtime, bottleneck and performance analysis.",
        "Optimized SQL queries, data models and Power BI reports to improve analytical performance and reduce manual reporting effort.",
      ],
    },
    {
      title: "Process Throughput & Operational Analytics Dashboard",
      organization: "Bosch | Operations & Performance Analytics",
      period: "Mar 2026",
      description:
        "Analyzed 800,000+ Oracle Data Lake records combined with SAP milestone data to provide end-to-end visibility into manufacturing throughput.",
      tech: ["Power BI", "Oracle Data Lake", "SAP", "SQL", "DAX"],
      boxClassName: "bg-linear-to-b from-orange-500 to-orange-700 ring-offset-orange-500",
      highlights: [
        "Developed SQL transformations to resolve inconsistent milestone data and derive reliable throughput and lead-time metrics.",
        "Designed an optimized Power BI data model enabling drill-down from overall throughput to individual process stages.",
        "Replaced fragmented manual analysis with a centralized analytics solution that enabled faster identification of process delays and material-flow constraints.",
      ],
    },
    {
      title: "AI-Powered Data Intelligence & Process Optimization Platform",
      organization: "Bosch | Digital Analytics & AI",
      period: "Aug 2026",
      description:
        "Designed and developed an AI-powered solution from scratch to provide natural-language access to enterprise manufacturing data and accelerate data-driven analysis.",
      tech: [
        "Python",
        "FastAPI",
        "Azure Databricks",
        "Databricks Genie",
        "LLMs",
        "Text-to-SQL",
      ],
      boxClassName: "bg-linear-to-b from-emerald-500 to-emerald-700 ring-offset-emerald-500",
      highlights: [
        "Built Python and FastAPI-based backend services to expose AI and data-processing capabilities through scalable APIs.",
        "Developed a natural-language analytics workflow using Databricks Genie, enabling users to interact with manufacturing data through conversational queries.",
        "Integrated Python, Azure Databricks and LLM-powered data retrieval/Text-to-SQL workflows to support automated analysis of enterprise manufacturing data.",
        "Enabled engineering teams to move from manual data investigation to conversational data analysis and process optimization.",
      ],
    },
    {
      title: "Multilingual Document Evaluation & Analytics Platform",
      organization: "GlobalLogic (Hitachi) | Intelligent Automation",
      period: "May 2024",
      description:
        "Developed an automated evaluation pipeline across 10,000+ documents and 5 language pairs to assess translation quality.",
      tech: ["Python", "NLP", "Machine Learning", "Data Pipelines"],
      boxClassName: "bg-linear-to-b from-purple-500 to-purple-700 ring-offset-purple-500",
      highlights: [
        "Built Python based NLP data-processing workflows to detect translation errors and quality deviations at scale.",
        "Improved translation accuracy by 30%, model robustness by 25%, and multilingual error-detection efficiency by 40%.",
      ],
    },
    {
      title: "AI-Powered Visual Quality Inspection System",
      organization: "Bosch | Digital Analytics & AI",
      period: "Jan 2025",
      description:
        "Contributed to a ResNet-based computer-vision solution for automated detection of coating and surface defects.",
      tech: ["Python", "Computer Vision", "ResNet", "TensorFlow"],
      boxClassName: "bg-linear-to-b from-rose-500 to-rose-700 ring-offset-rose-500",
      highlights: [
        "Supported dataset preparation, model validation and optimization to improve inspection reliability.",
      ],
    },
  ],
  certifications: [
    {
      title: "Certified Software Engineer",
      issuer: "HackerRank",
      date: "Issued Oct 2024",
      credentialId: "7CACEE227180",
      skills: ["SQL", "Problem Solving", "Data Structures & Algorithms"],
      icon: "hackerrank",
      boxClassName: "bg-linear-to-b from-emerald-500 to-emerald-700 ring-offset-emerald-500",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "Issued Jul 2024",
      skills: ["Postman API", "Debugging & Troubleshooting", "REST APIs"],
      icon: "postman",
      boxClassName: "bg-linear-to-b from-orange-500 to-red-600 ring-offset-orange-500",
    },
    {
      title: "Data to Generative AI",
      issuer: "Google Developers Group (IIT Bombay)",
      date: "Issued Dec 2023",
      skills: ["Analytical Skills", "Machine Learning", "AutoML", "Data Pipelines"],
      icon: "gdg",
      boxClassName: "bg-linear-to-b from-blue-500 to-cyan-600 ring-offset-blue-500",
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "Issued Dec 2022",
      skills: ["Natural Language Processing (NLP)", "Artificial Intelligence", "Azure AI"],
      icon: "microsoft",
      boxClassName: "bg-linear-to-b from-sky-500 to-blue-700 ring-offset-sky-500",
    },
    {
      title: "Introduction to Large Language Models",
      issuer: "Google",
      date: "Issued Nov 2023",
      credentialId: "6370697",
      skills: ["Large Language Models", "Generative AI"],
      icon: "google",
      boxClassName: "bg-linear-to-b from-amber-500 to-orange-600 ring-offset-amber-500",
    },
    {
      title: "Understanding Google Cloud Security and Operations",
      issuer: "Google",
      date: "Issued Nov 2023",
      credentialId: "6407579",
      skills: ["GRC", "Security Automation", "DevSecOps"],
      icon: "google",
      boxClassName: "bg-linear-to-b from-blue-500 to-indigo-600 ring-offset-blue-500",
    },
    {
      title: "Infrastructure and Application Modernization with Google Cloud",
      issuer: "Google",
      date: "Issued Nov 2023",
      credentialId: "6406523",
      skills: ["Google Cloud Products and Services", "Cloud Architecture"],
      icon: "google",
      boxClassName: "bg-linear-to-b from-teal-500 to-emerald-600 ring-offset-teal-500",
    },
    {
      title: "Perform Foundational Data, ML, and AI Tasks in Google Cloud",
      issuer: "Google",
      date: "Issued Oct 2023",
      credentialId: "5445998",
      skills: ["BigQuery", "Data Processing", "Cloud AI"],
      icon: "google",
      boxClassName: "bg-linear-to-b from-purple-500 to-indigo-700 ring-offset-purple-500",
    },
    {
      title: "Build and Secure Networks in Google Cloud",
      issuer: "Google",
      date: "Issued Oct 2023",
      credentialId: "5444119",
      skills: ["Cloud Networking", "VPC Security", "Firewalls"],
      icon: "google",
      boxClassName: "bg-linear-to-b from-rose-500 to-pink-600 ring-offset-rose-500",
    },
    {
      title: "Create and Manage Cloud Resources",
      issuer: "Google",
      date: "Issued Oct 2023",
      credentialId: "5443886",
      skills: ["Cloud Shell", "Compute Engine", "IAM"],
      icon: "google",
      boxClassName: "bg-linear-to-b from-cyan-500 to-blue-600 ring-offset-cyan-500",
    },
    {
      title: "Perform Foundational Infrastructure Tasks in Google Cloud",
      issuer: "Google",
      date: "Issued Oct 2023",
      credentialId: "5444394",
      skills: ["Cloud Storage", "Cloud Monitoring", "Cloud Functions"],
      icon: "google",
      boxClassName: "bg-linear-to-b from-indigo-500 to-violet-700 ring-offset-indigo-500",
    },
  ],
  achievements: [
    {
      title: "Technical Lead",
      organization: "IEEE Computer Society",
      description:
        "Led technical initiatives and programming activities while mentoring 4 junior students in Python through hands-on guidance and problem-solving.",
      badge: "Leadership & Mentorship",
    },
    {
      title: "2nd Place Winner",
      organization: "HackAI 2023, Techfest IIT Bombay × Fetch.ai",
      description:
        "Built an AI-powered task and meeting scheduler using Fetch.ai uAgents, automating daily task planning and meeting coordination through autonomous agents.",
      badge: "National Hackathon Winner",
    },
  ],
  education: [
    {
      degree: "B.Tech. in Engineering / Technology",
      institution: "RTMNU, Nagpur University",
      score: "8.56 CGPA",
      year: "2021 – 2025",
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "TSBIE Board",
      score: "94.6%",
      year: "2020",
    },
    {
      degree: "Secondary (Class X)",
      institution: "SSC Board",
      score: "80.8%",
      year: "2018",
    },
  ],
  workWithMe: {
    consultationUrl: "https://www.linkedin.com/in/yuvraj-singh",
    hireUrl: "mailto:yuvrajsrsingh@gmail.com",
    email: "yuvrajsrsingh@gmail.com",
    phone: "+91-9665330070",
  },
  siteMetadata: {
    title: "Yuvraj Singh - Data Analyst & BI Developer",
    description:
      "Data Analyst and BI Developer specializing in Power BI, SQL, Data Modelling, Azure Databricks, and Python. Experience at Bosch and GlobalLogic.",
    siteUrl: "https://yuvrajsingh.dev",
    author: "Yuvraj Singh",
  },
};
