import { IconCode, IconTools } from "./Icons";

const groups = [
  { title: "Frontend", icon: <IconCode />, items: ["React", "Vite", "HTML5", "CSS"] },
  { title: "Data / Backend", icon: <IconCode />, items: ["Python", "SQL"] },
  { title: "Herramientas", icon: <IconTools />, items: ["n8n", "GitHub", "Visual Studio Code", "Visual Studio"] },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <h2 className="reveal-up">Skills & Herramientas</h2>
          <p className="reveal-up delay-1">Tecnologías que uso para crear proyectos sólidos</p>
        </div>

        <div className="skills-grid">
          {groups.map((g, index) => (
            <article
              key={g.title}
              className="glass-card lift reveal-up"
              style={{ animationDelay: `${0.08 + index * 0.08}s` }}
            >
              <div className="card-top">
                <h3 className="card-title">
                  <span className="card-ic">{g.icon}</span>
                  {g.title}
                </h3>
                <span className="soft-pill">Nivel Intermedio</span>
              </div>

              <div className="chips-wrap">
                {g.items.map((it) => (
                  <span key={it} className="chip big">{it}</span>
                ))}
              </div>

              <div className="progress">
                <span className="bar" />
              </div>
            </article>
          ))}
        </div>

        <div className="callout reveal-up delay-2">
          <div className="callout-inner">
            <h3>Idiomas</h3>
            <div className="callout-row">
              <span className="pill strong">Español: Nativo</span>
              <span className="pill strong">Inglés: B2 Intermedio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
