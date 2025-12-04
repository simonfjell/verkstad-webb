  
export default function Hero() {
  return (
    <section
      className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Bakgrundsbild med blur */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(0.8px)",
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Din logga */}
        <img src="/logo.png" alt="Rosenlunds Verkstads AB" className="h-40 mb-4" />

        {/* Text */}
        <h1 className="text-white text-3xl font-bold mb-4">
          Service & reparation av släp och trailers
        </h1>

        {/* Knapp */}
        <a
          href="/tjanster"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg"
        >
          Visa tjänster
        </a>
      </div>
    </section>
  );
}
