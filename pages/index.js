import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <section className="px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold text-[#00205B] leading-tight mb-4">
              Security quotes on alarms, reaction, and guarding — quick and easy.
            </h1>
            <p className="text-lg text-[#00205B] mb-8">
              Whether it’s your home, your business, or your granny’s spaza shop — we’ll connect you to trusted, <span style={{ color: '#84BD00', fontWeight: 'bold' }}>PSIRA-registered security companies</span> in less time than it takes to pour a Brannas & Coke — or crack open a Black Label.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {["Alarm Systems", "Armed Response", "Guarding", "CCTV", "Off-Site Monitoring"].map((label, i) => (
                <button key={i} className="bg-[#00205B] text-white py-3 px-4 rounded-2xl shadow">
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/surelock-mascot.png"
              alt="Surelock Mascot"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] px-8 py-12">
        <h2 className="text-3xl font-bold text-[#00205B] mb-6">Why Use SecurSA?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            ["No shady operators allowed.", "We only list PSIRA-registered pros. No cowboys, no chancers."],
            ["No pushy sales calls. Ever.", "You're in control — you pick who contacts you."],
            ["No spam, no nonsense.", "Your details are protected tighter than a vault at SecurBank."],
            ["It’s 100% free for consumers.", "Quotes, connections, comparisons — no fees, no tricks."],
            ["Only verified, vetted providers.", "Like a bouncer at the digital door. No ID? No entry."],
            ["Quotes in under 2 minutes.", "Faster than boiling your kettle — even on load shedding backup 🔌😅"],
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
