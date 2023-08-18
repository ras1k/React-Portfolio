import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    // redux,
    tailwind,
    nodejs,
    mongodb,
    express,
    figma,
    // git,
    // docker,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    bootstrap,
    firebase,
    // mui,
    // vercel,
    github,
    mass,
    // carrent,
    // jobit,
    // tripguide,
    // threejs,
    kidzee,
    summer,
    chef,
    bistro,
    quiz,
    modern,
    taimiya,
    puc,
    enan,
    fahad,
    akib,
    portfolio
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front End Web Developer",
      icon: web,
    },
    {
      title: "MERN Stack Developer",
      icon: mobile,
    },
    {
      title: "Content Writer",
      icon: creator,
    },
    {
      title: "Tech Solutions",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    // {
    //   name: "Material UI",
    //   icon: mui,
    // },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "Vercel",
    //   icon: vercel,
    // },
    {
      name: "git",
      icon: github,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
  ];
  
  const experiences = [
    {
      title: "Trainee Programmer",
      company_name: "Mass Group",
      icon: mass,
      iconBg: "#383E56",
      date: "March 2021 - April 2022",
      points: [
        "Developing and maintaining web applications using HTML, CSS, PHP, JS & JQuery",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  const educations = [
    {
      title: "Secondary School",
      school_name: "Comilla Modern High School",
      icon: modern,
      iconBg: "#383E56",
      date: "2009 - 2014",
      points: [
        "SSC",
        "Science Group",
        "Received Scholarship",
      ],
    },
    {
      title: "Higher Secondary School",
      school_name: "Ibn Taimiya School & College",
      icon: taimiya,
      iconBg: "#E6DEDD",
      date: "2014 - 2016",
      points: [
        "HSC",
        "Science Group",
      ],
    },
    {
      title: "Undergrad School",
      school_name: "Premier University, Chittagong",
      icon: puc,
      iconBg: "#383E56",
      date: "2017 - 2022",
      points: [
        "BSC in Computer Science & Engineering",
        "Programming",
        "Artificial Intelligence",
        "Graduation",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rasik proved me wrong.",
      name: "Moammer Enan",
      designation: "Web Developer",
      company: "TalentPro",
      link:"https://talentpro.global/",
      image: enan,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rasik does.",
      name: "Fahad Bin Munir",
      designation: "Software Engineer",
      company: "Fluent Conveyors",
      link: "https://fluentconveyors.com/",
      image: fahad,
    },
    {
      testimonial:
        "After Rasik optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Abdul Kadher Akib",
      designation: "Founder & CEO",
      company: "Top5Way",
      link: "https://top5way.com/",
      image: akib,
    },
  ];
  
  const projects = [
    {
      name: "Summer Camp School",
      description:
        "Web-based platform that allows users to search, book, and manage musical classes from various instructors, providing a convenient and efficient solution for free time in summer break.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "orange-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: summer,
      source_code_link: "https://github.com/ras1k/Summer-camp-school",
      live_site_link: "https://summer-school-camp-a853f.web.app/"
    },
    {
      name: "Quiz Hero",
      description:
        "Web application that allows users to participate in a javascript quiz test and evaluate test.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: quiz,
      source_code_link: "https://github.com/ras1k/quiz-hero-javascript",
      live_site_link: "https://quiz-hero-javascript.netlify.app/"
    },
    {
      name: "Bistro Boss Restaurant",
      description:
        "A comprehensive restaurant website that allows users to view full menu & book foods & pay online",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: bistro,
      source_code_link: "https://github.com/ras1k/bistro-boss-client",
      live_site_link: "https://bistro-boss-c440e.firebaseapp.com/"
    },
    {
      name: "Kidzee - A Toy Marketplace",
      description:
        "A comprehensive toy marketplace marketplace that allows users to create their product list & showcase it to users.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: kidzee,
      source_code_link: "https://github.com/ras1k/toy-marketplace/",
      live_site_link: "https://toy-marketplace-b19a0.web.app/"
    },
    {
      name: "Chef Advisor",
      description:
        "A front-end web application that allows users to view famous chef & their recipe.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
      ],
      image: chef,
      source_code_link: "https://github.com/ras1k/chef-hunter",
      live_site_link: "https://chef-hunter-66aa0.web.app/"
    },
    {
      name: "Developer Portfolio",
      description:
        "A simple yet beautifully designed developer portfolio website using modern technologies for beginner wen developers ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "framer",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
        {
          name: "three js",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/ras1k/3D-Portfolio",
      live_site_link: "https://ras1k-portfolio.vercel.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, educations };