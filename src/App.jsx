import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FAQpage from "./pages/FAQpage"
import Modal from "./components/Modal";
import CursorTrail from "./CursorTrail.jsx";

import wrinkleImg from "./assets/wrinkleImg.jpg";
import volumeImg from "./assets/volumeImg.jpg";
import microImg from "./assets/microImg.jpg";
import rejuranImg from "./assets/rejuranImg.jpg";


function HomePage() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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
            At Macy Web Aesthetics, we focus on subtle, skin-first treatments
            designed to enhance — not change — your natural features.
            Every treatment is tailored, conservative, and guided by
            clinical judgment.
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
            <div className="card">
               <img src={wrinkleImg} alt="Wrinkle Reduction" />
              <h3>Wrinkle Reduction</h3>
              <p>
                Softened lines, natural movement.
Anti-wrinkle treatments are carefully dosed to relax targeted muscles while preserving facial expression.  The goal is refreshed, not frozen results, with balance and facial harmony always prioritised.
              </p>
            </div>

            <div className="card">
              <img src={volumeImg} alt="Lip & Cheek Volume" />
              <h3>Lip & Cheek Volume Restoration</h3>
              <p>
               Structure, balance, and subtle support.
Subtle volumisation of the lips and cheeks to support facial balance and restore structure following individual assessment.
              </p>
            </div>

            <div className="card">
              <img src={microImg} alt="Microneedling" />
              <h3>Microneedling + Topicals</h3>
              <p>
               Medical-grade microneedling stimulates collagen, improves texture, and supports long-term skin health.  This treatment targets acne scarring, fine lines, pigmentation, and overall skin quality using evidence- based techniques and sterile, clinical devices.
              </p>
            </div>

            <div className="card">
              <img src={rejuranImg} alt="Rejuran" />
              <h3>Rejuran® Classic</h3>
              <p>
                Supports gradual skin repair and resilience.
              </p>
            </div>

            <div className="card">
               <img src={rejuranImg} alt="Rejuran" />
              <h3>Rejuran® I (Eye Treatment)</h3>
              <p>
                Designed for delicate eye skin to improve fine lines
                and texture over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-soft">
        <div className="container">
          <h2>Begin With Consultation</h2>
          <p>
            All treatments begin with a personalised consultation
            to assess suitability and goals.
          </p>
          
          <button className="button" onClick={openModal}>
            Request Appointment
          </button>
        </div>
      </section>

      {/* MODAL */}
      <Modal show={showModal} onClose={closeModal}>
        <iframe
          src="https://bookings.gettimely.com/macyflora/book"
          title="Macy Web Aesthetics Booking"
        />
      </Modal>
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
      <Footer />
    </>
  );
}

export default App;
