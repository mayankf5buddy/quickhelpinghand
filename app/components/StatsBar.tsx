import Image from "next/image";

const stats = [
  { img: "/img/launch.png", title: "Launching Soon\nWorldwide" },
  { img: "/img/Serving.png", title: "Serving Thousands\nof Cities" },
  { img: "/img/Experts.png", title: "Connecting Customers\nWith Trusted Local Experts" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#0e2a5e] py-12 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((s) => (
            <div key={s.title} className="flex items-center justify-center md:justify-start gap-4">
              <div className="flex-shrink-0">
                <Image src={s.img} alt={s.title} width={60} height={60} />
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-[20px] leading-tight whitespace-pre-line">{s.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
