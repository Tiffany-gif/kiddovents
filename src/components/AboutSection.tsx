import React from 'react';
import { HeartIcon, UsersIcon, SparklesIcon, ClockIcon } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="w-full py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About the Event
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          In today's fast-paced world, the greatest gift we can give is our
          time. Join us for a celebration of togetherness, where families
          reconnect and create cherished memories that last a lifetime.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <FeatureCard icon={<HeartIcon className="w-8 h-8 text-white" />} title="Family Bonding" description="Create lasting memories with activities designed to bring families closer together" />
        <FeatureCard icon={<UsersIcon className="w-8 h-8 text-white" />} title="Community Spirit" description="Connect with other families and build meaningful relationships in a welcoming environment" />
        <FeatureCard icon={<SparklesIcon className="w-8 h-8 text-white" />} title="Magical Experiences" description="Enjoy enchanting activities, entertainment, and surprises throughout the event" />
        <FeatureCard icon={<ClockIcon className="w-8 h-8 text-white" />} title="Quality Time" description="Step away from screens and distractions to focus on what truly matters" />
      </div>
    </div>
  </section>;
};
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const FeatureCard = ({
  icon,
  title,
  description
}: FeatureCardProps) => {
  return <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-[#A855F7] rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>;
};