export type NavItem = {
  label: string;
  href: string;
};

export type CardItem = {
  title: string;
  description: string;
  badge?: string;
};

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Learning Materials", href: "#materials" },
  { label: "Videos", href: "#videos" },
  { label: "Careers", href: "#careers" },
  { label: "Notices", href: "#notices" },
  { label: "About", href: "#about" },
];

export const levelOptions: CardItem[] = [
  {
    title: "Foundation",
    description: "Build confidence with essential skills and entry-level guidance.",
    badge: "Entry",
  },
  {
    title: "NVQ Level 1",
    description: "Develop practical habits and foundational workplace knowledge.",
    badge: "Level 1",
  },
  {
    title: "NVQ Level 2",
    description: "Strengthen applied skills for everyday work environments.",
    badge: "Level 2",
  },
  {
    title: "NVQ Level 3",
    description: "Prepare for skilled tasks, assessments and supervised practice.",
    badge: "Level 3",
  },
  {
    title: "NVQ Level 4",
    description: "Match advanced technical thinking to workplace expectations.",
    badge: "Level 4",
  },
  {
    title: "NVQ Level 5",
    description: "Support leadership, coordination and higher vocational performance.",
    badge: "Level 5",
  },
];

export const fieldOptions: CardItem[] = [
  {
    title: "Engineering & Construction",
    description: "Trade skills, safety practices and technical drawing support.",
  },
  {
    title: "Hospitality & Tourism",
    description: "Service quality, operations and customer care learning resources.",
  },
  {
    title: "Information Technology",
    description: "Digital literacy, support and practical IT guidance.",
  },
  {
    title: "Business & Management",
    description: "Operations, entrepreneurship and workplace communication support.",
  },
  {
    title: "Agriculture & Food",
    description: "Applied learning for production, operations and quality practices.",
  },
  {
    title: "Health & Social Care",
    description: "Wellbeing, communication and practical care skills for learners.",
  },
];

export const featuredMaterials = [
  {
    title: "Assessment Workbook Pack",
    description: "Practice activities and review notes for portfolio preparation.",
    badge: "Learning Materials",
  },
  {
    title: "Practical Workshop Guide",
    description: "Step-by-step guidance for safe, relevant workplace demonstrations.",
    badge: "Practical",
  },
  {
    title: "Past Paper Collection",
    description: "Focused revision packs for exam preparation and self-checking.",
    badge: "Exams",
  },
];

export const latestNotices = [
  {
    title: "Updated resource review guidance",
    meta: "2 days ago",
    description: "A refreshed checklist is now available for contributors and learners.",
  },
  {
    title: "Contributor onboarding opens",
    meta: "1 week ago",
    description: "New material submissions are being invited for review and quality checks.",
  },
  {
    title: "Portfolio support session",
    meta: "2 weeks ago",
    description: "Support materials and practical examples are now centralised in one place.",
  },
];

export const careerOpportunities = [
  {
    title: "Training Support Assistant",
    description: "Help learners navigate course tools, portfolios and study support.",
    badge: "Entry-level",
  },
  {
    title: "Learning Resource Contributor",
    description: "Review and share practical material aligned with NVQ standards.",
    badge: "Contributor",
  },
  {
    title: "Community Mentor",
    description: "Guide learners through career planning, resources and local opportunities.",
    badge: "Volunteer",
  },
];

export const stats = [
  { value: "500+", label: "resources" },
  { value: "30+", label: "learning fields" },
  { value: "24/7", label: "access" },
  { value: "100%", label: "free-first" },
];

export const footerSections = {
  explore: ["Courses", "Learning Materials", "Videos", "Careers", "Notices"],
  community: ["Request Learning Material", "Join Our Contributor Team", "Report Resource"],
  help: ["FAQ", "Contact Us"],
  information: ["About", "Privacy", "Terms", "Copyright"],
  officialSources: ["DTET", "TVEC", "NAITA", "VTA"],
};

export const mobilePrimaryLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Search", href: "#search" },
  { label: "Account", href: "#account" },
];
