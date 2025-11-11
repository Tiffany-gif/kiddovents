import { HeartIcon, SparklesIcon, CrownIcon, CheckIcon, StarIcon } from 'lucide-react';
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
          title="Family Bond Package (2 Adults + 2 Kids – 75,000 RWF)"
          description=""
          price="75,000 RWF"
          features={[
            'Full access for all four to Explorer & Togetherness zones',
            'Family welcome pack (snacks, Kiddovents merch, drinks)',
            'Priority 360 Booth session + Family Portrait Corner',
            'Access to Family Art Wall segment',
            'Reserved picnic or lounge seating area',
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
      <div className="max-w-7xl mx-auto mt-16">
        <h3 className="text-2xl font-bold mb-4">
          Exclusive Add-On Experiences (Not Included in Packages)
        </h3>
        <div className="rounded-xl bg-gradient-to-r from-[#F4A5A5] to-[#FFFFFF] p-[1px]">
          <div className="overflow-x-auto bg-white rounded-xl">
            <table className="min-w-full text-left">
              <thead className="bg-gradient-to-r from-[#F4A5A5] to-[#FFFFFF]">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">Activity</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">Description</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">Price (RWF)</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">Age</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="even:bg-[#FDE2E2]/40">
                  <td className="px-4 py-3">Golf Court</td>
                  <td className="px-4 py-3">Mini family-friendly golf experience</td>
                  <td className="px-4 py-3">5,000</td>
                  <td className="px-4 py-3">All ages</td>
                </tr>
                <tr className="even:bg-[#FDE2E2]/40">
                  <td className="px-4 py-3">Football Pitch</td>
                  <td className="px-4 py-3">15-minute group session</td>
                  <td className="px-4 py-3">3,000</td>
                  <td className="px-4 py-3">All ages</td>
                </tr>
                <tr className="even:bg-[#FDE2E2]/40">
                  <td className="px-4 py-3">Escape Room</td>
                  <td className="px-4 py-3">Puzzle-based team challenge</td>
                  <td className="px-4 py-3">7,000</td>
                  <td className="px-4 py-3">13+</td>
                </tr>
                <tr className="even:bg-[#FDE2E2]/40">
                  <td className="px-4 py-3">Canvas Kit</td>
                  <td className="px-4 py-3">Take-home creative art kit</td>
                  <td className="px-4 py-3">5,000</td>
                  <td className="px-4 py-3">All ages</td>
                </tr>
                <tr className="even:bg-[#FDE2E2]/40">
                  <td className="px-4 py-3">Extra 360 Booth Session</td>
                  <td className="px-4 py-3">Capture more fun moments</td>
                  <td className="px-4 py-3">2,000</td>
                  <td className="px-4 py-3">All ages</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
  return <div className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border ${popular ? 'border-[#A855F7]' : 'border-gray-200'}`}>
    {popular && <div className="absolute right-0 top-0 bg-[#A855F7] text-white text-sm font-medium px-4 py-1 rounded-bl-lg">
      Most Popular
    </div>}
    <div className="p-8">
      <div className="w-16 h-16 bg-[#A855F7] rounded-full flex items-center justify-center mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center mb-6 min-h-[48px]">{description}</p>
      <div className="text-center mb-6">
        <span className="text-2xl font-bold">{price}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => <li key={index} className="flex items-start">
          <CheckIcon className="w-5 h-5 text-[#A855F7] mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-sm">{feature}</span>
        </li>)}
      </ul>
      <button className="w-full bg-[#A855F7] text-white font-medium py-3 px-4 rounded-full hover:bg-[#9333EA] transition-colors">
        Book Now
      </button>
    </div>
  </div>;
};