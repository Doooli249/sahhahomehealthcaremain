export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: 'how-to-choose-home-health-centennial',
    title: 'How to Choose a Home Health Care Provider in Centennial, CO',
    date: '2026-02-12',
    excerpt: 'A clear checklist for choosing a provider: licensing, caregiver vetting, communication, and care plans.',
    content: `## A quick checklist\n\nChoosing a provider can feel overwhelming. Start with these basics:\n\n- **Care plan clarity:** Ask how the plan is created and updated.\n- **Caregiver screening:** Background checks, references, and training.\n- **Communication:** Who updates the family and how often?\n- **Scheduling:** How quickly can care start? What’s the backup plan?\n\n## Questions to ask\n\n1. Who will be my point of contact?\n2. What happens if my caregiver is unavailable?\n3. How do you handle care changes?\n\nIf you’d like, Sahha can walk you through options in a free consultation.`
  },
  {
    slug: 'when-is-it-time-for-in-home-care',
    title: 'How to Know When It’s Time for In-Home Care',
    date: '2026-02-12',
    excerpt: 'Signs that extra support could help: safety risks, missed medications, burnout, and daily routine changes.',
    content: `## Common signs\n\n- Increased falls or near-falls\n- Missed medications\n- Difficulty with bathing, dressing, or meals\n- Isolation and withdrawal\n- Caregiver fatigue\n\nEarly support can prevent emergencies and reduce stress for everyone.`
  },
  {
    slug: 'why-healing-happens-best-at-home',
    title: 'The Power of Home: Why Healing Happens Best at Home',
    date: '2026-02-12',
    excerpt: 'Home routines, comfort, and familiarity can improve confidence and reduce stress during recovery.',
    content: `## Familiar routines matter\n\nHome offers familiarity, which can reduce stress and support better daily habits. The goal is safe independence — with support where needed.`
  }
]

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}
