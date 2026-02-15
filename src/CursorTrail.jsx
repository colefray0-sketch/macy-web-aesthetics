import React, { useEffect } from "react";
import "./CursorTrail.css";

function CursorTrail() {
  useEffect(() => {
    const createParticle = (x, y) => {
      const particle = document.createElement("div");
      particle.className = "cursor-particle";

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      // randomize size slightly
      const size = Math.random() * 4 + 3; // 3px to 7px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // randomize movement direction
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 25 + 5; // increase spread for more visible trail
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      particle.style.setProperty("--dx", `${dx}px`);
      particle.style.setProperty("--dy", `${dy}px`);

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1200); // longer duration so trail lingers slightly
    };

    const handleMouseMove = (e) => {
      // create 3-4 particles per move for denser trail
      for (let i = 0; i < 3; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}

export default CursorTrail;
