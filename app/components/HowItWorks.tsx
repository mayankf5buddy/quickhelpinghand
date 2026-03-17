import Image from "next/image";

const steps = [
  { num: 1, title: "Submit Pre-Registration", desc: "Reserve your service spot." },
  { num: 2, title: "Confirm Your City & Service", desc: "We verify your business." },
  { num: 3, title: "Launch With Early Access", desc: "Start receiving customer leads." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#023a78] text-center mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="bg-white p-5 pt-0 sm:mb-8 rounded-xl border border-[#4075ae] shadow-lg text-center relative">
              <div className="w-16 h-16 mt-[-30px] bg-[#3bb4e1] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-md">
                {s.num}
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white border-l-4 border overflow-hidden border-l-[#f97316] border-[#4075ae] rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6 max-w-7xl mx-auto">
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full flex items-center justify-center">
              <Image src="/img/check.png" alt="Check" width={160} height={160} />
            </div>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#023a78] mb-2">Early provider spots are extremely limited.</h3>
            <p className="text-gray-600 text-sm">
              Only <span className="text-[#f97316] font-semibold">5 providers per service per city</span> will be accepted.
              <br />Once filled, new registrations will be closed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
