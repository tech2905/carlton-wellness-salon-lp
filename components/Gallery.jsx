export default function Gallery() {
  return (
    <>

<section className="gallery-section">
    <div className="container">
        <div className="center" style={{"textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center"}}>
            <h2 className="section-heading">The Carlton Salon Experience</h2>
            <p className="section-sub gallery-intro">Where premium service, clean beauty, and modern salon environments come
                together to create experiences customers trust and return to.</p>
        </div>

        <div className="gallery-grid">
            <div className="gallery-item gallery-item-1">
                <img src="/image/1st.webp" alt="Premium Hair & Beauty Services" />
            </div>

            <div className="gallery-item gallery-item-2">
                <img src="/image/2nd.webp" alt="Professional Product Collection" />
            </div>

            <div className="gallery-item gallery-item-3">
                <img src="/image/3rd.webp" alt="Contemporary Salon Interiors" />
            </div>

            <div className="gallery-item gallery-item-4">
                <img src="/image/4th.webp" alt="Certified Beauty Experts" />
            </div>
        </div>
    </div>
</section>
    </>
  );
}