// Data for Naveen Kumar S Portfolio
// All verified details strictly from resume and prompt specifications

export const PERSONAL_INFO = {
  name: "Naveen Kumar S",
  roleHeadline: "Aspiring Software Developer passionate about building intelligent applications, solving real-world problems, and developing impactful digital experiences.",
  email: "naveenkumar2007.dpm@gmail.com",
  phone: "+91 9788640670",
  location: "Chennai, India",
  linkedin: "https://www.linkedin.com/in/naveen-kumar-s-0120a9376",
  github: "https://github.com/Naveenkumar2007cit",
  resumeUrl: "/Naveen_Kumar_S_Resume.pdf",
  rotatingTitles: [
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Problem Solver",
    "Software Developer"
  ],
  education: {
    degree: "Bachelor of Technology",
    branch: "Information Technology",
    institution: "Chennai Institute of Technology",
    cgpa: "8.40",
    status: "Undergraduate"
  }
};

export const SKILLS_DATA = [
  {
    category: "Programming Languages",
    icon: "Code2",
    accent: "from-blue-500 to-cyan-500",
    skills: [
      { name: "C", level: "Intermediate", tag: "Systems" },
      { name: "C++", level: "Advanced", tag: "DSA & Core" },
      { name: "Python", level: "Advanced", tag: "AI/ML & Scripting" },
      { name: "Java", level: "Intermediate", tag: "OOP & Apps" },
      { name: "JavaScript", level: "Advanced", tag: "Full Stack" },
      { name: "SQL", level: "Intermediate", tag: "Relational Queries" },
    ]
  },
  {
    category: "Web Development",
    icon: "Globe",
    accent: "from-cyan-500 to-teal-500",
    skills: [
      { name: "HTML", level: "Advanced", tag: "Semantic Markup" },
      { name: "CSS", level: "Advanced", tag: "Styling & Responsive" },
      { name: "JavaScript", level: "Advanced", tag: "ES6+ Logic" },
      { name: "Node.js", level: "Intermediate", tag: "Backend Runtime" },
      { name: "Express.js", level: "Intermediate", tag: "RESTful APIs" },
    ]
  },
  {
    category: "Databases",
    icon: "Database",
    accent: "from-emerald-500 to-green-500",
    skills: [
      { name: "MySQL", level: "Intermediate", tag: "Relational RDBMS" },
      { name: "MongoDB", level: "Intermediate", tag: "NoSQL Document DB" },
    ]
  },
  {
    category: "Software Development Tools",
    icon: "Wrench",
    accent: "from-purple-500 to-indigo-500",
    skills: [
      { name: "Git", level: "Intermediate", tag: "Version Control" },
      { name: "GitHub", level: "Intermediate", tag: "Collaboration & CI" },
      { name: "Visual Studio Code", level: "Advanced", tag: "Primary IDE" },
    ]
  },
  {
    category: "Core Computer Science",
    icon: "Cpu",
    accent: "from-violet-500 to-fuchsia-500",
    skills: [
      { name: "Object-Oriented Programming (OOP)", level: "Advanced", tag: "Architecture & Design" },
      { name: "Data Structures & Algorithms (DSA)", level: "Advanced", tag: "Problem Solving (600+ Solved)" },
    ]
  }
];

