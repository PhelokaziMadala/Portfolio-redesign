import { useEffect, useRef, useState } from 'react'

type Topic = 'skills' | 'experience' | 'projects' | 'education' | 'location' | 'goals'

const topicReplies: Record<Topic, string> = {
  skills:
    'Phelokazi has experience working with a range of technical technologies, including Java, React, Python, JavaScript, C#, SQL, Supabase, HTML/CSS, as well as data analysis tools such as Pandas, NumPy, Seaborn, and Matplotlib. She also demonstrates strong soft skills, including communication, teamwork, problem-solving, adaptability, and effective professional collaboration.',
  experience:
    'Phelokazi has experience as an AI Associate at CAPACITI and as a Frontend Developer / AI Associate at Hapo Technology. Her work involves building AI-powered solutions, developing responsive frontend interfaces, integrating backend services using Supabase, and collaborating in team-based development environments to deliver functional applications.',
  projects:
    'Phelokazi has worked on both group and personal projects. Her group projects include the CAPACITI Standalone Website, TTSS, ChatBot, and Gqeberha Clinic system. Her personal projects include a Personal Portfolio, Memory Game, and Weather Application. Further details on each project are available in the Projects section of the portfolio.',
  education:
    'Phelokazi holds a Diploma in Information Technology (Software Development) from Nelson Mandela University, and she also completed her National Senior Certificate at Byletts Combined High School.',
  location:
    'Phelokazi is based in Cape Town, Western Cape, South Africa.',
  goals:
    'Phelokazi is looking for opportunities where she can grow in software and AI-focused roles, and she aspires to build secure, intelligent, and scalable solutions that create real impact.',
}

const extraReplies = {
  about:
    'Phelokazi is a detail-oriented and adaptable software developer with practical experience in software development, AI systems, and full-stack web applications. She focuses on building solutions that are useful, reliable, and user-friendly.',
  contact:
    'You can contact Phelokazi through the contact form, by email at phelokazimadala@yahoo.com, on LinkedIn, or via GitHub.',
  certificates:
    'Phelokazi has IBM certificates in Software Engineering, Artificial Intelligence, Generative AI, Prompt Engineering, Git and GitHub, HTML/CSS/JavaScript, and Python for Data Science.',
  techFocus:
    'Her current technical focus areas include frontend development, AI-powered solutions, and data-focused applications with practical real-world impact. These are not limiting areas, she is open to any tech-related opportunity that helps her learn, grow, and contribute.',
  availability:
    'Phelokazi is open to internship, junior, and full-time opportunities, including remote roles, where she can contribute to software and AI projects while continuing to grow.',
  preferredRoles:
    'Preferred roles include Software Developer, Frontend Developer, and AI Associate positions. However, these are not limited roles, she is open to other tech-related opportunities that support continuous learning, growth, and meaningful contribution.',
  recommendProject:
    'A great place to start is TTSS for team collaboration and system design, and the CAPACITI Standalone Website for frontend UX, accessibility, and full project delivery.',
  hobby:
    'Outside of coding, Phelokazi enjoys continuous learning, exploring new technologies, and working on creative personal projects that sharpen both technical and problem-solving skills.',
} as const

type Intent = {
  keywords: string[]
  reply: string
}

const intents: Intent[] = [
  { keywords: ['skills', 'technical', 'soft skills', 'tech stack', 'stack', 'tools'], reply: topicReplies.skills },
  { keywords: ['experience', 'work', 'role', 'worked', 'job', 'employment'], reply: topicReplies.experience },
  { keywords: ['projects', 'portfolio', 'project', 'built'], reply: topicReplies.projects },
  { keywords: ['location', 'located', 'where', 'based', 'live', 'stay', 'city', 'from'], reply: topicReplies.location },
  {
    keywords: ['education', 'qualification', 'study', 'diploma', 'university', 'school', 'graduate'],
    reply: topicReplies.education,
  },
  {
    keywords: ['about', 'who is', 'tell me about', 'background'],
    reply: extraReplies.about,
  },
  {
    keywords: ['looking for', 'open to', 'opportunities', 'seeking', 'aspire', 'goal', 'future', 'career', 'become', 'aim'],
    reply: topicReplies.goals,
  },
  {
    keywords: ['contact', 'email', 'linkedin', 'github', 'reach'],
    reply: extraReplies.contact,
  },
  {
    keywords: ['certificate', 'certificates', 'certification', 'ibm'],
    reply: extraReplies.certificates,
  },
  {
    keywords: ['focus', 'specialize', 'specialise', 'strength', 'tech focus'],
    reply: extraReplies.techFocus,
  },
  {
    keywords: ['available', 'availability', 'hire', 'open to work', 'open for work'],
    reply: extraReplies.availability,
  },
  {
    keywords: ['preferred role', 'preferred roles', 'role does she want', 'position', 'positions'],
    reply: extraReplies.preferredRoles,
  },
  {
    keywords: ['which project', 'recommend project', 'best project', 'start with'],
    reply: extraReplies.recommendProject,
  },
  {
    keywords: ['hobby', 'hobbies', 'fun fact', 'outside work', 'outside of work', 'not coding', 'free time', 'personal interest'],
    reply: extraReplies.hobby,
  },
]

export type ChatMessage = {
  role: 'user' | 'bot'
  text: string
}

export function usePortfolioChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const timeoutsRef = useRef<number[]>([])

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId))
      timeoutsRef.current = []
    }
  }, [])

  const getReply = (question: string) => {
    const lowered = question.toLowerCase()
    const matchedIntent = intents.find((intent) =>
      intent.keywords.some((keyword) => lowered.includes(keyword)),
    )
    return matchedIntent
      ? matchedIntent.reply
      : 'Great question. I can help with skills, experience, projects, education, location, goals, contact details, certificates, and even fun facts about Phelokazi.'
  }

  const pushConversation = (question: string, reply: string) => {
    setMessages((prev) => [...prev, { role: 'user', text: question }])
    setIsTyping(true)
    const timeoutId = window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text: reply }])
      setIsTyping(false)
    }, 550)
    timeoutsRef.current.push(timeoutId)
  }

  const ask = (question: string) => {
    const reply = getReply(question)
    pushConversation(question, reply)
  }

  const askByTopic = (topic: Topic) => {
    const labelByTopic = {
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      location: 'Location',
      goals: 'Goals',
    } as const
    const reply = topicReplies[topic]
    pushConversation(labelByTopic[topic], reply)
  }

  const clearChat = () => {
    timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId))
    timeoutsRef.current = []
    setIsTyping(false)
    setMessages([])
  }

  return { messages, isTyping, ask, askByTopic, clearChat }
}
