import { useMemo, useState } from "react";
import { IconLink, IconMail, IconPhone, IconCopy, IconCheck } from "./Icons";

export default function Projects() {
  const projects = [
    {
      title: "Baramos Ingeniería SRL",
      desc: "Sitio web moderno con estructura clara, enfoque corporativo y presentación profesional.",
      img: "/proyecto1.png",
      link: "https://baramosingenieria.net/",
      tags: ["React", "UI", "Landing"],
    },
    {
      title: "Zyntex AI Solutions",
      desc: "Landing en React + Vite con estilo oscuro, secciones limpias y enfoque en automatización.",
      img: "/proyecto2.png",
      link: "https://zyntexaisolutions.vercel.app/",
      tags: ["React", "Vite", "Frontend"],
    },
  ];

  const email = "Elianmercedes24@gmail.com";
  const phone = "829-562-1043";

  const mailto = useMemo(() => `mailto:${email}`, [email]);
  const tel = useMemo(() => `tel:${phone.replace(/[^0-9+]/g, "")}`, [phone]);

  const [copied, setCopied] = useState("");

  async function copyText(type, value) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(type);
      setTimeout(() => setCopied(""), 1200);
    } catch {
      // fallback
      setCopied("");
      window.prompt("Copia esto:", value);
    }
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="reveal-up">Proyectos</h2>
          <p className="reveal-up delay-1">Las 2 páginas que he creado hasta ahora</p>
        </div>

        <div className="grid">
          {projects.map((p, index) => (
            <article
              key={`${p.title}-${index}`}
              className="card lift reveal-up"
              style={{ animationDelay: `${0.08 + index * 0.08}s` }}
            >
              <div className="thumb">
                <img src={p.img} alt={p.title} />
              </div>

              <div className="card-body">
                <h3>{p.title}</h3>
                <p className="muted">{p.desc}</p>

                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <div className="card-actions">
                  <a className="btn small primary" href={p.link} target="_blank" rel="noreferrer">
                    <IconLink /> Ver Proyecto
                  </a>
                  <a className="btn small ghost" href="#contact">
                    <IconMail /> Contacto
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CONTACTO MEJORADO */}
        <div id="contact" className="contact">
          <div className="contact-box lift reveal-up">
            <div className="contact-head">
              <div>
                <h3>Contacto</h3>
                <p className="muted">Si quieres colaborar o tienes una oportunidad, escríbeme</p>
              </div>
              <span className="contact-badge">Disponible</span>
            </div>

            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-ic">
                  <IconMail />
                </div>
                <div className="contact-meta">
                  <div className="contact-label">Email</div>
                  <div className="contact-value">{email}</div>
                </div>
                <div className="contact-actions2">
                  <button
                    className="icon-btn"
                    onClick={() => copyText("email", email)}
                    aria-label="Copiar email"
                  >
                    {copied === "email" ? <IconCheck /> : <IconCopy />}
                  </button>
                  <a className="icon-btn" href={mailto} aria-label="Enviar email">
                    <IconLink />
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-ic">
                  <IconPhone />
                </div>
                <div className="contact-meta">
                  <div className="contact-label">Teléfono</div>
                  <div className="contact-value">{phone}</div>
                </div>
                <div className="contact-actions2">
                  <button
                    className="icon-btn"
                    onClick={() => copyText("phone", phone)}
                    aria-label="Copiar teléfono"
                  >
                    {copied === "phone" ? <IconCheck /> : <IconCopy />}
                  </button>
                  <a className="icon-btn" href={tel} aria-label="Llamar">
                    <IconLink />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <a className="btn primary" href={mailto}>
                <IconMail /> Enviar Correo
              </a>
              <a className="btn ghost" href={tel}>
                <IconPhone /> Llamar
              </a>
              <a className="btn shine" href="/cv.pdf" target="_blank" rel="noreferrer">
                <IconLink /> Abrir CV
              </a>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}
