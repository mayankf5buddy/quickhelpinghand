import Link from "next/link";

export default function HeroSection() {
  return (
    <header className="hero-bg text-white py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Become One of the First <br /> Service Providers in Your City
        </h1>
        <p className="text-lg text-blue-100 font-light mb-8 max-w-7xl mx-auto">
          We are launching QuickHelpingHand, a platform that connects customers with trusted local professionals.{" "}
          <span className="block mt-2 font-semibold text-white">
            Only 5 providers per service in each city will be accepted during early access.
          </span>
        </p>
        <div className="mb-8">
          <span className="border-b-2 text-sm md:text-[18px] leading-[30px] md:leading-normal border-white border-solid p-1 uppercase font-bold">
            Early Access Price Lifetime Listing for Just $5
          </span>
        </div>
        <Link
          href="#register"
          className="inline-block border border-white bg-[#f97316] text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:bg-orange-600 hover:scale-105 transition transform"
        >
          RESERVE YOUR SPOT NOW
        </Link>
      </div>
    </header>
  );
}
