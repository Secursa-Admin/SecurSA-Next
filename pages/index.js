
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

<section id="contact" className="bg-white py-16 px-6 border-t border-gray-200">
  <div className="max-w-6xl mx-auto text-[#00205B]">
    <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

    {/* Email */}
    <div className="flex items-start mb-6">
      <img src="/icon-envelope.svg" alt="Email Icon" className="w-6 h-6 mt-1 mr-3" />
      <div>
        <p className="font-bold">Email Us</p>
        <p><strong>Support:</strong> support@secursa.co.za</p>
        <p><strong>Training:</strong> training@secursa.co.za</p>
        <p><strong>Providers:</strong> partners@secursa.co.za</p>
      </div>
    </div>

    {/* WhatsApp */}
    <div className="flex items-start mb-6">
      <img src="/icon-whatsapp.svg" alt="WhatsApp Icon" className="w-6 h-6 mt-1 mr-3" />
      <div>
        <p className="font-bold">WhatsApp Support</p>
        <a href="https://wa.me/0000000000" className="text-[#84BD00] underline">
          Click here to message us on WhatsApp
        </a>
      </div>
    </div>

    {/* Ask Surelock */}
    <div className="flex items-start mb-10">
      <img src="/ask-surelock-icon.png" alt="Ask Surelock Icon" className="w-8 h-8 mr-3 rounded-full border border-[#00205B]" />
      <div>
        <p className="font-bold">Ask Surelock</p>
        <p className="italic text-sm">
          Click the “Ask Surelock” button on the homepage — she’ll guide you in under 2 minutes.
        </p>
      </div>
    </div>

    {/* Contact Form */}
    <form className="space-y-6" action="#" method="POST">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#00205B]">Full Name</label>
          <input type="text" name="name" id="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#00205B]">Email Address</label>
          <input type="email" name="email" id="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#00205B]">Message</label>
        <textarea name="message" id="message" rows="4" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
      </div>
      <div>
        <button type="submit" className="bg-[#00205B] text-white font-bold py-2 px-6 rounded hover:bg-[#001944]">
          Send Message
        </button>
      </div>
    </form>
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
