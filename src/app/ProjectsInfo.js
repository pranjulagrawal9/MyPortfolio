import swiggySnap from "../../public/assets/images/swiggySnap.png";
import flipkartSnap from "../../public/assets/images/flipkartSnap.png";
import portfolioSnap from "../../public/assets/images/portfolioSnap.png";
import notesSnap from "../../public/assets/images/notesSnap.png";
import outfitlySnap from "../../public/assets/images/outfitlySnap.png";

export const projects = [
  {
    title: "OUTFITLY",
    image: outfitlySnap,
    desc: [
      "Outfitly is an e-commerce web application designed for purchasing the latest and most trending outfits.",
      "It is using Next.js on the frontend, utilizing Server Side Rendering, Server Components, built-in Image optimization and file-system based App Router.",
      "It is completely responsive for all screens from small devices to large monitors powered by Tailwind CSS.",
      "Strapi headless CMS as a backend, stateless authentication with JWT and Stripe payments integration for processing customer payments.",
      "Features such as filtering, sorting and pagination on the products page using GraphQL APIs, form handling and validations using Formik and Yup on login page.",
    ],
    liveLink: "https://outfitly.vercel.app",
    githubLink: "https://bit.ly/46l4Jm1",
  },
  {
    title: "BITEBOX",
    image: swiggySnap,
    desc: [
      "Bitebox is a user-friendly web application that enables users to effortlessly discover nearby restaurants and explore their menus.",
      "It is using Swiggy’s public API to fetch real restaurants data.",
      "Leveraged Geolocation API and Geocoding API for getting user’s location coordinates and address.",
      "Effectively implemented a search feature for filtering out restaurants, utilizing the debouncing technique to enhance user experience and optimize performance.",
      "Implemented code splitting and lazy loading to improve applications’s initial load time.",
    ],
    liveLink: "https://bitebox.netlify.app",
    githubLink: "https://bit.ly/3Q8jqSD",
  },

  {
    title: "PORTFOLIO APP",
    image: portfolioSnap,
    desc: [
      "Developed the application using the Next.js framework, leveraging its benefits such as server-side rendering and improved performance.",
      "Employed the Tailwind CSS library to achieve a consistent and visually appealing user interface design.",
      " Utilized Formik and Yup library for efficient form handling and robust form validation",
      "Implemented smooth and engaging animations using Framer Motion, a production-ready motion library specifically designed for React.",
      "Integrated EmailJs into the contact form feature to enable seamless email transmission directly from the frontend.",
    ],
    liveLink: "https://www.pranjulagrawal.in",
    githubLink: "https://bit.ly/42yK0bm",
  },

  {
    title: "KEEPNOTES",
    image: notesSnap,
    desc: [
      "Built with React, CSS, and Redux for a seamless user interface.",
      "Implemented impressive dark mode features for enhanced visual comfort in low-light environments.",
    ],
    liveLink: "https://keeep-notes.vercel.app/",
    githubLink: "https://github.com/pranjulagrawal9/KeepNotes",
  },
];
