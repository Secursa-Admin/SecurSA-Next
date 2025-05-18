
import React from "react";
import Image from "next/image";

const PadlockIcon = () => (
  <div
    className="inline-block w-6 h-6 mr-3"
    style={{
      backgroundColor: "#84BD00",
      WebkitMask: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22currentColor%22><rect x=%223%22 y=%2211%22 width=%2218%22 height=%2211%22 rx=%222%22 ry=%222%22/><path d=%22M7 11V7a5 5 0 0 1 10 0v4%22/></svg>') no-repeat center",
      mask: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22currentColor%22><rect x=%223%22 y=%2211%22 width=%2218%22 height=%2211%22 rx=%222%22 ry=%222%22/><path d=%22M7 11V7a5 5 0 0 1 10 0v4%22/></svg>') no-repeat center"
    }}
  />
);

export default function Home() {
  return (
    <main className="bg-white">
      <header className="bg-white px-6 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-[90px]">
          <div className="flex items-center h-full">
            <Image src="/logo.png" alt="SecurSA Logo" height={70} width={240} />
          </div>
          <nav className="flex items-center space-x-10 text-[#00205B] font-semibold text-base">
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Login</a>
            <a href="#" className="hover:underline">Ask Surelock</a>
          </nav>
        </div>
      </header>

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
                <PadlockIcon />
                <div>
                  <h3 className="text-lg font-bold text-[#00205B]">{title}</h3>
                  <p className="italic text-[#00205B] opacity-90">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* 🔽 ABOUT US SECTION */}
<section id="about" className="py-16 px-6 bg-white border-t border-gray-200">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-[#00205B] mb-6">About Us</h2>
    
    <p className="text-lg text-[#00205B] mb-4">
      <span className="text-[#84BD00] font-bold">SecurSA</span> is South Africa’s first security marketplace where consumers and companies connect in under 2 minutes — safely, transparently, and without the sales fluff.
    </p>

    <p className="text-lg text-[#00205B] mb-4">
      We built this platform because we’ve lived through the real risks. From burglaries to break-ins, from dodgy security promises to fly-by-night operators — we’ve seen it all.
    </p>

    <p className="text-lg text-[#00205B] mb-6">
      That’s why we’ve created a smarter way.
    </p>

    <h3 className="text-xl font-bold text-[#84BD00] mb-2">Built by Locals, for Locals</h3>
    <p className="text-lg text-[#00205B] mb-4">
      SecurSA is 100% South African, proudly female-owned, and run by a team with deep roots in the security industry. We know the dangers you face. More importantly — we know how to match you with real solutions that work.
    </p>

    <h3 className="text-xl font-bold text-[#84BD00] mb-2">How it Works</h3>
    <p className="text-lg text-[#00205B] mb-4">
      Whether you’re looking for an alarm, armed response, guarding, CCTV, offsite monitoring, or PSIRA-accredited training — we’ve got you covered. Just pick your service, compare real quotes from verified providers, and take back control of your security.
    </p>
    <p className="text-lg text-[#00205B] mb-6 italic">No chancers. No contracts. No pressure.</p>

    <h3 className="text-xl font-bold text-[#84BD00] mb-2">Our Mission</h3>
    <p className="text-lg text-[#00205B] mb-4">
      To empower every South African with access to quality, verified, and affordable security services — no matter where you live or what your budget is.
    </p>

    <h3 className="text-xl font-bold text-[#84BD00] mb-2">Our Vision</h3>
    <p className="text-lg text-[#00205B] mb-4">
      To become the go-to platform for South African security services — from spaza shops to suburbs, mines to malls.
    </p>

    <h3 className="text-xl font-bold text-[#84BD00] mb-2">Why Trust Us?</h3>
    <ul className="text-left text-lg text-[#00205B] list-disc list-inside">
      <li className="mb-1">We verify every provider on the platform.</li>
      <li className="mb-1">We’re independent — we don’t push any brand or company.</li>
      <li className="mb-1">We’ve designed every feature with you, the South African consumer, in mind.</li>
    </ul>
  </div>
</section>

{/* 🔽 CONTACT US SECTION */}
<section id="contact" className="bg-white py-16 px-6 border-t border-gray-200">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-[#00205B] text-center mb-8 flex items-center justify-center">
      <svg className="w-8 h-8 text-[#84BD00] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V4a1 1 0 011-1h3m4 0h10a1 1 0 011 1v3M3 7h18M3 7v13a1 1 0 001 1h16a1 1 0 001-1V7M7 10h.01M7 14h.01M7 18h.01" />
      </svg>
      Contact Us
    </h2>

    <p className="text-center text-[#00205B] mb-12">
      No call centres. No fuss. Just reach out via email, WhatsApp, or the form below — and Surelock will take it from there.
    </p>

    <div className="grid md:grid-cols-2 gap-12">
      {/* Left: Contact Details */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-[#00205B] mb-2 flex items-center">
            <svg className="w-6 h-6 text-[#84BD00] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
            </svg>
            Email Us
          </h3>
          <p className="text-[#00205B]"><strong>Support:</strong> support@secursa.co.za</p>
          <p className="text-[#00205B]"><strong>Training:</strong> training@secursa.co.za</p>
          <p className="text-[#00205B]"><strong>Providers:</strong> partners@secursa.co.za</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#00205B] mb-2 flex items-center">
            <svg className="w-6 h-6 text-[#84BD00] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3 7v5h8v-5l3-7h2" />
            </svg>
            WhatsApp Support
          </h3>
          <a href="https://wa.me/27872505300" target="_blank" rel="noopener noreferrer" className="text-[#84BD00] underline">
            Click here to message us on WhatsApp
          </a>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#00205B] mb-2 flex items-center">
            <svg className="w-6 h-6 text-[#84BD00] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ask Surelock
          </h3>
          <p className="text-[#00205B]">Click the “Ask Surelock” button on the homepage — she’ll guide you in under 2 minutes.</p>
        </div>
      </div>

      {/* Right: Contact Form */}
      <form action="https://formsubmit.co/support@secursa.co.za" method="POST" className="bg-[#F9FAFB] p-6 rounded-xl shadow-lg space-y-4">
        {/* Hidden Config Fields */}
        <input type="hidden" name="_subject" value="New Contact Message from SecurSA Website" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />

        <div>
          <label className="block text-[#00205B] font-medium mb-1">Your Name</label>
          <input type="text" name="name" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#84BD00]" />
        </div>

        <div>
          <label className="block text-[#00205B] font-medium mb-1">Your Email</label>
          <input type="email" name="email" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#84BD00]" />
        </div>

        <div>
          <label className="block text-[#00205B] font-medium mb-1">Your Message</label>
          <textarea name="message" rows="5" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#84BD00]"></textarea>
        </div>

        <button type="submit" className="w-full bg-[#84BD00] text-white font-bold py-3 rounded-md hover:bg-[#76a900] transition duration-200">
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>

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
