"use client";

import { useState, useEffect, useRef } from "react";

const SUB_SERVICES = ["Repair", "Installation", "Maintenance", "Consultation", "Emergency Service"];

export default function RegisterForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const toggle = (val: string) =>
    setSelected((prev) => prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]);

  const toggleAll = () =>
    setSelected(selected.length === SUB_SERVICES.length ? [] : [...SUB_SERVICES]);

  const remove = (val: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected((prev) => prev.filter((v) => v !== val));
  };

  return (
    <section id="register" className="py-20 form-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Pre-Registration</h2>
          <p className="text-white max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac nisl hendrerit, molestie odio et, venenatis nulla.
          </p>
        </div>

        <form>
          <div className="p-8 rounded-2xl border border-white/70 mb-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
              <input type="text" placeholder="Full Name*" required className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f97316]" />
              <input type="text" placeholder="Last Name*" required className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f97316]" />
              <input type="tel" placeholder="Phone*" required className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f97316]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
              <input type="email" placeholder="Email*" required className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f97316]" />
              <input type="tel" placeholder="Work Phone Number" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f97316]" />
              <input type="text" placeholder="Address" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f97316]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <select className="w-full px-4 py-3 rounded-lg bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f97316]">
                <option>Country</option>
                <option>United States</option>
                <option>Canada</option>
              </select>
              <select className="w-full px-4 py-3 rounded-lg bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f97316]">
                <option>State</option>
                <option>California</option>
                <option>New York</option>
                <option>Texas</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <select className="w-full px-4 py-3 rounded-lg bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f97316]">
                <option>City</option>
                <option>Los Angeles</option>
                <option>New York</option>
                <option>Chicago</option>
              </select>
              <input type="text" placeholder="Zipcode" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f97316]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <select className="w-full px-4 py-3 rounded-lg bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f97316]">
                <option>Service list</option>
                <option>Plumbing</option>
                <option>Electrical</option>
              </select>

              {/* Multiselect */}
              <div className="multiselect-dropdown" id="subServiceMultiselect" ref={dropdownRef}>
                <div
                  onClick={() => setIsOpen((o) => !o)}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f97316] cursor-pointer flex items-center justify-between min-h-[52px]"
                >
                  <div className="flex flex-wrap gap-2 items-center">
                    {selected.length === 0 ? (
                      <span className="text-gray-400">Select sub services...</span>
                    ) : selected.length <= 3 ? (
                      selected.map((item) => (
                        <span key={item} className="bg-[#f97316] text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                          {item}
                          <button type="button" onClick={(e) => remove(item, e)} className="hover:text-white font-bold">×</button>
                        </span>
                      ))
                    ) : (
                      <span className="bg-[#f97316] text-white px-2 py-1 rounded text-sm">{selected.length} selected</span>
                    )}
                  </div>
                  <svg className={`w-5 h-5 text-gray-400 transform transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <div
                  className={`multiselect-options absolute w-full mt-2 bg-white rounded-lg shadow-lg z-50 ${isOpen ? "open" : ""}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-2">
                    <div className="flex items-center px-3 py-2 hover:bg-gray-50 rounded cursor-pointer" onClick={toggleAll}>
                      <input type="checkbox" readOnly checked={selected.length === SUB_SERVICES.length} className="w-4 h-4 accent-[#f97316]" />
                      <label className="ml-3 text-gray-700 cursor-pointer flex-1 font-medium">Select All</label>
                    </div>
                    <div className="border-t border-gray-100 my-2" />
                    {SUB_SERVICES.map((svc) => (
                      <div key={svc} className="flex items-center px-3 py-2 hover:bg-gray-50 rounded cursor-pointer" onClick={() => toggle(svc)}>
                        <input type="checkbox" readOnly checked={selected.includes(svc)} className="w-4 h-4 accent-[#f97316]" />
                        <label className="ml-3 text-gray-700 cursor-pointer flex-1">{svc}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <input type="hidden" name="sub_services" value={selected.join(",")} />
              </div>
            </div>

            <textarea placeholder="Message" rows={3} className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f97316]" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <label className="flex items-center text-md text-white cursor-pointer">
              <input type="checkbox" className="mr-2 w-4 h-4 accent-[#f97316]" />
              I agree to the Terms &amp; Conditions &amp; Privacy Policy
            </label>
            <div className="flex text-[24px] md:flex-row items-center gap-3">
              <button type="button" className="font-bold text-white uppercase tracking-wider hover:text-[#f97316]">
                Secure Your Listing
              </button>
              <span className="text-gray-400">|</span>
              <span className="font-bold text-white">
                <span className="text-[#f97316]">$5</span> LIFETIME LISTING
              </span>
            </div>
          </div>

          <div className="mt-8 text-center text-white">Thank you for being a part of our community!</div>

          <div className="mt-8 text-center">
            <button type="submit" className="bg-[#f97316] text-white text-lg font-bold px-10 py-3 rounded-full shadow-lg hover:bg-orange-600 hover:scale-105 transition transform w-full md:w-auto">
              RESERVE YOUR SPOT NOW
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
