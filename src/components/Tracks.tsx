import { Brain, ChartLine, CalendarHeart} from 'lucide-react';

export default function Tracks() {
  const tracks = [
    {
      title: "Education for All",
      description: "Build an interactive, intuitive, and visual-first learning platform for non-literate individuals",
      icon: Brain,
      color: "from-[#b4500a] to-[#843a06]",
      features: [
        "Gamified modules using audio, icons, local languages",
        "Storytelling to teach foundational subjects"
      ]
    },
    {
      title: "Finance for All",
      description: "Create a gamified platform that simplifies core financial concepts for the unaware",
      icon: ChartLine,
      color: "from-[#0f828c] to-[#78b9b5]",
      features: [
        "An RPG-style game that teaches savings, loans, and taxes etc",
        "Intuitive design"
      ]
    },
    {
      title: "HealthTech for All",
      description: "Design a digital solution that supports healthcare knowledge and access",
      icon: CalendarHeart,
      color: "from-[#065084] to-[#5b8fb9]",
      features: [
        "A medication tracker",
        "A mental wellness chatbot in regional languages",
        "An educational tool on neurodiversity or disabilities"
      ]
    }
  ];

  return (
    <section id="tracks" className="py-20 bg-[#065084]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl text-[#b6eada] font-KodeMono font-bold mb-5">
            COMPETITION TRACKS
          </h2>
          <p className="text-xl text-[#b6eada]/80 max-w-3xl mx-auto leading-relaxed font-Montserrat">
            Our hackathon offers multiple tracks, each with unique challenges and opportunities, all under our theme "Innovate for All"
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tracks.map((track, index) => (
            <div 
              key={index}
              className="bg-[#03001c]/50 backdrop-blur-sm rounded-md p-8 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${track.color} rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
                <track.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-[#b6eada] mb-4 font-Montserrat">
                {track.title}
              </h3>
              
              <p className="text-[#b6eada]/80 leading-relaxed mb-6 font-Montserrat">
                {track.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-[#b4500a] mb-3 font-Montserrat">
                  Key Focus Areas:
                </h4>
                {track.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${track.color} mr-3`}></div>
                    <span className="text-[#b6eada]/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
