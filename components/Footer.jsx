export default function Footer() {
  return (
    <>

<footer className="site-footer">
    <div className="container">
        
        <div className="footer-top">
            <div className="footer-brand">
                <a href="#" className="logo footer-logo" aria-label="Carlton Wellness Group">
                    <img src="/image/Logo.png" alt="Carlton Wellness Center Logo" style={{"maxHeight":"120px","marginLeft":"-24px"}} />
                </a>
                
                <p className="footer-desc">
                    Organizing India&apos;s beauty and grooming industry through professionally managed salon businesses.
                </p>
                
                <ul className="footer-contacts">
                    <li>
                        <span className="ico"><img src="/icon/Icon-2.svg" alt="Phone" width="16" height="16" /></span>
                        +91 1900-CARLTON
                    </li>
                    <li>
                        <span className="ico"><img src="/icon/Icon-1.svg" alt="Email" width="16" height="16" /></span>
                        partnership@carltonwellness.com
                    </li>
                    <li>
                        <span className="ico"><img src="/icon/Icon.svg" alt="Web" width="16" height="16" /></span>
                        www.carltonwellnessgroup.com
                    </li>
                </ul>
            </div>
            
            <div className="footer-hubs">
                <h4>PARTNERSHIP HUBS</h4>
                <ul>
                    <li>Mumbai</li>
                    <li>Bangalore</li>
                    <li>Dubai</li>
                </ul>
            </div>
        </div>
        
        <div className="footer-bottom">
            <p>Commercial Structure as per Agreement, T&C Apply. &copy; 2024 Carlton Wellness Group.</p>
            <div className="footer-links">
                <a href="https://hotel.carltonwellnessgroup.com/terms-conditions/" target="_blank">Privacy Policy</a>
                <a href="https://hotel.carltonwellnessgroup.com/terms-conditions/" target="_blank">Terms of Service</a>
            </div>
        </div>
        
    </div>
</footer>

    </>
  );
}