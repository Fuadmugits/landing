'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Stats.module.css';

const stats = [
  { number: 18, suffix: '', label: 'Years of Excellence' },
  { number: 3,  suffix: '', label: 'Michelin Stars' },
  { number: 56, suffix: '', label: 'Awards Won' },
  { number: 12, suffix: 'K+', label: 'Happy Guests' },
];

function useCounter(target: number, suffix: string, triggered: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { start = target; clearInterval(timer); }
      setValue(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [triggered, target]);
  return value + suffix;
}

function StatItem({ number, suffix, label, triggered }: typeof stats[0] & { triggered: boolean }) {
  const display = useCounter(number, suffix, triggered);
  return (
    <div className={styles.item}>
      <span className={styles.number}>{display}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTriggered(true); obs.disconnect(); } }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.ribbon} ref={ref}>
      <div className={styles.container}>
        {stats.map((s, i) => (
          <div key={s.label} className={styles.itemGroup}>
            <StatItem {...s} triggered={triggered} />
            {i < stats.length - 1 && <div className={styles.divider} />}
          </div>
        ))}
      </div>
    </section>
  );
}
