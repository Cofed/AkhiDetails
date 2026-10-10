export default function Footer() {
  return (
    <footer className="border-t border-[#d4af37]/10 bg-[#0f1420]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          <div>
            <p className="text-[0.75rem] uppercase tracking-[0.15em] text-[#8a939e] mb-2">Location</p>
            <p className="text-white font-semibold">Las Vegas, Nevada</p>
          </div>
          <div>
            <p className="text-[0.75rem] uppercase tracking-[0.15em] text-[#8a939e] mb-2">Phone</p>
            <a href="tel:7253151011" className="text-white font-semibold hover:text-[#e8c547] transition">
              725-315-1011
            </a>
          </div>
          <div>
            <p className="text-[0.75rem] uppercase tracking-[0.15em] text-[#8a939e] mb-2">Email</p>
            <a href="mailto:akhiammar7@gmail.com" className="text-white font-semibold hover:text-[#e8c547] transition">
              akhiammar7@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-[#d4af37]/10 pt-8 flex flex-col md:flex-row items-center justify-between text-[0.75rem] text-[#8a939e] uppercase tracking-[0.1em]">
          <p>© 2024 AKHI DETAILS. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#e8c547] transition">Privacy</a>
            <a href="#" className="hover:text-[#e8c547] transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
