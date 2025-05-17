import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold text-[#00205B] leading-tight mb-4">
              Security quotes on alarms, reaction, and guarding — quick and easy for your home or business.
            </h1>
            <p className="text-lg text-[#00205B] mb-8">
              In under 2 minutes, we’ll show you the average armed response cost is R450/month.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              <button className="bg-[#00205B] text-white py-3 px-4 rounded-2xl shadow">Alarm Systems</button>
              <button className="bg-[#00205B] text-white py-3 px-4 rounded-2xl shadow">Armed Response</button>
              <button className="bg-[#00205B] text-white py-3 px-4 rounded-2xl shadow">Guarding</button>
              <button className="bg-[#00205B] text-white py-3 px-4 rounded-2xl shadow">CCTV</button>
              <button className="bg-[#00205B] text-white py-3 px-4 rounded-2xl shadow">Off-Site Monitoring</button>
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
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-start">
              <span className="text-[#84BD00] text-xl mr-2">🔐</span>
              <div>
                <p className="text-[#00205B] font-medium">Reason Title {i + 1}</p>
                <p className="text-[#00205B] italic">Supporting line for reason {i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
