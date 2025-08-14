// app/page.tsx
"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleJoin = () => {
    const email = emailRef.current?.value?.trim() || "";
    if (email && email.includes("@")) {
      alert("Thank you for joining the movement! We will be in touch soon.");
      if (emailRef.current) emailRef.current.value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  };

  // simple fade-in on scroll
  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll<HTMLElement>(".stat, .pillar").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) el.classList.add("fade-in");
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header>
        <nav className="container">
          <div className="logo">Justice for the 99%</div>
          <a href="#join" className="cta-button">Join the Movement</a>
        </nav>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Hijacking of a Constitutional Right</h1>
          <div className="subtitle">Justice Has Been Sold to the Highest Bidder</div>
          <p>
          The wealthy elite have rigged our justice system … the 99% are denied their constitutional rights. 
          It&apos;s time to take back justice.
          </p>
          <a href="#join" className="btn-primary">Join the Fight for Justice</a>
        </div>
      </section>

      <section className="problem">
        <div className="container">
          <h2 className="section-title">The System is Rigged</h2>
          <p className="section-subtitle">While the 1% buy justice, the 99% are left defenseless</p>

          <div className="problem-stats">
            <div className="stat">
              <span className="stat-number">80%</span>
              <div className="stat-label">can&apos;t afford legal representation</div>
            </div>
            <div className="stat">
              <span className="stat-number">95%</span>
              <div className="stat-label">of cases never reach trial</div>
            </div>
            <div className="stat">
              <span className="stat-number">$400B</span>
              <div className="stat-label">lost annually to rigged justice</div>
            </div>
          </div>
        </div>
      </section>

      <section className="solution">
        <div className="container">
          <div className="solution-content">
            <h2>Universal Justice</h2>
            <div className="highlight">The New Civil Rights Movement</div>
            <div className="solution-text">
              We&apos;re building a movement to restore constitutional rights for all Americans. Our plan combines
              grassroots organizing, legal reform, and cutting-edge technology to decouple money from justice once and
              for all.
            </div>

            <div className="solution-pillars">
              <div className="pillar">
                <h3>🛡️ Universal Legal Care</h3>
                <p>Legal representation should be a right, not a privilege. Every American deserves access to quality legal defense.</p>
              </div>
              <div className="pillar">
                <h3>⚖️ Unbiased AI Justice</h3>
                <p>AI adjudication can reduce corruption and bias when implemented with transparency and oversight, ensuring fair and consistent outcomes for everyone.</p>
              </div>
              <div className="pillar">
                <h3>🤝 Cross-Partisan Unity</h3>
                <p>This isn&apos;t left vs right—it's the 99% vs the rigged system. Constitutional rights unite us all.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="final-cta">
        <div className="container">
          <h2>Join the Movement</h2>
          <p>Every day we wait, more Americans lose their constitutional rights to a rigged system. The time for change is NOW.</p>

          <div className="email-signup">
            <input ref={emailRef} type="email" className="email-input" placeholder="Enter your email to join the fight" />
            <button className="signup-btn" onClick={handleJoin}>JOIN NOW</button>
          </div>

          <a href="#" className="btn-primary">Share Our Mission</a>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>The Movement</h3>
              <a href="#">About Universal Justice</a>
              <a href="#">Our Story</a>
              <a href="#">Coalition Partners</a>
              <a href="#">Press Kit</a>
            </div>
            <div className="footer-section">
              <h3>Take Action</h3>
              <a href="#">Volunteer</a>
              <a href="#">Donate</a>
              <a href="#">Share Your Story</a>
              <a href="#">Contact Representatives</a>
            </div>
            <div className="footer-section">
              <h3>Resources</h3>
              <a href="#">Research &amp; Data</a>
              <a href="#">Cycle Clock Theory</a>
              <a href="#">Legal Reform Proposals</a>
              <a href="#">AI Justice White Papers</a>
            </div>
            <div className="footer-section">
              <h3>Connect</h3>
              <a href="#">Newsletter</a>
              <a href="#">Twitter/X</a>
              <a href="#">YouTube</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          <p>&copy; {new Date().getFullYear()} Justice for the 99%. The fight for constitutional rights continues.</p>
        </div>
      </footer>
    </>
  );
}
