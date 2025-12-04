export default function ThreeFeatures() {
  return (
    <section className="py-16 bg-[#1b1b1b] text-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

        <div className="p-6 bg-[#222222] rounded-lg shadow-lg shadow-black/30">
          <h3 className="text-xl font-semibold mb-2">Pålitlig service</h3>
          <p className="text-gray-300 text-sm">
            Vi utför noggranna kontroller och reparationer för trygg körning.
          </p>
        </div>

        <div className="p-6 bg-[#222222] rounded-lg shadow-lg shadow-black/30">
          <h3 className="text-xl font-semibold mb-2">Snabba reparationer</h3>
          <p className="text-gray-300 text-sm">
            Effektiv felsökning och åtgärd så att du snabbt är på vägen igen.
          </p>
        </div>

        <div className="p-6 bg-[#222222] rounded-lg shadow-lg shadow-black/30">
          <h3 className="text-xl font-semibold mb-2">Många års erfarenhet</h3>
          <p className="text-gray-300 text-sm">
            Specialister på släp och trailers med lång branscherfarenhet.
          </p>
        </div>

      </div>
    </section>
  );
}
