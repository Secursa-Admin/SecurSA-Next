import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* Navigation */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="SecurSA Logo" width={160} height={40} />
        </div>
        <nav className="flex gap-6 text-[#00205B] font-medium text-sm">
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">Login</a>
          <a href="#" className="hover:underline">Ask Surelock</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-5xl font-bold text-[#00205B] leading-tight mb-4">
              Security quotes on alarms, reaction, and guarding — quick and easy.
            </h1>
            <p className="text-lg text-[#00205B] mb-6">
              Whether it’s your home, your business, or your granny’s spaza shop — we’ll connect you to trusted, <span style={{ color: '#84BD00', fontWeight: 'bold' }}>PSIRA-registered security companies</span> in less time than it takes to pour a Brannas & Coke — or crack open a Black Label.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {["Alarm Systems", "Armed Response", "Guarding", "CCTV", "Off-Site Monitoring"].map((label, i) => (
                <button key={i} className="bg-[#00205B] text-white py-3 px-4 rounded-2xl shadow">
                  {label}
                </button>
              ))}
              <button className="bg-[#84BD00] text-white py-3 px-4 rounded-2xl shadow col-span-2 sm:col-span-1">
                Training Centre
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/surelock-mascot.png"
              alt="Surelock Mascot"
              width={360}
              height={360}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Why Use Section */}
      <section className="bg-[#F9FAFB] px-8 pt-4 pb-12">
        <h2 className="text-3xl font-bold text-[#00205B] mb-6">Why Use SecurSA?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          {[
            ["No shady operators allowed.", "We only list PSIRA-registered pros. No cowboys, no chancers."],
            ["No pushy sales calls. Ever.", "You're in control — you pick who contacts you."],
            ["No spam, no nonsense.", "Your details are protected tighter than a vault at SecurBank."],
            ["It’s 100% free for consumers.", "Quotes, connections, comparisons — no fees, no tricks."],
            ["Only verified, vetted providers.", "Like a bouncer at the digital door. No ID? No entry."],
            ["Quotes in under 2 minutes.", "Faster than boiling your kettle — even on load shedding backup."],
            ["Locally matched, nationwide reach.", "From Cape Town to Kuruman — we’ll find you the right fit."],
            ["No obligation. No contracts.", "Browse, compare, walk away. We won’t sulk."],
            ["Built for South Africans, by South Africans.", "We get the risks. We’ve lived them. And we built a solution that works."],
            ["💬 Ask Surelock", "Your friendly guide to smart security choices."]
          ].map(([title, line], i) => (
            <div key={i} className="flex items-start">
              <span className="text-[#84BD00] text-xl mr-2">🔐</span>
              <div>
                <p className="text-[#00205B] font-medium">{title}</p>
                <p className="text-[#00205B] italic">{line}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
