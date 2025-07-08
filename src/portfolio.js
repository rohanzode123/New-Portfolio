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
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      projectName: 'Saayahealth',
      projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      footerLink: [
        {
          name: 'Visit Website',
          url: 'http://saayahealth.com/',
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      projectName: 'Nextu',
      projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      footerLink: [
        {
          name: 'Visit Website',
          url: 'http://nextu.se/',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: require('./assets/images/codeInLogo.webp'),
      imageAlt: 'Google Code-In Logo',
      footerLink: [
        {
          name: 'Certification',
          url: 'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
        },
        {
          name: 'Award Letter',
          url: 'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        },
        {
          name: 'Google Code-in Blog',
          url: 'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        },
      ],
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: require('./assets/images/googleAssistantLogo.webp'),
      imageAlt: 'Google Assistant Action Logo',
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url: 'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
        },
      ],
    },

    {
      title: 'PWA Web App Developer',
      subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
      image: require('./assets/images/pwaLogo.webp'),
      imageAlt: 'PWA Logo',
      footerLink: [
        { name: 'Certification', url: '' },
        {
          name: 'Final Project',
          url: 'https://pakistan-olx-1.firebaseapp.com/',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',
  displayMediumBlogs: 'true', // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: 'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: 'Resume',
  subtitle: 'Feel free to download my resume',

  // Please Provide with Your Podcast embeded Link
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+91 9370569860',
  email_address: 'rohanzode40@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};
