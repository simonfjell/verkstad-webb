        {/* PNO Sverige AB */}
        <div className="transition duration-300 grayscale hover:grayscale-0 flex flex-col items-center justify-center" style={{ width: '140px', minHeight: '140px' }}>
          <img
            src="/partners/pno.png"
            alt="PNO Sverige AB"
            className="w-32 opacity-80 hover:opacity-100"
          />
        </div>
export default function ServicePartners() {
  return (
    <section className="py-16 bg-[#1b1b1b] text-center">
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-10">
        Våra servicepartners
      </h2>

      <div className="flex flex-row items-end justify-center gap-10 px-6" style={{ flexWrap: 'nowrap', minHeight: '140px' }}>
        {/* PNO Sverige AB */}
        <div className="transition duration-300 grayscale hover:grayscale-0 flex flex-col items-center justify-end" style={{ width: '140px', minHeight: '140px' }}>
          <img
            src="/partners/pno.png"
            alt="PNO Sverige AB"
            className="h-32 w-auto opacity-80 hover:opacity-100 object-contain"
          />
        </div>
        {/* Krone Trailers */}
        <div className="transition duration-300 grayscale hover:grayscale-0 flex flex-col items-center justify-end" style={{ width: '140px', minHeight: '140px' }}>
          <img
            src="/partners/krone.png"
            alt="Krone Trailers"
            className="h-32 w-auto opacity-80 hover:opacity-100 object-contain"
          />
        </div>
        {/* Kraker */}
        <div className="transition duration-300 grayscale hover:grayscale-0 flex flex-col items-center justify-end" style={{ width: '140px', minHeight: '140px' }}>
          <img
            src="/partners/kraker.png"
            alt="Kraker"
            className="h-32 w-auto opacity-80 hover:opacity-100 object-contain"
          />
        </div>
        {/* Rosenlunds Åkeri */}
        <div className="flex flex-col items-center justify-end" style={{ width: '140px', minHeight: '140px' }}>
          <img
            src="/partners/rosenlundsakeri.png"
            alt="Rosenlunds Åkeri"
            className="h-32 w-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}
