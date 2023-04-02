import {
  mobile,
  backend,
  creator,
  web,
  linux,
  capgemini,
  selinuim,
  bull,
  orange,
  maven,
  freelencer,
  arnu,
  scrum,
  xml,
  soap,
  sql,
  eclipse,
  oracle,
  pl,
  talend,
  debeaver,
  hp,
  video1,
  video2,
  video3,
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
    id: "content",
    title: "Content",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Team Leader IT / Scrum Master",
    icon: web,
  },
  {
    title: "Business coach",
    icon: mobile,
  },
  {
    title: "Math & Arabic Teacher",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Scrum",
    icon: scrum,
  },
  {
    name: "Sql",
    icon: sql,
  },
  {
    name: "Soap",
    icon: soap,
  },
  {
    name: "Xml",
    icon: xml,
  },
  {
    name: "Selinuim",
    icon: selinuim,
  },
  {
    name: "Eclipse",
    icon: eclipse,
  },
  {
    name: "Oracle",
    icon: oracle,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Maven",
    icon: maven,
  },
  {
    name: "PL/SQL",
    icon: pl,
  },
  {
    name: "Talend",
    icon: talend,
  },
  {
    name: "DBeaver",
    icon: debeaver,
  },
  {
    name: "HP Quality Center",
    icon: hp,
  },
];

const experiences = [
  {
    title: "Designer BPMN",
    company_name: "Bull",
    icon: bull,
    iconBg: "#383E56",
    date: "Jan 2010 - Sep 2010",
    points: [
      "Create a Designer allowing to draw BPMN processes.",
      "Create a BPEL Generator from the BPMN Designer.",
      "Perform unit and integration tests on both parts (Designer and Generator).",
      "Automate tests via Maven.",
    ],
  },
  {
    title: "Validation Lead",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#383E56",
    date: "Mar 2011 - Jan 2017",
    points: [
      "Ensuring validation of all changes to the Futur Telecom billing system.",
      "Writing test plans (regression tests, integration tests, critical tests).",
      "Preparing datasets.",
      "Automating tests.",
      "Generating test reports.",
      "Preparing integration platforms.",
      "Writing production deployment procedures.",
    ],
  },
  {
    title: "Functional Consultant",
    company_name: "Orange France",
    icon: orange,
    iconBg: "#E6DEDD",
    date: "Apr 2018 - June 2020",
    points: [
      `Functional study for the project "Cliper".`,
      "Test automation with Soap UI.",
      "Writing test plans (regression tests, end-to-end integration tests, critical tests).",
      "Automating tests (Soap-UI for web services).",
      "Writing test reports.",
      "Analysis of errors detected in PROD.",
      "Setting up customer support for validation.",
      "Analysis of errors detected by the customer and reproducing the error.",
    ],
  },
  {
    title: "Business coach",
    company_name: "Independent",
    icon: freelencer,
    iconBg: "#383E56",
    date: "Feb 2017 - Present",
    points: [
      "Help individuals and organizations to evolve by revealing their own skills and proposing excellent opportunities.",
      "Assist them in facing their crises and overcoming them.",
      "Teach them how to benefit from crises and remain motivated.",
      "Work as a coach in different countries such as Tunisia, Turkey, and England.",
      "Worked in different territories such as Tunis and Djerba.",
      "I was an intervenor for personal development for the Académie Futurs Leads in Tunis with 80 participants.",
      `I am a coach and animator in Grenoble and was responsible for conducting a regional event for "French Association for Well-being for Women" and was in charge of the workshop "Keys to Success and Happiness".`,
      "In my daily work, I practice methods to create a good atmosphere and build a motivated and harmonious team.",
    ],
  },
  {
    title: "IVVQ Team Leader",
    company_name: "ANRU",
    icon: arnu,
    iconBg: "#E6DEDD",
    date: "June 2020 - Present",
    points: [
      "Functional validation of the new management system named IODA.",
      "Implementation of continuous integration and coordination of the team in charge of automated tests.",
      "Preparation, execution, monitoring and evaluation of functional testing.",
      "User support.",
      "Participation in project committees and monitoring committees.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Nahla is amazing! She helped me gain clarity and direction in my personal and professional life.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Orange France",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Nahla's energy healing sessions are truly transformative. I felt so much lighter and more grounded after just one session with her.",
    name: "Mehdi Midra",
    designation: "COO",
    company: "ARNU",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Nahla is not just a coach, she's a mentor and a friend. She has a genuine desire to help people succeed and reach their full potential.",
    name: "Alexandra Colas",
    designation: "CTO",
    company: "Capgimini",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "How to be self confident ?",
    description:
      "In this video you will learn how to be self confident using personal development and energy healing techniques.",
    tags: [
      {
        name: "energy",
        color: "blue-text-gradient",
      },
      {
        name: "personal",
        color: "green-text-gradient",
      },
      {
        name: "developemt",
        color: "pink-text-gradient",
      },
    ],
    image: video1,
    source_code_link: "https://www.youtube.com/watch?v=_tabHnP9YJs&t=87s",
  },
  {
    name: "The fundamental aspects of energy",
    description:
      "Our series of video will provide you with general knowledge about energy healing for personal development.",
    tags: [
      {
        name: "energy",
        color: "blue-text-gradient",
      },
      {
        name: "personal",
        color: "green-text-gradient",
      },
      {
        name: "coaching",
        color: "pink-text-gradient",
      },
    ],
    image: video2,
    source_code_link: "https://www.youtube.com/watch?v=JnXTakk7OqE",
  },
  {
    name: "How to be in peace",
    description: "Energy Healing and personal development techniques.",
    tags: [
      {
        name: "peace",
        color: "blue-text-gradient",
      },
      {
        name: "personal",
        color: "green-text-gradient",
      },
      {
        name: "developemnt",
        color: "pink-text-gradient",
      },
    ],
    image: video3,
    source_code_link: "https://www.youtube.com/watch?v=T2_GaChrU1A",
  },
];

export { services, technologies, experiences, testimonials, projects };
