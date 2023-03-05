import {
  FaLongArrowAltDown,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import Link from 'next/link';
import { scroller } from 'react-scroll';

export default function Hero() {
  return (
    <section
      className="min-h-[calc(100vh_-_4rem)] flex items-center py-5"
      id="hero"
    >
      <div className="container">
        <h1 className="font-extrabold font-display lg:text-[7rem] leading-none tracking-tight mb-5">
          Hello, I’m James
          <br />
          Front-end Developer
        </h1>
        <p className="text-xl leading-relaxed font-light max-w-2xl">
          Specializing in crafting design concepts into functional, responsive,
          and user-friendly interfaces.
        </p>

        <ul className="flex items-center gap-3 mt-8">
          <li>
            <Link
              className="inline-block transition-colors duration-300 ease-out py-2 px-3 rounded hover:bg-smoke"
              href="https://github.com/jaesmanalang"
            >
              <FaGithub className="text-3xl" />
            </Link>
          </li>
          <li>
            <Link
              className="inline-block transition-colors duration-300 ease-out py-2 px-3 rounded hover:bg-smoke"
              href="https://www.linkedin.com/in/jamesmanalang/"
              target="_blank"
            >
              <FaLinkedin className="text-3xl" />
            </Link>
          </li>
        </ul>
        <div className="mt-8 flex items-center gap-1">
          <Link
            className="flex items-center py-2 px-3 rounded transition-colors ease-out duration-300 hover:bg-smoke text-sm"
            href="#projects"
            onClick={() =>
              scroller.scrollTo('projects', {
                duration: 800,
                smooth: 'easeOutQuint',
                offset: -64,
              })
            }
          >
            View my projects
            <FaLongArrowAltDown className="text-md ml-2" />
          </Link>
          <Link
            className="flex items-center py-2 px-3 rounded transition-colors ease-out duration-300 hover:bg-smoke text-sm"
            href="mailto:jaesmanalang@gmail.com"
          >
            Email me
            <FaEnvelope className="text-md ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
