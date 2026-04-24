'use client';
import { useEffect, useState, useRef } from 'react';
import styles from './Reservation.module.css';

const times = ['6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM'];
const guestOptions = ['1 Guest','2 Guests','3 Guests','4 Guests','5 Guests','6 Guests','7+ Guests (Private Dining)'];

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const dateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (dateRef.current) {
      dateRef.current.min = new Date().toISOString().split('T')[0];
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className={styles.reservation} id="reservation">
      <div className={styles.container}>
        <div className={styles.info} data-aos="fade-right">
          <p className="section-eyebrow">Reserve a Table</p>
          <h2 className="section-title">Begin Your<br /><em>Journey with Us</em></h2>
          <p className={styles.desc}>
            Secure your table for an unforgettable evening. We recommend booking
            at least 2 weeks in advance. For private dining and events, please contact us directly.
          </p>
          <div className={styles.contacts}>
            {[
              { label: 'Address', value: 'Jl. Sudirman No. 1, SCBD, Jakarta Selatan 12190' },
              { label: 'Reservations', value: '+62 21 5050 8888' },
              { label: 'Opening Hours', value: 'Tue – Sun · 6:00 PM – 11:00 PM' },
            ].map((c) => (
              <div key={c.label} className={styles.contactItem}>
                <span className={styles.contactIcon}>◎</span>
                <div>
                  <strong>{c.label}</strong>
                  <span>{c.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formWrapper} data-aos="fade-left">
          {!submitted ? (
            <form className={styles.form} onSubmit={handleSubmit} noValidate id="reservationForm">
              <div className={styles.row}>
                <div className={styles.group}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" placeholder="Marco" required />
                </div>
                <div className={styles.group}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" placeholder="Aurellio" required />
                </div>
              </div>
              <div className={styles.group}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="marco@example.com" required />
              </div>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label htmlFor="date">Preferred Date</label>
                  <input type="date" id="date" ref={dateRef} required />
                </div>
                <div className={styles.group}>
                  <label htmlFor="time">Preferred Time</label>
                  <select id="time" required defaultValue="">
                    <option value="" disabled>Select time</option>
                    {times.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className={styles.group}>
                <label htmlFor="guests">Number of Guests</label>
                <select id="guests" required defaultValue="">
                  <option value="" disabled>Select guests</option>
                  {guestOptions.map((g) => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
              <div className={styles.group}>
                <label htmlFor="notes">Special Requests</label>
                <textarea id="notes" placeholder="Dietary requirements, special occasions, seating preferences…" rows={3} />
              </div>
              <button type="submit" className={styles.submit} id="submitBtn" disabled={loading}>
                <span>{loading ? 'Confirming…' : 'Confirm Reservation'}</span>
                {!loading && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                )}
              </button>
            </form>
          ) : (
            <div className={styles.success} id="formSuccess">
              <div className={styles.successIcon}>✓</div>
              <h3>Reservation Received</h3>
              <p>We will confirm your booking within 24 hours. We look forward to welcoming you.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
