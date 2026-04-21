export const navItems = [
  'home',
  'about',
  'skills',
  'education',
  'experience',
  'certificates',
  'projects',
  'contact',
] as const

export const technicalSkills = {
  'Software & Tools': [
    'Microsoft Word',
    'Microsoft Excel',
    'Microsoft Access',
    'Microsoft PowerPoint',
    'Microsoft Outlook',
    'Git',
    'GitHub',
    'Visual Studio',
    'Jupyter Notebook',
  ],
  'Web and Frontend Development': ['HTML', 'CSS', 'React'],
  'Programming Languages': ['Python', 'Java', 'C#', 'JavaScript'],
  Database: ['SQL', 'Supabase (Authentication & BaaS Fundamentals)'],
  'Data Analysis & Visualization': ['Pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
  'Emerging Technologies': [
    'Generative AI',
    'Prompt Engineering',
    'AI Automation',
    'No-code tools',
  ],
}

export const softSkills = [
  'Effective written and verbal communication',
  'Problem-solving and analytical thinking',
  'Reliable and responsible',
  'Willingness to learn and adapt to new systems and technologies',
  'Strong teamwork and collaboration',
  'Attention to detail',
  'Time management and prioritization',
  'Critical thinking',
  'Initiative and self-motivation',
  'Accountability and ownership',
  'Professionalism and work ethic',
  'Collaboration in cross-functional teams',
  'Resilience under pressure',
  'Creativity and innovation',
  'Active listening',
]

export const groupProjects = [
  {
    title: 'CAPACITI Standalone Website',
    description:
      'The CAPACITI Website Redesign Project focuses on creating a modern, accessible, and user-friendly platform that effectively communicates the organisation’s mission and impact. Targeted at a broad audience, including candidates, partners, funders, and employers, the new site features intuitive navigation, visual storytelling, and key content areas such as About, Programmes, Impact, News, and Opportunities. Core features include photo and key information display on the homepage, a Learn More video embedded in the hero section, a contact form powered by Formspree, Supabase integration for backend application handling, Google Maps integration to show office location, and a responsive layout using HTML, CSS, and JavaScript.\nTechnologies used: HTML, CSS, JavaScript, Formspree, Supabase, Google Maps, and Netlify.',
    demoUrl: 'https://bejewelled-gumdrop-4ce1d6.netlify.app/',
  },
  {
    title: 'TTSS',
    description:
      'The Tech Talent Scorecard System (TTSS) is a web-based platform developed for CAPACITI to simplify performance evaluations between Talent Development Coaches, mentors, and candidates. It enables scoring on key criteria, automatic comment generation, real-time candidate feedback access, and confidential in-app communication with notifications. The system also includes full admin controls for managing users, groups, and reports.\nTechnologies used: JavaScript, HTML, CSS, Figma (for UI/UX design and prototyping), Supabase, and Netlify for deployment.\n\nMy Contributions:\nDesigned the wireframes and interactive prototype using Figma to guide the development process.\nFocused on frontend development, ensuring responsive design and seamless user interaction.\nCollaborated with backend developers to integrate API endpoints and implement user-friendly feedback mechanisms.',
    demoUrl: 'https://musical-druid-18d2c1.netlify.app/',
  },
  {
    title: 'ChatBot',
    description:
      "The chatbot was designed to assist users in navigating Capaciti Group's IT learnership and training programs. Built using a no-code power tool (Landbot), it provided instant information on application processes, program requirements, and career development opportunities, offering users quick answers and guidance through an interactive, conversational interface. Awarded 2nd place for a team-developed chatbot solution presented during the CAPACITI training programme.\nTechnologies used: Landbot (no-code chatbot platform).",
    demoUrl: 'https://github.com/PhelokaziMadala/Chatbot/blob/main/README.md',
  },
  {
    title: 'Gqeberha Clinic',
    description:
      'Initiative that allows walk-in patients to book appointments online for services like GBV support, chronic diagnosis/treatment, counseling, and referrals. The platform supports different user roles, including patients, administrators, nurses, doctors, and therapists. Admin users can manage appointments and assign patients to the appropriate healthcare providers.\nTechnologies used: Python, JavaScript, CSS, HTML, and ASP.NET.',
  },
]

export const personalProjects = [
  {
    title: 'Personal Portfolio',
    description:
      "A digital space that highlights my journey in IT and software development. It features selected projects, coding skills, certifications, and educational background. This portfolio serves as both a resume and a showcase, allowing potential employers, collaborators, and peers to explore the practical work I've done, the technologies I've mastered, and the value I bring to the tech industry.\nTechnologies used: JavaScript, HTML, CSS, and Netlify.",
  },
  {
    title: 'Memory Game',
    description:
      'Inspired by the classic memory game, I created a fast-paced version that challenges memory, speed, and strategy. Unlike traditional versions, this game adds urgency with limited moves and a countdown timer, helping sharpen focus, mental agility, and decision-making in an engaging way.\nTechnologies used: JavaScript, HTML, CSS, and Netlify.',
    demoUrl: 'https://dainty-granita-e65d54.netlify.app/',
  },
  {
    title: 'Weather Application',
    description:
      'Built a weather application that combines real-time forecast data with a smooth, user-friendly interface across devices. The app uses live API integration to deliver up-to-date, location-based weather insights and reflects my passion for building useful, data-driven experiences.\nTechnologies used: JavaScript, HTML, CSS, OpenWeather API, and Netlify.',
    demoUrl: 'https://bucolic-churros-f087de.netlify.app/',
  },
]
