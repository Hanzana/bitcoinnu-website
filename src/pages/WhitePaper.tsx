// src/pages/WhitePaper.tsx
import React from "react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const WhitePaper: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">White Paper</h1>
        <p className="mb-4">
          Download the BitcoinNu white paper below.
        </p>

        <div className="mt-6">
          <a
            href="/bitcoinnu-website//Whitepaper.pdf"
            download
            className="inline-block px-4 py-2 rounded shadow bg-blue-600 text-white hover:bg-blue-700"
            aria-label="Download BitcoinNu Whitepaper"
          >
            Download White Paper (PDF)
          </a>
        </div>

        <div className="mt-6">
          <Link to="/" className="text-sm underline">
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default WhitePaper;
