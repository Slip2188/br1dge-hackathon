import { Building2} from 'lucide-react';
import AFLOGO from '../assets/AtharvaFoundationLOGO.png';


export default function Sponsors() {
  const scrollToSocials = () => {
    const aboutSection = document.querySelector('#contact');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const sponsorTiers = [
    {
      tier: "NGO Sponsors",
      companies: [
        { name: "Atharva Foundation", logo: AFLOGO, link:"https://www.instagram.com/atharva_d.bjp/" }
      ],
      color: "from-[#b4500a] to-[#843a06]",
      icon: Building2
    }
    // {
    //   tier: "Company Sponsors", 
    //   companies: [
    //     { name: "CodeForge Inc", logo: "CF" },
    //     { name: "DataFlow Systems", logo: "DF" },
    //     { name: "CloudNext", logo: "CN" },
    //   ],
    //   color: "from-[#0f828c] to-[#78b9b5]",
    //   icon: Zap
    // },
  ];

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-[#03001c] to-[#065084]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl text-[#b4500a] font-KodeMono font-bold mb-5">
            OUR SPONSORS
          </h2>
          <p className="text-xl text-[#78b9b5] max-w-3xl mx-auto leading-relaxed font-Montserrat">
            Introducing the companies and the NGOs that make this Hackathon possible
          </p>
        </div>

        <div className="space-y-12">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="text-center">
              <div className="flex items-center justify-center mb-8">
                <div className={`bg-gradient-to-r ${tier.color} rounded-full p-3 mr-4`}>
                  <tier.icon className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-semibold text-[#b6eada] font-Montserrat">
                  {tier.tier}
                </h3>
              </div>
              
              <div className={`grid ${
                tier.companies.length <= 2 ? 'grid-cols-1 md:grid-cols-2' : 
                tier.companies.length <= 3 ? 'grid-cols-1 md:grid-cols-3' : 
                'grid-cols-2 md:grid-cols-4'
              } gap-6 max-w-4xl mx-auto`}>
                {tier.companies.map((company, companyIndex) => (
                  <a href={company.link} target="_blank">
                    <div 
                      key={companyIndex}
                      className="bg-white/10 backdrop-blur-sm rounded-md p-6 hover:transform hover:scale-105 transition-all duration-300 w-50"
                    >
                      <img src={company.logo} alt="logo"/>
                      <h4 className="text-[#b6eada] font-semibold text-lg font-Montserrat">
                        {company.name}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-[#78b9b5] mb-6">
            Interested in becoming a sponsor? 
          </p>
          <button className="bg-gradient-to-r from-[#b4500a] to-[#843a06] text-white px-8 py-4 rounded-md font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200" onClick={scrollToSocials}>
            Reach out to Us!
          </button>
        </div>
      </div>
    </section>
  );
}
