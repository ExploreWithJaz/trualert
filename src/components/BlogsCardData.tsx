export type BlogCard = {
  img: string;
  category: string;
  title: string;
  description: string;
  author: string;
};

const blogsCardData: BlogCard[] = [
  {
    img: '/red-flags-blog.jpg',
    category: 'BLOG',
    title: 'Why Most People Ignore Red Flags (And How TRUalert Helps You Respond Faster)',
    description: "Red Flags Are Easy to Spot—Until They Aren’t — We’ve...",
    author: 'Ese Roberts',
  },
  {
    img: '/music-festival-blog.jpg',
    category: 'BLOG',
    title: 'How to Stay Safe at Music Festivals in 2025',
    description: 'Music festivals in 2025 are immersive cultural experiences attracting massive...',
    author: 'Ese Roberts',
  },
  {
    img: '/personal-safety-plan-blog.jpg',
    category: 'BLOG',
    title: 'Why You Should Always Have a Personal Safety Plan at Events',
    description: 'How TRUalert Helps You Stay Prepared, Protected, and in Control...',
    author: 'Ese Roberts',
  },
  {
    img: '/being-followed-blog.jpg',
    category: 'What to Do',
    title: 'If You’re Being Followed, Harassed, or Attacked — And How TRUalert Can Help',
    description: '',
    author: 'Ese Roberts',
  },
  {
    img: '/criminals-targets-blog.jpg',
    category: 'The Psychology of Predators',
    title: 'How Criminals Choose Their Targets',
    description: '',
    author: 'Ese Roberts',
  },
  {
    img: '/keeping-communities-safe-blog.jpg',
    category: 'Neighborhood Watch Groups in Orange County',
    title: 'Keeping Communities Safe (+ How TruAlert Can Help)',
    description: '',
    author: 'Ese Roberts',
  },
];

export default blogsCardData;