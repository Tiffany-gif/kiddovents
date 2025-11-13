import { CheckIcon } from 'lucide-react';
export const ExpectSection = () => {
  return <section className="w-full py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="mx-auto w-full max-w-[1050px] h-auto md:h-[428px] bg-gradient-to-r from-[#F4A5A5] to-[#FFFFFF] rounded-2xl p-8 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-[440px_1fr] gap-8 items-center h-full">
          <div className="w-full md:w-[440px] md:h-[240px]">
            <h2 className="text-3xl font-bold mb-4">What to Expect</h2>
            <ul className="space-y-4">
              <ExpectItem text="Interactive family activities and games" />
              <ExpectItem text="Live entertainment and performances" />
              <ExpectItem text="Delicious food and refreshments" />
              <ExpectItem text="Photo opportunities and keepsakes" />
              <ExpectItem text="Special surprises throughout the day" />
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg w-full h-[220px] md:w-[440px] md:h-[330px] md:justify-self-end">
            <img src="https://unsplash.com/photos/a-group-of-children-playing-in-a-field-DldEn-9g78k" alt="Family enjoying outdoor activities" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section >;
};
type ExpectItemProps = {
  text: string;
};
const ExpectItem = ({
  text,
}: ExpectItemProps) => {
  return <li className="flex items-start">
    <span className="flex-shrink-0 w-6 h-6 rounded-full text-white flex items-center justify-center mr-3">
      <CheckIcon className="w-4 h-4 text-black" />
    </span>
    <span>{text}</span>
  </li>;
};