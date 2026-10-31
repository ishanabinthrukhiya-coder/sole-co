"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you for contacting SOLE & CO.!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <main className="min-h-screen bg-[#F7F2EA] px-5 py-16 text-[#292421] md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#702C3B]">
            GET IN TOUCH
          </p>

          <h1 className="mt-4 font-serif text-5xl md:text-6xl">
            We'd love to hear from you.
          </h1>

          <p className="mt-5 text-sm leading-7 text-[#81756D]">
            Have a question about a sneaker or your order?
            Send us a message and we'll be happy to help.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          
          <div className="bg-[#702C3B] p-8 text-white md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[#E8DED3]">
              SOLE & CO.
            </p>

            <h2 className="mt-5 font-serif text-3xl">
              Let's talk sneakers.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#F0E4E2]">
              We're here to help you find your perfect pair and answer
              your questions.
            </p>

            <div className="mt-10 border-t border-white/20 pt-6">
              <p className="text-xs uppercase tracking-widest text-[#E8DED3]">
                Customer Support
              </p>

              <p className="mt-3 text-sm">
                Use the contact form to send us your enquiry.
              </p>
            </div>

            <div className="mt-7 border-t border-white/20 pt-6">
              <p className="text-xs uppercase tracking-widest text-[#E8DED3]">
                Our Promise
              </p>

              <p className="mt-3 text-sm leading-6">
                Every step matters. We're happy to help.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 border border-[#E8DED3] bg-[#FBF8F3] p-6 md:p-10"
          >
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest">
                Your name
              </label>

              <input
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                placeholder="Enter your name"
                className="w-full border border-[#E8DED3] bg-transparent px-4 py-3 text-sm outline-none focus:border-[#702C3B]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest">
                Email address
              </label>

              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="you@example.com"
                className="w-full border border-[#E8DED3] bg-transparent px-4 py-3 text-sm outline-none focus:border-[#702C3B]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest">
                Subject
              </label>

             <input
  type="text"
  required
  value={form.subject}
  onChange={(e) =>
    setForm({ ...form, subject: e.target.value })
  }
  placeholder="How can we help?"
  className="w-full border border-[#E8DED3] bg-transparent px-4 py-3 text-sm outline-none focus:border-[#702C3B]"
/>
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest">
                Message
              </label>

              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Write your message..."
                className="w-full resize-y border border-[#E8DED3] bg-transparent px-4 py-3 text-sm outline-none focus:border-[#702C3B]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#702C3B] px-7 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#57212E]"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}