import swiggySnap from "../../public/assets/images/swiggySnap.png";
import flipkartSnap from "../../public/assets/images/flipkartSnap.png";
import portfolioSnap from "../../public/assets/images/portfolioSnap.png";

export const projects= [
    {
        title: "Food Delivery web application made using React",
        image: swiggySnap,
        desc: ["Used Swiggy's public API to fetch restaurants data", "Leveraged the power of the Intersection Observer API to implement efficient infinite scrolling, enabling dynamic loading of restaurant data.", "Used Redux javascript libary for managing and centralizing application state", "Utilized Parcel as a bundler, optimizing the application's performance and facilitating smooth deployment.", "Implemented code splitting to make the code efficient"],
        liveLink: "https://bit.ly/3Nn8RKV",
        githubLink: "https://bit.ly/45VEYc0"
    },

    {
        title: "My own portfolio web application made using Next.js",
        image: portfolioSnap,
        desc: ["Developed the application using the Next.js framework, leveraging its benefits such as server-side rendering and improved performance.", "Employed the Tailwind CSS library to achieve a consistent and visually appealing user interface design.", " Utilized Formik and Yup library for efficient form handling and robust form validation", "Implemented smooth and engaging animations using Framer Motion, a production-ready motion library specifically designed for React.", "Integrated EmailJs into the contact form feature to enable seamless email transmission directly from the frontend."],
        liveLink: "https://www.pranjulagrawal.in",
        githubLink: "https://bit.ly/42yK0bm"
    },

    {
        title: "Home page of e-commerce app Flipkart made using React",
        image: flipkartSnap,
        desc: ["Used Swiggy's public API to fetch restaurants data", "Leveraged the power of the Intersection Observer API to implement efficient infinite scrolling, enabling dynamic loading of restaurant data.", "Used Redux javascript libary for managing and centralizing application state", "Utilized Parcel as a bundler, optimizing the application's performance and facilitating smooth deployment.", "Implemented code splitting to make the code efficient"]
    },
    
]