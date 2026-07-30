"use client";

import { useState } from 'react';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className="site-header" id="siteHeader">
          <div className="container">
              <a href="#" className="logo" aria-label="Carlton Wellness Group">
                  <img src="/image/Logo.png" alt="Carlton Wellness Center Logo" style={{maxHeight: '130px', marginLeft: '-16px'}} />
              </a>

              <div className="header-cta" style={{ display: navOpen ? 'flex' : undefined }}>
                  <a href="#request-form" className="btn btn-navy btn-small">Request Details</a>
              </div>

              <button className="nav-toggle" id="navToggle" aria-label="Toggle menu" onClick={() => setNavOpen(!navOpen)}>
                  <span></span><span></span><span></span>
              </button>
          </div>
      </header>
    </>
  );
}