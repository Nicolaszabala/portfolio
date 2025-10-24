import { FaGithub, FaLinkedin } from "react-icons/fa";
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
    <footer className="bg-muted/50 dark:bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-black gradient-text">
              {DEVELOPER_INFO.name}
            </h3>
            <p className="text-muted-foreground font-medium">
              {DEVELOPER_INFO.title} crafting exceptional digital experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.github}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-primary/10"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-primary/10"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3">
              <li><span className="text-muted-foreground font-medium">Web Development</span></li>
              <li><span className="text-muted-foreground font-medium">Mobile Apps</span></li>
              <li><span className="text-muted-foreground font-medium">UI/UX Design</span></li>
              <li><span className="text-muted-foreground font-medium">Consultation</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Contact Info</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground font-medium">{DEVELOPER_INFO.email}</li>
              <li className="text-muted-foreground font-medium">{DEVELOPER_INFO.phone}</li>
              <li className="text-muted-foreground font-medium">{DEVELOPER_INFO.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground font-medium">
            © 2025 {DEVELOPER_INFO.name}. All rights reserved. Built with modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