export const PROJECTS_DATA = [
  {
    id: "truthguard-ai",
    title: "TruthGuard AI",
    badge: "AI & Machine Learning",
    tagline: "Fake News Detection & Credibility Verifier",
    description: "Developed an AI-powered fake news detection system using Machine Learning and Natural Language Processing to classify credibility in real time.",
    problemSolved: "The proliferation of digital misinformation and disinformation on social media and web platforms creates high risks of deception. TruthGuard AI automates the textual verification process to determine if a news snippet is fabricated or genuine.",
    features: [
      "News text preprocessing & linguistic sanitation",
      "TF-IDF vectorization for semantic weight modeling",
      "Classification using supervised machine learning algorithms",
      "Real-time news verification and instant credibility scoring",
      "Interactive Flask web application with intuitive UI"
    ],
    technologies: ["Python", "Flask", "Scikit-learn", "Joblib", "NLP", "TF-IDF", "Jupyter Notebook"],
    github: "https://github.com/Naveenkumar2007cit",
    liveDemo: null,
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "cyan",
    status: "Completed"
  },
  {
    id: "sentiflix-ai",
    title: "SentiFlix AI",
    badge: "NLP & Sentiment Analysis",
    tagline: "Movie Review Intelligence & Sentiment Classification",
    description: "Developed an AI-powered sentiment analysis system to classify user reviews into positive, negative, or neutral sentiments with high accuracy.",
    problemSolved: "Analyzing thousands of user movie reviews manually is unfeasible for streaming platforms and audiences. SentiFlix extracts subjective sentiments automatically to provide aggregated review metrics and insights.",
    features: [
      "Rigorous text preprocessing & stopword filtering",
      "NLP-based feature extraction and vector encoding",
      "Multi-class sentiment prediction (Positive, Neutral, Negative)",
      "Model evaluation benchmarks and performance metrics",
      "Interactive and user-friendly web interface"
    ],
    technologies: ["Python", "NLP", "Scikit-learn", "Flask", "Pandas", "NumPy", "TF-IDF"],
    github: "https://github.com/Naveenkumar2007cit",
    liveDemo: null,
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    accentColor: "violet",
    status: "Completed"
  },
  {
    id: "sentivision-ai",
    title: "SentiVision AI",
    badge: "Computer Vision & Deep Learning",
    tagline: "Visual Sentiment & Emotion Recognition System",
    description: "Developed an AI-powered image analysis system leveraging Computer Vision and Deep Learning techniques for automated visual perception.",
    problemSolved: "Visual imagery carries complex emotional cues and patterns that traditional text systems miss. SentiVision harnesses neural networks to detect and predict sentiment and visual categories directly from uploaded images.",
    features: [
      "Comprehensive image preprocessing and tensor normalization",
      "Deep Convolutional feature extraction",
      "Automated visual recognition and pattern categorization",
      "Seamless image upload with instant prediction pipeline",
      "Flask-backed inference engine and interactive UI"
    ],
    technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "NumPy", "Pandas", "Flask", "Computer Vision", "Deep Learning"],
    github: "https://github.com/Naveenkumar2007cit",
    liveDemo: null,
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentColor: "blue",
    status: "Completed"
  },
  {
    id: "food-genie",
    title: "Food Genie",
    badge: "Full Stack & Recommendation AI",
    tagline: "AI-Powered Food Ordering Platform",
    description: "Developed a full-stack food ordering platform combining seamless menu browsing, ordering pipelines, and personalized AI-driven meal recommendations.",
    problemSolved: "Users frequently experience decision fatigue when selecting meals on delivery apps. Food Genie offers an intuitive ordering experience supplemented with smart suggestions tailored to user tastes.",
    features: [
      "Rich interactive menu browsing with filtering & search",
      "Secure user authentication and profile management",
      "End-to-end cart and order lifecycle management",
      "MongoDB database integration for persistent orders and catalogs",
      "AI-powered food recommendations based on dining preferences",
      "Responsive user interface paired with robust REST APIs"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Naveenkumar2007cit",
    liveDemo: null,
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentColor: "amber",
    status: "Completed"
  },
  {
    id: "busbridge",
    title: "BusBridge",
    badge: "SWYNEX Internship • Ongoing",
    tagline: "Public Bus Information Gap Solver for Chennai",
    description: "A public transportation information platform designed specifically to empower Chennai commuters by bridging information gaps in bus transit.",
    problemSolved: "Daily commuters across Chennai encounter inconsistent bus schedules, untracked routes, and confusing stop information. BusBridge aggregates transit details to ensure reliable and accessible daily travel.",
    features: [
      "Chennai-focused public transportation mapping and route solver",
      "Clean, user-friendly and commuter-centric interface",
      "Comprehensive bus route and stop-by-stop exploration",
      "Saved routes for quick one-tap access by frequent travelers",
      "Fully responsive web application optimized for mobile commuters"
    ],
    technologies: ["Web Application", "Route Optimization", "Responsive UI", "Location Data", "REST APIs"],
    github: "https://github.com/Naveenkumar2007cit",
    liveDemo: null,
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "emerald",
    status: "Ongoing Project",
    isOngoing: true
  }
];

