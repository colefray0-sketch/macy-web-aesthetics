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
import rejuranImg from "./assets/rejuranImg.jpg";

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
            <p><strong>How long does it last?</strong><br />Results typically last 3–4 months.</p>
            <p><strong>When will I see results?</strong><br />You may notice improvement within 3–7 days.</p>
            <p><strong>Will I look frozen?</strong><br />No — subtle, natural movement is prioritised.</p>
          </>
        );

      case "volume":
        return (
          <>
            <h2>Lip & Cheek Volume FAQs</h2>
            <p><strong>How long does filler last?</strong><br />6–18 months depending on area treated.</p>
            <p><strong>Is there swelling?</strong><br />Mild swelling may occur for a few days.</p>
            <p><strong>Will it look natural?</strong><br />Yes — balance and facial harmony are prioritised.</p>
          </>
        );

      case "micro":
        return (
          <>
            <h2>Microneedling FAQs</h2>
            <p><strong>Is there downtime?</strong><br />Mild redness for 1–3 days.</p>
            <p><strong>How many sessions are needed?</strong><br />Typically 3–6 sessions for optimal results.</p>
            <p><strong>What does it treat?</strong><br />Acne scars, pigmentation, fine lines, and texture.</p>
          </>
        );

      case "rejuran-classic":
        return (
          <>
            <h2>Rejuran Classic FAQs</h2>
            <p><strong>What does it improve?</strong><br />Skin elasticity, texture, and resilience.</p>
            <p><strong>How many sessions?</strong><br />Usually 3 sessions spaced 4 weeks apart.</p>
            <p><strong>Is there downtime?</strong><br />Mild redness or small injection marks may appear temporarily.</p>
          </>
        );

      case "rejuran-eye":
        return (
          <>
            <h2>Rejuran Eye Treatment FAQs</h2>
            <p><strong>What area is treated?</strong><br />Delicate under-eye skin.</p>
            <p><strong>What does it target?</strong><br />Fine lines, crepey texture, and thinning skin.</p>
            <p><strong>Is swelling expected?</strong><br />Mild swelling may occur for 24–48 hours.</p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* HERO */}
      <section id="home" className="section-main">
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
            </div>

            <div className="card" onClick={() => openFAQ("volume")}>
              <img src={volumeImg} alt="Lip & Cheek Volume" />
              <h3>Lip & Cheek Volume Restoration</h3>
            </div>

            <div className="card" onClick={() => openFAQ("micro")}>
              <img src={microImg} alt="Microneedling" />
              <h3>Microneedling + Topicals</h3>
            </div>

            <div className="card" onClick={() => openFAQ("rejuran")}>
              <img src={rejuranImg} alt="Rejuran" />
              <h3>Rejuran</h3>
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
            Rejuran Classic
          </button>
          <br /><br />
          <button className="button" onClick={() => chooseRejuran("rejuran-eye")}>
            Rejuran Eye Treatment
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
