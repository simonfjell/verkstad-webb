"use client";

import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-gray-300 py-12 mt-20 border-t border-gray-700/40">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Kontaktinfo */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Kontakt</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaPhone className="text-blue-500" />
              <span>036-XX XX XXX</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <span>info@rosenlundsverkstad.se</span>
            </li>
            <li className="flex items-center gap-3">
              <FaClock className="text-blue-500" />
              <span>Vardagar 07:00 – 16:00</span>
            </li>
          </ul>
        </div>

        {/* Adress */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Hitta hit</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Adressvägen 12, 554 54 Jönköping</span>
            </li>
          </ul>
        </div>

        {/* Karta */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Karta</h3>
          <iframe
            className="w-full h-40 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2134.3814!2d14.1618!3d57.7817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTfCsDQ2JzU0LjEiTiAxNMKwMDknNTAuNCJF!5e0!3m2!1ssv!2sse!4v0000000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} Rosenlunds Verkstads AB – Alla rättigheter reserverade.
      </div>
    </footer>
  );
}
