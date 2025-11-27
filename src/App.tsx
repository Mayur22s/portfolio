
import './App.css'
import { Nav, Section } from './components';
import { About, Contact, Education, Experience, ListGrid } from './sections';
import ProjectsSection from './sections/Projects';

export const data = {
  name: "Mayur Laxman Sadgir",
  title: "React Native Developer",
  location: "Gurugram, Haryana, India",
  email: "mayursadgir99@gmail.com",
  phone: "+91 9076425889",
  summary:
    "React Native Developer with strong experience building and maintaining scalable B2C mobile applications. Skilled in developing high-performance, user-centric features with clean architecture and reusable components. Proficient in React Native, TypeScript, state-management libraries Redux, REST integrations, and optimizing app performance. Experienced collaborating with cross-functional teams, improving UI/UX, and delivering reliable releases to the Play Store and App Store. Passionate about writing maintainable code, debugging complex issues, and contributing to end-to-end mobile product development.",
  projects: [
    {
      name: "To Do Manager App",
      link: "https://github.com/Mayur22s/TaskManager",
      description: "A Todo App implementing CRUD functionality with offline storage via localStorage, along with API integration to fetch and display remote task data.",
    },
    {
      name: "Gallery App",
      link: "https://github.com/Mayur22s/ImageGallery",
      description: "A React Native app that lets users select single or multiple images from their device gallery, view them in a grid layout, and delete them as needed.",
    },
  ],
  skills: [
    "React",
    "React Native",
    "Redux",
    "JavaScript (ES6+)",
    "TypeScript",
    "REST APIs",
  ],
  tools: [
    "Xcode",
    "Android Studio",
    "Postman",
    "React Native Debugger",
    "Git",
    "Gitlab/Microsft Azure",
    'Expo',
  ],

  experiences: [
    {
      role: "React Native Developer",
      company: "Hero MotoCorp Ltd., Gurugram, Haryana",
      period: "May 2023 - Present",
      details: [
        // "Built and maintained cross-pladorm mobile applications using React Native with Redux-Saga for state management.",
        // "Integrated secure online payments using Razorpay.",
        // "Integrated RESTful APIs.",
        // "Implemented CleverTap push notifications, in-app event tracking.",
        // "Collaboration with backend and design teams to enhance performance and UI/UX.",
        // "Deployed applications across environments.",

        'Built and maintained cross-platform mobile applications (iOS & Android) using React Native with Redux-Saga for state management.',
        'mproved application performance using memoization techniques (useMemo, useCallback, memo), reduced render overhead and optimized JS–native bridge usage.',
        'Used profiling and debugging tools (Flipper, Android Profiler, Xcode Instruments) for performance tuning and crash analysis.',
        'Optimized image loading and caching using FastImage and implemented lazy loading strategies.',
        'Implemented Atomic Design Pattern to build scalable, reusable UI components and converted Figma designs into responsive React Native UI.',
        'Integrated RESTful APIs, implemented CleverTap push notifications and in-app event tracking for analytics and user engagement.',
        'Implemented Firebase Crashlytics and Realtime Database for crash monitoring and real-time data sync.',
        'Implemented skeleton loaders for smoother UX and responsive layouts following mobile UI/UX principles.',
        'Familiar with Bitrise for automated build pipelines and mobile app distribution.',
      ],
    },
    {
      role: "Graduate Engineer Trainee",
      company: "Volvo Eicher Commercial Vehicles Ltd., Thane, Maharashtra",
      period: "June 2021 - Feb 2022",
      details: [
        "Served as a Graduate Engineer Trainee in Production, assisting in shop-floor operations, process monitoring, and quality checks.",
        "Demonstrated strong work ethic while contributing to smooth and efficient manufacturing workflows.",
      ],
    },

  ],

  education: [
    { degree: "Post Graduation Diploma in Advanced Computing", school: "CDAC-Noida", year: "Sep 2022 - March 2023" },
    { degree: "B.E - Mechanical", school: "Mumbai University", year: "2017-2020" },
  ],

  links: {
    github: "https://github.com/Mayur22s",
    linkedin: "https://www.linkedin.com/in/mayur-sadgir",
    website: "https://mayursadgir.vercel.app/",
  },

};


const App = () => {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Nav />
      <main>
        <About />
        <Section id="summary" title="Summary">
          <p>{data.summary}</p>
        </Section>

        <Section id="projects" title="Projects">
          <ProjectsSection projects={data.projects} />
        </Section>


        <Section id="skills" title="Skills">
          <ListGrid items={data.skills} />
        </Section>
        <Section id="tools" title="Tools">
          <ListGrid items={data.tools} />
        </Section>
        <Section id="experience" title="Experience">
          <Experience />
        </Section>
        <Section id="education" title="Education">
          <Education />
        </Section>
        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </main>
    </div>
  )
}

export default App
