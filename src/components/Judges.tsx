import { Linkedin } from 'lucide-react';
import ShilpaSingh from '../assets/ShilpaSingh.jpeg';
import AnandGawade from '../assets/AnandGawade.jpeg';
import RishikeshGaikwad from '../assets/Rishikesh.jpg';


export default function JUDGES() {
  // const scrollToContact = () => {
  //   const aboutSection = document.querySelector('#contact');
  //   if (aboutSection) {
  //     aboutSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  const teamMembers = [
    {
      name: "CA Anand Gawade",
      role: "FCA, M.Com, DISA, IBBI Registered Valuer, NACVA (USA)",
      image: AnandGawade,
      social: {
        linkedin: "https://www.linkedin.com/in/ca-anand-gawade/"
      }
    },
    {
      name: "Shilpa Singh",
      role: "Director of Engineering, Druva",
      image: ShilpaSingh,
      social: {
        linkedin: "https://www.linkedin.com/in/shilparoopchand/"
      }
    },
    {
      name: "Rishikesh Gaikwad",
      role: "Director of Data Science, LAM Research",
      image: RishikeshGaikwad,
      social: {
        linkedin: "https://www.linkedin.com/in/rishikeshgaikwad/"
      }
    }
  ];

  return (
    <section id="judges" className="py-20 bg-gradient-to-b from-[#0f828c] to-[#065084]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl text-[#b6eada] font-KodeMono font-bold mb-5">
            MEET OUR JUDGES
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-[#03001c]/80 backdrop-blur-sm rounded-md p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="rounded-full w-30 h-30 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                <img src={member.image} alt={member.name} className="bg-cover rounded-md"/>
              </div>
              
              <h3 className="text-xl font-semibold text-[#b6eada] mb-2 font-Montserrat">
                {member.name}
              </h3>
              
              <p className="text-[#b4500a] font-bold mb-4 font-Montserrat text-m">
                {member.role}
              </p>
            
              
              <div className="flex justify-center space-x-4">
                {/* <a 
                  href={member.social.github}
                  className="text-[#78b9b5] hover:text-[#b6eada] transition-colors duration-200"
                >
                  <Github size={20} />
                </a> */}
                <a 
                  href={member.social.linkedin}
                  className="text-[#78b9b5] hover:text-[#b6eada] transition-colors duration-200"
                  target="_blank"
                >
                  <Linkedin size={20} />
                </a>
                {/* <a 
                  href={member.social.twitter}
                  className="text-[#78b9b5] hover:text-[#b6eada] transition-colors duration-200"
                >
                  <Twitter size={20} />
                </a> */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
