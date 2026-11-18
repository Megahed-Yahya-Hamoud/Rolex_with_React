import { useMemo, useRef, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { locationOptions, timeOptions, timepieceOptions } from '../../data/booking';
import GoldText from '../ui/GoldText';
import MaterialIcon from '../ui/MaterialIcon';
import Reveal from '../ui/Reveal';
import styles from './Concierge.module.css';

const INITIAL_FIELDS = { name: '', email: '', date: '', time: timeOptions[0] };

const perks = [
  { icon: 'verified', text: 'One-on-One Dedicated Horological Advisor' },
  { icon: 'room_service', text: 'Private Vault Presentation & Champagne Hospitality' },
  { icon: 'lock', text: 'Confidential Global Client Portfolio Services' }
];

export default function Concierge() {
  const {
    booking, selectTimepiece, selectLocation, resetBooking,
    showToast, configChosen, setConfigChosen, cfgSummary
  } = useApp();

  const formRef = useRef(null);
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const onField = (e) => setFields((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Earliest selectable date = today (in the visitor's timezone)
  const minDate = useMemo(() => {
    const d = new Date(Date.now() - new Date().getTimezoneOffset() * 60000);
    return d.toISOString().slice(0, 10);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current.reportValidity()) return;

    const salon = locationOptions.find((o) => o.value === booking.location).label.split('—')[0].trim();
    const watch = timepieceOptions.find((o) => o.value === booking.timepiece).label.split('(')[0].trim();
    const date = new Date(`${fields.date}T12:00:00`);
    const dateTxt = Number.isNaN(date.getTime())
      ? fields.date
      : date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    let body = `Greetings ${fields.name.trim()}. Your private appointment at ${salon} for ${watch} on ${dateTxt} (${fields.time}) has been placed on high confidential priority. Our concierge will contact you discreetly within 24 hours.`;
    if (booking.timepiece === 'metiers' && configChosen) body += ` Configuration: ${cfgSummary}.`;

    showToast({
      icon: 'mark_email_read',
      kicker: 'Salon Protocol Registered',
      title: 'Salon Invitation Confirmed',
      body,
      ref: `RLX-${Math.floor(1000 + Math.random() * 9000)}`
    });

    setFields(INITIAL_FIELDS);
    resetBooking();
    setConfigChosen(false);
  };

  return (
    <section
      id="concierge"
      aria-labelledby="concierge-title"
      className={styles.concierge}
    >
      <Reveal className={styles.box}>
        <div className={styles.box2}>
          {/* Left Column: Copy & Details */}
          <div className={styles.box3}>
            <p className={styles.text}>
              <span className={styles.span} />
              <span className={styles.span2}>Private Salon Consultation</span>
            </p>
            <h2 id="concierge-title" className={styles.conciergeTitle}>
              BOOK YOUR PRIVATE <br />
              <GoldText className={styles.gold}>VIEWING SUITE.</GoldText>
            </h2>
            <p className={styles.text2}>
              Step into the serene quietude of an official salon. Receive dedicated horological guidance, personalized wrist fittings, and exclusive previews of master references.
            </p>
            <ul className={styles.list}>
              {perks.map((p) => (
                <li key={p.icon} className={styles.item}>
                  <MaterialIcon name={p.icon} className={styles.icon} />
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Interactive Appointment Form */}
          <div className={styles.box4}>
            <form ref={formRef} id="salon-form" className={styles.salonForm} noValidate onSubmit={onSubmit}>
              <div className={styles.box5}>
                <div>
                  <label htmlFor="client-name" className={styles.label}>Full Name</label>
                  <input
                    id="client-name" name="name" type="text" autoComplete="name" required
                    className={styles.clientName} placeholder="Lord / Lady / Dr. / Mr."
                    value={fields.name} onChange={onField}
                  />
                </div>
                <div>
                  <label htmlFor="client-email" className={styles.label}>Email Correspondence</label>
                  <input
                    id="client-email" name="email" type="email" autoComplete="email" required
                    className={styles.clientName} placeholder="client@privatedomain.ch"
                    value={fields.email} onChange={onField}
                  />
                </div>
              </div>

              <div className={styles.box5}>
                <div>
                  <label htmlFor="salon-location" className={styles.label}>Preferred Salon Location</label>
                  <select
                    id="salon-location" name="location" className={styles.clientName}
                    value={booking.location} onChange={(e) => selectLocation(e.target.value)}
                  >
                    {locationOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="salon-timepiece" className={styles.label}>Timepiece of Interest</label>
                  <select
                    id="salon-timepiece" name="timepiece" className={styles.clientName}
                    value={booking.timepiece} onChange={(e) => selectTimepiece(e.target.value)}
                  >
                    {timepieceOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.box5}>
                <div>
                  <label htmlFor="salon-date" className={styles.label}>Preferred Consultation Date</label>
                  <input
                    id="salon-date" name="date" type="date" required min={minDate}
                    className={styles.clientName} value={fields.date} onChange={onField}
                  />
                </div>
                <div>
                  <label htmlFor="salon-time" className={styles.label}>Preferred Suite Time</label>
                  <select id="salon-time" name="time" className={styles.clientName} value={fields.time} onChange={onField}>
                    {timeOptions.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className={styles.button}
              >
                Confirm Private Salon Invitation Request
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
