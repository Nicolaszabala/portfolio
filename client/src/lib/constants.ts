export const DEVELOPER_INFO = {
  name: "Nicolás Zabala",
  title: "Fullstack Developer",
  tagline: "I craft exceptional digital experiences with CMS and modern technologies. Passionate about clean code, innovative solutions, and building products that make a difference.",
  story: "With over 6 years of experience in fullstack development, I've had the privilege of working with startups and established companies to bring innovative ideas to life. My passion lies in creating seamless user experiences backed by robust, scalable architectures.",
  email: "nznicolaszabala@gmail.com",
  phone: "+34 634 443 713",
  location: "Galicia, Spain",
};

export const STATS = {
  projects: "50+",
  experience: "5+",
  clients: "25+",
  technologies: "10+",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Conexos",
    description: "A one-page website for my digital marketing agency, focused on web development, lead generation, and automation",
    image: "https://plus.unsplash.com/premium_photo-1680404114169-e254afa55a16?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "fullstack",
    technologies: ["React", "Node.js", "Typescript", "PostgreSQL"],
    github: "https://github.com/Nicolaszabala/conexos-frontend",
    demo: "https://conexos.es",
  },
  {
    id: 2,
    title: "Asociación Petís",
    description: "Website of an NGO in Pontevedra, Spain, using Drupal as a headless CMS for managing blog posts and comments and Next.js on the front end for a modern look.",
    image: "https://images.unsplash.com/photo-1552819289-824d37ca69d2?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "fullstack",
    technologies: ["Next.js", "Drupal", "Typescript","Tailwind CSS"],
    github: "https://github.com/Nicolaszabala/asociacionpetis",
    demo: "https://asociacionpetis.org",
  },
  {
    id: 3,
    title: "Pelleriti Priore",
    description:"Web platform with e-commerce for high-end winery with intelligent automations. Full integration between WordPress, Zoho CRM, MercadoPago, and Zoho Books.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUY7VHfXcC_cFwahCtIuTe3Ed-3ckXqubACg&s",
  category: ["fullstack","CMS"],
    technologies: ["Wordpress", "PHP", "MySQL", "Javascript", "Zoho CRM", "Webhooks"], 
    demo: "http://pelleritipriore.com/",
  },
  {
    id: 4,
    title: "Penedo Borges",
    description: "E-commerce platform for premium winery with custom Liquid code, integrated with HubSpot and Zoho Campaigns for full automation.",
    image: "https://www.greatwinecapitals.com/wp-content/uploads/2024/10/Penedo-Borges-scaled.jpg",
    category: ["Frontend","CMS"],
    technologies: ["Shopify", "Liquid", "HubSpot","Javascript", "CSS", "Zoho Campaigns"],
    demo: "https://tienda.penedoborges.com.ar/",
  },
  {
    id: 5,
    title: "Greenpeace Chile",
    description: "Comprehensive website development for Greenpeace Chile, featuring content management, campaign integration, and donation systems.",
    image: "https://www.greenpeace.org/static/planet4-chile-stateless/2024/12/e7787808-ballena-jorobada-gp0stsjum-%C2%A9-paul-hilton-greenpeace-scaled.jpg",
    category: "fullstack",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
    demo: "https://www.greenpeace.org/chile/",
  },
{
  id: 6,
  title: "Verssalo",
  description: "WordPress platform with API integration to translation software suite for multilingual content management and workflow automation.",
  image: "https://elia-association.org/wp-content/uploads/2023/01/Verssalo-logo-1024x683.png",
  category: "fullstack",
  technologies: ["WordPress", "PHP", "REST API", "MySQL", "Translation Management"],
  demo: "https://verssalo.com/",
},
{
  id: 7,
  title: "MoviGo",
  description: "Mobile carpooling application connecting drivers and passengers for shared rides, featuring real-time matching, route optimization, and secure payment integration.",
  image: "https://movigo.app/static/media/MoviGo12.32810e3a9c0ae0cffe5f17ed6a840191.svg",
  category: "fullstack",
  technologies: ["React Native", "Node.js", "MongoDB", "Real-time Communication"],
  demo: "https://movigo.app/",
},
{
  id: 8,
  title: "Fundación IDA",
  description: "Digital archive platform for preserving and showcasing Argentine design heritage, featuring document management, virtual exhibitions, and research tools for historical and contemporary design collections.",
  image: "https://cronicasdemoda.com/wp-content/uploads/2022/05/Screen-Shot-2022-05-12-at-13.19.07.png", 
  category: "fullstack",
  technologies: ["Drupal", "PHP", "MySQL", "Apache Solr", "IIIF"],
  demo: "https://fundacionida.org/",
},

{
  id: 9,
  title: "Fauna Brava",
  description: "WooCommerce e-commerce platform for a sustainable toys brand, with integrated virtual reality shopping experience, offering immersive product browsing and purchase options.",
  image: "https://faunabrava.com.ar/wp-content/uploads/2022/10/Foto_tienda.jpg",
  category: "fullstack",
  technologies: ["WordPress", "WooCommerce", "WebVR", "Three.js", "PHP", "MySQL"],
  demo: "https://faunabrava.com.ar/",
}
];

export const SKILLS = {
  technical: [
    {
      name: "Frontend Development",
      level: 95,
      technologies: ["React", "Next.js", "Bootstrap", "Material UI", "Tailwind CSS", "TypeScript"],
    },
    {
      name: "Backend Development",
      level: 90,
      technologies: ["Node.js", "Express", "PHP", "Django"],
    },
    {
      name: "Database & Cloud",
      level: 85,
      technologies: ["PostgreSQL", "MySQL", "Prisma", "Azure", "Docker"],
    },
    {
      name: "Mobile Development",
      level: 80,
      technologies: ["React Native", "Flutter", "Expo", "Swift"],
    },
  ],
  tools: {
    development: ["VS Code", "Git & GitHub", "Terminal", "Postman"],
    design: ["Figma", "Adobe XD", "Sketch", "Photoshop"],
    devops: ["Docker", "AWS", "Netlify", "Vercel"],
    collaboration: ["Jira", "Slack", "Notion", "Clickup"],
  },
  certifications: [
    { name: "Computer Science Degree - Universidad Siglo 21", year: "2024" },
    { name: "Database Programing (.NET framework) - CIPSA Barcelona", year: "2023" },
     { name: "Javascript Algorithms and Data Structures - Free CodeCamp", year: "2022" },
    { name: "Professional Front-end Developer - Universidad Tecnológica Nacional", year: "2021" },
  ],
};

export const SOCIAL_LINKS = {
  github: "https://github.com/Nicolaszabala",
  linkedin: "https://www.linkedin.com/in/nicolas-zabala/",
  
  email: "mailto:nznicolaszabala@gmail.com",
};