export const INTERNSHIPS_DATA = [
  {
    role: "Front End Development Virtual Intern",
    organization: "CodeAlpha",
    duration: "January 2026 – February 2026",
    badge: "Frontend Engineering",
    description: "Worked on responsive and interactive web applications using HTML, CSS, JavaScript, and UI/UX design principles to deliver user-centric experiences.",
    highlights: [
      "Engineered mobile-responsive interfaces adhering to modern UI/UX design standards",
      "Created interactive frontend components with clean HTML5, CSS3, and modern JavaScript",
      "Optimized DOM rendering performance and cross-browser consistency"
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "UI/UX Design", "Responsive Layouts"]
  },
  {
    role: "Data Science Virtual Intern",
    organization: "Navodita InfoTech",
    duration: "May 2026 – June 2026",
    badge: "Data Science & ML",
    description: "Gained practical experience in data analysis, machine learning, Python, data visualization, and predictive modeling on real-world datasets.",
    highlights: [
      "Conducted exploratory data analysis (EDA) and data cleansing with Pandas and NumPy",
      "Constructed predictive machine learning models with Scikit-learn",
      "Synthesized statistical findings into insightful visualizations for actionable analysis"
    ],
    skills: ["Python", "Data Analysis", "Machine Learning", "Data Visualization", "Predictive Modeling"]
  },
  {
    role: "Full Stack Development Virtual Intern",
    organization: "Web Stack Academy",
    duration: "June 2026 – July 2026",
    badge: "Full Stack Engineering",
    description: "Worked with frontend and backend technologies, database management, and end-to-end web development to ship reliable web services.",
    highlights: [
      "Developed integrated client-server architectures with RESTful API contracts",
      "Managed relational and document data stores with structured schemas",
      "Implemented full application lifecycles from concept to functional build"
    ],
    skills: ["Frontend", "Backend APIs", "Database Management", "Full Stack Development"]
  }
];

export const ACHIEVEMENTS_DATA = {
  counters: [
    { label: "LeetCode Solved", count: 300, suffix: "+", icon: "Code", color: "from-amber-400 to-orange-500" },
    { label: "SkillRack Solved", count: 200, suffix: "+", icon: "Flame", color: "from-emerald-400 to-teal-500" },
    { label: "CodeChef Solved", count: 50, suffix: "+", icon: "Trophy", color: "from-blue-400 to-cyan-500" },
    { label: "Codeforces Solved", count: 50, suffix: "+", icon: "Target", color: "from-purple-400 to-violet-500" },
  ],
  hackathons: [
    {
      title: "Finalist – Codeathan'26",
      organization: "Chennai Institute of Technology",
      type: "College Flagship Coding Hackathon",
      description: "Demonstrated advanced algorithmic problem-solving and rapid prototype development under intense competitive conditions.",
      tag: "Finalist"
    },
    {
      title: "2× Hackathon Finalist",
      organization: "Inter-College Technical Competitions",
      type: "Technical Innovation & Building",
      description: "Qualified for grand finals across two competitive hackathons by pitching and engineering end-to-end software solutions.",
      tag: "Finalist"
    },
    {
      title: "1× Hackathon Semi-Finalist",
      organization: "Regional Hackathon Arena",
      type: "Problem Solving & Prototyping",
      description: "Ranked among top semi-finalists competing against hundreds of developer teams across Tamil Nadu.",
      tag: "Semi-Finalist"
    }
  ],
  competitiveTotal: "600+ Problems Solved across Platforms"
};

export const CERTIFICATIONS_DATA = [
  {
    title: "AI Powered Cloud Engineer Virtual Internship Certificate",
    issuer: "Cloud & AI Academy",
    category: "Cloud & AI",
    date: "Certified"
  },
  {
    title: "AI/ML Virtual Internship",
    issuer: "Industry Virtual Internship",
    category: "Machine Learning",
    date: "Certified"
  },
  {
    title: "Certified Phishing Prevention Specialist",
    issuer: "Hack&Fix",
    category: "Cybersecurity",
    date: "Specialist"
  },
  {
    title: "Cisco Python Essentials 1 & 2",
    issuer: "Cisco Networking Academy",
    category: "Programming",
    date: "Verified"
  },
  {
    title: "C++ Essentials 1",
    issuer: "C++ Institute / Cisco",
    category: "Systems & DSA",
    date: "Verified"
  },
  {
    title: "Introduction to SQL",
    issuer: "SkillUp (Simplilearn)",
    category: "Database & Querying",
    date: "Verified"
  }
];
