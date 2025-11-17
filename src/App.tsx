
import './App.css'
import { Nav, Section } from './components';
import { About, Contact, Education, Experience, ListGrid } from './sections';

export const data = {
  name: "Mayur Laxman Sadgir",
  title: "React Native Developer",
  location: "Gurugram, Haryana, India",
  email: "mayursadgir99@gmail.com",
  phone: "+91 9076425889",
  summary:
    "React Native Developer with strong experience building and maintaining scalable B2C mobile applications. Skilled in developing high-performance, user-centric features with clean architecture and reusable components. Proficient in React Native, TypeScript, state-management libraries Redux, REST integrations, and optimizing app performance. Experienced collaborating with cross-functional teams, improving UI/UX, and delivering reliable releases to the Play Store and App Store. Passionate about writing maintainable code, debugging complex issues, and contributing to end-to-end mobile product development.",
  skills: [
    "React",
    "React Native",
    "Redux",
    "JavaScript (ES6)",
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
  ],

  experiences: [
    {
      role: "React Native Developer",
      company: "Hero MotoCorp Ltd., Gurugram, Haryana",
      period: "May 2023 - Present",
      details: [
        "Built and maintained cross-pladorm mobile applications using React Native with Redux-Saga for state management.",
        "Integrated secure online payments using Razorpay.",
        "Integrated RESTful APIs.",
        "Implemented CleverTap push notifications, in-app event tracking.",
        "Collaboration with backend and design teams to enhance performance and UI/UX.",
        "Deployed applications across environments.",
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
    { degree: "Post Graduation Diploma in Advanced Computing", school: "CDAC-Noida", year: "2022-2023" },
    { degree: "B.E - Mechanical", school: "Mumbai University", year: "2017-2020" },
  ],

  links: {
    github: "https://github.com/Mayur22s",
    linkedin: "https://www.linkedin.com/in/mayur-sadgir-a81a731a0",
    website: "https://my-portfolio-zeta-nine-45.vercel.app/",
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

      <footer className="max-w-4xl mx-auto px-6 py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} {data.name}. Built with React.
      </footer>
    </div>
  )
}

export default App
