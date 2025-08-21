import { Instagram, Mail } from 'lucide-react';

export default function Socials() {
  const socialLinks = [
    {
      name: "Instagram", 
      handle: "@br1dge.hackathon",
      description: "Follow us on Instagram for updates and more information",
      icon: Instagram,
      color: "from-[#E1306C] to-[#C13584]",
      url: "https://www.instagram.com/br1dgehackathon25?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    // {
    //   name: "GitHub",
    //   handle: "BR1DGE-Hackathon",
    //   description: "Explore open source projects and resources from our hackathon community.",
    //   icon: Github,
    //   color: "from-[#333] to-[#24292e]",
    //   url: "#"
    // },
    {
      name: "Email",
      handle: "br1dgehackathon2025@gmail.com",
      description: "Have questions? Reach out to us directly via email for personalized support",
      icon: Mail,
      color: "from-[#b4500a] to-[#843a06]",
      url: "mailto:br1dgehackathon2025@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#065084] pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl text-[#b6eada] font-KodeMono font-bold mb-5">
            STAY CONNECTED
          </h2>
          <p className="text-xl text-[#78b9b5] max-w-3xl mx-auto leading-relaxed font-Monteserrat">
            Don't miss important updates, connect with us here
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank"
              className="bg-[#03001c]/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 block"
            >
              <div className="flex items-center mb-4">
                <div className={`bg-gradient-to-r ${social.color} rounded-full p-3 mr-4`}>
                  <social.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#b6eada] font-Monteserrat">
                    {social.name}
                  </h3>
                  <p className="text-[#78b9b5] text-sm font-Monteserrat">
                    {social.handle}
                  </p>
                </div>
              </div>
              
              <p className="text-[#b6eada]/80 leading-relaxed text-sm font-Monteserrat">
                {social.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
