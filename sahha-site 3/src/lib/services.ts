export type Service = {
  slug: string
  title: string
  tagline: string
  intro: string
  image: string
  bullets: string[]
  faq: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: 'personal-care',
    title: 'Personal Care Assistance',
    tagline: 'Helping you feel like yourself again',
    intro:
      'Dignified support with bathing, grooming, dressing, toileting, mobility, and daily routines — delivered with respect and compassion.',
    image: '/images/services/personal-care.jpg',
    bullets: [
      'Bathing, grooming, dressing, and hygiene assistance',
      'Mobility support, transfers, and fall-prevention routines',
      'Respectful, culturally aware care in the comfort of home',
      'Caregiver matching based on skills and compatibility',
    ],
    faq: [
      { q: 'How quickly can personal care start?', a: 'After a free consultation, care can often begin within 24–48 hours depending on availability and needs.' },
      { q: 'Do you help with mobility and transfers?', a: 'Yes. We assist with safe mobility and transfers based on your care plan.' },
    ],
  },
  {
    slug: 'homemaker',
    title: 'Homemaker Services',
    tagline: 'Creating calm, order, and comfort at home',
    intro:
      'Creating calm, order, and comfort at home with light housekeeping, meal preparation, laundry, and daily household support.',
    image: '/images/services/homemaker.jpg',
    bullets: [
      'Light housekeeping and tidying',
      'Meal prep aligned with preferences and dietary needs',
      'Laundry and basic home organization',
      'Support that improves safety and daily comfort',
    ],
    faq: [
      { q: 'What kinds of homemaker tasks do you provide?', a: 'We focus on practical daily support: light cleaning, laundry, meal prep, and household routines.' },
    ],
  },
  {
    slug: 'companionship-safety',
    title: 'Companionship & Safety Supervision',
    tagline: 'A friendly face, a listening ear, and a steady presence',
    intro:
      'More than a caregiver — a friendly face, a listening ear, and steady presence to reduce isolation and promote safety.',
    image: '/images/services/companionship.jpg',
    bullets: [
      'Conversation, engagement, and emotional support',
      'Safety check-ins and routine supervision',
      'Help with errands and light daily structure',
      'Support that honors dignity and independence',
    ],
    faq: [
      { q: 'Can companionship help with loneliness?', a: 'Yes. Consistent, caring visits can reduce isolation and support emotional well-being.' },
    ],
  },
  {
    slug: 'alzheimers-dementia',
    title: 'Alzheimer’s & Dementia Care',
    tagline: 'Specialized memory support with patience and structure',
    intro:
      'Structured, patient-centered support designed to create safety, routine, and calm for clients and families.',
    image: '/images/services/alzheimers.jpg',
    bullets: [
      'Familiar routines that reduce stress and confusion',
      'Safety-focused supervision and redirection strategies',
      'Family communication and consistent care notes',
      'Caregiver matching for personality and patience',
    ],
    faq: [
      { q: 'Do you create a routine for dementia care?', a: 'Yes. We prioritize predictable routines and gentle support to improve comfort and safety.' },
    ],
  },
  {
    slug: 'medicaid-waiver-support',
    title: 'Medicaid Waiver Program Support',
    tagline: 'We understand the system so you don’t have to navigate alone',
    intro:
      'Guidance and care coordination to help eligible families understand options and receive support at home.',
    image: '/images/services/medicaid-waiver.jpg',
    bullets: [
      'Help understanding available home-care options',
      'Coordination and documentation support',
      'Care plans aligned with program requirements',
    ],
    faq: [
      { q: 'Do you accept Medicaid?', a: 'Yes. We support eligible clients and can help explain next steps for coverage.' },
    ],
  },
  {
    slug: 'respite-care',
    title: 'Respite Care',
    tagline: 'Because caregivers deserve rest, too',
    intro:
      'Short-term relief for family caregivers — so you can rest, recharge, and return with confidence.',
    image: '/images/services/respite.png',
    bullets: [
      'Flexible scheduling for temporary caregiver coverage',
      'Support with daily routines and safety',
      'Peace of mind with vetted professionals',
    ],
    faq: [
      { q: 'How long can respite care last?', a: 'It can be arranged for a few hours, a weekend, or longer depending on your needs and availability.' },
    ],
  },
  {
    slug: 'hospice-palliative',
    title: 'Hospice & Palliative Support',
    tagline: 'Tender support through life’s most sacred chapter',
    intro:
      'Comfort-focused care that supports dignity, symptom relief, and family peace of mind.',
    image: '/images/services/hospice.jpg',
    bullets: [
      'Comfort, routine, and emotional support',
      'Coordination with hospice and clinical teams when applicable',
      'Support for family caregivers during a challenging season',
    ],
    faq: [
      { q: 'Do you coordinate with hospice services?', a: 'We can collaborate and coordinate as appropriate to support comfort and continuity.' },
    ],
  },
  {
    slug: 'medication-reminders',
    title: 'Medication Reminders',
    tagline: 'Staying on track for better health and peace of mind',
    intro:
      'Gentle reminders and routine support to help clients stay consistent with their care plan.',
    image: '/images/services/medication.jpg',
    bullets: [
      'Medication reminders aligned with your routine',
      'Observation and communication of changes',
      'Support that promotes safety and consistency',
    ],
    faq: [
      { q: 'Do you administer medications?', a: 'We can provide reminders and routine support. For clinical administration, we follow the applicable care plan and regulations.' },
    ],
  },
  {
    slug: 'mobility-transfer',
    title: 'Mobility & Transfer Assistance',
    tagline: 'Helping you move with confidence and safety',
    intro:
      'Support with safe movement, transfers, and fall prevention so clients can remain active and secure at home.',
    image: '/images/services/mobility.jpg',
    bullets: [
      'Safe transfers and mobility assistance',
      'Fall-risk awareness and home-safety routines',
      'Encouragement of independence where possible',
    ],
    faq: [
      { q: 'Can you help with walker or wheelchair transfers?', a: 'Yes. We support safe transfers as part of your care plan.' },
    ],
  },
  {
    slug: 'caregiver-education',
    title: 'Caregiver Education & Family Support',
    tagline: 'Knowledge is power — for patients and families',
    intro:
      'Practical guidance that helps families feel confident and supported throughout the caregiving journey.',
    image: '/images/services/caregiver-education.jpg',
    bullets: [
      'Care plan coaching and routine guidance',
      'Support for family caregivers and communication',
      'Resources aligned with your loved one’s needs',
    ],
    faq: [
      { q: 'Can you help family members become more confident caregivers?', a: 'Yes. We provide education, routines, and ongoing support so families feel prepared.' },
    ],
  }
]

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}
