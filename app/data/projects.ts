export type ProjectStatus = "published" | "in-progress";

export type Project = {
  slug: "lawn-fadez" | "kuiken-group" | "wireless-world";
  title: string;
  shortDescription: string;
  overview: string;
  summary: string;
  client: string;
  timeline: string;
  deliverables: string[];
  services: string[];
  year?: string;
  featuredImage?: string;
  imageAlt?: string;
  status: ProjectStatus;
  caseStudyHref?: `/work/${string}`;
};

export const projects: Project[] = [
  {
    slug: "lawn-fadez",
    title: "Lawn Fadez",
    shortDescription:
      "A neighborhood lawn-care business repositioned with a sharper identity, clearer offer, and digital experience built to turn local attention into quote requests.",
    overview:
      "Lawn Fadez needed a presence that felt as considered as the work its customers see from the curb.",
    summary:
      "A local lawn-care brand and website system shaped around dependable work, precise finishes, and a direct path from interest to quote request.",
    client: "Lawn Fadez",
    timeline: "Not publicly disclosed",
    deliverables: [
      "Brand strategy",
      "Visual identity",
      "Website design",
      "Website development",
      "Lead-generation direction",
    ],
    services: ["Brand Strategy", "Brand Identity", "Web Design", "Lead Generation"],
    year: "2025",
    featuredImage: "/work/lawn-fadez-homepage-v2.jpg",
    imageAlt: "Lawn Fadez website featuring editorial typography and a precisely striped residential lawn",
    status: "published",
    caseStudyHref: "/work/lawn-fadez",
  },
  {
    slug: "kuiken-group",
    title: "Kuiken Group",
    shortDescription:
      "A complete positioning, identity, and digital system built to express quiet confidence and support a principal-led marketing firm.",
    overview:
      "The brand had to demonstrate the same clarity and care Kuiken Group promises its clients.",
    summary:
      "An internal brand platform defining the firm’s position, identity, messaging, and flagship digital experience.",
    client: "Kuiken Group",
    timeline: "Not publicly disclosed",
    deliverables: [
      "Brand positioning",
      "Messaging system",
      "Visual identity",
      "Website design and development",
      "Creative direction",
    ],
    services: ["Brand Strategy", "Brand Identity", "Web Design", "Creative Direction"],
    featuredImage: "/work/kuiken-identity-logo-v3.jpg",
    imageAlt: "Kuiken Group identity materials with gold-foiled KG marks, stationery, and a tablet",
    status: "published",
    caseStudyHref: "/work/kuiken-group",
  },
  {
    slug: "wireless-world",
    title: "Wireless World",
    shortDescription:
      "A retail growth-system framework spanning brand consistency, campaign direction, digital marketing, and customer acquisition.",
    overview: "Case study in progress.",
    summary: "Verified project details will be published when the case study is ready.",
    client: "Wireless World",
    timeline: "Not publicly disclosed",
    deliverables: ["Not publicly disclosed"],
    services: ["Digital Marketing", "Lead Generation", "Creative Direction"],
    status: "in-progress",
  },
];

export function getProject(slug: Project["slug"]) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project;
}
