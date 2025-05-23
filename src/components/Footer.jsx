import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi"; // For portfolio icon "react-icons/fa";

const socialLinks = [
    { href: "https://www.https://www.linkedin.com/in/sourabhgautam/.com", icon: <FaLinkedin /> },
  { href: "https://github.com/sourabhgautam98", icon: <FaGithub /> },
  { href: "https://portfolio-sourabh-gautam.vercel.app/", icon: <HiOutlineGlobeAlt /> }, // Replace with actual portfolio link
  { href: "https://www.behance.net/sourabhgautam98", icon: <FaBehance /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©SourabhGautam2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
