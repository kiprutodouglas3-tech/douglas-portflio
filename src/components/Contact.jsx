import { useState } from "react";
import {
  Mail,
  MessageCircle,
  Send,
  User,
  AtSign,
  LoaderCircle,
} from "lucide-react";

function Contact() {
  const [sending, setSending] = useState(false);

  function handleSubmit() {
    setSending(true);
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Let's build something{" "}
            <span className="gradient-text">great.</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            Have a website idea, project or coding problem? Send me a
            message and let's discuss it.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-5">
            <a
              href="mailto:kiprutodouglas3@gmail.com"
              className="card-hover block rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <Mail className="text-cyan-400" size={27} />

              <h3 className="mt-4 font-bold">Email</h3>

              <p className="mt-2 text-sm text-slate-400">
                your-email@example.com
              </p>
            </a>

            <a
              href="https://wa.me/254746621875"
              target="_blank"
              rel="noreferrer"
              className="card-hover block rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <MessageCircle className="text-cyan-400" size={27} />

              <h3 className="mt-4 font-bold">WhatsApp</h3>

              <p className="mt-2 text-sm text-slate-400">
                Chat with me directly
              </p>
            </a>
          </div>

          <form
            action="https://formsubmit.co/kiprutodouglas3@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Your Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-11 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Email
                </label>

                <div className="relative">
                  <AtSign
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-11 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                required
                placeholder="What would you like to discuss?"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Message
              </label>

              <textarea
                name="message"
                required
                rows="6"
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {sending ? (
                <>
                  <LoaderCircle size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;