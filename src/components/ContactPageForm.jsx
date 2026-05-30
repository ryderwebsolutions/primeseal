'use client'

import { useState } from 'react'

export default function ContactPageForm() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const d = new FormData(e.target)
    const payload = {
      name: d.get('name'),
      phone: d.get('phone'),
      email: d.get('email'),
      location: d.get('location'),
      service: d.get('issueType'),
      message: d.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Submission failed.')
      setStatus('success')
      e.target.reset()
    } catch (err) {
      setErrorMsg(err.message)
      setStatus('error')
    }
  }

  const inputCls =
    'w-full rounded-xl border border-white/30 bg-white/95 px-3 py-2.5 text-sm text-navy placeholder:text-navy/50 outline-none focus:ring-2 focus:ring-blue/40 transition'

  if (status === 'success') {
    return (
      <div className="mt-5 rounded-xl border border-white/25 bg-white/8 px-6 py-10 text-center">
        <svg className="mx-auto mb-3 h-8 w-8 text-[#9FD0F8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20,6 9,17 4,12" />
        </svg>
        <p className="text-sm font-semibold text-white">Enquiry sent — we'll be in touch within 24 hours.</p>
        <p className="mt-1 text-xs text-white/60">You can send photos in a follow-up email to {' '}
          <a href="mailto:info@primesealwaterproofing.ie" className="underline hover:text-white">info@primesealwaterproofing.ie</a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-3">
      <input
        type="text" name="name" required placeholder="Name"
        className={inputCls}
      />
      <input
        type="tel" name="phone" required placeholder="Phone"
        className={inputCls}
      />
      <input
        type="email" name="email" placeholder="Email (optional)"
        className={inputCls}
      />
      <input
        type="text" name="location" required placeholder="Location"
        className={inputCls}
      />
      <input
        type="text" name="issueType" required placeholder="Type of Issue"
        className={inputCls}
      />
      <textarea
        name="message" rows={4} placeholder="Message"
        className={`${inputCls} resize-none`}
      />

      {status === 'error' && (
        <p className="text-xs text-red-300">{errorMsg || 'Something went wrong. Please try again.'}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#165FA8] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:bg-[#1a6cbf] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Submit Enquiry'}
      </button>
    </form>
  )
}
