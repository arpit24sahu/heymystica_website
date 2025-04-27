export type Feature = {
  title: string;
  description: string;
  icon: string;
  imagePosition: "left" | "right";
  imagePlaceholder: string;
  imageUrl?: string;
  quote?: string;
};

export const appFeatures: Feature[] = [
  {
    title: "Goal Setting",
    description: "Set clear, actionable goals for your manifestation journey. Track your progress and celebrate achievements along the way.",
    icon: "target",
    imagePosition: "right",
    imagePlaceholder: "Goal setting screenshot",
    imageUrl: "https://i.imgur.com/TvKHOv9.jpeg",
    quote: "A goal without a plan is just a wish.",
  },
  {
    title: "Daily Affirmations",
    description: "Start each day with powerful, personalized affirmations that align with your desires and elevate your vibration.",
    icon: "smile",
    imagePosition: "left",
    imagePlaceholder: "Affirmations screenshot",
    imageUrl: "http://i.imgur.com/L84Mmjz.jpeg",
    quote: "Speak to your soul with words of power and grace.",
  },
  {
    title: "Mood Tracking",
    description: "Monitor your emotional state to understand patterns and maintain a high vibrational state conducive to manifestation.",
    icon: "heart",
    imagePosition: "right",
    imagePlaceholder: "Mood tracking screenshot",
    imageUrl: "https://i.imgur.com/sDc12HJ.jpeg",
    quote: "Your emotions are the gateway to your manifestations.",
  },
  {
    title: "Daily Journal",
    description: "Document your manifestation journey with prompts designed to enhance gratitude, clarity, and intention.",
    icon: "book",
    imagePosition: "left",
    imagePlaceholder: "Journal screenshot",
    imageUrl: "https://i.imgur.com/jsTHrLb.png",    
    quote: "When you write down your dreams, they become goals.",
  },
  {
    title: "Visualization Meditations",
    description: "Access guided meditations that help you vividly imagine your desires as already fulfilled.",
    icon: "eye",
    imagePosition: "right",
    imagePlaceholder: "Meditation screenshot",
    imageUrl: "https://i.imgur.com/Vpj3e1S.jpeg",
    quote: "What you can visualize, you can materialize.",
  },
  {
    title: "Manifestation Tips",
    description: "Learn expert techniques and wisdom to enhance your manifestation practice and accelerate your results.",
    icon: "lightbulb",
    imagePosition: "left",
    imagePlaceholder: "Tips screenshot",
    imageUrl: "https://i.imgur.com/YCjGU64.jpeg",
    quote: "Knowledge is the seed from which manifestation grows.",
  },
];

export const testimonials = [
  {
    name: "Sarah J.",
    role: "Life Coach",
    content: "HeyMystica has transformed my manifestation practice. The daily affirmations and visualization tools have helped me manifest amazing opportunities in just weeks!",
    avatar: "/testimonials/avatar-1.jpg",
  },
  {
    name: "Michael T.",
    role: "Entrepreneur",
    content: "I was skeptical at first, but using the goal setting and daily journal features has completely changed my mindset. My business has grown 30% since I started using HeyMystica.",
    avatar: "/testimonials/avatar-2.jpg",
  },
  {
    name: "Elena R.",
    role: "Artist",
    content: "The meditation features in this app are incredible. I've found so much clarity and inspiration, and I'm now living the creative life I always dreamed of.",
    avatar: "/testimonials/avatar-3.jpg",
  },
  {
    name: "David L.",
    role: "Student",
    content: "Using HeyMystica's mood tracking and affirmations daily has helped me stay positive through exams and manifest my dream internship!",
    avatar: "/testimonials/avatar-4.jpg",
  },
];