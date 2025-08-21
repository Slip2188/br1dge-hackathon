import { Users, Laptop, Code, CheckCircle } from 'lucide-react';

export default function Requirements() {
  const requirements = [
    {
      title: "Teams",
      description: "All you need to know about team formation for participating in the hackathon",
      icon: Users,
      color: "from-[#b4500a] to-[#843a06]",
      details: [
        "5 team members maximum",
        "Solo participation is allowed",
        "No team? We'll connect you with one, just select the option during registration",
        "One Team - One Registration - One Track"
      ]
    },
    {
      title: "Technical Setup",
      description: "Before you join, check that you have the required technology for participation",
      icon: Laptop,
      color: "from-[#0f828c] to-[#78b9b5]",
      details: [
        "Personal laptop required",
        "Chargers and headphones as per need",
        "Wi-Fi will be provided",
        "Power outlets available"
      ]
    },
    {
      title: "Additional Requirements",
      description: "What you need to know before registering",
      icon: Code,
      color: "from-[#065084] to-[#5b8fb9]",
      details: [
        "No coding knowledge needed!",
        "Use of no-code tools allowed",
        "Prototype building during event time only",
        "Ideation can be done before the event"
      ]
    },
    {
      title: "Submission Guidelines",
      description: "Here's how you'll submit your hackathon project",
      icon: CheckCircle,
      color: "from-[#8c190f] to-[#b4500a]",
      details: [
        "Working prototype required",
        "Demo presentation (5 minutes)",
        "GitHub account required",
        "Fair use of AI expected*"
      ]
    }
  ];

  return (
    <section id="requirements" className="py-20 bg-gradient-to-b from-[#0f828c] to-[#065084]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl text-[#b6eada] font-KodeMono font-bold mb-5">
            REQUIREMENTS AND GUIDELINES
          </h2>
          <p className="text-xl text-[#b6eada] max-w-3xl mx-auto leading-relaxed font-Montserrat">
            Check your eligibility for the event
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {requirements.map((req, index) => (
            <div 
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-md p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start mb-6">
                <div className={`bg-gradient-to-r ${req.color} rounded-full p-3 mr-4 flex-shrink-0`}>
                  <req.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#03001c] mb-3 font-Montserrat">
                    {req.title}
                  </h3>
                  <p className="text-[#b6eada] leading-relaxed font-Montserrat">
                    {req.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {req.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${req.color} mt-2 mr-3 flex-shrink-0`}></div>
                    <span className="text-[#03001c] leading-relaxed font-Montserrat font-semibold">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-[#03001c] backdrop-blur-sm rounded-md p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#b4500a] mb-4 font-Montserrat">
              *Fair use of AI
            </h3>
            <p className="text-[#b6eada] leading-relaxed mb-6 font-Montserrat">
              AI tools may be used for brainstorming, debugging, or speeding up tasks.
              Entire projects must not be generated solely by AI, your originality matters.
              Clearly mention in your submission if and where AI was used.
              Do not use AI to plagiarize existing projects or copy code without understanding it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
