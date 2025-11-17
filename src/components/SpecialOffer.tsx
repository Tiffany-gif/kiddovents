export const SpecialOffer = () => {
  return <section className="w-full py-8 bg-white">
    <div className="container mx-auto px-4">
      <div className="bg-[#FAD4D4] rounded-xl p-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4">
        <div className="font-semibold text-lg">Special Offer:</div>
        <div>
          Book before December 1st and receive a 15% early bird discount! Use
          code
        </div>
        <div className="bg-white px-4 py-1 rounded-md font-bold text-[#A855F7]">
          TOGETHER2025
        </div>
      </div>
    </div>
  </section>;
};