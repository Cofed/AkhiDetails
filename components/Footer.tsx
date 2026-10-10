export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040507]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-[#8a939e] md:flex-row md:items-center md:justify-between md:px-10">
        <div>AKHI DETAILS • Las Vegas, Nevada</div>
        <div className="flex items-center gap-4">
          <a href="tel:7253151011">725-315-1011</a>
          <a href="mailto:akhiammar7@gmail.com">akhiammar7@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
