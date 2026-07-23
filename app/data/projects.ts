export type ProjectStatus = "published" | "in-progress";

export type Project = {
  slug: "lawn-fadez" | "kuiken-group" | "wireless-world";
  title: string;
  shortDescription: string;
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
    services: ["Digital Marketing", "Lead Generation", "Creative Direction"],
    status: "in-progress",
  },
];

export function getProject(slug: Project["slug"]) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project;
}
