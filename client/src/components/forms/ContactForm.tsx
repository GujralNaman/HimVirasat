import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const EMPTY: FormData = { name: '', email: '', phone: '', subject: '', message: '' };

export function ContactForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    // Simulate static submission (no backend)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (form.email && !form.email.includes('@')) {
      setStatus('error');
      setError('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setForm(EMPTY);
  };

  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-heading"
      className="mt-20 border-t border-gold/25 bg-ivory py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2
              id="contact-form-heading"
              className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-forest sm:text-5xl lg:text-6xl"
            >
              Get in Touch
            </h2>
            <p className="mt-6 text-base leading-relaxed text-forest/75 md:text-lg">
              Have a question about our regional products or want to place an order? Write to us and
              we&rsquo;ll get back to you soon.
            </p>

            <ul className="mt-10 space-y-6 text-sm text-forest/80">
              <li className="flex items-start gap-3">
                <Mail className="mt-1 text-gold shrink-0" size={18} />
                <div>
                  <div className="font-medium text-forest">Email</div>
                  <div>hello@himvirasat.com</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 text-gold shrink-0" size={18} />
                <div>
                  <div className="font-medium text-forest">Phone</div>
                  <div>+91 9419363835</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-1 text-gold shrink-0" size={18} />
                <div>
                  <div className="font-medium text-forest">WhatsApp</div>
                  <div>Tap &ldquo;Connect With HimVirasat&rdquo; to chat</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest/70 mb-1">
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gold/35 rounded bg-ivory text-forest focus:border-gold focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest/70 mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gold/35 rounded bg-ivory text-forest focus:border-gold focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest/70 mb-1">
                  Phone
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gold/35 rounded bg-ivory text-forest focus:border-gold focus:outline-none transition-colors"
                  placeholder="+91 ........."
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest/70 mb-1">
                  Subject
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gold/35 rounded bg-ivory text-forest focus:border-gold focus:outline-none transition-colors"
                  placeholder="Enquiry about..."
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest/70 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gold/35 rounded bg-ivory text-forest focus:border-gold focus:outline-none transition-colors"
                  placeholder="How can we help you?"
                />
              </div>
              {status === 'error' && (
                <div className="rounded bg-red-50/40 border border-red-200/60 px-4 py-3 text-sm text-red-800">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 w-full bg-forest px-8 text-xs font-bold uppercase tracking-[0.22em] text-ivory transition-colors duration-300 hover:bg-terra disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
                <Send size={16} className="text-gold transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              {status === 'success' && (
                <div className="rounded bg-forest/10 border border-gold/30 px-4 py-3 text-sm text-forest">
                  Thank you! Your enquiry has been received.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
