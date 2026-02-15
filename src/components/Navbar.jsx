import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const location = useLocation()

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      window.location.href = "/#" + id
    } else {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <nav className="navbar">
      <div className="logo">Macy Flora Aesthetics </div>

      <div className="nav-links">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("services")}>Treatments</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
        <Link to="/faq">FAQs</Link>
      </div>
    </nav>
  )
}

export default Navbar
