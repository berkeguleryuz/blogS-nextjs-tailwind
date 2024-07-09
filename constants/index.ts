import { CodeIcon, Compass, Contact, Store } from "lucide-react";
import { FiInstagram, FiGithub, FiLinkedin, FiHome } from "react-icons/fi";

export const navLinks = [
  {
    label: "Browse",
    route: "/",
    icon: Compass,
  },
  {
    label: "About",
    route: "/about",
    icon: CodeIcon,
  },
  {
    label: "Store",
    route: "/store",
    icon: Store,
  },
  {
    label: "Contact",
    route: "/contact",
    icon: Contact,
  },
];

export const socialMedia = [
  {
    route: "https://www.instagram.com/berkeguleryuz/",
    icon: FiInstagram,
  },
  {
    route: "https://github.com/berkeguleryuz",
    icon: FiGithub,
  },
  {
    route: "https://linkedin.com/in/berke-guleryuz/",
    icon: FiLinkedin,
  },
  {
    route: "https://www.clodron.com",
    icon: FiHome,
  },
];

export const BrowseCategory = [
  {
    label: "All",
    route: "/",
  },
  {
    label: "Next.js",
    route: "/browse/nextjs",
  },
  {
    label: "React.js",
    route: "/browse/reactjs",
  },
  {
    label: "Solidity",
    route: "/browse/solidity",
  },
  {
    label: "Shdcn",
    route: "/browse/shdcn",
  },
  {
    label: "Mysql",
    route: "/browse/mysql",
  },
  {
    label: "MongoDb",
    route: "/browse/mongodb",
  },
  {
    label: "Prisma",
    route: "/browse/prisma",
  },
  {
    label: "Tailwind",
    route: "/browse/tailwindcss",
  },
  {
    label: "PostgreSql",
    route: "/browse/postgreSql",
  },
  {
    label: "Clerk",
    route: "/browse/clerk",
  },
  {
    label: "Stripe",
    route: "/browse/strapi",
  },
];

export const Projects = [
  {
    id: 1,
    title: "Clodron #1 ",
    description: "1",
    image: "/2.png",
    tags: [
      "nextjs",
      "reactjs",
      "tailwindcss",
      "prisma",
      "mongobdb",
      "solidity",
    ],
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-04",
    author: "clodron",
    isPublished: true,
    href: "/project/1",
    link: "https://youtu.be/9DcOvsFNSwg",
    price: "Free",
  },
  {
    id: 2,
    title: "Clodron #2 ",
    description: "2",
    image: "/2.png",
    tags: ["nextjs", "reactjs", "tailwindcss", "prisma", "mongobdb", "clerk"],
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-04",
    author: "clodron",
    isPublished: true,
    href: "/project/2",
    link: "https://youtu.be/9DcOvsFNSwg",
    price: "Free",
  },
  {
    id: 3,
    title: "Clodron #3 ",
    description: "3",
    image: "/2.png",
    tags: ["nextjs", "reactjs", "tailwindcss", "prisma", "mongobdb", "stripe"],
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-04",
    author: "clodron",
    isPublished: true,
    href: "/project/3",
    link: "https://youtu.be/9DcOvsFNSwg",
    price: "Free",
  },
];
