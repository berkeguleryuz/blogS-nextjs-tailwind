import { LinkedInLogoIcon } from "@radix-ui/react-icons";
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
    label: "Linkedin",
    route: "https://www.linkedin.com/in/berke-guleryuz/",
    icon: LinkedInLogoIcon,
  },
  {
    label: "Contact",
    route: "mailto:berke@clodron.com",
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
    label: "Shadcn",
    route: "/browse/shadcn",
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
    description:
      "Our platform serves as a beacon for the latest trends, news, and insights in the tech world. From artificial intelligence and machine learning to blockchain technology and cybersecurity, Tech Innovators Hub covers a broad spectrum of topics to keep our audience informed and engaged. Our comprehensive articles, in-depth analyses, and expert opinions are designed to provide valuable knowledge and stimulate intellectual discussions. At Tech Innovators Hub, we believe in the power of collaboration and the sharing of ideas. Our community of tech enthusiasts is at the heart of everything we do. By joining our platform, you become part of a dynamic network of professionals who are passionate about pushing the boundaries of technology. Engage with like-minded individuals, participate in forums, and attend exclusive events to expand your horizons and stay ahead of the curve.",
    image: "/1.png",
    tags: ["nextjs", "reactjs", "tailwindcss", "prisma", "mongodb", "solidity"],
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-04",
    author: "clodron",
    isPublished: true,
    href: "/project/1",
    link: "https://linkedin.com/in/berke-guleryuz/",
    price: "Free",
  },
  {
    id: 2,
    title: "Clodron #2 ",
    description:
      "Explore our comprehensive content, which includes articles, videos, and guides on a variety of topics related to sustainable living. Learn about the benefits of renewable energy, discover eco-friendly alternatives to everyday products, and get inspired by stories of individuals and communities who are making a difference.",
    image: "/2.png",
    tags: ["nextjs", "reactjs", "tailwindcss", "prisma", "mongodb", "clerk"],
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-04",
    author: "clodron",
    isPublished: true,
    href: "/project/2",
    link: "https://linkedin.com/in/berke-guleryuz/",
    price: "Free",
  },
  {
    id: 3,
    title: "Clodron #3 ",
    description:
      "Our mission is to inspire and empower individuals to take charge of their health and make informed decisions. We offer a wealth of information on a variety of topics, including nutrition, fitness, mental health, and alternative therapies. Our expert contributors are passionate about sharing their knowledge and providing practical advice that you can incorporate into your daily routine.",
    image: "/2.png",
    tags: [
      "nextjs",
      "reactjs",
      "tailwindcss",
      "prisma",
      "mongodb",
      "stripe",
      "mysql",
      "shadcn",
    ],
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-04",
    author: "clodron",
    isPublished: true,
    href: "/project/3",
    link: "https://linkedin.com/in/berke-guleryuz/",
    price: "Free",
  },
  {
    id: 4,
    title: "Clodron #4 ",
    description:
      "Thank you for choosing Clodron as your trusted source for travel information and inspiration. We are committed to supporting you every step of the way and helping you create unforgettable memories. Join us today and take the first step towards your next great adventure.",
    image: "/mockprofile.png",
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
    href: "/project/4",
    link: "https://linkedin.com/in/berke-guleryuz/",
    price: "500$",
  },
];
