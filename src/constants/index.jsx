import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With an year of hands-on experience, I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, Django, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With an year of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2024 (July - Present)",
    role: "Senior Full Stack Developer",
    company: "6F Tech Consultant India Pvt Ltd",
    description: `Led a team in developing and maintaining web applications using JavaScript, Alpine.js, and Django. Implemented RESTful APIs and integrated with PostgreSQL databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "Alpine.js", "Django", "PostgreSQL"],
  },
  {
    year: "2024 (April - June)",
    role: "Full Frontend Developer",
    company: "6F Tech Consultant India Pvt Ltd",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Spring Boot. Implemented RESTful APIs and integrated with MsSQL databases.`,
    technologies: ["HTML", "CSS", "React.js", "Spring Boot", "Spring Security 6", "Ms Sql"],
  },
  {
    year: "2024 (Feb - April)",
    role: "Full Stack Developer",
    company: "6F Tech Consultant India Pvt Ltd",
    description: `Developed and maintained web applications using JavaScript, Alpine.js, and Django and MsSql. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Django", "Alpine.js", "Postgres", "Django Rest Framework"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "Tailwind", "React", "Django", "Sqlite3"],
  },
  // {
  //   title: "Task Management App",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["HTML", "Tailwind", "Angular", "Firebase"],
  // },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Vite", "Tailwind"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "ejs", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Alangulam, Tenkasi, 627 851 ",
  phoneNo: "+91 9789 432 788",
  email: "narwalsathish@gmail.com",
};