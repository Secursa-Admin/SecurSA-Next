
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Header */}
      <header className="bg-white py-3 px-6 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="w-56">
            <Image src="/logo.png" alt="SecurSA Logo" width={220} height={60} />
          </div>
          <nav className="flex items-center space-x-8 text-[#00205B] font-medium text-sm">
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Login</a>
            <a href="#" className="hover:underline">Ask Surelock</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#f9fafc] py-10 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl font-bold leading-tight mb-6 text-[#00205B] text-center md:text-left max-w-5xl mx-auto">
            Security quotes on alarms, reaction, and guarding — quick and easy.
          </h1>
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-lg mb-6 text-[#00205B]">
                Whether it's your home, your business, or your granny's spaza shop — we'll connect you to trusted, <span className="text-[#84BD00] font-semibold uppercase">PSIRA REGISTERED SECURITY COMPANIES</span> in less time than it takes to pour a Brannas & Coke — or crack open a Black Label.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {["Alarm Systems", "Armed Response", "Guarding"].map((label, i) => (
                  <button key={i} className="bg-[#00205B] text-white py-3 px-4 rounded-lg shadow-md">
                    {label}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {["CCTV", "Off-Site Monitoring"].map((label, i) => (
                  <button key={i} className="bg-[#00205B] text-white py-3 px-4 rounded-lg shadow-md">
                    {label}
                  </button>
                ))}
                <button className="bg-[#84BD00] text-white py-3 px-4 rounded-lg shadow-md">
                  Training Centre
                </button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 flex justify-center">
              <Image src="/surelock-mascot.png" alt="Surelock Mascot" width={360} height={360} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Section */}
      <section className="py-10 px-6 bg-gradient-to-b from-white to-[#f5f7fa]">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#00205B]">Why Use SecurSA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {[
              ["No shady operators allowed.", "We only list PSIRA-registered pros. No cowboys, no chancers."],
              ["No pushy sales calls.", "You're in control — you pick who contacts you."],
              ["No spam, no nonsense.", "Your details are protected tighter than a vault at SecurBank."],
              ["100% free for consumers.", "Quotes, comparisons — no fees, no tricks."],
              ["Only verified, vetted providers.", "No ID? No entry. Every company is validated."],
              ["Quotes in under 2 minutes.", "Faster than boiling a kettle — even on load shedding."],
              ["Locally matched, nationally connected.", "From Cape Town to Kuruman — we’ve got you."],
              ["No obligation, no contracts.", "Browse, compare, and walk away if you want."],
              ["Built for South Africans, by South Africans.", "We know the risks. We live them too."],
              ["Ask Surelock", "Your friendly guide to smart security choices."]
            ].map(([title, text], i) => (
              <div key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 mr-3 text-[#84BD00] text-xl font-bold">🔐</div>
                <div>
                  <h3 className="text-lg font-bold text-[#00205B]">{title}</h3>
                  <p className="italic text-[#00205B] opacity-90">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">&copy; 2023 SecurSA. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-[#00205B]">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-[#00205B]">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-[#00205B]">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
