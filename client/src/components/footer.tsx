import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { DEVELOPER_INFO, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">
              {DEVELOPER_INFO.name}
            </h3>
            <p className="text-gray-300">
              {DEVELOPER_INFO.title} crafting exceptional digital experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.github}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Web Development</span></li>
              <li><span className="text-gray-300">Mobile Apps</span></li>
              <li><span className="text-gray-300">UI/UX Design</span></li>
              <li><span className="text-gray-300">Consultation</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">{DEVELOPER_INFO.email}</li>
              <li className="text-gray-300">{DEVELOPER_INFO.phone}</li>
              <li className="text-gray-300">{DEVELOPER_INFO.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 {DEVELOPER_INFO.name}. All rights reserved. Built with ❤️ and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
