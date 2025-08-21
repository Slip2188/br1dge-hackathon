import { Heart, Code, Users } from 'lucide-react';
import LOGO from "../assets/LOGO2.png";

export default function Footer() {
  const footerLinks = {
    event: [
      { name: "About", href: "#about" },
      { name: "Event Flow", href: "#event-flow" },
      { name: "Tracks", href: "#tracks" },
      { name: "Requirements", href: "#requirements" }
    ],
    community: [
      { name: "Team", href: "#team" },
      { name: "Sponsors", href: "#sponsors" },
      { name: "Contact", href: "#contact" }
    ]
    // legal: [
    //   { name: "Code of Conduct", href: "#" },
    //   { name: "Privacy Policy", href: "#" },
    //   { name: "Terms of Service", href: "#" },
    //   { name: "FAQ", href: "#" }
    // ]
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#03001c] text-[#b6eada] py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 flex flex-col justify-center align-center">
            <img src={LOGO} alt="" className="w-20"/>
            <h3 className="text-3xl font-semibold mb-4 text-[#b6eada] font-KodeMono">
              BR1DGE
            </h3>
            {/* <p className="text-[#78b9b5] leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Building bridges between brilliant minds and innovative solutions.
            </p> */}
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-[#b4500a] to-[#843a06] rounded-full p-2">
                <Code className="text-white" size={12} />
              </div>
              <div className="bg-gradient-to-r from-[#0f828c] to-[#78b9b5] rounded-full p-2">
                <Users className="text-white" size={12} />
              </div>
              <div className="bg-gradient-to-r from-[#065084] to-[#5b8fb9] rounded-full p-2">
                <Heart className="text-white" size={12} />
              </div>
            </div>
          </div>

          {/* Event Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#b6eada] font-Montserrat">
              Event
            </h4>
            <ul className="space-y-2">
              {footerLinks.event.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#78b9b5] hover:text-[#b6eada] transition-colors duration-200 font-Montserrat"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#b6eada] font-Montserrat">
              Community
            </h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#78b9b5] hover:text-[#b6eada] transition-colors duration-200 font-Montserrat"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4 text-[#b6eada]">
              Legal & Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-[#78b9b5] hover:text-[#b6eada] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#065084] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#78b9b5] text-sm mb-4 md:mb-0 font-Montserrat">
              © 2025 BR1DGE Hackathon. All rights reserved.
            </div>
            <div className="flex items-center text-[#78b9b5] text-sm font-Montserrat">
              Made with 
              <Heart className="mx-2 text-[#b4500a]" size={16} />
              by the BR1DGE Team
            </div>
          </div>
        
        </div>
      </div>
    </footer>
  );
}
