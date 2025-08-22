import bg from '../assets/background.png';
import logo from '../assets/LOGO1.png'


export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#03001c] via-[#065084] to-[#5b8fb9]">
      <img src={bg} alt="bg-img" className='bg-cover h-screen w-screen absolute opacity-50' />
      <div className="absolute inset-0 bg-gradient-to-r from-[#03001c]/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center">
            <img src={logo} alt="logo" className='h-30 w-30'/>
          </div>
          <h2 className='text-2xl md:text-4xl font-Moulpali text-[#b4500a] mb-8'>
            HACKATHON
          </h2>
          <p className="text-lg md:text-xl text-[#b6eada]/80 mb-12 max-w-2xl mx-auto leading-relaxed font-Montserrat">
            Bridge the gap between innovation and reality. Join us for an extraordinary journey where brilliant young minds collaborate to shape the future
          </p>
          <p className="text-3xl md:text-xl text-[#b4500a] mb-12 mx-auto leading-relaxed font-Montserrat font-semibold">
            NO PRIOR CODING KNOWLEDGE NEEDED!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://forms.gle/kSESAdCvyuvGMoUEA" target="_blank">
              <button className="bg-gradient-to-r from-[#b4500a] to-[#843a06] rounded-md text-white text-lg px-8 py-4 font-Montserrat font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200 w-50 h-18">
                Register Now
              </button>
            </a>
            <button 
              onClick={scrollToAbout}
              className="border-2 border-[#78b9b5] text-[#78b9b5] rounded-md px-8 py-4 text-lg font-Montserrat hover:bg-[#78b9b5] hover:text-[#03001c] transition-all duration-200 hover:shadow-lg transform hover:scale-105 transition-all duration-200 w-50 h-18"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
