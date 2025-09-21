import { Book, Users, BookA, Code } from 'lucide-react';

export default function EventFlow() {
  const schedule = [
    {
      time: "24th August",
      title: "Registrations Open",
      description: "Registration for the hackathon will open from 24th August to 2nd October",
      icon: Users,
      color: "from-[#b4500a] to-[#843a06]"
    },
    {
      time: "3rd October",
      title: "General Workshop",
      description: "Join our general workshop to get familiar with the hackathon format, requirements, and submission protocol with Q&A with organizers to clarify doubts",
      icon: Book,
      color: "from-[#0f828c] to-[#78b9b5]"
    },
    {
      time: "4th October",
      title: "Specialised Workshop",
      description: "Each track includes a dedicated session where experts share insights, tools, and best practices tailored to your theme",
      icon: BookA,
      color: "from-[#065084] to-[#5b8fb9]"
    },
    {
      time: "12th October",
      title: "Hackathon Day",
      description: "The final day where you will bring your creativity to life through innovation",
      icon: Code,
      color: "from-[#8c190f] to-[#b4500a]"
    }
  ];

  return (
    <section id="event-flow" className="py-20 bg-gradient-to-b from-[#03001c] to-[#065084]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl text-[#b4500a] font-KodeMono font-bold mb-5">
            EVENT FLOW
          </h2>
          <p className="text-xl text-[#78b9b5] max-w-3xl mx-auto leading-relaxed font-Montserrat">
            Here's a step-by-step look at how the hackathon will unfold         
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {schedule.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center mb-12 last:mb-0">
              <div className="md:w-1/4 mb-6 md:mb-0">
                <div className="text-2xl font-bold text-[#b6eada] text-center md:text-left font-Montserrat">
                  {item.time}
                </div>
              </div>
              
              <div className="md:w-3/4 bg-[#b6eada]/80 backdrop-blur-sm rounded-md p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className={`bg-gradient-to-r ${item.color} rounded-full p-3 mr-4 flex-shrink-0`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#843a06] mb-3 font-Montserrat">
                      {item.title}
                    </h3>
                    <p className="text-[#03001c] leading-relaxed font-Montserrat">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
