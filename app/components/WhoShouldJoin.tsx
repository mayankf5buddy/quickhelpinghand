const categories = [
  "Plumbers", "Electricians", "Locksmiths", "Tow truck operators",
  "Handymen", "Tree removal companies", "Cleaning services", "Pest control professionals",
];

export default function WhoShouldJoin() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#023a78] mb-10">Who Should Join?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-6 text-[22px] py-3 border border-[#1e40af] text-[#023a78] rounded-full font-medium hover:bg-[#1e40af] hover:text-white transition cursor-default"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
