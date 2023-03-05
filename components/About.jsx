import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiJquery,
  SiStyledcomponents,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from 'react-icons/si';
import Image from 'next/image';

const techStack = [
  {
    name: 'React',
    icon: <SiReact />,
  },
  {
    name: 'Nextjs',
    icon: <SiNextdotjs />,
  },
  {
    name: 'Tailwindcss',
    icon: <SiTailwindcss />,
  },
  {
    name: 'Nodejs',
    icon: <SiNodedotjs />,
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
  },
  {
    name: 'Expressjs',
    icon: <SiExpress />,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
  },
  {
    name: 'Bootstrap',
    icon: <SiBootstrap />,
  },
  {
    name: 'HTML5',
    icon: <SiHtml5 />,
  },
  {
    name: 'CSS3',
    icon: <SiCss3 />,
  },
  {
    name: 'JQuery',
    icon: <SiJquery />,
  },
];

export default function About() {
  return (
    <section className="py-8" id="about">
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <h2 className="font-bold font-display text-6xl py-4 mb-2">
              About me
            </h2>
            <p className="mb-5 text-sm">
              Hello! My name is James Manalang, and I am a front-end developer
              with almost 2 years of experience.
              <br />
              <br />
              I have a passion for building user-interfaces for web-based
              applications and have been honing my skills through personal
              projects in my free time. Specifically, I've been using React and
              its ecosystem to create innovative and engaging interfaces.
              <br />
              <br />
              Here are the technologies I’ve been working with:
            </p>
            <div className="grid grid-cols-3 text-sm gap-2">
              {techStack.map((item, index) => (
                <div key={index} className="flex items-center gap-2 col-span-1">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <div className="relative rounded-full w-[200px] pb-[200px] max-w-full border border-gray-200">
              <Image
                className="object-cover object-top rounded-[inherit] pointer-events-none"
                src="/profile-picture.jpeg"
                fill
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
