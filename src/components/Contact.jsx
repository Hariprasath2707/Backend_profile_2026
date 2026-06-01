import { useState } from 'react'
import { profile, socials, contact } from '../data/content'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }

    // No Formspree endpoint set yet -> fall back to the visitor's email client.
    if (!contact.formEndpoint) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }

    try {
      setStatus('sending')
      const res = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const field =
    'w-full bg-surface/40 border border-line rounded-xl px-4 py-3 text-paper placeholder:text-muted/70 focus:outline-none focus:border-accent transition-colors'

  return (
    <section id="contact" className="px-6 py-24 sm:py-32 bg-surface/30 border-t border-line scroll-mt-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">05 · Contact</span>
        <h2 className="reveal font-display text-4xl sm:text-6xl lg:text-7xl tracking-tightest mt-6 leading-[0.95]">
          Let's build
          <br />
          something good.
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="reveal inline-block mt-8 font-display text-2xl sm:text-3xl tracking-tightest text-accent hover:text-paper transition-colors break-all"
        >
          {profile.email}
        </a>
        <p className="reveal text-muted mt-2">{profile.location}</p>

        {/* Form (centered) */}
        <div className="reveal mt-12 text-left">
          {status === 'success' ? (
            <div className="border border-accent/40 rounded-2xl p-8 text-center bg-surface/40">
              <div className="font-display text-2xl tracking-tightest text-accent">
                Message sent
              </div>
              <p className="text-muted mt-3">
                Thanks for reaching out - I'll get back to you soon.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 font-mono text-xs uppercase tracking-widest border border-line rounded-full px-5 py-2.5 text-muted hover:border-accent hover:text-accent transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={update}
                    placeholder="Your name"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                    placeholder="you@example.com"
                    className={field}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={update}
                  placeholder="Tell me about the role or project..."
                  className={`${field} resize-none`}
                />
              </div>

              {status === 'error' && (
                <p className="font-mono text-xs text-accent text-center">
                  Please fill in all fields with a valid email, then try again.
                </p>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto font-mono text-xs uppercase tracking-widest bg-accent text-ink px-8 py-3.5 rounded-full hover:bg-paper transition-colors disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending...' : 'Send message →'}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Socials (centered) */}
        <div className="reveal mt-12 flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-widest border border-line rounded-full px-5 py-2.5 text-muted hover:border-accent hover:text-accent transition-colors"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
