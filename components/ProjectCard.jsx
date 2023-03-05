import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Card({ project }) {
  const { name, description, demo, stacks, repo } = project;

  return (
    <article className="flex flex-col items-start rounded-md border border-mute md:p-6 p-5 hover:scale-105 transition-transform will-change-transform ease-out duration-300">
      <h3 className="font-bold font-display lg:text-3xl md:text-2xl text-xl mb-2">
        {name}
      </h3>
      <div className="lg:text-normal text-sm mb-3">
        <p>{description}</p>
      </div>
      <div className="mt-auto">
        <div className="flex items-center gap-2 mb-2">
          {stacks.map((stack, index) => (
            <p className="text-slate-500 text-xs" key={index}>
              #{stack}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={demo}
            className="flex items-center gap-1 hover:underline transition-colors ease-out duration-300 rounded text-xs"
            target="_blank"
          >
            <span>Demo</span>
            <FaExternalLinkAlt className="text-xs" />
          </Link>
          <Link
            href={repo}
            className="flex items-center gap-1 hover:underline transition-colors ease-out duration-300 rounded text-xs"
            target="_blank"
          >
            <span>Repository</span>
            <FaGithub className="text-xs" />
          </Link>
        </div>
      </div>
    </article>
  );
}
