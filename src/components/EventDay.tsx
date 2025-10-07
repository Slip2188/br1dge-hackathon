//import { Book, Users, BookA, Code } from 'lucide-react';

export default function EventFlow() {
  const schedule = [
    {
      time: "9:00 AM",
      title: "Reporting and Briefing",
    },
    {
      time: "9:30 AM",
      title: "Hackathon Begins"
    },
    {
      time: "1:30 PM",
      title: "Lunch Begins"
    },
    {
      time: "2:30 PM",
      title: "Presentations Begin"
    },
    {
      time: "3:00 PM",
      title: "Hacking concludes"
    },
    {
      time: "4:00 PM",
      title: "Social Event and Presentations"
    },
    {
      time: "5:00 PM",
      title: "Award Ceremony"
    },
    {
      time: "6:00 PM",
      title: "Event Conclusion"
    },
  ];

  return (
    <section id="event-day" className="py-20 bg-gradient-to-b from-[#065084] to-[#5b8fb9]">\
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl text-[#b4500a] font-KodeMono font-bold mb-5">
            EVENT DAY
          </h2>
          <p className="text-xl text-[#78b9b5] max-w-3xl mx-auto leading-relaxed font-Montserrat">
            Here's what will happen on the day of the event for offline participants      
          </p>
        </div>

        <div className="max-w-4xl mx-auto w-[100%] items-center flex-col">
          {schedule.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center mb-12 last:mb-0">
              <div className="w-[100%] bg-[#03001c]/80 backdrop-blur-sm rounded-md p-6 hover:shadow-lg transition-all duration-300 items-center">
                    <h5 className="text-xl font-bold text-[#78b9b5] text-center md:text-centre font-Montserrat">
                        {item.time}
                    </h5>
                    <h3 className="text-2xl font text-[#b6eada] mb-3 font-Montserrat text-center">
                      {item.title}
                    </h3>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
