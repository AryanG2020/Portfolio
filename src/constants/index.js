import project1 from "../assets/projects/weather.png";
import project2 from "../assets/projects/portfolio.png";
import project3 from "../assets/projects/vehicle.png";

import project5 from "../assets/projects/rasterizer.png"
import project6 from "../assets/projects/Keras.png"
import project7 from "../assets/projects/movies.png"
import project8 from "../assets/projects/ecommerce.png"


export const HERO_CONTENT = `I am a dedicated and versatile software engineer with a strong foundation in both front-end and back-end development. With a focus on building robust, scalable applications, I bring hands-on experience in developing solutions that blend the latest in web technologies with advanced data science methodologies. My expertise spans across programming languages such as Java, Python, and JavaScript, and extends to frameworks like React, Node.js, and Express.js. I have also delved into AI and machine learning, developing models and simulations using tools like TensorFlow and Julia. I thrive on the challenge of integrating diverse technologies, from developing e-commerce applications tailored to specific communities, to implementing secure payment systems and creating intuitive user interfaces. I aim to continue leveraging my diverse skill set to engineer innovative solutions that solve complex problems and drive both technological and business success. `;

export const ABOUT_TEXT = `
I am a Computer Science and Economics major at DePauw University, specializing in both front-end and back-end development with a strong foundation in software engineering principles. My expertise includes hands-on experience with JavaScript, React, and Tailwind CSS for crafting responsive and dynamic web applications, alongside proficiency in C++ for developing more complex systems, such as custom software rasterizers. I also have a solid background in data science, utilizing Julia for sophisticated economic modeling and TensorFlow for creating and training machine learning models. Beyond my technical skills, I am deeply committed to community service, having co-founded educational initiatives in Nepal and volunteered in sustainable development projects. At some point, I want to integrate my technical expertise with my passion for social impact, creating innovative solutions that make a meaningful difference both locally and globally.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Research Assistant",
    company: "DePauw University",
    description: `As a Research Assistant at DePauw University, I developed a sophisticated job-searching model using extensive datasets from CPS IPUMS, consisting of over 1.3 million observations, to analyze the correlation between race and entrepreneurship. Utilizing Julia, I simulated real-world decision-making processes by applying Bellman equations and macroeconomic models such as Burdett-Mortensen, Markov, and Aiyagari. This work involved dynamic programming techniques to approximate lifetime values and optimize policy functions, providing insights into the trade-offs between entrepreneurship and wage employment in complex economic models.`,
  },
  {
    year: "2022 - 2024",
    role: "Eminent Recorder",
    company: "Sigma Alpha Epsilon (SAE)",
    description: `As the third in command of the Sigma Alpha Epsilon (SAE) Indiana Delta chapter at DePauw University, serving as the Eminent Recorder for two years, I have been deeply committed to the growth and success of our chapter. My role involved maintaining meticulous records, ensuring all brothers were informed, and playing a pivotal part in organizing the most successful Paddy Murphy Philanthropy Week in our recent history. My leadership extended to the Rush Recruitment Committee, where my efforts helped secure one of the largest pledge classes on campus. In recognition of my dedication and service, I was honored with the  Charles Collins Award for two consecutive years—a nationally recognized award with competition among members from over 200 chapters.`,
    
  },
  {
    year: "2023 - 2024",
    role: "Archive Assistant",
    company: "DePauw University",
    description: `As an intern at the archive library database, I played a key role in digitizing records and managing the database, ensuring that valuable information was accurately preserved and easily accessible. My responsibilities included organizing and maintaining the digital archives, as well as efficiently handling customer requests for materials.`,
    
  },
  {
    year: "2022",
    role: "Teaching Assistant",
    company: "DePauw University",
    description: `As a Computer Science teaching assistant at DePauw University, I have been actively involved in supporting students' learning experiences by assisting with coursework, guiding them through complex concepts, and helping to foster a deeper understanding of programming and problem-solving. My role includes providing one-on-one assistance, leading group discussions, and helping to create a collaborative learning environment that encourages student success in the field of computer science.`,
   
  },
  {
    year: "2020",
    role: "Project Management Intern",
    company: "Hoste Hainse",
    description: `I dedicated my time to volunteering with Hoste Hainse, a nonprofit organization focused on sustainable development in Nepal's Sarlahi district. My work involved helping to establish fish-farming and mechanized farming businesses, initiatives aimed at creating long-term solutions for poverty alleviation. This experience deepened my conviction that sustainability and local empowerment are essential to effective development, as I witnessed firsthand the transformative impact of these projects on the local community. Through this work, I contributed to building a foundation for economic resilience and self-sufficiency in a region facing significant challenges.`,
    
  },

  {
    year: "2019",
    role: "Sangeet And Sadhbhav Project Co-Founder",
    company: "Himalayan Climate Initiative (HCI)",
    description: `During my time volunteering with the Himalayan Climate Initiative (HCI) in Nepal, I co-founded the project "Sangeet ra Sadhbaw" with five friends, aiming to make education accessible for underprivileged students in rural areas. We organized a successful musical fundraiser in Kathmandu, securing sponsorships and performances from prominent Nepali artists. The event raised enough funds to cover educational expenses, including books, uniforms, and other necessities, for forty grade one students for up to ten years. This initiative stands as a testament to my commitment to social impact and making a tangible difference in my community.`,
   
  },
  
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project8,
    description:
      "TigerMart is an e-commerce Android application tailored for DePauw University students, offering a convenient platform to purchase essential goods, academic materials, and dormitory supplies. Built using Java, the app features secure user authentication and registration powered by Firebase Authentication, ensuring data safety. Additionally, it integrates Razorpay for seamless payment processing, providing a reliable and efficient shopping experience with features like payment confirmation and error handling. TigerMart simplifies campus shopping by bringing all necessary items directly to students' fingertips.",
    technologies: ["Java", "FireBase", "RazorPay API", "Android"],
  },
  {
    title: "Rice Grain Classifier (CNNs)",
    image: project6,
    description:
      "Developed a deep learning model for rice grain image classification, achieving over 95% accuracy. The model was built using TensorFlow and Keras, with customizable CNN architecture and adjustable hyperparameters. Preprocessing and data transformation were handled with NumPy and PIL, while Matplotlib was employed to visualize performance metrics across training epochs.",
    technologies: ["Python", "TensorFlow", "NumPy", "Matplotlib"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information developed using JavaScript on React, leveraging Tailwind CSS for responsive and sleek styling. The website features modern scroll view techniques and animations to create a polished and professional user experience. This project showcases my expertise in front-end development, combining cutting-edge design practices with efficient, clean code to present my work in an engaging and visually appealing format.",
    technologies: ["HTML", "Tailwind", "React", "Bootstrap"],
  },
  {
    title: "Movie Review Web Application",
    image: project7,
    description:
      "The Movie Review Webpage is a full-stack application that allows users to browse and review movies, built using JavaScript for the frontend and Node.js with Express.js for the backend. Leveraging the TMDb API, the app retrieves up-to-date movie data while custom RESTful APIs manage user-generated reviews. The application features a secure backend powered by MongoDB, enabling CRUD operations such as posting, editing, and deleting reviews. Express.js is used for efficient routing and middleware management, ensuring a seamless and responsive user experience.",
    technologies: ["JavaScript", "CSS", "MongoDB", "Express.js", "Node.js"],
  },

  {
    title: "Weather WebPage",
    image: project1,
    description:
      "The Weather Tracker is a responsive web application built using JavaScript and React, with a focus on delivering accurate, real-time weather data. The application connects to the OpenWeatherMap API, enabling users to effortlessly access current weather conditions, including temperature, wind speed, humidity, and more for any city worldwide.",
    technologies: ["React", "CSS", "OpenWeatherMap API"],
  },

  {
    title: "Software Rasterizer",
    image: project5,
    description:
      "Developed a custom rasterization engine in C++ that emulates the core functionality of OpenGL. This project involved importing .obj files to render 3D objects, using barycentric coordinates for color interpolation, and implementing transformations like scale, rotate, and translate. Efficiency was enhanced through culling, hidden surface removal, and z-buffering to accurately depict depth on a 2D screen.",
    technologies: ["C++", "OpenGL"],
  },

  {
    title: "Vechicle Repair System",
    image: project3,
    description:
      "Developed an Android app for efficiently managing vehicle repairs and maintenance, utilizing an SQLite database to store and organize vehicle and repair information. The app features intuitive user interfaces for adding new vehicles and repair records, with built-in date pickers and form validation for seamless user input. A custom adapter was implemented to display repair records alongside associated vehicle details, and the app supports searching, filtering, and deletion of records using the Singleton design pattern, ensuring a streamlined user experience.",
    technologies: ["Android", "Java", "SQLite"],
  },
];

export const CONTACT = {
  address: "509 S Locust St, IN, USA ",
  phoneNo: "+1 (765)-712-2135 ",
  email: "aryan.gurubacharya@gmail.com",
};
