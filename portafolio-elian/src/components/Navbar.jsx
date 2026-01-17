import { useEffect, useState } from "react";

function useTypewriter(text, { typeSpeed = 70, deleteSpeed = 45, holdAfterType = 1400, holdAfterDelete = 500 } = {}) {
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

export default function Navbar() {
  const name = useTypewriter("Elian Rodriguez", { typeSpeed: 75, deleteSpeed: 45, holdAfterType: 1700, holdAfterDelete: 650 });
  const role = useTypewriter("Software Engineering Student", { typeSpeed: 55, deleteSpeed: 35, holdAfterType: 2300, holdAfterDelete: 900 });

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="type-logo" href="#top" aria-label="Ir al inicio">
          <span className="type-block">
            <span className="type-text">
              {name}<span className="type-caret" aria-hidden="true" />
            </span>
            <span className="type-sub">
              {role}<span className="type-caret sub" aria-hidden="true" />
            </span>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#about">sobre mí</a>
          <a href="#projects">proyectos</a>
          <a href="#contact">contacto</a>
        </nav>
      </div>
    </header>
  );
}
