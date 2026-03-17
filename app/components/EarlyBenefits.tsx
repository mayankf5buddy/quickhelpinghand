import Image from "next/image";

export default function EarlyBenefits() {
  const benefits = ["Lifetime listing", "Featured provider status", "Early customer leads", "Priority ranking in search results"];

  return (
    <section className="py-10 lg:py-0 bg-[#023a78] text-white relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 sm:py-12 z-10">
          <h2 className="text-3xl font-bold mb-6">Early Provider Benefits</h2>
          <p className="text-white mb-6 text-lg">Providers who join during pre-registration will receive:</p>
          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-center">
                <span className="text-[#f97316] mr-3">✓</span> {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center relative mt-[-80px] hidden md:block">
          <Image src="/img/girl-img.png" alt="Worker" width={448} height={500} className="max-w-md w-full object-cover h-auto" />
        </div>
      </div>
    </section>
  );
}
