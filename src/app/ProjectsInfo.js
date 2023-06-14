import swiggySnap from "../../public/assets/images/swiggySnap.png";
import flipkartSnap from "../../public/assets/images/flipkartSnap.png";
import portfolioSnap from "../../public/assets/images/portfolioSnap.png";
import notesSnap from "../../public/assets/images/notesSnap.png";

export const projects= [
    {
        title: "Food Delivery web application built using React",
        image: swiggySnap,
        desc: ["Used Swiggy's public API to fetch restaurants data", "Leveraged the power of the Intersection Observer API to implement efficient infinite scrolling, enabling dynamic loading of restaurant data.", "Used Redux javascript libary for managing and centralizing application state", "Utilized Parcel as a bundler, optimizing the application's performance and facilitating smooth deployment.", "Implemented code splitting to make the code efficient"],
        liveLink: "https://bit.ly/3oOevN2",
        githubLink: "https://bit.ly/45VEYc0"
    },

    {
        title: "My own portfolio web application built using Next.js and Tailwind CSS",
        image: portfolioSnap,
        desc: ["Developed the application using the Next.js framework, leveraging its benefits such as server-side rendering and improved performance.", "Employed the Tailwind CSS library to achieve a consistent and visually appealing user interface design.", " Utilized Formik and Yup library for efficient form handling and robust form validation", "Implemented smooth and engaging animations using Framer Motion, a production-ready motion library specifically designed for React.", "Integrated EmailJs into the contact form feature to enable seamless email transmission directly from the frontend."],
        liveLink: "https://www.pranjulagrawal.in",
        githubLink: "https://bit.ly/42yK0bm"
    },

    {
        title: "Home page of e-commerce app Flipkart built using React",
        image: flipkartSnap,
        desc: ["Developed a professional e-commerce web application clone inspired by Flipkart using React.js.", "Utilized SCSS to create a visually appealing and responsive user interface that seamlessly adapts to various devices and screen sizes.", "Implemented a dynamic and interactive carousel feature to showcase trending products.", "Demonstrated proficiency in building reusable and modular React components, promoting code maintainability and scalability.", "Implemented code splitting to make the code efficient"]
    },

    {
        title: "Notes app built using React and Redux",
        image: notesSnap,
        desc: ["Built with React, CSS, and Redux for a seamless user interface.", "Implemented impressive dark mode features for enhanced visual comfort in low-light environments."],
        liveLink: "https://keeep-notes.vercel.app/",
        githubLink: "https://github.com/pranjulagrawal9/KeepNotes"
    },
    
]