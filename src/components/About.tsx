import { UsersRound, Hash } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#065084] to-[#0f828c]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl text-[#b6eada] font-KodeMono font-bold mb-5">
            ABOUT US
          </h2>
          <p className="text-l text-[#b6eada] max-w-3xl mx-auto leading-relaxed font-Montserrat">
            We are a team of passionate students who have a keen interest in bridging the gap between technology and innovation. BR1DGE Hackathon is our platform to make that happen
          </p>
          <p className="text-l text-[#b6eada] max-w-3xl mx-auto leading-relaxed font-Montserrat">
            Being a beginner-friendly event designed to give students the chance to dip their toes in the realm of technology through innovation, creativity, and problem-solving, regardless of prior experience, BR1DGE aims to achieve all that we stand for
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-[#03001c]/50 backdrop-blur-sm rounded-md p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-[#b4500a] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Hash className="text-white" size={28} />
            </div>
            <h3 className="text-xl text-[#78b9b5] mb-4 font-KodeMono">Total Participants</h3>
            <h3 className="text-[#b6eada] text-4xl md:text-6xl font-bold mb-2 font-KodeMono">
              22
            </h3>
          </div>

          <div className="bg-[#03001c]/50 backdrop-blur-sm rounded-md p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-[#0f828c] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <UsersRound className="text-white" size={28} />
            </div>
            <h3 className="text-xl text-[#78b9b5] mb-4 font-KodeMono">Total Registered Teams</h3>
            <h3 className="text-[#b6eada] text-4xl md:text-6xl font-bold mb-2 font-KodeMono">
              11  
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
