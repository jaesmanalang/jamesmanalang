import Link from 'next/link';
import { scroller } from 'react-scroll';
import { FaExternalLinkAlt } from 'react-icons/fa';

const links = [
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
  {
    name: 'Resume',
    href: '/Resume_James_Manalang.pdf',
    download: 'Resume_James_Manalang.pdf',
    target: '_blank',
    icon: <FaExternalLinkAlt />,
  },
];

export default function Navbar() {
  // const handleClick = (e) => {
  //   const link = e.target;

  //   const hasDownload = link.getAttribute('download');
  //   const targetId = link.getAttribute('href').substring(1);

  //   if (hasDownload) {
  //     e.preventDefault();
  //     return;
  //   } else {
  //     scroller.scrollTo(targetId, {
  //       duration: 500,
  //       smooth: true,
  //     });
  //   }
  // };

  function handleClick(event) {
    const link = event.target;

    // Check if the link has a "download" attribute
    const targetId = event.target.getAttribute('href').substring(2);
    const hasDownload = link.getAttribute('download');

    // If the link has a "download" attribute, prevent default behavior
    if (hasDownload) {
      event.preventDefault();
      return;
    }

    // Otherwise, execute the scroll animation
    scroller.scrollTo(targetId, {
      duration: 500,
      smooth: 'easeOutQuint',
      offset: -64,
    });
  }

  return (
    <nav className="py-5 fixed top-0 left-0 w-full bg-white z-10">
      <div className="container flex items-center justify-between">
        <Link
          href="#top"
          onClick={() =>
            scroller.scrollTo('top', { duration: 800, smooth: 'easeOutQuint' })
          }
        >
          <span className="text-base font-extrabold uppercase">
            James Manalang
          </span>
        </Link>
        <ul className="flex items-center gap-1">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className="flex items-center gap-2 py-1.5 px-3 rounded transition-colors ease-out duration-300 hover:text-black hover:bg-smoke text-sm"
                href={link.href}
                // download={link.download}
                target={link.target}
                onClick={handleClick}
              >
                {link.name}
                {link.icon && link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
