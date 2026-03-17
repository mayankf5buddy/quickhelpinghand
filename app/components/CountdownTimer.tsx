"use client";

import { Fragment, useEffect, useState } from "react";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const target = Date.now() + 7 * 24 * 60 * 60 * 1000 + 18 * 60 * 60 * 1000 + 30 * 60 * 1000 + 15 * 1000;

    const tick = () => {
      const distance = target - Date.now();
      if (distance < 0) { setExpired(true); return; }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const units = timeLeft
    ? [
      { label: "Days", value: pad(timeLeft.days) },
      { label: "Hours", value: pad(timeLeft.hours) },
      { label: "Minutes", value: pad(timeLeft.minutes) },
      { label: "Seconds", value: pad(timeLeft.seconds) },
    ]
    : [];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#023a78] mb-8">Early Provider Access Ends in</h2>

        {expired ? (
          <p className="text-4xl font-bold text-[#f97316]">EXPIRED</p>
        ) : (
          <div id="countdown" className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {units.map((u, i) => (
              <Fragment key={u.label}>
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-7xl font-bold text-[#023a78]">{u.value}</span>
                  <span className="text-xs text-brand-orange md:text-[16px] font-normal  mt-2">{u.label}</span>
                </div>
                {i < units.length - 1 && (
                  <div className="text-2xl md:text-5xl  font-bold text-[#023a78]  mt-1 md:mt-2">:</div>
                )}
              </Fragment>
            ))}
          </div>
        )}

        <p className="text-1xl md:text-3xl text-[#023a78] font-bold">
          After launch, provider listings will cost <span className="text-[#f97316] text-2xl md:text-[40px] font-bold">$25.</span>
        </p>
      </div>
    </section>
  );
}
