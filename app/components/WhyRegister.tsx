const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#f97316] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function WhyRegister() {
  return (
    <section className="py-20 mb-20 bg-[#f9feff]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#023a78] text-center mb-12">Why Register Now?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-[#023a78] mb-4">
              Limited Spots Per City To maintain quality and ensure fair exposure:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-600">Only 5 service providers will be listed per service in each city.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-600">Once these spots are filled, new providers will need to wait for availability.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-[#023a78] mb-4">Lifetime Listing for Just $5</h3>
            <ul className="space-y-4">
              {[
                "Early providers get a lifetime listing for a one-time fee of $5.",
                "No monthly subscriptions.",
                "No hidden fees.",
                "Just secure your spot before the platform launches.",
              ].map((text) => (
                <li key={text} className="flex items-start">
                  <CheckIcon />
                  <span className="text-gray-600">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
