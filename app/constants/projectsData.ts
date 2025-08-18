type projectsDataType = {
  id: number;
  title: string;
  description: string;
  image: string;
  techNames: string[];
  githubLink: string;
  liveLink: string;
  category: string;
};

export const projectsData: projectsDataType[] = [
  {
    id: 1,
    title: "Tradeflow",
    description:
      "Tradeflow is an all-encompassing platform tailored for companies offering brokerage services, eliminating the need for additional software. It provides a robust back-end system, connectivity gateways to exchanges, liquidity and payment providers, and a wide array of APIs for seamless integration with websites, trading systems, CRMs, and post-trading systems.",
    image:
      "https://lsxkwmtfw8z49zdi.public.blob.vercel-storage.com/images/tradeflow-z12JfpncEniCgSnbtAfgKxhAJKVxDd.jpg",
    techNames: ["Javascript", "Next.js", "Material UI", ".NET"],
    githubLink: "#",
    liveLink: "https://cognixinsights.com/tradeflow-3/",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Youtube Clone",
    description:
      "A fully responsive video streaming web app inspired by YouTube, built using React, JavaScript, and Material UI. It features video listings, a search bar, and embedded video playback.",
    image:
      "https://lsxkwmtfw8z49zdi.public.blob.vercel-storage.com/images/youtubeClone-2jqzk7mWquDFoe40dMAFnDGnP4BEOI.jpg",
    techNames: ["Javascript", "React", "Material UI"],
    githubLink: "https://github.com/kkeshavv18/Youtube-Clone/tree/master",
    liveLink: "https://youtubeclone8.netlify.app/",
    category: "Frontend",
  },
  {
    id: 3,
    title: "Nepali Date Picker",
    description:
      "A reusable and customizable React component library written in TypeScript and CSS, allowing users to pick Nepali (Bikram Sambat) calendar dates with modern UI and accessibility features.",
    image:
      "https://lsxkwmtfw8z49zdi.public.blob.vercel-storage.com/images/nepaliDatePicker-7UoRENqvgo6enmZEGUHBckcpy6qmrj.jpg",
    techNames: ["CSS", "Javascript", "React"],
    githubLink: "https://github.com/kkeshavv18/nepali-datepicker-reactjs",
    liveLink: "https://www.npmjs.com/package/@kkeshavv18/nepali-datepicker",
    category: "Npm Package",
  },
  {
    id: 4,
    title: "Leetcode Problem Solver",
    description:
      "A Chrome extension developed with HTML, CSS, and JavaScript that enhances the LeetCode problem-solving experience by providing quick navigation, hints, or utility tools during coding practice.",
    image:
      "https://lsxkwmtfw8z49zdi.public.blob.vercel-storage.com/images/leetcodeProblemSolver-1PNOONRPrWnLkMovPPzBsHZqU45R3L.jpg",
    techNames: ["Html", "CSS", "JavaScript"],
    githubLink: "https://github.com/kkeshavv18/leetcode-problem-solver",
    liveLink: "#",
    category: "Chrome Extension",
  },
  {
    id: 5,
    title: "Calculator App",
    description:
      "A simple and clean web-based calculator built using HTML, CSS, and JavaScript, capable of performing basic arithmetic operations with an intuitive interface.",
    image:
      "https://lsxkwmtfw8z49zdi.public.blob.vercel-storage.com/images/calculator-JFIjdS4xl25UsneLMfmi22F0RJgSmf.jpg",
    techNames: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/kkeshavv18/Calculator",
    liveLink: "https://calculator-18.netlify.app/",
    category: "Frontend",
  },
];
