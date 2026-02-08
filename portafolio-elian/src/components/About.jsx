import { IconUser, IconLayers, IconTarget } from "./Icons";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="reveal-up">Sobre Mí</h2>
          <p className="reveal-up delay-1">Perfil, enfoque y lo que puedo aportar en proyectos</p>
        </div>

        <div className="about-grid">
          <article className="glass-card lift reveal-up delay-1">
            <div className="about-top">
              <span className="about-ic"><IconUser /></span>
              <h3>Perfil</h3>
            </div>
            <p className="muted">
              Estudiante de Ingeniería en Software. Me gusta construir páginas con buena estética,
              estructura clara y detalles que elevan la experiencia.
            </p>
          </article>

          <article className="glass-card lift reveal-up delay-2">
            <div className="about-top">
              <span className="about-ic"><IconLayers /></span>
              <h3>Lo que Aporto</h3>
            </div>
            <ul className="clean-list">
              <li>Interfaces modernas y consistentes</li>
              <li>Componentes reutilizables y orden en el código</li>
              <li>Micro-animaciones sutiles (sin recargar)</li>
              <li>Fundamentos de Data Engineering y manejo de datos</li>
              <li>Soporte técnico TI con enfoque profesional</li>
              <li>Organización, documentación y escalabilidad del código</li>
            </ul>
          </article>

          <article className="glass-card lift reveal-up delay-3">
            <div className="about-top">
              <span className="about-ic"><IconTarget /></span>
              <h3>Objetivo</h3>
            </div>
            <p className="muted">
              Seguir creciendo en frontend, sumar experiencia real en equipos y publicar proyectos sólidos
              con calidad visual y técnica.
            </p>
          </article>
        </div>

        <div className="about-callout reveal-up delay-2">
          <div className="about-callout-inner">
            <div className="about-callout-title">Lo que busco ahora</div>
            <p className="muted" style={{ margin: 0 }}>
              Oportunidades para prácticas o proyectos donde pueda aportar diseño, implementación en React y automatización.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
