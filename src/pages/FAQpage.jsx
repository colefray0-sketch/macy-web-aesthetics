import FAQ from "../components/FAQ"

function FAQpage () {
  return (
    <section>
      <h1>Frequently Asked Questions</h1>

      {/* ================= MICRONEEDLING ================= */}
      <div className="faq-section">
        <h2>Microneedling</h2>

        <FAQ
          question="What is microneedling?"
          answer={
            <>
              <p>
                Microneedling is a medical aesthetic treatment that uses fine,
                sterile needles to create controlled micro-channels in the skin.
                This process supports the skin’s natural repair response and may
                improve overall skin quality, texture and tone.
              </p>
            </>
          }
        />

        <FAQ
          question="What are the benefits of microneedling?"
          answer={
            <>
              <p>Microneedling may help to:</p>
              <ul>
                <li>Improve skin texture and smoothness</li>
                <li>Support collagen production</li>
                <li>Refine the appearance of pores</li>
                <li>Improve acne scarring and uneven tone</li>
                <li>Enhance brightness and overall appearance</li>
              </ul>
              <p>Results develop gradually as the skin regenerates.</p>
            </>
          }
        />

        <FAQ
          question="What can I expect during treatment?"
          answer={
            <>
              <ul>
                <li>Skin is cleansed and prepared</li>
                <li>Medical-grade needling device is used</li>
                <li>Mild discomfort; numbing cream may be applied</li>
                <li>Treatment takes approximately 30–45 minutes</li>
              </ul>
              <p>Most clients describe the sensation as tolerable.</p>
            </>
          }
        />

        <FAQ
          question="What does the skin look like after?"
          answer={
            <>
              <p>Immediately after treatment:</p>
              <ul>
                <li>Redness (similar to sunburn)</li>
                <li>Warmth or tightness</li>
                <li>Mild swelling in some areas</li>
              </ul>
              <p>These effects usually settle within 24–72 hours.</p>
            </>
          }
        />

        <FAQ
          question="What is the downtime?"
          answer={
            <>
              <ul>
                <li>Redness may last 1–3 days</li>
                <li>Makeup avoided for at least 24 hours</li>
                <li>Skin may feel dry during recovery</li>
              </ul>
              <p>Most clients return to normal activities the next day.</p>
            </>
          }
        />

        <FAQ
          question="How should I prepare?"
          answer={
            <>
              <ul>
                <li>Avoid active skincare 3–5 days prior</li>
                <li>Avoid sun exposure and fake tan</li>
                <li>No active infections or inflamed acne</li>
                <li>Arrive with clean skin if possible</li>
              </ul>
            </>
          }
        />

        <FAQ
          question="How many sessions are needed?"
          answer={
            <>
              <p>Results are cumulative.</p>
              <ul>
                <li>3–6 sessions spaced 4–6 weeks apart</li>
                <li>Maintenance based on skin goals</li>
              </ul>
              <p>Plans are personalised following consultation.</p>
            </>
          }
        />

        <FAQ
          question="Topical Insulin — What is it?"
          answer={
            <>
              <p>
                Insulin is used topically only — never injected.
              </p>
              <p>It may help:</p>
              <ul>
                <li>Support healing</li>
                <li>Calm inflammation</li>
                <li>Assist recovery</li>
                <li>Improve skin quality</li>
              </ul>
              <p>It does NOT affect blood sugar or change facial shape.</p>
            </>
          }
        />

        <FAQ
          question="Exosomes — Why are they used?"
          answer={
            <>
              <p>
                Exosomes are messenger particles that assist skin repair.
              </p>
              <ul>
                <li>Support collagen and elastin</li>
                <li>Improve glow and texture</li>
                <li>Enhance recovery</li>
                <li>Support long-term skin quality</li>
              </ul>
            </>
          }
        />
      </div>

      {/* ================= REJURAN CLASSIC ================= */}
      <div className="faq-section">
        <h2>Rejuran® Classic</h2>

        <FAQ
          question="What is Rejuran Classic?"
          answer={
            <>
              <p>
                Rejuran Classic contains polynucleotides that support skin
                repair and regeneration.
              </p>
            </>
          }
        />

        <FAQ
          question="What does it help with?"
          answer={
            <>
              <ul>
                <li>Improve skin texture</li>
                <li>Support collagen production</li>
                <li>Strengthen the skin barrier</li>
                <li>Improve resilience</li>
                <li>Restore refreshed appearance</li>
              </ul>
              <p>
                It improves skin quality — not volume or contour.
              </p>
            </>
          }
        />

        <FAQ
          question="What it is NOT"
          answer={
            <>
              <ul>
                <li>Not a dermal filler</li>
                <li>Does not add volume</li>
                <li>Does not change facial shape</li>
              </ul>
            </>
          }
        />
      </div>

      {/* ================= REJURAN EYE ================= */}
      <div className="faq-section">
        <h2>Rejuran® I (Eye Treatment)</h2>

        <FAQ
          question="What is Rejuran I?"
          answer={
            <>
              <p>
                A formulation designed specifically for delicate eye skin.
              </p>
            </>
          }
        />

        <FAQ
          question="What does it help with?"
          answer={
            <>
              <ul>
                <li>Fine lines around the eyes</li>
                <li>Skin thickness and strength</li>
                <li>Under-eye texture</li>
                <li>Tired appearance over time</li>
              </ul>
            </>
          }
        />

        <FAQ
          question="What it is NOT"
          answer={
            <>
              <ul>
                <li>Not tear trough filler</li>
                <li>Does not add under-eye volume</li>
                <li>Does not dramatically change eye shape</li>
              </ul>
              <p>
                The goal is subtle, progressive improvement.
              </p>
            </>
          }
        />
      </div>

        {/* ================= REJURAN CLASSIC ================= */}
      <div className="faq-section">
        <h2>General Rejuran FAQs</h2>

        <FAQ
           question="How is Rejuran treatment performed?"
          answer={
            <>
              <p>Administered via small superficial injections.</p>
            </>
          }
        />

         <FAQ
           question="Are there any side effects after Rejuran injections?"
          answer={
            <>
              <p>Temporary redness, swelling, or minor bruising may occur.</p>
            </>
          }
        />

         <FAQ
           question="How soon will I see results from Rejuran?"
          answer={
            <>
              <p>
                Results develop gradually over weeks as the skin repairs.
              </p>
            </>
          }
        />

         <FAQ
           question="Who should avoid Rejuran treatment?"
          answer={
            <>
              <p>
               Not suitable during pregnancy or active infection.
              </p>
            </>
          }
        />
      </div>
    </section>
  )
}

export default FAQpage
