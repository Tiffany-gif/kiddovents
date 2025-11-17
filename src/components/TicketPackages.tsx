import { HeartIcon, SparklesIcon, CrownIcon, CheckIcon, StarIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export const TicketPackages = () => {
  return <section id="packages" className="w-full py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ticket Packages
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          Choose the perfect package for your family and start creating
          unforgettable memories together
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch">
        <TicketCard
          icon={<HeartIcon className="w-8 h-8 text-white" />}
          title="The Kiddovents Explorer Pass (Kids – 25,000 RWF)"
          description="Best for: Ages 3–12"
          price="25,000 RWF"
          features={[
            'Access to: Bouncing Castles',
            'Trampoline Zone',
            'Art Wall (Our Imagination Wall)',
            'Face Painting & Balloon Twisting',
            'Canvas Painting Station',
            'Treasure/Clue Hunt',
            'Creative Zones (Chess, Drawing, Crafting)',
            'Photo/360 Booth (1 session included)',
            'Snack + Kiddovents Wristband',
            'A full day of laughter, creativity, and discovery!',
          ]}
        />
        <TicketCard
          icon={<SparklesIcon className="w-8 h-8 text-white" />}
          title="The Togetherness Pass (Parents & Young Adults – 17,000 RWF)"
          description="Best for: Parents, guardians, and youth (13+)"
          price="17,000 RWF"
          popular={true}
          features={[
            'Access to Parent Lounge — relax, connect & network',
            'Karaoke Zone & Chill Lounge',
            'Access to Creative & Family Games Area',
            '360 Photo Booth',
            'Kiddovents Souvenir Badge',
            'For those who love to unwind, mingle, and share good energy.',
          ]}
        />
        <TicketCard
          icon={<CrownIcon className="w-8 h-8 text-white" />}
          title="Family Bond Package (2 Adults + 2 Kids – 80,000 RWF)"
          description=""
          price="80,000 RWF"
          features={[
            'Full access for all four to Explorer & Togetherness zones',
            'Family welcome pack (snacks, Kiddovents merch, drinks)',
            'Priority 360 Booth session + Family Portrait Corner',
            'Access to Family Art Wall segment',
            'Celebrate connection, laughter, and the joy of being together.',
          ]}
        />
        <TicketCard
          icon={<StarIcon className="w-8 h-8 text-white" />}
          title="Group Fun Package (Group of 4 Friends – 60,000 RWF)"
          description="Best for: Teenagers, university friends, or workmates"
          price="60,000 RWF"
          features={[
            'Karaoke & Chill Lounge access',
            'Group 360 Booth session',
            'Participation in team games & competitions',
            '4 soft drinks + Kiddovents souvenir bands',
            'Because the best moments are shared with your people.',
          ]}
        />
      </div>

    </div>
  </section>;
};
type TicketCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string | number;
  features: string[];
  popular?: boolean;
};
const TicketCard = ({
  icon,
  title,
  description,
  price,
  features,
  popular = false
}: TicketCardProps) => {
  const navigate = useNavigate();

  return <div className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border h-full flex flex-col ${popular ? 'border-[#A855F7]' : 'border-gray-200'}`}>
    {popular && <div className="absolute right-0 top-0 bg-[#A855F7] text-white text-sm font-medium px-4 py-1 rounded-bl-lg">
      Most Popular
    </div>}
    <div className="p-8 flex flex-col h-full">
      <div className="w-16 h-16 bg-[#A855F7] rounded-full flex items-center justify-center mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center mb-6 min-h-[48px]">{description}</p>
      <div className="text-center mb-6">
        <span className="text-2xl font-bold">{price}</span>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => <li key={index} className="flex items-start">
          <CheckIcon className="w-5 h-5 text-[#A855F7] mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-sm">{feature}</span>
        </li>)}
      </ul>
      <a
        href="https://kiddovents.sinc.events/kiddovents-2208-edition-2"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-auto"
      >
        <button
          type="button"
          className="w-full bg-[#A855F7] text-white font-medium py-3 px-8 rounded-full shadow-lg hover:bg-[#9333EA] transition-colors whitespace-nowrap"
        >
          Book Now
        </button>
      </a>
    </div>
  </div>;
};