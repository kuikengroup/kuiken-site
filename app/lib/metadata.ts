import type { Metadata } from "next";

const siteName = "Kuiken Group";
const defaultImage = {
  url: "/work/kuiken-identity-logo-v3.jpg",
  width: 1448,
  height: 1086,
  alt: "Kuiken Group identity system",
};

type PageMetadata = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  image?: typeof defaultImage;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  image = defaultImage,
  noIndex = false,
}: PageMetadata): Metadata {
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : { index: true, follow: true },
  };
}
