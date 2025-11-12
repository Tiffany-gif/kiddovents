import { CalendarDaysIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return <header className="w-full bg-gradient-to-b from-[#F4A5A5] to-[#FFFFFF] py-16">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center bg-gradient-to-r #E6AEAE rounded-full px-6 py-2 mb-6">
          <CalendarDaysIcon className="w-5 h-5 text-[#A855F7] mr-2" />
          <span className="text-[#6A0DAD] font-medium">
            Kiddovents Presents
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-[#A855F7] mb-4">
          The Season of <br />
          Togetherness
        </h1>
        <p className="text-xl text-gray-800 mb-4">The Gift of Time</p>
        <p className="text-gray-700 mb-8 max-w-lg mx-auto">
          Create magical memories with your loved ones this season. Join us
          for unforgettable moments filled with joy, laughter, and connection.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link to="/booking" className="bg-[#A855F7] text-white font-medium py-4 px-8 rounded-full shadow-lg hover:bg-[#9333EA] transition-colors text-center">
            Book Your Experience
          </Link>
          <a href="#about" className="bg-white text-[#A855F7] font-medium py-4 px-8 rounded-full border border-[#A855F7] hover:bg-gray-50 transition-colors text-center">
            Learn More
          </a>
        </div>
        <div className="flex items-center justify-center text-sm text-gray-600">
          <CalendarDaysIcon className="w-4 h-4 mr-2" />
          <span>Limited Time Event • Book Now</span>
        </div>
      </div>
    </div>
  </header>;
};