"use client";

import { useState } from "react";
import { contact } from "@/content/contact";
import { Eyebrow } from "./section";

const inputBase =
  "mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/40 focus:border-oxblood";
const labelBase = "block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft/60";

export function ContactForm() {
  const { form } = contact;
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="start" className="scroll-mt-24 border-b border-hairline bg-paper px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <Eyebrow>{form.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
              {form.heading}
            </h2>
            <p className="mt-6 leading-relaxed text-ink-soft">
              A short message is enough — tell Dr. Tariq who you are and what you have in mind.
            </p>
          </div>
          <form
            className="md:col-span-8"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={labelBase} htmlFor="contact-name">
                  {form.fields.name.label}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  placeholder={form.fields.name.placeholder}
                  className={inputBase}
                />
              </div>
              <div>
                <label className={labelBase} htmlFor="contact-email">
                  {form.fields.email.label}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder={form.fields.email.placeholder}
                  className={inputBase}
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelBase} htmlFor="contact-organization">
                  {form.fields.organization.label}
                </label>
                <input
                  id="contact-organization"
                  name="organization"
                  placeholder={form.fields.organization.placeholder}
                  className={inputBase}
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelBase} htmlFor="contact-reason">
                  {form.fields.reason.label}
                </label>
                <select id="contact-reason" name="reason" className={inputBase}>
                  {form.fields.reason.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelBase} htmlFor="contact-message">
                  {form.fields.message.label}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder={form.fields.message.placeholder}
                  className={inputBase}
                />
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button
                type="submit"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-sm font-medium tracking-wide text-paper transition-all duration-300 hover:bg-oxblood"
              >
                {form.submitLabel}
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
              <p className="text-xs text-ink-soft/50">{form.privacy}</p>
            </div>
            {submitted && (
              <p className="mt-6 rounded-xl border border-oxblood/30 bg-cream p-4 text-sm leading-relaxed text-ink-soft">
                Thank you — this preview does not send email yet. {form.note}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
