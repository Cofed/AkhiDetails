'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, User, Mail, MapPin, Phone } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const services = [
  { id: 'exterior', name: 'Exterior Detail', price: 120 },
  { id: 'interior', name: 'Interior Detail', price: 175 },
  { id: 'full', name: 'Full Detail', price: 350 },
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: 'full',
    vehicles: 1,
    date: '',
    time: '10:00',
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectedService = services.find((s) => s.id === formData.service);
  const total = (selectedService?.price || 0) * formData.vehicles;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.address) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      // Send email to admin
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'admin',
          data: formData,
          total,
          service: selectedService?.name,
        }),
      });

      // Send receipt to customer
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'customer',
          data: formData,
          total,
          service: selectedService?.name,
        }),
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error processing your booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#0a0e1a] to-[#0f1420] py-20 px-6">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <div className="soft-panel rounded-[32px] p-12 text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#d4af37]/20 text-4xl">
                ✓
              </div>
              <h1 className="text-5xl font-black text-white mb-4">Booking confirmed!</h1>
              <p className="text-lg text-[#8a939e] mb-6">We've sent a confirmation and receipt to <span className="text-[#e8c547]">{formData.email}</span></p>
              <div className="soft-panel rounded-[24px] p-8 mb-8 text-left">
                <h2 className="text-2xl font-bold text-white mb-6">Booking details</h2>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-[#8a939e]">Service</span>
                    <span className="text-white font-semibold">{selectedService?.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-[#8a939e]">Vehicles</span>
                    <span className="text-white font-semibold">{formData.vehicles}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-[#8a939e]">Date & Time</span>
                    <span className="text-white font-semibold">{formData.date} at {formData.time}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-[#8a939e]">Location</span>
                    <span className="text-white font-semibold text-right">{formData.address}</span>
                  </div>
                  <div className="flex justify-between pt-4">
                    <span className="text-lg text-white font-bold">Total</span>
                    <span className="text-2xl font-black text-[#d4af37]">${total}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <p className="text-[#8a939e]">You can cancel your booking anytime from the link in your email. We'll be in touch soon!</p>
              </div>
              <Link href="/" className="btn-primary inline-block">
                Back to home
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0e1a] to-[#0f1420] py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Book your detail</h1>
            <p className="text-lg text-[#8a939e]">Professional, premium detailing delivered to you</p>
          </div>
        </ScrollReveal>

        {/* Progress indicator */}
        <ScrollReveal delay={0.1}>
          <div className="mb-12 flex items-center justify-between">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full font-bold transition-all ${
                  step >= s ? 'bg-[#d4af37] text-[#0a0e1a]' : 'bg-[#0f1420] border border-[#d4af37]/30 text-[#8a939e]'
                }`}>
                  {s}
                </div>
                {s < 3 && (
                  <div className={`h-1 flex-1 mx-4 transition-all ${
                    step > s ? 'bg-[#d4af37]' : 'bg-[#0f1420]'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <form onSubmit={handleSubmit}>
          {/* STEP 1: Service & Vehicles */}
          {step === 1 && (
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <label className="block mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[#e8c547]">Select service</label>
                  <div className="grid gap-4 md:grid-cols-3">
                    {services.map((svc) => (
                      <button
                        key={svc.id}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, service: svc.id }))}
                        className={`rounded-[20px] p-6 transition-all text-left border ${
                          formData.service === svc.id
                            ? 'border-[#d4af37] bg-[#d4af37]/20 shadow-[0_0_30px_rgba(212,175,55,0.2)]'
                            : 'border-[#d4af37]/20 bg-[#0f1420] hover:border-[#d4af37]/50'
                        }`}
                      >
                        <p className="text-lg font-bold text-white">{svc.name}</p>
                        <p className="text-2xl font-black text-[#d4af37] mt-2">${svc.price}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[#e8c547]">Number of vehicles</label>
                  <select
                    name="vehicles"
                    value={formData.vehicles}
                    onChange={handleInputChange}
                    className="w-full rounded-[16px] border border-[#d4af37]/30 bg-[#0f1420] p-4 text-white focus:border-[#d4af37] focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n} vehicle{n > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="soft-panel rounded-[20px] p-8">
                  <p className="text-sm text-[#8a939e] mb-2">Price estimate</p>
                  <div className="flex items-baseline justify-between">
                    <span className="text-[#8a939e]">Total</span>
                    <span className="text-4xl font-black text-[#d4af37]">${total}</span>
                  </div>
                  <p className="text-xs text-[#8a939e] mt-4">Final pricing may vary based on vehicle size. Confirmation required before booking.</p>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* STEP 2: Date & Time */}
          {step === 2 && (
            <ScrollReveal>
              <div className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#e8c547]">Preferred date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-[16px] border border-[#d4af37]/30 bg-[#0f1420] px-4 py-4 text-white focus:border-[#d4af37] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#e8c547]">Preferred time</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full rounded-[16px] border border-[#d4af37]/30 bg-[#0f1420] px-4 py-4 text-white focus:border-[#d4af37] focus:outline-none"
                    >
                      {['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'].map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* STEP 3: Contact Info */}
          {step === 3 && (
            <ScrollReveal>
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#e8c547]">Full name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                      className="w-full rounded-[16px] border border-[#d4af37]/30 bg-[#0f1420] px-4 py-4 text-white placeholder-[#8a939e]/50 focus:border-[#d4af37] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#e8c547]">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-[16px] border border-[#d4af37]/30 bg-[#0f1420] px-4 py-4 text-white placeholder-[#8a939e]/50 focus:border-[#d4af37] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#e8c547]">Phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="(123) 456-7890"
                    className="w-full rounded-[16px] border border-[#d4af37]/30 bg-[#0f1420] px-4 py-4 text-white placeholder-[#8a939e]/50 focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#e8c547]">Service address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Street address, city, ZIP"
                    className="w-full rounded-[16px] border border-[#d4af37]/30 bg-[#0f1420] px-4 py-4 text-white placeholder-[#8a939e]/50 focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#e8c547]">Special requests (optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Any special instructions or requests..."
                    className="w-full rounded-[16px] border border-[#d4af37]/30 bg-[#0f1420] px-4 py-4 text-white placeholder-[#8a939e]/50 focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Navigation buttons */}
          <div className="mt-12 flex gap-4">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="btn-secondary flex-1"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                Continue <ChevronRight size={18} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Confirm Booking'}
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
