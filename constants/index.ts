import {  CodeIcon, Compass, Contact, Store } from "lucide-react";
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
  }
];
