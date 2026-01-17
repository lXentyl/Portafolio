import { IconAward, IconCalendar } from "./Icons";

export default function Certifications() {
  const certs = [
    { title: "Data Engineer", org: "DataCamp", year: "2025" },
    { title: "Python Intermediate", org: "DataCamp", year: "2025" },
    { title: "Web Dreamweaver", org: "CENTU", year: "2021" },
  ];

  return (
    <section className="section" id="certificaciones">
      <div className="container">
        <div className="section-head">
          <h2 className="reveal-up">Certificaciones</h2>
          <p className="reveal-up delay-1">Logros y formación complementaria</p>
        </div>

        <div className="cert-grid">
          {certs.map((c, index) => (
            <article
              key={`${c.title}-${index}`}
              className="cert-card lift reveal-up"
              style={{ animationDelay: `${0.08 + index * 0.08}s` }}
            >
              <div className="cert-top">
                <span className="cert-ic">
                  <IconAward />
                </span>
                <span className="cert-pill">Cert</span>
              </div>

              <h3 className="cert-title">{c.title}</h3>
              <p className="cert-org">{c.org}</p>

              <div className="cert-meta">
                <IconCalendar size={16} />
                <span>{c.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
