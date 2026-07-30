"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    const formData = new FormData(e.target);
    const data = {
      fields: {
        name: formData.get('fname'),
        phone: formData.get('mobile'),
        email: formData.get('email'),
        brand: 'Carlton Salon',
        city: formData.get('city'),
        state: formData.get('state'),
        capital: formData.get('capital'),
        location: formData.get('location')
      }
    };

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push('/thank-you');
      } else {
        setMessage('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

<section className="hero" id="apply">
    <div className="container">
        
        <div className="hero-copy">
            <div className="hero-badge">
                <span className="dot"></span>
                <span>PREMIUM BUSINESS OPPORTUNITY</span>
            </div>
            
            <h1 className="hero-headline">
                Bring Structure to India&apos;s<br />
                <span className="accent">Beauty & Grooming Industry</span>
            </h1>
            
            <p className="hero-sub">
                Partner with Carlton Wellness Group to establish a professionally managed premium salon business through a standardized Franchise Owned, Company Operated (FOCO) model.
            </p>
            
            <div className="hero-stats-row">
                <div className="hero-stat-card">
                    <div className="label">CAPITAL COMMITMENT</div>
                    <div className="value">From ₹1 Crore*</div>
                </div>
                <div className="hero-stat-card">
                    <div className="label">BUSINESS MODEL</div>
                    <div className="value">FOCO</div>
                </div>
            </div>
            
            <ul className="hero-checklist">
                <li><span className="tick"><img src="/icon/Icon-8.svg" alt="check" width="24" height="24" /></span> Franchise Owned, Company Operated</li>
                <li><span className="tick"><img src="/icon/Icon-8.svg" alt="check" width="24" height="24" /></span> Certified Professional Teams</li>
                <li><span className="tick"><img src="/icon/Icon-8.svg" alt="check" width="24" height="24" /></span> SOP-Led Operations</li>
                <li><span className="tick"><img src="/icon/Icon-8.svg" alt="check" width="24" height="24" /></span> Premium Brand Support</li>
            </ul>
        </div>

        <div className="request-card" id="request-form">
            <a href="#" className="close-popup" aria-label="Close form">&times;</a>
            <h3>Request Details</h3>
            <p>Secure your preferred location today.</p>
            
            <form onSubmit={handleSubmit} className="form-grid">
                <div className="form-field">
                    <label htmlFor="fname">Full Name*</label>
                    <input type="text" id="fname" name="fname" placeholder="e.g. Alexander Carlton" required />
                </div>
                
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="mobile">Mobile Number*</label>
                        <input type="tel" id="mobile" name="mobile" placeholder="+91" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="email">Email Address*</label>
                        <input type="email" id="email" name="email" placeholder="Email Address" required />
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="city">City*</label>
                        <select id="city" name="city" required defaultValue="">
                            <option value="" disabled>Select City</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="delhi">Delhi</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="hyderabad">Hyderabad</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <label htmlFor="state">State*</label>
                        <select id="state" name="state" required defaultValue="">
                            <option value="" disabled>Select State</option>
                            <option value="mh">Maharashtra</option>
                            <option value="dl">Delhi</option>
                            <option value="ka">Karnataka</option>
                            <option value="tg">Telangana</option>
                        </select>
                    </div>
                </div>
                
                <div className="form-field">
                    <label htmlFor="capital">Available Capital</label>
                    <select id="capital" name="capital" defaultValue="75-100">
                        <option value="75-100">₹75 Lakhs - ₹1 Crore</option>
                        <option value="100-200">₹1 Crore - ₹2 Crore</option>
                        <option value="200+">₹2 Crore+</option>
                    </select>
                </div>
                
                <div className="form-field">
                    <label htmlFor="location">Preferred Business Location</label>
                    <select id="location" name="location" defaultValue="hyderabad">
                        <option value="hyderabad">Hyderabad</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="delhi">Delhi NCR</option>
                    </select>
                </div>
                
                <div className="form-consent">
                    <input type="checkbox" id="consent" name="consent" required />
                    <label htmlFor="consent"><p>I agree to be contacted by Carlton Wellness Group<br />regarding franchise opportunities.</p></label>
                </div>
                
                <button type="submit" className="form-submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Request Commercial Details'}
                </button>
                {message && <p style={{ color: message.includes('Thank you') ? 'green' : 'red', gridColumn: '1 / -1', textAlign: 'center', marginTop: '10px' }}>{message}</p>}
            </form>
        </div>

    </div>
</section>

    </>
  );
}