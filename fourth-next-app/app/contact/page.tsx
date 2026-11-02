"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-200 selection:bg-purple-500 selection:text-white">
      
      {/* Header Section with Ambient Glow Effect */}
      <section className="relative overflow-hidden bg-neutral-900/60 border-b border-neutral-800 py-24 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.06)_0,transparent_100%)] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/40 border border-purple-800/30 px-3 py-1 rounded-full">
            Connect Matrix
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-4 mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent tracking-tight">
            Contact Operations
          </h1>
          <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Have questions about premium hardware verification, enterprise scaling logistics, or order tracking? Drop us a signal below.
          </p>
        </div>
      </section>

      {/* Main Grid Content Matrix */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Corporate Info Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-black text-white tracking-tight">
              Direct Channels
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Skip the forms entirely if you require immediate high-priority system support. Our active helpdesks operate uninterrupted.
            </p>
          </div>

          <div className="space-y-4">
            {/* Info Card 1 */}
            <div className="p-5 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl flex items-start gap-4">
              <div className="text-2xl p-2 bg-neutral-950 border border-neutral-800 rounded-xl">
                ✉️
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-300">Secure Mail Server</h4>
                <p className="text-xs text-neutral-500 mt-0.5">Response within 12 hours</p>
                <p className="text-sm text-purple-400 font-medium mt-2">hello@product.id</p>
              </div>
            </div>

            {/* Info Card 2 */}
            <div className="p-5 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl flex items-start gap-4">
              <div className="text-2xl p-2 bg-neutral-950 border border-neutral-800 rounded-xl">
                🏢
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-300">Corporate HQ Location</h4>
                <p className="text-xs text-neutral-500 mt-0.5">In-person infrastructure hub</p>
                <p className="text-sm text-neutral-400 font-medium mt-2 leading-relaxed">
                  Korangi Industrial Area,<br />
                  Karachi, Pakistan
                </p>
              </div>
            </div>

            {/* Info Card 3 */}
            <div className="p-5 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl flex items-start gap-4">
              <div className="text-2xl p-2 bg-neutral-950 border border-neutral-800 rounded-xl">
                ⏱️
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-300">Operational Shifts</h4>
                <p className="text-xs text-neutral-500 mt-0.5">Automated queue processing</p>
                <p className="text-sm text-neutral-400 font-medium mt-2">
                  Monday – Friday: 24 Hours Available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Dark Interactive Form Panel */}
        <div className="lg:col-span-7 bg-neutral-900/30 border border-neutral-800/80 rounded-3xl p-6 md:p-10 backdrop-blur-sm shadow-2xl relative">
          <div className="absolute top-0 right-10 w-72 h-72 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

          <form className="space-y-6 relative z-10">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-neutral-950 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-purple-500/50 transition-colors duration-200"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-neutral-950 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-purple-500/50 transition-colors duration-200"
                  required
                />
              </div>
            </div>

            {/* Row 2: Subject */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Inquiry Topic
              </label>
              <input
                type="text"
                placeholder="Hardware procurement assistance, warranty claims..."
                className="w-full bg-neutral-950 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-purple-500/50 transition-colors duration-200"
                required
              />
            </div>

            {/* Row 3: Message Textarea */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Detailed Message Payload
              </label>
              <textarea
                rows={5}
                placeholder="Type out your technical questions or logistics requirements here..."
                className="w-full bg-neutral-950 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-purple-500/50 transition-colors duration-200 resize-none"
                required
              />
            </div>

            {/* Submit Action Button */}
            <button
              type="submit"
              onClick={(e) => e.preventDefault()}
              className="w-full bg-white hover:bg-neutral-200 text-neutral-950 font-bold py-4 rounded-xl shadow-lg transition-all duration-200 text-sm tracking-wide active:scale-[0.99]"
            >
              Transmit Signal
            </button>
          </form>
        </div>

      </section>
    </div>
  );
}
