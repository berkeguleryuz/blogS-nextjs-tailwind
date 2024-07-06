import About from "@/components/about/About";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "It is about page",
};

const AboutPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "About",
    image: "asd",
    description: "asdadasdsadasd",
    publishedAt: "2024-07-05",
    updatedAt: "2024-07-07",
    author: "Omegayon",
    isPublished: true,
    tags: ["web development", "nextjs", "typescript"],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <About />
    </div>
  );
};

export default AboutPage;
