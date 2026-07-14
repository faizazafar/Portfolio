export type ProjectLink = { label: string; url: string };

export type Project = {
  id: number;
  title: string;
  category: string;
  period: string;
  award: boolean;
  tagline: string;
  stack: string;
  bullets: string[];
  tags: string[];
  links?: ProjectLink[];
};

export const PROJECTS: Project[] = [
  {
    id: 1, title: "Cycle Vita PKU", category: "Healthcare", period: "Jun 2025 – Present", award: true,
    tagline: "AI-powered diet management for the PKU community — Best Nutrition Mobile App winner.",
    stack: "React Native",
    bullets: [
      "Recognized as Best Nutrition Mobile App at the 10th Annual MedTech Breakthrough Awards for AI-powered diet management supporting the PKU (phenylketonuria) community.",
      "Retrofitted role-based access (Patient, Caregiver, HCP) and timezone-aware medication scheduling mid-development within a ~3-week window.",
      "Implemented end-to-end mobile security including code obfuscation and jailbreak/root device detection to protect sensitive medical data.",
      "Built bilingual support (English/Spanish) and dark/light theme modes; delivered AI-assisted meal logging, lab tracking and reminders serving 1,000+ active users.",
    ],
    tags: ["React Native", "Role-based access", "Mobile security", "AI meal logging"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/cycle-vita-pku/id6737810019" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.cyclevita&referrer=utm_source%3Dweb%26utm_campaign%3DCV%2BLP" },
    ],
  },
  {
    id: 2, title: "Tamreeni", category: "Fitness", period: "Jun 2024 – May 2025", award: false,
    tagline: "Cross-platform fitness app with Stripe subscriptions and full Arabic RTL support.",
    stack: "React Native",
    bullets: [
      "Diagnosed and resolved a scroll performance issue in a 150+ item list by replacing FlatList with FlashList, eliminating flickering.",
      "Customized a third-party UI library to match approved design specs without a full rebuild.",
      "Delivered dark mode, full RTL localization and Stripe subscription management (monthly, quarterly, annual) for Arabic-speaking users.",
      "Reached 5,000+ downloads; assisted junior developers on API integration and UI/UX alignment.",
    ],
    tags: ["React Native", "Stripe", "RTL localization", "FlashList"],
    links: [{ label: "App Store", url: "https://apps.apple.com/us/app/tamreeni-%D8%AA%D9%85%D8%B1%D9%8A%D9%86%D9%8A/id6739886178" }],
  },
  {
    id: 3, title: "Present App", category: "E-Commerce", period: "Feb 2024 – May 2024", award: false,
    tagline: "iOS gift-purchasing app letting parents build child profiles and send curated gifts.",
    stack: "React Native · iOS",
    bullets: [
      "Owned complete feature development from component architecture through App Store release.",
      "Built child-profile creation flows and curated gift-selection experiences for parents.",
      "Delivered a polished, pixel-accurate UI in close collaboration with design.",
    ],
    tags: ["React Native", "iOS", "App Store release"],
    links: [{ label: "App Store", url: "https://apps.apple.com/us/app/present-app/id6468101005" }],
  },
  {
    id: 4, title: "Visit Abu Dhabi", category: "Tourism", period: "Jun 2023 – Dec 2023", award: false,
    tagline: "High-traffic tourism website for Abu Dhabi, built on Sitecore JSS with React.",
    stack: "React · Sitecore JSS",
    bullets: [
      "Refactored legacy components and developed new modules for visitabudhabi.ae.",
      "Worked within Sitecore JSS architecture to ship content-driven, high-traffic web experiences.",
    ],
    tags: ["React", "Sitecore JSS", "Web"],
    links: [{ label: "Website", url: "https://visitabudhabi.ae/en" }],
  },
  {
    id: 5, title: "ADIBF", category: "Government", period: "Jan 2023 – Jun 2023", award: false,
    tagline: "Official Abu Dhabi International Book Fair event app with multi-type ticket booking.",
    stack: "React Native · Redux Saga",
    bullets: [
      "Developed ticket booking forms for multiple visitor types for the official ADIBF event app.",
      "Implemented state management with Redux Saga across booking flows.",
    ],
    tags: ["React Native", "Redux Saga", "Government"],
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=ae.dctabudhabi.adibf" }],
  },
  {
    id: 6, title: "MOFAIC", category: "Government", period: "Jan 2022 – Dec 2022", award: false,
    tagline: "UAE Ministry of Foreign Affairs app serving nationals and non-nationals — 500K+ downloads.",
    stack: "React Native",
    bullets: [
      "Built form submission flows with validation for a government application serving UAE nationals and non-nationals.",
      "Performed bug fixes and smoke testing; reached 500K+ downloads on Google Play.",
    ],
    tags: ["React Native", "Form validation", "500K+ downloads"],
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.mob.uae" }],
  },
  {
    id: 7, title: "Sleep Music by Sleep Sounds", category: "Health & Fitness", period: "iOS", award: false,
    tagline: "Ambient sleep and relaxation app rated 4.9 on the App Store.",
    stack: "React Native · iOS",
    bullets: [
      "Contributed to an iOS sleep and relaxation app featuring ambient sound mixing, meditation audio and sleep timers.",
      "App maintains a 4.9 rating on the App Store.",
    ],
    tags: ["React Native", "iOS", "Audio"],
    links: [{ label: "App Store", url: "https://apps.apple.com/us/app/sleep-music-by-sleep-sounds/id6471406616" }],
  },
];
