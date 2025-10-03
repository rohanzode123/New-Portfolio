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
    'A passionate Backend Developer 🚀 specializing in Python and Django REST Framework, with experience in building custom APIs and backend logic for scalable web applications.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1mQwi-U22ifV0-79sGu-XwBvTEapbsusS/view?usp=sharing', // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/rohanzode123',
  linkedin: 'https://www.linkedin.com/in/rohan-zode-230717238/',
  gmail: 'rohanzode40@gmail.com',
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY BACKEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Development of scalable and secure REST APIs using Django REST Framework'
    ),
    emoji(
      '⚡ Custom business logic implementation and backend workflows in Python'
    ),
    emoji(
      '⚡ Efficient handling of databases, authentication, and background tasks with Celery & Redis'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'Python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'Django',
      fontAwesomeClassname: 'fab fa-Django',
    },
    {
      skillName: 'Django REST Framework',
      fontAwesomeClassname: 'fab fa-django-rest-framework',
    },
    {
      skillName: 'FastAPI',
      fontAwesomeClassname: 'fab fa-fastapi',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'postgresql',
      fontAwesomeClassname: 'fab fa-postgresql',
    },
    {
      skillName: 'mysql',
      fontAwesomeClassname: 'fab fa-mysql',
    },
    {
      skillName: 'celery',
      fontAwesomeClassname: 'fab fa-celery',
    },
    {
      skillName: 'rabbitmq',
      fontAwesomeClassname: 'fas fa-rabbit',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'github',
      fontAwesomeClassname: 'fab fa-github',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Yashwantrao Chavan College of Engineering',
      logo: require('./assets/images/ycmou.png'),
      subHeader: 'Graduate Degree in BSC',
      duration: 'April 2020 - May 2023',
    },
    {
      schoolName: 'Saint Paul High School Nagpur',
      logo: require('./assets/images/saintpaul.jpeg'),
      subHeader: 'Higher Secondary Certificate',
      duration: 'Feb 2017 - Aug 2018',
    },
    {
      schoolName: 'Devyanee International School Sindewahi',
      logo: require('./assets/images/devyani_logo.png'),
      subHeader: 'Secondary School Certificate',
      duration: 'Feb 2017 - Aug 2018',
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Django', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Python',
      progressPercentage: '70%',
    },
    {
      Stack: 'Frontent Development',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Backend Developer',
      company: 'Sumanela Technology Ventures Pvt. Ltd.',
      companylogo: require('./assets/images/sumanel.png'),
      date: 'Dec 2024 – Present',
      desc: 'Working as a Backend Developer, I develop and maintain RESTful APIs using Django and Python, manage PostgreSQL databases, and handle deployment and scaling on AWS instances.',
    },
    {
      role: 'Web Developer',
      company: 'Octarange Technologies Pvt. Ltd.',
      companylogo: require('./assets/images/octa.png'),
      date: 'Jan 2024 – Jun 2024',
      desc: 'As a Web Developer, I build and maintain interactive front-end interfaces and dynamic websites. I work with modern frameworks and tools to ensure responsive design, smooth user experience, and seamless integration with backend services.',
    },
    {
      role: 'Cloud Intern',
      company: 'Cravita Technologies Pvt. Ltd.',
      companylogo: require('./assets/images/images.jpeg'),
      date: 'March 2023 – Aug 2023',
      desc: 'As a Cloud Intern, I gained hands-on experience in cloud computing, working with AWS services to deploy and manage applications. I learned about cloud architecture, security, and best practices for scalable and reliable systems.',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME PROJECT THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/ecommerce.jpg'),
      projectName: 'E-COMMERCE WEB APPLICATION',
      projectDesc:
        'Developed a dynamic web-based application using Python, Django, HTML, CSS, and Javascript to create a comprehensive shopping platform for the company products.',
    },
    {
      image: require('./assets/images/eproductifyy.png'),
      projectName: 'EPRODUCTIFY',
      projectDesc:
        'Eproductify is a web app for selling digital brochures, built using Python, HTML, CSS, and JavaScript. It features a responsive UI, brochure listings, and a secure billing system to handle purchases.',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle: 'Achievements, Certifications,that I have done !',

  achievementsCards: [
    {
      title: 'AWS Certified Cloud Practitioner',
      subtitle:
        'Achieved AWS Certified Cloud Practitioner credential, validating my foundational knowledge of AWS services, cloud concepts, security, and billing practices.',
      image: require('./assets/images/cloudpractioner.png'),
      imageAlt: 'AWS Certified Cloud Practitioner Logo',
      footerLink: [
        {
          name: 'AWS Certified Cloud Practitioner',
          url: 'https://www.credly.com/badges/3e102b55-b195-4083-9117-e0a0e967753e/public_url',
        },
      ],
    },
    {
      title: 'AWS Certified Solution Architect Associate',
      subtitle:
        'Achieved AWS Certified Solutions Architect  Associate certification, demonstrating my ability to design and deploy scalable, secure, and cost-efficient applications on AWS.',
      image: require('./assets/images/solutionarchitect.png'),
      imageAlt: 'AWS Certified Solutions Architect Associate Logo',
      footerLink: [
        {
          name: 'AWS Certified Solution Architect Associate',
          url: 'https://www.credly.com/badges/6fbba942-e0b0-4a92-9a2b-af52bfbb6581/public_url',
        },
      ],
    },

    {
      title: 'AWS Academy Graduate - AWS Academy Cloud Architecting',
      subtitle:
        'Completed AWS Academy Cloud Architecting course, gaining hands-on experience in designing cloud solutions using core AWS services and architectural best practices.',
      image: require('./assets/images/awsgradutate.png'),
      imageAlt: 'AWS Academy Graduate - AWS Academy Cloud Architecting Logo',
      footerLink: [
        {
          name: 'AWS Academy Graduate - AWS Academy Cloud Architecting',
          url: 'https://www.credly.com/badges/79a9a568-f7ff-4507-b820-62b671bd5d0b/public_url',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};




const contactInfo = {
  title: emoji('Contact Me ☎️'),
  number: '📞 +91 9370569860',
  email_address: '📬 rohanzode40@gmail.com',
};

const blogSection = {
  title: "My Blog",
  posts: [
    { title: "Post 1", link: "https://..." },
    { title: "Post 2", link: "https://..." },
  ],
};

const podcastSection = {
  title: "My Podcast",
  episodes: [],
};



// Talk Section
const talkSection = {
  title: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9370569860",
  email_address: "rohanzode40@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: 'Twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer


const resumeSection = {
  title: "My Resume",
  link: "https://link-to-your-resume.pdf", // or leave empty for now
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
