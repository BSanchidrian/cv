import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Borja Sanchidrián",
  initials: "BS",
  location: "Madrid, Spain, CET",
  locationLink: "https://www.google.com/maps/place/Madrid",
  about: "Lead Software Engineer | Building Backends for Games",
  summary:
    "Software Engineer who's genuinely passionate about tech and loves to keep learning. I enjoy diving into various areas, mastering new programming languages, learning new architectural patterns, and tinkering with my home server",
  avatarUrl: "https://avatars.githubusercontent.com/u/25932251?v=4",
  personalWebsiteUrl: "https://cv.borjas.dev",
  contact: {
    email: "b.sanchidrianmonge@gmail.com",
    tel: "+34653532170",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BSanchidrian",
        icon: GitHubIcon,
        showInPrint: true,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/borja-sanchidrian/",
        icon: LinkedInIcon,
        showInPrint: false,
      },
      {
        name: "X",
        url: "https://x.com/borjasanchidria",
        icon: XIcon,
        showInPrint: false,
      },
    ],
  },
  education: [
    {
      school: "U-TAD",
      degree: "Software Engineering",
      start: "2015",
      end: "2019",
    },
    {
      school: "Alcalá University",
      degree: "Systems Engineering",
      start: "2014",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Scopely",
      link: "https://scopely.com",
      badges: ["Remote"],
      title: "Senior Server Engineer → Lead Server Engineer",
      logo: ParabolLogo,
      start: "July 2021",
      end: "Now",
      description: `
  - **High-Performance Game Development:** Developed server-side features and APIs for games with millions of daily active users, maintaining a remarkable uptime of 99.9% and achieving low latency (under 100 and 50 milliseconds).
  - **AWS Infrastructure Management:** Effectively managed and monitored AWS infrastructure supporting our services, ensuring seamless operation and scalability.
  - **New Feature Development and Tech Debt:** In-depth analysis of the existing codebase, devising precise implementation plans for introducing new features, improving code quality, and ensuring future scalability.
  - **Database Optimization:** Optimized database performance and resource utilization, implementing tailored strategies that improved efficiency and responsiveness.
  - **Led initiatives** to optimize automation, development, and deployment tools, streamlining processes for building and deploying in complex multi-environment setups.
  `,
    },
    {
      company: "Payvision",
      link: "https://payvision.com",
      badges: [],
      title: "Software Engineer",
      logo: ClevertechLogo,
      start: "July 2019",
      end: "July 2021",
      description: `
  - **New Feature Development:** Played a pivotal role in the development of new features, contributing to the expansion and functionality of the payment gateway.
  - **Production Monitoring:** Actively monitored the production environment, ensuring optimal system performance and identifying and resolving issues proactively.
  - **Incident Management:** Effectively managed incidents, addressing any technical glitches or service interruptions to minimize downtime and maintain service reliability.
  - **CI/CD:** Designed and implemented efficient build and deploy pipelines in Azure DevOps, streamlining the development workflow and ensuring seamless releases.
  - **High Availability and Scalability:** Collaborated with the team to design, deliver, and operate the system in a high-availability and scalable production environment, ensuring uninterrupted service for customers.
  `,
    },
    {
      company: "Airbus - Aerospace and defense",
      link: "https://airbus.com/",
      badges: [],
      title: "Junior Software Engineer",
      logo: JojoMobileLogo,
      start: "October 2017",
      end: "July 2019",
      description:
        ".NET, Python and C++ development at the Aeronautics, Space & Defense department for Airbus",
    },
  ],
  skills: [
    ".NET",
    "AWS",
    "C++",
    "React",
    "Terraform",
    "CI/CD",
    "Network Programming",
  ],
  languages: ["English", "Spanish"],
  projects: [
    {
      title: "Example",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A cool example :D",
      logo: ConsultlyLogo,
      link: {
        label: "google.com",
        href: "https://google.com/",
      },
    },
    {
      title: "Example",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A cool example :D",
      logo: ConsultlyLogo,
      link: {
        label: "google.com",
        href: "https://google.com/",
      },
    },
    {
      title: "Example",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A cool example :D",
      logo: ConsultlyLogo,
      link: {
        label: "google.com",
        href: "https://google.com/",
      },
    },
    {
      title: "Example",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A cool example :D",
      logo: ConsultlyLogo,
      link: {
        label: "google.com",
        href: "https://google.com/",
      },
    },
    {
      title: "Example",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A cool example :D",
      logo: ConsultlyLogo,
      link: {
        label: "google.com",
        href: "https://google.com/",
      },
    },
    // {
    //   title: "Consultly",
    //   techStack: [
    //     "Side Project",
    //     "TypeScript",
    //     "Next.js",
    //     "Vite",
    //     "GraphQL",
    //     "WebRTC",
    //   ],
    //   description: "A cool example :D",
    //   logo: ConsultlyLogo,
    //   link: {
    //     label: "google.com",
    //     href: "https://google.com/",
    //   },
    // },
    // {
    //   title: "Monito",
    //   techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
    //   description:
    //     "Browser extension that records everything happening in a web application",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "monito.dev",
    //     href: "https://monito.dev/",
    //   },
    // },
    // {
    //   title: "Jarocki.me",
    //   techStack: ["Side Project", "Next.js", "MDX"],
    //   description:
    //     "My personal website and blog. Built with Next.js and Notion API",
    //   logo: JarockiMeLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://jarocki.me/",
    //   },
    // },
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
