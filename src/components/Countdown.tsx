import { useState, useEffect } from 'react';
// import { Clock } from 'lucide-react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set hackathon date to 30 days from now for demo
    const hackathonDate = new Date("October 12, 2025 09:00:00");

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = hackathonDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="py-20 bg-[#03001c]">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-8">
          {/* <Clock className="text-[#b6eada] mr-4" size={40} /> */}
          <h2 className="text-5xl md:text-7xl text-[#b4500a] font-KodeMono font-bold">
            EVENT COUNTDOWN
          </h2>
        </div>
        
        <p className="text-xl text-[#78b9b5] mb-12 max-w-2xl mx-auto font-Montserrat">
          Join us on 12th October at 9am for the ultimate innovation challenge!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-[#78b9b5] backdrop-blur-sm p-6 rounded-md">
            <div className="text-4xl md:text-6xl font-bold text-[#301807] mb-2 font-KodeMono">
              {timeLeft.days}
            </div>
            <div className="text-[#03001c] text-lg font-semibold font-Moulpali">Days</div>
          </div>
          
          <div className="bg-[#78b9b5] backdrop-blur-sm p-6 rounded-md">
            <div className="text-4xl md:text-6xl font-bold text-[#843a06] mb-2 font-KodeMono">
              {timeLeft.hours}
            </div>
            <div className="text-[#03001c] text-lg font-semibold font-Moulpali">Hours</div>
          </div>
          
          <div className="bg-[#78b9b5] backdrop-blur-sm p-6 rounded-md">
            <div className="text-4xl md:text-6xl font-bold text-[#b4500a] mb-2 font-KodeMono">
              {timeLeft.minutes}
            </div>
            <div className="text-[#03001c] text-lg font-semibold font-Moulpali">Minutes</div>
          </div>
          
          <div className="bg-[#78b9b5] backdrop-blur-sm p-6 rounded-md">
            <div className="text-4xl md:text-6xl font-bold text-[#8c190f] mb-2 font-KodeMono">
              {timeLeft.seconds}
            </div>
            <div className="text-[#03001c] text-lg font-semibold font-Moulpali">Seconds</div>
          </div>
        </div>

        <div className="mt-12">
          <a href="https://forms.gle/kSESAdCvyuvGMoUEA" target="_blank">
            <button 
              className="bg-gradient-to-r from-[#b4500a] to-[#843a06] rounded-md text-white px-8 py-4 font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Register Before It's Too Late!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
