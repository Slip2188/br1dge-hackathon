import { Trophy, Medal, Award, Gift } from 'lucide-react';

export default function Prizes() {
  const prizes = [
    {
      place: "1st Place",
      amount: "$5,000",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Plus mentorship opportunities and premium swag.",
      icon: Trophy,
      color: "from-[#b4500a] to-[#843a06]",
      size: "large"
    },
    {
      place: "2nd Place", 
      amount: "$3,000",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recognition and valuable networking.",
      icon: Medal,
      color: "from-[#0f828c] to-[#78b9b5]",
      size: "medium"
    },
    {
      place: "3rd Place",
      amount: "$1,500",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Certificate and exclusive merchandise.",
      icon: Award,
      color: "from-[#065084] to-[#5b8fb9]",
      size: "medium"
    },
    {
      place: "People's Choice",
      amount: "$1,000",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voted by fellow participants.",
      icon: Gift,
      color: "from-[#8c190f] to-[#301807]",
      size: "small"
    }
  ];

  return (
    <section id="prizes" className="py-20 bg-gradient-to-b from-[#b6eada] to-[#065084]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#03001c] mb-6">
            Prizes & Awards
          </h2>
          <p className="text-xl text-[#065084] max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {prizes.map((prize, index) => (
            <div 
              key={index} 
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 ${
                prize.size === 'large' ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className={`bg-gradient-to-r ${prize.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                <prize.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-[#b6eada] mb-2">
                {prize.place}
              </h3>
              
              <div className="text-3xl font-bold text-[#78b9b5] mb-4">
                {prize.amount}
              </div>
              
              <p className="text-[#b6eada]/80 leading-relaxed">
                {prize.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-[#78b9b5] mb-6">
            Total prize pool worth over <span className="font-bold text-[#b6eada]">$10,500</span>
          </p>
          <button className="bg-gradient-to-r from-[#b4500a] to-[#843a06] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            View Full Prize Details
          </button>
        </div>
      </div>
    </section>
  );
}
