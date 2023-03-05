import {
  FaLongArrowAltDown,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="pt-20 pb-8" id="contact">
      <div className="container flex flex-col items-center">
        <div className="max-w-lg text-center">
          <h2 className="font-bold font-display text-6xl mb-4">
            Say hi to James.
          </h2>
          <p className="mb-8 text-sm">
            I would love to hear from you. Whether it's a project, job
            opportunity, or just a chat. Feel free to contact me.
          </p>
        </div>
        <FaLongArrowAltDown className="mb-8 animate-bounce text-xl text-center" />
        <Link
          className="mb-8 flex items-center py-2 px-3 rounded transition-colors ease-out duration-300 hover:bg-smoke text-sm"
          href="mailto:jaesmanalang@gmail.com"
        >
          Email me
          <FaEnvelope className="text-md ml-2" />
        </Link>
        <ul className="flex items-center gap-3">
          <li>
            <Link
              className="inline-block transition-colors duration-300 ease-out py-2 px-3 rounded hover:bg-smoke"
              href="https://github.com/jaesmanalang"
            >
              <FaGithub className="text-sm" />
            </Link>
          </li>
          <li>
            <Link
              className="inline-block transition-colors duration-300 ease-out py-2 px-3 rounded hover:bg-smoke"
              href="https://www.linkedin.com/in/jamesmanalang/"
              target="_blank"
            >
              <FaLinkedin className="text-sm" />
            </Link>
          </li>
        </ul>
        <p className="text-gray-500 text-sm">
          Built by James Manalang and design inspiration from{' '}
          <Link href="https://www.kennethvega.com/">Kenneth Vega</Link>
        </p>
      </div>
    </footer>
  );
}
