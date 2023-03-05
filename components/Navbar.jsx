import Link from 'next/link';
import { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { RiMenu4Line } from 'react-icons/ri';

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
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 14) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleClick(event) {
    setShowMenu(false);
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
    <nav
      className={`py-5 fixed top-0 left-0 w-full bg-white z-10 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
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
        <ul className="md:flex hidden md:items-center md:gap-1">
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
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-2 text-xl rounded hover:bg-gray-200 transition-colors ease-out duration-300 md:hidden"
        >
          <RiMenu4Line />
        </button>
        {/* Mobile Menu */}
        {showMenu && (
          <ul className="md:flex md:items-center items-stretch md:gap-1 gap-6 md:flex-row flex-col fixed top-[76px] bottom-0 left-0 right-0 z-10 bg-white text-black md:static">
            {links.map((link, index) => (
              <li className="grow md:h-auto h-[25%]" key={index}>
                <Link
                  className="flex items-center justify-center h-full w-full gap-2 py-1.5 px-3 rounded transition-colors ease-out duration-300 hover:text-black hover:bg-smoke text-sm"
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
        )}
      </div>
    </nav>
  );
}
