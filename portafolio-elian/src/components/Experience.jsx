import { IconTools, IconSpark } from "./Icons";

export default function Experience() {
  const items = [
    {
      role: "Operador",
      company: "Ricoh Dominicana",
      time: "May 2025 - Actual",
      icon: <IconTools />,
      tags: ["Operaciones", "Procesos", "Responsabilidad"],
      bullets: [
        "Apoyo operativo y seguimiento de tareas diarias.",
        "Enfoque en calidad y orden en los procesos.",
        "Comunicación clara y trabajo en equipo.",
      ],
    },
    {
      role: "Soporte Técnico",
      company: "Opitel",
      time: "Jun 2024 – Sept 2024",
      icon: <IconSpark />,
      tags: ["Soporte", "Resolución", "Atención al Cliente"],
      bullets: [
        "Resolución de incidencias y asistencia a usuarios.",
        "Diagnóstico básico de equipos y soporte en sistemas.",
        "Documentación y comunicación de soluciones.",
      ],
    },
  ];

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head">
          <h2 className="reveal-up">Experiencia</h2>
          <p className="reveal-up delay-1">Roles reales y responsabilidades clave</p>
        </div>

        <div className="exp-timeline">
          {items.map((x, index) => (
            <article
              key={`${x.company}-${index}`}
              className="exp-item reveal-up"
              style={{ animationDelay: `${0.08 + index * 0.10}s` }}
            >
              <div className="exp-rail">
                <div className="exp-dot" />
                <div className="exp-line" />
              </div>

              <div className="exp-card lift">
                <div className="exp-top">
                  <div className="exp-icon">{x.icon}</div>

                  <div className="exp-title">
                    <h3>{x.role}</h3>
                    <div className="exp-sub">
                      <span className="exp-company">{x.company}</span>
                      <span className="soft-pill">{x.time}</span>
                    </div>
                  </div>
                </div>

                <div className="exp-tags">
                  {x.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <ul className="exp-list">
                  {x.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
