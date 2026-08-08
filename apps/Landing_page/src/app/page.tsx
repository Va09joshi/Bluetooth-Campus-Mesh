"use client";

import {
  ArrowRight, ArrowLeft, Bluetooth, CheckCircle, ChevronRight, ChevronDown, FileText,
  MapPin, MessageSquare, Radio, ShieldAlert, Smartphone,
  Users, UserCheck, Zap, Server, Activity, Clock, Plus, Star, Quote, Menu, X,
  GraduationCap, Briefcase, Map, Building, Monitor
} from 'lucide-react';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

import { useRef, useState, useEffect } from 'react';
import './page.css';

export default function Home() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []); const scrollPrev = () => {
    trackRef.current?.scrollBy({ left: -408, behavior: 'smooth' });
  };

  const scrollNext = () => {
    trackRef.current?.scrollBy({ left: 408, behavior: 'smooth' });
  };

  return (
    <div className="landing-layout">
      {/* Navigation */}
      <nav className="sticky-nav">
        <div className="container nav-content">
          <div className="logo h5">
            <span style={{ color: '#111827' }}>Campus</span>
            <span style={{ color: 'var(--color-primary)' }}>Mesh.</span>
          </div>
          <div className="nav-links">
            <a href="#features" className="body">Features</a>
            <a href="#how-it-works" className="body">How it Works</a>
            <a href="#faq" className="body">FAQ</a>
          </div>
          <div className="nav-actions" style={{ alignItems: 'center' }}>
            <a href="https://github.com/Va09joshi/Bluetooth-Campus-Mesh" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-secondary-text)', marginRight: '8px', display: 'flex', alignItems: 'center' }} title="GitHub">
              <GithubIcon size={22} />
            </a>
            <a href="/docs" className="btn btn-secondary" style={{ textDecoration: 'none' }}>View Documentation</a>
            <button className="btn btn-primary nav-primary-btn">Get Started</button>
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} color="var(--color-primary-text)" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="logo h5">
            <span style={{ color: '#111827' }}>Campus</span>
            <span style={{ color: 'var(--color-primary)' }}>Mesh.</span>
          </div>
          <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} color="var(--color-primary-text)" />
          </button>
        </div>
        <div className="mobile-drawer-links">
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How it Works</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          <a href="/docs" onClick={() => setIsMobileMenuOpen(false)}>Documentation</a>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '16px', justifyContent: 'center' }}>Get Started</button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section hero-section">
        <div className="container hero-content relative-hero">
          <h1 className="display-large hero-heading-behind text-center">
            Connect the campus<br />
            <span className="text-gradient">No internet required</span>
          </h1>
          <p className="subtitle hero-subtitle" style={{ position: 'relative', zIndex: 10 }}>
            Empower your institution with resilient, offline-first communication.
            Our decentralized Bluetooth Mesh transforms every smartphone into a network node, ensuring
            messaging, navigation, and emergency alerts remain active even during severe cellular outages.
          </p>
          <div className="hero-actions" style={{ position: 'relative', zIndex: 10 }}>
            <button className="btn btn-primary btn-large">Get Started</button>
            <a href="/docs" className="btn btn-secondary btn-large" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>View Documentation <ChevronRight size={18} /></a>
          </div>

          <div className="hero-image-wrapper">
            <img src="/Connected world-pana (1).png" alt="Connected Campus" className="hero-main-image" />
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="section logos-section">
        <div className="container">
          <p className="small text-center">EMPOWERING CAMPUS COMMUNITIES</p>
          <div className="logo-grid">
            <div className="company-logo animate-on-scroll"><GraduationCap size={26} /> Students</div>
            <div className="company-logo animate-on-scroll"><Briefcase size={26} /> Faculty</div>
            <div className="company-logo animate-on-scroll"><Map size={26} /> Visitors</div>
            <div className="company-logo animate-on-scroll"><Building size={26} /> Administration</div>
            <div className="company-logo animate-on-scroll"><Monitor size={26} /> IT Teams</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section features-section" style={{ padding: 0 }}>
        <div style={{ width: '100%' }}>
          <div className="bento-container">
            <div className="bento-header" style={{ borderRadius: 0 }}>
              <h2 className="display-large text-center" style={{ color: 'white', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                Everything you need. <span style={{ color: '#22c55e' }}>Offline.</span>
              </h2>
            </div>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '40px', paddingBottom: '80px' }}>
              <img
                src="/ChatGPT Image Aug 8, 2026, 01_36_19 PM.png"
                alt="Features Grid"
                style={{ width: '90%', maxWidth: '1400px', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section" style={{ backgroundColor: '#ffffff', paddingTop: '120px' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <h2 className="display-large text-center" style={{ textDecoration: 'underline', textDecorationColor: 'var(--color-primary)', textUnderlineOffset: '8px', textDecorationThickness: '3px' }}>How CampusMesh works</h2>
          <p className="subtitle text-center features-subtitle">Four simple steps to seamless campus connectivity.</p>

          <div className="process-timeline-vertical">
            <div className="process-step-vertical">
              <div className="process-number-vertical">01</div>
              <div className="process-content">
                <h4 className="display-medium">Connect</h4>
                <p className="subtitle muted" style={{ marginTop: '16px' }}>Enable Bluetooth to instantly join the local campus mesh network.</p>
                <ul className="process-list">
                  <li><CheckCircle size={18} className="list-icon" /> Zero Wi-Fi required</li>
                  <li><CheckCircle size={18} className="list-icon" /> Instant peer-to-peer pairing</li>
                  <li><CheckCircle size={18} className="list-icon" /> Battery-efficient protocol</li>
                </ul>
              </div>
              <div className="process-asset">
                <img src="/Connected-cuate.png" alt="Connect" />
              </div>
            </div>
            <div className="process-step-vertical">
              <div className="process-number-vertical">02</div>
              <div className="process-content">
                <h4 className="display-medium">Discover</h4>
                <p className="subtitle muted" style={{ marginTop: '16px' }}>Find nearby peers, classrooms, and offices automatically.</p>
                <ul className="process-list">
                  <li><CheckCircle size={18} className="list-icon" /> Proximity-based routing</li>
                  <li><CheckCircle size={18} className="list-icon" /> Live offline campus map</li>
                  <li><CheckCircle size={18} className="list-icon" /> Secure department locator</li>
                </ul>
              </div>
              <div className="process-asset">
                <img src="/Navigation-pana.png" alt="Discover" />
              </div>
            </div>
            <div className="process-step-vertical">
              <div className="process-number-vertical">03</div>
              <div className="process-content">
                <h4 className="display-medium">Communicate</h4>
                <p className="subtitle muted" style={{ marginTop: '16px' }}>Send messages and files that hop between active devices.</p>
                <ul className="process-list">
                  <li><CheckCircle size={18} className="list-icon" /> End-to-end encrypted chats</li>
                  <li><CheckCircle size={18} className="list-icon" /> Multi-hop message delivery</li>
                  <li><CheckCircle size={18} className="list-icon" /> Peer-to-peer file transfer</li>
                </ul>
              </div>
              <div className="process-asset">
                <img src="/Speech bubbles-bro.png" alt="Communicate" />
              </div>
            </div>
            <div className="process-step-vertical">
              <div className="process-number-vertical">04</div>
              <div className="process-content">
                <h4 className="display-medium">Synchronize</h4>
                <p className="subtitle muted" style={{ marginTop: '16px' }}>Data resolves with the cloud seamlessly once a connection is found.</p>
                <ul className="process-list">
                  <li><CheckCircle size={18} className="list-icon" /> Automatic cloud syncing</li>
                  <li><CheckCircle size={18} className="list-icon" /> Conflict resolution</li>
                  <li><CheckCircle size={18} className="list-icon" /> Background data updates</li>
                </ul>
              </div>
              <div className="process-asset">
                <img src="/Data extraction-bro.png" alt="Synchronize" />
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Testimonials */}
      <section className="section" style={{ backgroundColor: '#111827', padding: '120px 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div>
            <div style={{ maxWidth: '100%', marginBottom: '64px' }}>
              <p className="small" style={{ color: '#9ca3af', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
                TRUSTED BY THE CAMPUS
              </p>
              <h2 className="display-large" style={{ color: 'white', marginBottom: '24px' }}>
                Don't take our word for it, see what our clients say
              </h2>
              <p className="body" style={{ color: '#d1d5db', lineHeight: '1.6', maxWidth: '800px' }}>
                We're honored by the feedback, and it fuels our commitment to delivering exceptional decentralized communication. Read the reviews to hear firsthand how CampusMesh is making a positive impact on campus safety and connectivity. Your trust is our greatest achievement.
              </p>
              <div style={{ marginTop: '24px' }}>
                <span style={{ fontFamily: 'cursive', fontSize: '28px', color: 'white', opacity: 0.9 }}>Vaibhav Joshi</span>
              </div>
            </div>

            <div className="static-carousel-track" ref={trackRef}>
              {/* Card 1 */}
              <div className="static-testimonial-card">
                <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                </div>
                <p className="body" style={{ color: '#374151', fontSize: '15px', lineHeight: '1.6', marginBottom: '40px', flex: 1 }}>
                  A thorough setup was done on our infrastructure regarding what areas the mesh covers. Better node placements were found. These were processed on our behalf, which took a lot of stress away. Updates were given as required and outstanding responses chased after.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <p className="body" style={{ fontWeight: 700, color: '#111827', marginBottom: '4px' }}>Sarah J.</p>
                    <p className="small" style={{ color: '#6b7280' }}>June 01, 2025</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="static-testimonial-card">
                <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                </div>
                <p className="body" style={{ color: '#374151', fontSize: '15px', lineHeight: '1.6', marginBottom: '40px', flex: 1 }}>
                  I have been a user of CampusMesh for 2 years now and have always found the offline messaging excellent. The app always takes the time to explain node connections really clearly to me and ensures I understand and am well informed in emergencies.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <p className="body" style={{ fontWeight: 700, color: '#111827', marginBottom: '4px' }}>Dr. Alan M.</p>
                    <p className="small" style={{ color: '#6b7280' }}>November 09, 2025</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="static-testimonial-card">
                <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                </div>
                <p className="body" style={{ color: '#374151', fontSize: '15px', lineHeight: '1.6', marginBottom: '40px', flex: 1 }}>
                  Deploying the mesh network drastically reduced our infrastructure overhead. It's secure, fast, and remarkably resilient. The development team provides outstanding responses chased after anytime we have an edge-case request.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Profile" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <p className="body" style={{ fontWeight: 700, color: '#111827', marginBottom: '4px' }}>Marcus T.</p>
                    <p className="small" style={{ color: '#6b7280' }}>October 22, 2025</p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="static-testimonial-card">
                <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                </div>
                <p className="body" style={{ color: '#374151', fontSize: '15px', lineHeight: '1.6', marginBottom: '40px', flex: 1 }}>
                  I never worry about losing connection during an emergency. The localized mesh grid is totally unbreakable and connects instantly when normal cell towers get overloaded during massive campus events. Highly recommend it!
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Profile" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <p className="body" style={{ fontWeight: 700, color: '#111827', marginBottom: '4px' }}>Jessica Chen</p>
                    <p className="small" style={{ color: '#6b7280' }}>September 28, 2025</p>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="static-testimonial-card">
                <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                </div>
                <p className="body" style={{ color: '#374151', fontSize: '15px', lineHeight: '1.6', marginBottom: '40px', flex: 1 }}>
                  Taking attendance in a lecture hall of 300 used to take ten minutes. Now it happens automatically as students walk in. This technology has saved me countless hours over the semester.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Profile" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <p className="body" style={{ fontWeight: 700, color: '#111827', marginBottom: '4px' }}>Prof. John D.</p>
                    <p className="small" style={{ color: '#6b7280' }}>May 14, 2025</p>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="static-testimonial-card">
                <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                  <div className="trust-star"><Star size={14} fill="white" color="white" /></div>
                </div>
                <p className="body" style={{ color: '#374151', fontSize: '15px', lineHeight: '1.6', marginBottom: '40px', flex: 1 }}>
                  The indoor navigation feature completely saved me during my first week on the massive campus. Being able to message my study group from the library basement where there's no Wi-Fi is amazing.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="Profile" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <p className="body" style={{ fontWeight: 700, color: '#111827', marginBottom: '4px' }}>Emily R.</p>
                    <p className="small" style={{ color: '#6b7280' }}>August 14, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '64px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button className="carousel-nav-btn" onClick={scrollPrev}>
                    <ArrowLeft size={20} className="nav-icon" />
                  </button>
                  <button className="carousel-nav-btn" onClick={scrollNext}>
                    <ArrowRight size={20} className="nav-icon" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section logos-section" style={{ padding: '160px 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="grid grid-12" style={{ gap: '64px' }}>
            <div style={{ gridColumn: 'span 5' }}>
              <p className="small" style={{ color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
                COMMON QUESTIONS
              </p>
              <h2 style={{ fontSize: '56px', lineHeight: '1.1', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '24px', color: '#111827' }}>
                Frequently <br /> asked questions.
              </h2>
              <p className="body" style={{ color: '#6b7280', fontSize: '18px' }}>
                Can't find what you're looking for? <a href="#" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>Contact support</a>
              </p>
            </div>

            <div style={{ gridColumn: 'span 7', paddingTop: '12px' }}>
              <div className="faq-container">
                <details className="faq-item" open>
                  <summary className="faq-question">
                    How is CampusMesh different from a regular messaging app?
                    <ChevronDown className="faq-icon" size={20} />
                  </summary>
                  <div className="faq-answer">
                    <p>Regular apps track messages through central servers. CampusMesh runs locally — structured routing, ownership assignment, defined workflow progression, secure signing, and a full audit trail in one local network. No Wi-Fi required to get there.</p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-question">
                    How long does setup take?
                    <ChevronDown className="faq-icon" size={20} />
                  </summary>
                  <div className="faq-answer">
                    <p>It takes less than 60 seconds. Simply download the app, enable Bluetooth, and you instantly join the localized mesh grid.</p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-question">
                    How is sensitive data protected?
                    <ChevronDown className="faq-icon" size={20} />
                  </summary>
                  <div className="faq-answer">
                    <p>All data transmitted across the mesh is encrypted end-to-end. Only intended recipients can decrypt and read the information.</p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-question">
                    Does CampusMesh include contact management?
                    <ChevronDown className="faq-icon" size={20} />
                  </summary>
                  <div className="faq-answer">
                    <p>Yes. You can manage study groups, class rosters, and emergency broadcast lists directly within the application.</p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-question">
                    What does it cost?
                    <ChevronDown className="faq-icon" size={20} />
                  </summary>
                  <div className="faq-answer">
                    <p>The core protocol is free for individual students. Enterprise management for entire campus infrastructure is priced based on total active nodes.</p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.03, pointerEvents: 'none' }}>
          <GithubIcon size={400} />
        </div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 10 }}>
          <h2 className="display-large">Open source.</h2>
          <p className="subtitle cta-subtitle">Share your thoughts and collaborate with the community to build resilient networks.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <button className="btn btn-primary btn-large">Start Building</button>
            <a href="https://github.com/Va09joshi/Bluetooth-Campus-Mesh" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <GithubIcon size={20} />
              Open Source on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="logo h5">
              <span style={{ color: '#111827' }}>Campus</span>
              <span style={{ color: 'var(--color-primary)' }}>Mesh.</span>
            </div>
            <p className="small" style={{ marginTop: '16px', color: 'var(--color-secondary-text)', maxWidth: '260px', lineHeight: '1.5' }}>
              Equipping campuses with reliable, decentralized communication technology.
            </p>
          </div>
          <div className="footer-links">
            <h5 className="h5">Product</h5>
            <a href="#" className="small">Features</a>
            <a href="/docs" className="small">Documentation</a>
            <a href="#" className="small">API</a>
            <a href="#" className="small">Releases</a>
          </div>
          <div className="footer-links">
            <h5 className="h5">Company</h5>
            <a href="#" className="small">About Us</a>
            <a href="#" className="small">Contact</a>
            <a href="#" className="small">Privacy Policy</a>
            <a href="#" className="small">Terms of Service</a>
          </div>
        </div>
        <div className="container">
          <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--color-secondary-text)' }}>
            <p className="small">© 2026 CampusMesh. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="https://github.com/Va09joshi/Bluetooth-Campus-Mesh" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-text)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>
                <GithubIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
