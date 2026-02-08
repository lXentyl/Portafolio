import { IconSpark, IconLink, IconMail, IconCode } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="hero hero-pro">
      <div className="container hero-grid2">
        <div className="hero-left">
          <p className="badge fade-in">
            <span className="badge-ic"><IconSpark size={16} /></span>
            Portafolio
          </p>

          <h1 className="title slide-up delay-1">
            Diseño Limpio, Código Claro y{" "}
            <span className="grad">Estilo Elegante</span>
          </h1>

          <p className="subtitle slide-up delay-2">
            Soy <strong>Elian Rodriguez</strong>, estudiante de Ingeniería en Software.
            Me enfoco en construir interfaces modernas, rápidas y bien presentadas.
          </p>

          <div className="cta slide-up delay-3">
            <a className="btn primary" href="#projects">
              <IconLink /> Ver Proyectos
            </a>
            <a className="btn ghost" href="#contact">
              <IconMail /> Contactarme
            </a>
            <a className="btn shine" href="/cv.pdf" target="_blank" rel="noreferrer">
              <IconLink /> Descargar CV
            </a>
          </div>

          <div className="hero-badges slide-up delay-3">
            <span className="mini-pill">Frontend • React</span>
            <span className="mini-pill">Chats de AI integradas en paginas webs</span>
            <span className="mini-pill">Soporte Técnico</span>
          </div>

          <div className="hero-stats slide-up delay-3">
            <div className="stat-card">
              <div className="stat-k">Enfoque</div>
              <div className="stat-v">UI Moderna</div>
            </div>
            <div className="stat-card">
              <div className="stat-k">Stack</div>
              <div className="stat-v">React + Vite</div>
            </div>
            <div className="stat-card">
              <div className="stat-k">Objetivo</div>
              <div className="stat-v">Proyectos Reales</div>
            </div>
          </div>
        </div>

        <div className="hero-right slide-up delay-2">
          <div className="hero-window">
            <div className="hero-window-top">
              <span className="dot d1" />
              <span className="dot d2" />
              <span className="dot d3" />
              <span className="hero-window-title">
                <IconCode size={16} /> Resumen
              </span>
            </div>

            <div className="hero-window-body">
              <div className="hw-block">
                <div className="hw-title">Lo que hago</div>
                <ul className="hero-list">
                  <li>Landing pages y portafolios</li>
                  <li>UI elegante + micro-animaciones</li>
                  <li>Integración de AI</li>
                </ul>
              </div>

              <div className="hw-block" style={{ marginTop: 14 }}>
                <div className="hw-title">Disponible para</div>
                <div className="hero-availability">
                  <span className="pill strong">Prácticas</span>
                  <span className="pill strong">Proyectos</span>
                  <span className="pill strong">Freelance</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-glow" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
