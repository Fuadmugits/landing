'use client';
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!videoRef.current) return;
      const y = window.scrollY;
      if (y < window.innerHeight) {
        videoRef.current.style.transform = `translateY(${y * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cursor glow
  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;
    const glow = document.createElement('div');
    glow.style.cssText = `position:fixed;pointer-events:none;z-index:9999;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(201,168,76,0.06) 0%,transparent 70%);transform:translate(-50%,-50%);transition:left 0.12s ease,top 0.12s ease;`;
    document.body.appendChild(glow);
    const onMove = (e: MouseEvent) => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; };
    document.addEventListener('mousemove', onMove);
    return () => { document.removeEventListener('mousemove', onMove); glow.remove(); };
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.videoWrapper}>
        <video ref={videoRef} autoPlay muted loop playsInline className={styles.video}>
          <source src="/Restaurant_cinematic_realistic_202604240945.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <p className={`section-eyebrow ${styles.eyebrow}`}>Est. 2006 · Jakarta, Indonesia</p>
        <h1 className={styles.title}>
          Where Every Dish<br />
          <em>Tells a Story</em>
        </h1>
        <p className={styles.subtitle}>
          A celebration of seasonal ingredients, heritage techniques, and modern culinary vision.
        </p>
        <div className={styles.cta}>
          <a href="#reservation" className={styles.btnPrimary}>Reserve Your Table</a>
          <a href="#menu" className={styles.btnGhost}>Explore Menu</a>
        </div>
      </div>
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
