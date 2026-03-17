import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-white">
      <div className="text-center gap-4">
        <div className="flex-shrink-0 text-center pb-8 pt-8 gap-2">
          <Image src="/img/logo.png" alt="Quick Helping Hand Logo" width={120} height={64} className="w-auto m-auto h-16" />
        </div>
        <p className="text-black pt-4 pb-4 border-t border-gray-200 text-sm">
          © 2026 Quick Helping Hand. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
