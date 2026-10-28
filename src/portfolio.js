/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from 'react-easy-emoji';
import splashAnimation from './assets/lottie/splashAnimation'; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: 'Rohan Zode',
  title: "Hi all, I'm Rohan",
  subTitle: emoji(
    'A passionate QA Automation Engineer & SDET 🚀 with hands-on experience in automated and manual testing (Playwright, Selenium, PyTest), REST API validation (Postman, RestAssured), formal test case design, and defect tracking through resolution. Backed by a strong engineering foundation in Python, Django, and FastAPI, enabling deep architectural insight, thorough defect root-cause analysis, and robust quality engineering.'
  ),
  resumeLink: 'https://drive.google.com/file/d/1hZGTKvI6quyQdxrL-2auaR13-SmQv7A9/view?usp=drive_link', // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/rohanzode123',
  linkedin: 'https://www.linkedin.com/in/rohan-zode-230717238/',
  gmail: 'rohanzode03@gmail.com',
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'QA AUTOMATION ENGINEER & SDET DELIVERING ROBUST, SCALABLE & RELIABLE SOFTWARE',
  skills: [
    emoji(
      '⚡ Automated end-to-end, functional, and regression testing using Playwright, Selenium, and PyTest for web applications & AI voice bots'
    ),
    emoji(
      '⚡ In-depth REST API validation, integration testing, and performance verification across microservices using Postman, RestAssured, FastAPI, and Django REST Framework'
    ),
    emoji(
      '⚡ Data integrity and asynchronous flow validation across PostgreSQL databases, Redis caching, RabbitMQ message queues, and scheduled cron jobs'
    ),
    emoji(
      '⚡ Formal test documentation, test plan & test case design, defect tracking through Jira, and Agile / Scrum sprint collaboration'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'Playwright',
      fontAwesomeClassname: 'fas fa-robot',
    },
    {
      skillName: 'Selenium',
      fontAwesomeClassname: 'fas fa-vial',
    },
    {
      skillName: 'PyTest',
      fontAwesomeClassname: 'fas fa-check-circle',
    },
    {
      skillName: 'Python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'Postman',
      fontAwesomeClassname: 'fas fa-paper-plane',
    },
    {
      skillName: 'RestAssured',
      fontAwesomeClassname: 'fas fa-exchange-alt',
    },
    {
      skillName: 'Jira',
      fontAwesomeClassname: 'fab fa-jira',
    },
    {
      skillName: 'Scrum / Agile',
      fontAwesomeClassname: 'fas fa-tasks',
    },
    {
      skillName: 'PostgreSQL',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'FastAPI',
      fontAwesomeClassname: 'fas fa-bolt',
    },
    {
      skillName: 'Django',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'Redis & RabbitMQ',
      fontAwesomeClassname: 'fas fa-network-wired',
    },
    {
      skillName: 'AWS (EC2)',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'Git & GitHub',
      fontAwesomeClassname: 'fab fa-github',
    },
    {
      skillName: 'Docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
    {
      skillName: 'Linux & Multi-OS',
      fontAwesomeClassname: 'fab fa-linux',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Yashwantrao Chavan University',
      logo: require('./assets/images/ycmou.png'),
      subHeader: 'Bachelor of Science – Physics, Chemistry, Mathematics (PCM)',
      duration: 'Graduated: Jun 2023 | CGPA: 8.11',
      desc: 'Focused on advanced mathematics, analytical reasoning, and scientific methodology, establishing strong problem-solving and algorithmic foundations.',
    },
    {
      schoolName: 'St. Paul Jr. College, Nagpur',
      logo: require('./assets/images/saintpaul.jpeg'),
      subHeader: 'Higher Secondary Certificate (HSC)',
      duration: '2018',
      desc: 'Completed Higher Secondary Certificate with concentration in Science and Mathematics.',
    },
    {
      schoolName: 'Devyanee International School',
      logo: require('./assets/images/devyani_logo.png'),
      subHeader: 'Secondary School Certificate (SSC)',
      duration: '2016',
      desc: 'Completed Secondary School Certificate with academic excellence.',
    },
  ],
};

// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Test Automation (Playwright, Selenium, PyTest)',
      progressPercentage: '90%',
    },
    {
      Stack: 'API Validation & Integration Testing (Postman, REST APIs)',
      progressPercentage: '85%',
    },
    {
      Stack: 'Python & Backend Foundations (Django, FastAPI, SQL)',
      progressPercentage: '85%',
    },
    {
      Stack: 'Test Management & QA Methodologies (Jira, Agile, Scrum)',
      progressPercentage: '80%',
    },
    {
      Stack: 'Cloud & Infrastructure Testing (AWS EC2, Redis, RabbitMQ)',
      progressPercentage: '75%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'QA Analyst',
      company: 'Sumanel Technologies Pvt Ltd',
      companylogo: require('./assets/images/sumanel.png'),
      date: 'Dec 2024 – Present',
      desc: 'Conducting comprehensive manual & automated QA testing, API validation, and microservices verification for enterprise and AI-powered production systems.',
      descBullets: [
        'Conducted unit and integration testing on REST APIs built with Django Rest Framework and FastAPI, verifying reliability and performance across microservices.',
        'Validated data integrity and system behavior across PostgreSQL, Redis, and RabbitMQ integrations supporting caching and asynchronous message processing.',
        'Tested and verified voice bot features, identifying functional issues across LLM, Speech-to-Text (STT), and Text-to-Speech (TTS) components.',
        'Debugged and validated asynchronous Django cron jobs, confirming task execution correctness and system scalability post-fix.',
      ],
    },
    {
      role: 'QA & Cloud Support Associate',
      company: 'Octarange Technologies Pvt Ltd',
      companylogo: require('./assets/images/octa.png'),
      date: 'Jan 2024 – Jun 2024',
      desc: 'Executed automated and manual test cases, created formal QA documentation, and managed AWS cloud instances.',
      descBullets: [
        'Executed manual and automated (Selenium) test cases for responsive web applications built with HTML5, CSS3, Python, and Bootstrap, identifying and reporting UI and usability defects.',
        'Wrote and maintained formal test cases and test plans, validating application behavior across environments and tracking bugs through resolution and re-testing.',
        'Managed AWS EC2 instances and security groups, troubleshooting application and deployment-related issues to support release stability.',
      ],
    },
    {
      role: 'Cloud Intern',
      company: 'Cravita Technologies Pvt. Ltd.',
      companylogo: require('./assets/images/images.jpeg'),
      date: 'March 2023 – Aug 2023',
      desc: 'Gained hands-on experience in cloud infrastructure, AWS EC2, network security, and deployment verification for web applications.',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Big projects you have worked on

const bigProjects = {
  title: 'Featured Projects',
  subtitle: 'PRODUCTION-GRADE QA AUTOMATION PLATFORMS & TESTING PROJECTS',
  projects: [
    {
      image: require('./assets/images/chatbotAutomation.svg'),
      projectName: 'WEB CHAT BOT AUTOMATION PLATFORM',
      projectDesc:
        'Engineered an automated QA platform for testing web chatbots at scale: Reads Excel/CSV test suites for multi-turn flows, simulates human typing, buttons & date pickers via Playwright, performs dynamic intent matching powered by LLMs, and delivers real-time chat preview with failure screenshots and analytics reports.',
      footerLink: [
        {
          name: 'Live Demo',
          url: 'https://web-chat-bot-automation.onrender.com/',
        },
        {
          name: 'GitHub Repo',
          url: 'https://github.com/rohanzode123/Web-Chat-Bot-Automation',
        },
      ],
    },
    {
      image: require('./assets/images/enterpriseChatbot.svg'),
      projectName: 'ENTERPRISE CHATBOT SOLUTIONS (GLOBAL BRANDS)',
      projectDesc:
        'Contributed to development and QA validation of enterprise-grade AI chatbot integrations for global brands including Audi, ITC, Jeep, Hexa Health, Motilal Oswal, Autovista, TAFE, TVS HR, and CUTM. Rigorously tested multi-turn conversational flows, verified voice bot STT/TTS pipelines, and validated high reliability for millions of end users.',
      footerLink: [
        {
          name: 'Global QA Solutions',
          url: 'https://github.com/rohanzode123',
        },
      ],
    },
    {
      image: require('./assets/images/crossDeviceTesting.svg'),
      projectName: 'BATTERY WEB PLATFORM – CROSS-DEVICE QA',
      projectDesc:
        'Performed comprehensive functional, cross-browser, and cross-device testing of an informational website built with HTML5, CSS3, and JavaScript. Verified responsive design, viewport compatibility across mobile, tablet, and desktop devices, and ensured flawless UI consistency.',
      footerLink: [
        {
          name: 'Cross-Device QA',
          url: 'https://github.com/rohanzode123',
        },
      ],
    },
    {
      image: require('./assets/images/apiTesting.svg'),
      projectName: 'TODO APP – REST API & DATABASE INTEGRATION QA',
      projectDesc:
        'Wrote comprehensive formal test cases and performed functional and regression testing for a Django-based task management application. Validated REST API endpoints, authentication flows, error handling, and database integration for data persistence.',
      footerLink: [
        {
          name: 'API & Integration QA',
          url: 'https://github.com/rohanzode123',
        },
      ],
    },
    {
      image: require('./assets/images/ecommerce.jpg'),
      projectName: 'E-COMMERCE WEB APPLICATION',
      projectDesc:
        'Full-stack development and end-to-end testing of a comprehensive shopping platform using Python, Django, HTML, CSS, and JavaScript. Tested product catalog navigation, shopping cart logic, authentication, and order workflows.',
      footerLink: [
        {
          name: 'GitHub',
          url: 'https://github.com/rohanzode123',
        },
      ],
    },
  ],
  display: true,
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle: 'Professional Certifications & Cloud Credentials',

  achievementsCards: [
    {
      title: 'AWS Certified Cloud Practitioner',
      subtitle:
        'Achieved AWS Certified Cloud Practitioner credential, validating foundational knowledge of AWS cloud infrastructure, security, architecture, and billing practices.',
      image: require('./assets/images/cloudpractioner.png'),
      imageAlt: 'AWS Certified Cloud Practitioner Logo',
      footerLink: [
        {
          name: 'Credential Verification',
          url: 'https://www.credly.com/badges/3e102b55-b195-4083-9117-e0a0e967753e/public_url',
        },
      ],
    },
    {
      title: 'AWS Certified Solutions Architect – Associate',
      subtitle:
        'Achieved AWS Certified Solutions Architect – Associate certification, demonstrating proficiency in designing and validating scalable, highly available, secure, and cost-efficient cloud architectures on AWS.',
      image: require('./assets/images/solutionarchitect.png'),
      imageAlt: 'AWS Certified Solutions Architect Associate Logo',
      footerLink: [
        {
          name: 'Credential Verification',
          url: 'https://www.credly.com/badges/6fbba942-e0b0-4a92-9a2b-af52bfbb6581/public_url',
        },
      ],
    },
    {
      title: 'AWS Academy Graduate – Cloud Architecting',
      subtitle:
        'Completed AWS Academy Cloud Architecting course, gaining hands-on expertise in designing cloud solutions using core AWS services and architectural best practices.',
      image: require('./assets/images/awsgradutate.png'),
      imageAlt: 'AWS Academy Graduate Logo',
      footerLink: [
        {
          name: 'Credential Verification',
          url: 'https://www.credly.com/badges/79a9a568-f7ff-4507-b820-62b671bd5d0b/public_url',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a QA Automation project, QA engineering opportunity, or just want to connect? My inbox is open for all!',
  number: '📞 +91 9370569860',
  email_address: '📬 rohanzode03@gmail.com',
};

const blogSection = {
  title: 'My Blog',
  display: false,
  posts: [],
};

const podcastSection = {
  title: 'My Podcast',
  display: false,
  episodes: [],
};

// Talk Section
const talkSection = {
  title: 'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+91 9370569860',
  email_address: 'rohanzode03@gmail.com',
  display: false,
};

// Twitter Section
const twitterDetails = {
  userName: 'Twitter',
  display: false,
};

const isHireable = true; // Set true for open opportunities

const resumeSection = {
  title: 'My Resume',
  link: 'https://drive.google.com/file/d/1hZGTKvI6quyQdxrL-2auaR13-SmQv7A9/view?usp=drive_link',
  display: true,
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  blogSection,
  podcastSection,
  talkSection,
  resumeSection,
  twitterDetails,
};
