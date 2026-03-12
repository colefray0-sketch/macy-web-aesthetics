import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FAQpage from "./pages/FAQpage.jsx";
import Modal from "./components/Modal";
import CursorTrail from "./CursorTrail.jsx";
import BackToTop from "./components/BackToTop";
import ModalFAQs from "./components/ModalFAQs";

import wrinkleImg from "./assets/wrinkleImg.jpg";
import volumeImg from "./assets/volumeImg.jpg";
import microImg from "./assets/microImg.jpg";
import rejuranImg from "./assets/rejuImg.jpeg";
import heroBg from "./assets/heroImg2.png";

function HomePage() {
  const navigate = useNavigate();

  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showFAQModal, setShowFAQModal] = useState(false);
  const [showRejuranChoice, setShowRejuranChoice] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState("");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openBooking = () => setShowBookingModal(true);
  const closeBooking = () => setShowBookingModal(false);

  const closeFAQ = () => {
    setShowFAQModal(false);
    setShowRejuranChoice(false);
  };

  const openFAQ = (type) => {
    if (type === "rejuran") {
      setShowRejuranChoice(true);
    } else {
      setSelectedFAQ(type);
      setShowFAQModal(true);
    }
  };

  const chooseRejuran = (type) => {
    setShowRejuranChoice(false);
    setSelectedFAQ(type);
    setShowFAQModal(true);
  };

  const goToFullFAQ = () => {
    setShowFAQModal(false);
    navigate("/faq");
  };

  const renderFAQContent = () => {
    switch (selectedFAQ) {
      case "wrinkle":
        return (
          <>
            <h2>Wrinkle Reduction FAQs</h2>
            <p><strong>What is wrinkle reduction treatmeant?</strong><br />Wrinkle reduction treatments use small amounts of muscle-relaxing medication to soften lines caused by repeated facial movements such us frowning, squinting, or raising the eyebrows.</p>
            <p><strong>What areas can be treated?</strong><br />
            <p>Common areas include:</p>
              <ul>
                <li>Forehead lines</li>
                <li>Frown lines between the eyebrows</li>
                <li>Crow's feet around the eyes</li>
              </ul>
              <p>Other areas maybe suitable depending on individual assessment.</p></p>
            <p><strong>Will I look frozen or unnatural?</strong><br />Not when done correctly. My approach focuses on <b>natural movement and subtle softening</b>, so you still look like yourself — just more refreshed.</p>
          </>
        );

      case "volume":
        return (
          <>
            <h2>Lip & Cheek Volume FAQs</h2>
            <p><strong>What are dermal filler treatments</strong><br />Dermal fillers are injectable gels used to restore volume, enhance facial contours, and support facial structure. They are commonly used to enhance the lips and cheeks.</p>
            <p><strong>What areas can be treated?</strong><br /> <p>Common areas include:</p>
              <ul>
                <li>Lips - to enhance shape, definition, or hydration</li>
                <li>Cheeks - to restore volume and improve facial countour</li>
              </ul>
              <p>Suitability for treatment areas is assessed during consultation.</p></p>
            <p><strong>Will it look natural?</strong><br />Treatment is tailored to your facial features and proportions. The aim is to enhance natural structure while maintaining a balanced and natural-looking result.</p>
          </>
        );

      case "micro":
        return (
          <>
            <h2>Microneedling FAQs</h2>
            <p><strong>What is microneedling?</strong><br />Microneedling is a medical aesthetic treatment that uses fine,
                sterile needles to create controlled micro-channels in the skin.
                This process supports the skin’s natural repair response and may
                improve overall skin quality, texture and tone.</p>
            <p><strong>What are the benefits of microneedling?</strong><br /> <p>Microneedling may help to:</p>
              <ul>
                <li>Improve skin texture and smoothness</li>
                <li>Support collagen production</li>
                <li>Refine the appearance of pores</li>
                <li>Improve acne scarring and uneven tone</li>
                <li>Enhance brightness and overall appearance</li>
              </ul>
              <p>Results develop gradually as the skin regenerates.</p></p>
            <p><strong>What can I expect during treatment?</strong><br /><ul>
                <li>Skin is cleansed and prepared</li>
                <li>Medical-grade needling device is used</li>
                <li>Mild discomfort; numbing cream may be applied</li>
                <li>Treatment takes approximately 30–45 minutes</li>
              </ul>
              <p>Most clients describe the sensation as tolerable.</p></p>
               <p><strong>What does the skin look like after?</strong><br />
               <p>Immediately after treatment:</p>
              <ul>
                <li>Redness (similar to sunburn)</li>
                <li>Warmth or tightness</li>
                <li>Mild swelling in some areas</li>
              </ul>
              <p>These effects usually settle within 24–72 hours.</p></p>
          </>
        );

      case "rejuran-classic":
        return (
          <>
            <h2>Rejuran® Classic FAQs</h2>
            <p><strong>What is Rejuran® Classic?</strong><br />Rejuran Classic contains polynucleotides that support skin
                repair and regeneration.</p>
            <p><strong>What does it help with?</strong><br /> <ul>
                <li>Improve skin texture</li>
                <li>Support collagen production</li>
                <li>Strengthen the skin barrier</li>
                <li>Improve resilience</li>
                <li>Restore refreshed appearance</li>
              </ul>
              <p>
                It improves skin quality — not volume or contour.
              </p></p>
            <p><strong>What it is NOT</strong><br /><ul>
                <li>Not a dermal filler</li>
                <li>Does not add volume</li>
                <li>Does not change facial shape</li>
              </ul></p>
          </>
        );

      case "rejuran-eye":
        return (
          <>
            <h2>Rejuran® I Eye Treatment FAQs</h2>
            <p><strong>What is Rejuran I?</strong><br /> A formulation designed specifically for delicate eye skin.</p>
            <p><strong>What does it help with?</strong><br /> <ul>
                <li>Fine lines around the eyes</li>
                <li>Skin thickness and strength</li>
                <li>Under-eye texture</li>
                <li>Tired appearance over time</li>
              </ul></p>
            <p><strong>What it is NOT</strong><br /><ul>
                <li>Not tear trough filler</li>
                <li>Does not add under-eye volume</li>
                <li>Does not dramatically change eye shape</li>
              </ul>
              <p>
                The goal is subtle, progressive improvement.
              </p></p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* HERO */}
      <section id="home" className="section-main" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container hero">
          <h1>
            Refined Results. <br />
            Intentional Treatments. <br />
            Honest Aesthetics.
          </h1>
          <p>
            At Macy Flora Aesthetics, we focus on subtle, skin-first treatments
            designed to enhance — not change — your natural features.
          </p>
          <button className="button" onClick={() => scrollToSection("contact")}>
            Book a Consultation
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-alt">
        <div className="container">
          <h2>Treatments</h2>

          <div className="services-grid">
            <div className="card" onClick={() => openFAQ("wrinkle")}>
              <img src={wrinkleImg} alt="Wrinkle Reduction" />
              <h3>Wrinkle Reduction</h3>
              <p>Softened lines, natural movement.
Anti-wrinkle treatments are carefully dosed to relax targeted muscles while preserving facial expression.  The goal is refreshed, not frozen results, with balance and facial harmony always prioritised.</p>
            </div>

            <div className="card" onClick={() => openFAQ("volume")}>
              <img src={volumeImg} alt="Lip & Cheek Volume" />
              <h3>Lip & Cheek Volume Restoration</h3>
              <p>Structure, balance, and subtle support.
Subtle volumisation of the lips and cheeks to support facial balance and restore structure following individual assessment.</p>
            </div>

            <div className="card" onClick={() => openFAQ("micro")}>
              <img src={microImg} alt="Microneedling" />
              <h3>Microneedling + Topicals</h3>
              <p>Medical-grade microneedling stimulates collagen, improves texture, and supports long-term skin health.  This treatment targets acne scarring, fine lines, pigmentation, and overall skin quality using evidence- based techniques and sterile, clinical devices.</p>
            </div>

            <div className="card" onClick={() => openFAQ("rejuran")}>
              <img src={rejuranImg} alt="Rejuran" />
              <h3>Rejuran</h3>
              <p>A polynucleotide-based skin rejuvenation treatment that supports natural repair and regeneration from within. It improves elasticity, hydration, and overall skin texture for a healthier, more youthful look.

The line includes Rejuran Classic for full-face skin restoration and Rejuran I (Eye Treatment), specially formulated for the delicate under-eye area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-soft">
        <div className="container">
          <h2>Begin With Consultation</h2>
          <button className="button" onClick={openBooking}>
            Request Appointment
          </button>
          <div className="contact-links">

      <a
        href="https://www.google.com/maps/place/Shop+17A%2F10+King+St,+Rockdale+NSW+2216,+Australia"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        📍 The Beautyque, Rockdale  
        <br />
        Shop 17A/10 King St, Rockdale NSW 2216
      </a>

      <a
        href="https://www.instagram.com/macyflora_aesthetics"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        📷 Message us on Instagram
      </a>

    </div>
        </div>
      </section>

      {/* BOOKING MODAL */}
      <Modal show={showBookingModal} onClose={closeBooking}>
        <iframe
          src="https://bookings.gettimely.com/macyflora/book"
          title="Macy Flora Aesthetics Booking"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </Modal>

      {/* REJURAN SELECTION MODAL */}
      <ModalFAQs show={showRejuranChoice} onClose={closeFAQ}>
        <div className="faq-modal-content" style={{ textAlign: "center" }}>
          <h2>Select Rejuran Treatment</h2>
          <button className="button" onClick={() => chooseRejuran("rejuran-classic")}>
            Rejuran® Classic
          </button>
          <br /><br />
          <button className="button" onClick={() => chooseRejuran("rejuran-eye")}>
            Rejuran® I (Eye Treatment)
          </button>
        </div>
      </ModalFAQs>

      {/* FAQ MODAL */}
      <ModalFAQs show={showFAQModal} onClose={closeFAQ}>
        <div className="faq-modal-scroll">
          <div className="faq-container">
            {renderFAQContent()}

            <div className="faq-modal-footer">
              <button className="button" onClick={goToFullFAQ}>
                View Full FAQs
              </button>
            </div>
          </div>
        </div>
      </ModalFAQs>
    </>
  );
}

function App() {
  return (
    <>
      <CursorTrail />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQpage />} />
      </Routes>
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
