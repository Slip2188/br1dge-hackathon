// import { Github, Linkedin, Twitter } from 'lucide-react';
// import Jay from '../assets/Jay.jpeg';
import Ritika from '../assets/Ritika.jpeg';
// import Prisha from '../assets/Prisha.jpeg';
// import Labdhi from '../assets/Labdhi.jpeg';
// import Naksh from '../assets/Naksh.jpeg';

export default function Team() {
  const scrollToContact = () => {
    const aboutSection = document.querySelector('#contact');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const teamMembers = [
    {
      name: "Rishikesh Gaikwad",
      role: "Co-Founder",
      bio: "Her focus on innovation, structure, and initiative brought BR1DGE from an idea to a full-fledged hackathon. With a passion for solving problems and creating impact, Ritika is the driving force behind our team's mission",
      image: Ritika,
      social: {
        github: "#",
        linkedin: "#", 
        twitter: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-[#0f828c] to-[#065084]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl text-[#b6eada] font-KodeMono font-bold mb-5">
            MEET THE TEAM
          </h2>
          <p className="text-xl text-[#78b9b5] max-w-3xl mx-auto leading-relaxed font-Montserrat">
            The passionate individuals making BR1DGE hackathon possible
          </p>
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
              
              <p className="text-[#b4500a] font-bold mb-4 font-Montserrat">
                {member.role}
              </p>
              
              <p className="text-[#78b9b5]/80 leading-relaxed mb-6 text-sm font-Montserrat">
                {member.bio}
              </p>
              
              {/* <div className="flex justify-center space-x-4">
                <a 
                  href={member.social.github}
                  className="text-[#78b9b5] hover:text-[#b6eada] transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={member.social.linkedin}
                  className="text-[#78b9b5] hover:text-[#b6eada] transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={member.social.twitter}
                  className="text-[#78b9b5] hover:text-[#b6eada] transition-colors duration-200"
                >
                  <Twitter size={20} />
                </a>
              </div> */}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-[#78b9b5] mb-6 font-Montserrat">
            Have skills you would wish to contribute with?
          </p>
          <button className="bg-gradient-to-r from-[#b4500a] to-[#843a06] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-Montserrat" onClick={scrollToContact}>
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
}
