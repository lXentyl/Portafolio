import { useEffect, useState } from "react";

function useTypewriter(
  text,
  { typeSpeed = 70, deleteSpeed = 45, holdAfterType = 1400, holdAfterDelete = 500 } = {}
) {
  const [out, setOut] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let t;

    if (!isDeleting) {
      if (out.length < text.length) {
        t = setTimeout(() => setOut(text.slice(0, out.length + 1)), typeSpeed);
      } else {
        t = setTimeout(() => setIsDeleting(true), holdAfterType);
      }
    } else {
      if (out.length > 0) {
        t = setTimeout(() => setOut(text.slice(0, out.length - 1)), deleteSpeed);
      } else {
        t = setTimeout(() => setIsDeleting(false), holdAfterDelete);
      }
    }

    return () => clearTimeout(t);
  }, [out, isDeleting, text, typeSpeed, deleteSpeed, holdAfterType, holdAfterDelete]);

  return out;
}

function Hamburger({ open }) {
  return (
    <span className={`hamburger ${open ? "open" : ""}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export default function Navbar() {
  const name = useTypewriter("Elian Rodriguez", {
    typeSpeed: 75,
    deleteSpeed: 45,
    holdAfterType: 1700,
    holdAfterDelete: 650,
  });

  const role = useTypewriter("Software Engineering Student", {
    typeSpeed: 55,
    deleteSpeed: 35,
    holdAfterType: 2300,
    holdAfterDelete: 900,
  });

  const [open, setOpen] = useState(false);

  // cerrar menú al hacer scroll / cambiar hash
  useEffect(() => {
    const onHash = () => setOpen(false);
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    window.addEventListener("hashchange", onHash);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="type-logo" href="#top" aria-label="Ir al inicio" onClick={() => setOpen(false)}>
          <span className="type-block">
            <span className="type-text">
              {name}
              <span className="type-caret" aria-hidden="true" />
            </span>
            <span className="type-sub">
              {role}
              <span className="type-caret sub" aria-hidden="true" />
            </span>
          </span>
        </a>

        <button
          className="nav-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          <Hamburger open={open} />
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Navegación principal">
          <a href="#about" onClick={() => setOpen(false)}>Sobre Mí</a>
          <a href="#projects" onClick={() => setOpen(false)}>Proyectos</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contacto</a>
        </nav>
      </div>
    </header>
  );
}
