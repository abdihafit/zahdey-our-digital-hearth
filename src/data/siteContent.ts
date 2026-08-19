import {
  BarChart3,
  Building2,
  Code2,
  Globe2,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Target,
  Users2,
  Wrench,
} from "lucide-react";

export const company = {
  name: "ZAHDEY TECH LIMITED",
  shortName: "ZAHDEY TECH",
  tagline: "Community-rooted digital systems and public-facing infrastructure.",
  email: "zahdeytech@gmail.com",
  secondaryEmail: "abdihafitofficial@gmail.com",
  phone: "+254 722 940 735",
  phoneHref: "tel:+254722940735",
  location: "Opposite Jamia Mosque, Nairobi, Kenya",
};

export const heroMetrics = [
  { value: "4", label: "Core service pillars" },
  { value: "2", label: "Operating markets in focus" },
  { value: "1", label: "Flagship product in market" },
];

export const homeHighlights = [
  {
    title: "Digital product execution",
    description:
      "From lean MVPs to launch-ready platforms, we build practical products that help organisations move faster.",
    icon: Rocket,
  },
  {
    title: "Infrastructure-minded delivery",
    description:
      "We approach public and commercial systems with the same long-horizon thinking used in durable infrastructure.",
    icon: Building2,
  },
  {
    title: "Local context, modern tools",
    description:
      "Our work is grounded in East African realities while still meeting the expectations of modern software delivery.",
    icon: Globe2,
  },
];

export const values = [
  {
    title: "Community First",
    description:
      "We design solutions that respond to daily realities, not assumptions made from a distance.",
    icon: HeartHandshake,
  },
  {
    title: "Collaboration",
    description:
      "We work alongside founders, operators, and local teams to build systems people can actually use.",
    icon: Users2,
  },
  {
    title: "Reliability",
    description:
      "Our work is meant to be dependable in the field, not just impressive in a demo.",
    icon: Target,
  },
  {
    title: "Innovation",
    description:
      "We stay practical and inventive, using the right tools to solve the right problem at the right stage.",
    icon: Lightbulb,
  },
];

export const services = [
  {
    title: "Web Design & Development",
    description:
      "Marketing sites, internal tools, and custom platforms designed to communicate clearly and perform reliably.",
    features: [
      "Responsive website design",
      "CMS and landing page builds",
      "Conversion-focused UX",
      "Performance and SEO foundations",
    ],
    icon: Code2,
    tone: "secondary" as const,
  },
  {
    title: "App Development",
    description:
      "Mobile-first product delivery for teams that need usable, business-ready experiences on Android and beyond.",
    features: [
      "Android product builds",
      "Cross-platform app planning",
      "Operational workflow tooling",
      "Maintenance and iteration support",
    ],
    icon: Smartphone,
    tone: "accent" as const,
  },
  {
    title: "IT Consulting",
    description:
      "Technology guidance for organisations making decisions around systems, risk, hosting, and delivery priorities.",
    features: [
      "Digital roadmapping",
      "Security and process reviews",
      "Cloud and tooling recommendations",
      "Vendor and build-vs-buy support",
    ],
    icon: Server,
    tone: "primary" as const,
  },
  {
    title: "Public Infrastructure",
    description:
      "Planning support for facilities and service environments where resilient systems and careful execution matter.",
    features: [
      "Facility planning support",
      "Project coordination",
      "Standards and readiness reviews",
      "Long-term operations thinking",
    ],
    icon: Wrench,
    tone: "secondary" as const,
  },
];

export const operatingPrinciples = [
  {
    title: "Start with the workflow",
    description:
      "We map how work really happens before proposing software, automation, or infrastructure changes.",
  },
  {
    title: "Build for clarity",
    description:
      "Interfaces, reports, and handoffs should reduce confusion for operators, not create more of it.",
  },
  {
    title: "Ship in useful phases",
    description:
      "We prefer momentum through measurable releases instead of long waits for a perfect final state.",
  },
  {
    title: "Leave teams stronger",
    description:
      "A successful engagement should improve confidence, systems knowledge, and day-to-day execution after launch.",
  },
];

export const testimonials = [
  {
    quote:
      "ZAHDEY TECH thinks beyond code. Their advice consistently ties product decisions back to how real teams operate on the ground.",
    name: "Regional Operations Lead",
    role: "East Africa commerce network",
  },
  {
    quote:
      "What stood out most was the combination of speed and practicality. The work felt tailored to our context instead of copied from another market.",
    name: "Program Partner",
    role: "Community-focused innovation team",
  },
];

export const faqs = [
  {
    question: "Who do you typically work with?",
    answer:
      "We support founders, small businesses, community organisations, and teams modernising how they deliver services.",
  },
  {
    question: "Do you only build software?",
    answer:
      "No. Software is one part of our work. We also advise on operational systems, readiness, and public-facing infrastructure planning.",
  },
  {
    question: "Can you help shape an idea before development starts?",
    answer:
      "Yes. Discovery, scoping, and early product framing are often where we create the most leverage for clients.",
  },
];

export const aboutTimeline = [
  {
    year: "Foundation",
    title: "Built around practical problem-solving",
    description:
      "ZAHDEY TECH was formed around a straightforward belief: communities and growing businesses deserve systems that are reliable, understandable, and built for their context.",
  },
  {
    year: "Expansion",
    title: "Digital services became the engine",
    description:
      "The company widened its scope from technology support into web delivery, mobile product execution, and operational advisory work.",
  },
  {
    year: "Today",
    title: "A focused platform for execution",
    description:
      "Today the team combines product thinking, technical delivery, and infrastructure-minded planning to support modern growth across East Africa.",
  },
];

export const serviceBuckets = [
  {
    name: "Strategy",
    icon: Handshake,
    items: [
      "Discovery workshops",
      "Product and workflow audits",
      "Technology roadmaps",
      "Delivery planning",
    ],
  },
  {
    name: "Build",
    icon: Code2,
    items: [
      "Marketing websites",
      "Business systems",
      "Mobile applications",
      "Operational dashboards",
    ],
  },
  {
    name: "Scale",
    icon: BarChart3,
    items: [
      "Performance reviews",
      "Process improvements",
      "Growth support",
      "Ongoing iteration",
    ],
  },
];

export const productFeatures = [
  "Auto M-Pesa transaction capture",
  "Real-time sales visibility",
  "KRA eTIMS readiness support",
  "Biashara Score health indicator",
  "Daily, weekly, and monthly reporting",
  "Built for African small businesses",
];

export const productStats = [
  { label: "Primary market", value: "Kenya" },
  { label: "Core users", value: "SMBs" },
  { label: "Data source", value: "M-Pesa SMS" },
];

export const capabilityBadges = [
  { label: "Product strategy", icon: ShieldCheck },
  { label: "Business systems", icon: BarChart3 },
  { label: "Field-ready UX", icon: Smartphone },
];
