import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { profile, socials } from '../data/content'

// 🔑 Paste your EmailJS credentials here
const EMAILJS_SERVICE_ID  = 'service_l4ihwol'
const EMAILJS_TEMPLATE_ID = 'template_zp45c2a'
const EMAILJS_PUBLIC_KEY  = '3yRZ0o_lTpjg3S-w3'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (status === 'error') setStatus('idle')
  }

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg('Please fill in all fields before sending.')
      setStatus('error')
      return
    }
    if (!isValidEmail(form.email)) {
      setErrorMsg('Please enter a valid email address.')
      setStatus('error')
      return
    }

    try {
      setStatus('sending')
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setErrorMsg('Something went wrong. Please try again or email me directly.')
      setStatus('error')
    }
  }

  const field =
    'w-full bg-surface/40 border border-line rounded-xl px-4 py-3 text-paper placeholder:text-muted/70 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all'

  return (
    <section id="contact" className="px-6 py-20 sm:py-24 bg-surface/30 border-t border-line scroll-mt-20">
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

        {/* Form */}
        <div className="reveal mt-12 text-left">
          {status === 'success' ? (
            <div className="border border-accent/40 rounded-2xl p-8 text-center bg-surface/40">
              <div className="font-display text-2xl tracking-tightest text-accent">Message sent</div>
              <p className="text-muted mt-3">Thanks for reaching out — I'll get back to you soon.</p>
              <button
                onClick={() => setStatus('idle')}
                className="btn-ghost mt-6 px-5 py-2.5 text-muted"
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
                <label htmlFor="message" className="block font-mono text-[10px] uppercase tracking-tightest text-muted mb-2">
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
                <p role="alert" className="font-mono text-xs text-accent text-center">{errorMsg}</p>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full sm:w-auto px-8 py-3.5 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {status === 'sending' ? 'Sending...' : 'Send message →'}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Socials */}
        <div className="reveal mt-12 flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="btn-ghost px-5 py-2.5 text-muted">
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
