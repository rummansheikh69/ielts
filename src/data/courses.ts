export interface Course {
  id: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  fee: string;
  level: string;
  batchSize: string;
  schedule: string;
  icon: string;
  popular: boolean;
  highlights: string[];
  curriculum: { module: string; topics: string[] }[];
  outcomes: string[];
  color: string;
  slides: { bg: string; label: string; sub: string }[];
}

export const courses: Course[] = [
  {
    id: "ielts-academic",
    title: "IELTS Academic",
    tagline: "For University Admissions Worldwide",
    description:
      "Comprehensive preparation for the IELTS Academic module. Perfect for students seeking admission to undergraduate or postgraduate programs at top universities. Our expert trainers use proven strategies to help you achieve the highest possible band score.",
    duration: "8 Weeks",
    fee: "₹18,999",
    level: "All Levels",
    batchSize: "Max 12 Students",
    schedule: "Mon–Fri | 7 AM – 9 AM",
    icon: "📚",
    popular: true,
    color: "#E51D27",
    slides: [
      { bg: "from-red-800 to-rose-600", label: "Academic Reading", sub: "Master skimming, scanning & inference" },
      { bg: "from-slate-800 to-slate-600", label: "Academic Writing", sub: "Task 1 graphs, Task 2 essays" },
      { bg: "from-red-700 to-orange-600", label: "Listening Skills", sub: "Real-exam audio exercises" },
      { bg: "from-gray-800 to-gray-600", label: "Speaking Module", sub: "Part 1, 2 & 3 mock interviews" },
    ],
    highlights: [
      "Small batch of max 12 students for personal attention",
      "100+ hours of live instruction",
      "Weekly full-length mock tests with band prediction",
      "Expert feedback on every writing task",
      "Access to 500+ practice questions",
      "Comprehensive study materials included",
    ],
    curriculum: [
      {
        module: "Module 1 – Reading",
        topics: ["Skimming & Scanning", "True/False/Not Given", "Matching Headings", "Sentence Completion"],
      },
      {
        module: "Module 2 – Writing",
        topics: ["Task 1: Graphs & Charts", "Task 1: Diagrams", "Task 2: Opinion Essays", "Task 2: Discussion Essays"],
      },
      {
        module: "Module 3 – Listening",
        topics: ["Section 1 & 2 Strategies", "Section 3 & 4 Strategies", "Note Completion", "Multiple Choice"],
      },
      {
        module: "Module 4 – Speaking",
        topics: ["Part 1: Introduction", "Part 2: Long Turn (Cue Card)", "Part 3: Discussion", "Fluency & Pronunciation"],
      },
    ],
    outcomes: [
      "Achieve Band 7.0+ in all four skills",
      "Understand the IELTS marking criteria",
      "Confidently attempt the exam on test day",
      "Receive detailed performance analytics",
    ],
  },
  {
    id: "ielts-general",
    title: "IELTS General Training",
    tagline: "For Work, Migration & Secondary Education",
    description:
      "Tailored preparation for the General Training module. Ideal for those applying for migration to English-speaking countries or seeking work experience abroad. Our course focuses on practical communication skills alongside exam technique.",
    duration: "8 Weeks",
    fee: "₹16,999",
    level: "All Levels",
    batchSize: "Max 15 Students",
    schedule: "Mon–Fri | 9 AM – 11 AM",
    icon: "🌍",
    popular: false,
    color: "#1d4ed8",
    slides: [
      { bg: "from-blue-800 to-blue-600", label: "General Reading", sub: "Everyday texts & work-related content" },
      { bg: "from-slate-800 to-slate-600", label: "Letter Writing", sub: "Formal, semi-formal & informal letters" },
      { bg: "from-blue-700 to-cyan-600", label: "Listening Mastery", sub: "Real-life scenario exercises" },
      { bg: "from-gray-800 to-gray-600", label: "Fluent Speaking", sub: "Natural conversation strategies" },
    ],
    highlights: [
      "Focus on practical, real-world English usage",
      "Immigration & visa-specific preparation",
      "Letter writing templates and frameworks",
      "Listening to everyday scenarios and conversations",
      "Speaking practice with native-level topics",
      "Flexible weekend batches available",
    ],
    curriculum: [
      { module: "Module 1 – Reading", topics: ["Section 1: Social Texts", "Section 2: Work Texts", "Section 3: General Academic", "Speed Reading"] },
      { module: "Module 2 – Writing", topics: ["Task 1: Formal Letters", "Task 1: Informal Letters", "Task 2: Essays", "Common Mistakes"] },
      { module: "Module 3 – Listening", topics: ["Everyday Conversations", "Directions & Maps", "Workplace Dialogues", "Monologues"] },
      { module: "Module 4 – Speaking", topics: ["Introduction & Small Talk", "Describing Experiences", "Expressing Opinions", "Debate Skills"] },
    ],
    outcomes: [
      "Achieve Band 6.5+ for migration requirements",
      "Write professional-level letters and essays",
      "Communicate confidently in English",
      "Pass immigration English requirements",
    ],
  },
  {
    id: "online-batch",
    title: "Online Batch",
    tagline: "Live Classes From Anywhere in the World",
    description:
      "Our fully interactive online program gives you the same quality of instruction as our offline classes, delivered through high-quality live video sessions. Study from the comfort of home with real-time feedback and recorded sessions for revision.",
    duration: "6 Weeks",
    fee: "₹12,999",
    level: "Beginner to Advanced",
    batchSize: "Max 20 Students",
    schedule: "Flexible Timings",
    icon: "💻",
    popular: false,
    color: "#7c3aed",
    slides: [
      { bg: "from-purple-800 to-violet-600", label: "Live Video Sessions", sub: "Interactive Zoom classes daily" },
      { bg: "from-slate-800 to-slate-600", label: "Recorded Classes", sub: "Revisit any lesson anytime" },
      { bg: "from-purple-700 to-pink-600", label: "Digital Study Kit", sub: "PDFs, videos & practice sets" },
      { bg: "from-gray-800 to-gray-600", label: "Online Mock Tests", sub: "Timed tests with instant scoring" },
    ],
    highlights: [
      "100% live interactive sessions — not pre-recorded",
      "All sessions recorded for flexible revision",
      "Digital study materials included",
      "Online mock tests with instant results",
      "Dedicated WhatsApp support group",
      "One-on-one doubt sessions every week",
    ],
    curriculum: [
      { module: "Week 1–2: Foundation", topics: ["Band scoring system", "Exam format overview", "Reading strategies", "Vocabulary building"] },
      { module: "Week 3–4: Writing", topics: ["Task 1 & Task 2 techniques", "Essay structures", "Timed writing practice", "Peer feedback"] },
      { module: "Week 5: Listening & Speaking", topics: ["Audio-based practice", "Accent training", "Mock speaking sessions", "Pronunciation tips"] },
      { module: "Week 6: Full Mock Tests", topics: ["3 full-length mocks", "Detailed band analysis", "Final strategy session", "Exam day tips"] },
    ],
    outcomes: [
      "Study from any location globally",
      "Complete flexibility in scheduling",
      "Access to digital library of resources",
      "Improve by at least 1 full band",
    ],
  },
  {
    id: "weekend-batch",
    title: "Weekend Batch",
    tagline: "Intensive Learning for Working Professionals",
    description:
      "Specially crafted for working professionals who cannot attend weekday classes. Our power-packed weekend sessions cover the same curriculum as the weekday batch in an intensive, engaging format — no compromise on quality.",
    duration: "10 Weeks",
    fee: "₹14,999",
    level: "Intermediate to Advanced",
    batchSize: "Max 15 Students",
    schedule: "Sat & Sun | 9 AM – 1 PM",
    icon: "📅",
    popular: false,
    color: "#d97706",
    slides: [
      { bg: "from-amber-800 to-yellow-600", label: "Weekend Classes", sub: "Sat & Sun intensive sessions" },
      { bg: "from-slate-800 to-slate-600", label: "Professional Focus", sub: "Work-related IELTS scenarios" },
      { bg: "from-orange-700 to-red-600", label: "Mock Tests", sub: "Full-length tests every weekend" },
      { bg: "from-gray-800 to-gray-600", label: "Group Discussions", sub: "Interactive speaking circles" },
    ],
    highlights: [
      "Designed around your work schedule",
      "4 hours of intensive instruction per weekend day",
      "Full mock test every Sunday",
      "Weekday homework with trainer support",
      "Access to online resources between sessions",
      "Speed-learning methodologies",
    ],
    curriculum: [
      { module: "Weekends 1–3: Skills Foundation", topics: ["Reading speed techniques", "Listening note-taking", "Grammar for writing", "Spoken fluency"] },
      { module: "Weekends 4–6: Exam Skills", topics: ["Task-specific strategies", "Time management", "Answer checking techniques", "Eliminating distractors"] },
      { module: "Weekends 7–8: Practice Tests", topics: ["Full-length IELTS mocks", "Detailed review", "Weak area reinforcement", "Peer scoring"] },
      { module: "Weekends 9–10: Final Preparation", topics: ["Band maximisation strategies", "Speaking fluency drills", "Last-minute writing tips", "Exam day simulation"] },
    ],
    outcomes: [
      "Achieve target band without quitting your job",
      "Build strong time-management habits",
      "Improve weak areas with focused drills",
      "Feel exam-ready in just 10 weekends",
    ],
  },
  {
    id: "one-on-one",
    title: "1-on-1 Coaching",
    tagline: "Personalised. Powerful. Proven.",
    description:
      "The ultimate IELTS preparation experience. You and your expert trainer, working together on a fully customised study plan. Every session is tailored to your specific weaknesses, learning pace, and target band score. This is how Band 9 students train.",
    duration: "Flexible",
    fee: "₹29,999",
    level: "All Levels",
    batchSize: "Only You",
    schedule: "Your Choice of Timing",
    icon: "👤",
    popular: false,
    color: "#059669",
    slides: [
      { bg: "from-emerald-800 to-green-600", label: "Personalised Plan", sub: "Custom study roadmap just for you" },
      { bg: "from-slate-800 to-slate-600", label: "Dedicated Trainer", sub: "Same expert every session" },
      { bg: "from-teal-700 to-emerald-600", label: "Flexible Timing", sub: "Book sessions when you want" },
      { bg: "from-gray-800 to-gray-600", label: "Targeted Feedback", sub: "Deep-dive on every answer" },
    ],
    highlights: [
      "100% personalised curriculum",
      "Choose your own trainer from our expert panel",
      "Schedule sessions at your convenience",
      "Deep-dive feedback on every piece of work",
      "Rapid progress tracking with weekly reports",
      "Priority support via WhatsApp & email",
    ],
    curriculum: [
      { module: "Phase 1: Diagnostic", topics: ["Full diagnostic test", "Detailed band assessment", "Weak area identification", "Personalised study plan creation"] },
      { module: "Phase 2: Targeted Training", topics: ["Skill-specific sessions", "Custom exercise sheets", "Writing task corrections", "Speaking recording analysis"] },
      { module: "Phase 3: Mock & Refine", topics: ["Mock tests under exam conditions", "Detailed performance review", "Strategy fine-tuning", "Confidence building"] },
      { module: "Phase 4: Final Push", topics: ["Final band prediction", "Exam-day strategy", "Last-minute tips", "Ongoing support until exam"] },
    ],
    outcomes: [
      "Achieve Band 8.0+ with dedicated coaching",
      "Progress 2x faster than group classes",
      "Build unshakeable exam confidence",
      "Support available right up to test day",
    ],
  },
  {
    id: "mock-test-series",
    title: "Mock Test Series",
    tagline: "10 Real-Exam Simulations. Expert Feedback.",
    description:
      "Our Mock Test Series gives you the most realistic IELTS experience possible. Sit full-length tests under strict exam conditions, then receive detailed written feedback from our examiners — just like the real thing, but with mentorship.",
    duration: "10 Tests",
    fee: "₹5,999",
    level: "Intermediate to Advanced",
    batchSize: "Individual",
    schedule: "Flexible Self-Paced",
    icon: "📝",
    popular: false,
    color: "#dc2626",
    slides: [
      { bg: "from-red-900 to-red-700", label: "Full-Length Mocks", sub: "10 complete IELTS papers" },
      { bg: "from-slate-800 to-slate-600", label: "Band Prediction", sub: "Accurate score estimation" },
      { bg: "from-red-800 to-rose-600", label: "Expert Feedback", sub: "Written corrections on every answer" },
      { bg: "from-gray-800 to-gray-600", label: "Progress Reports", sub: "Track improvement over 10 tests" },
    ],
    highlights: [
      "10 full-length, authentic mock papers",
      "Strict exam conditions — timed, no hints",
      "Band score prediction for all four skills",
      "Detailed written feedback from expert examiners",
      "Progress tracking dashboard after each test",
      "Can be combined with any coaching course",
    ],
    curriculum: [
      { module: "Tests 1–3: Baseline", topics: ["Initial band assessment", "Error pattern identification", "Time management analysis", "Feedback session"] },
      { module: "Tests 4–7: Development", topics: ["Targeted practice papers", "Progress monitoring", "Trainer feedback review", "Strategy adjustments"] },
      { module: "Tests 8–10: Exam Simulation", topics: ["Full exam-day simulation", "Final band prediction", "Confidence assessment", "Last tips debrief"] },
      { module: "Post-Test Analysis", topics: ["Detailed score breakdown", "Comparison with real exam", "Improvement action plan", "Ongoing performance report"] },
    ],
    outcomes: [
      "Know exactly what to expect on test day",
      "Reduce exam anxiety with repeated practice",
      "Identify and eliminate recurring mistakes",
      "Enter the exam with full confidence",
    ],
  },
];
