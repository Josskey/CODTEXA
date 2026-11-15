import { Link } from "react-router-dom";

import "../public/LandingPage.css";
import "./LegalPage.css";

export default function LegalPage() {
  const documents = [
    {
      id: "privacy",
      icon: "/icons/ShieldCheck.svg",
      title: "Политика конфиденциальности",
      path: "/legal/privacy",
    },
    {
      id: "terms",
      icon: "/icons/FileText.svg",
      title: "Пользовательское соглашение",
      path: "/legal/terms",
    },
    {
      id: "personal",
      icon: "/icons/BadgeCheck.svg",
      title: "Согласие на обработку данных",
      path: "/legal/personal-data",
    },
    {
      id: "offer",
      icon: "/icons/ScrollText.svg",
      title: "Публичная оферта",
      path: "/legal/offer",
    },
    {
      id: "cookies",
      icon: "/icons/Cookie.svg",
      title: "Cookies",
      path: "/legal/cookies",
    },
  ];

  return (
    <div className="legal-page">
      <header className="landing-header">
        <div className="landing-logo">
          CODTEXA
        </div>

        <nav className="landing-nav legal-nav">
          <Link to="/">Главная</Link>
        </nav>
      </header>

      <section className="legal-hero">
        <div className="legal-wrapper">

          <span className="legal-line" />

          <h1>
            ПРАВОВЫЕ
            <br />
            ДОКУМЕНТЫ
          </h1>

          <p>
  Все документы, регламентирующие работу
  платформы CODTEXA.
  Политики, соглашения и условия использования.
</p>

          <div className="legal-list">
            {documents.map((doc) => (
              <Link
                key={doc.id}
                to={doc.path}
                className="legal-item"
              >
                <img src={doc.icon} alt="" />

                <span className="legal-title">
                  {doc.title}
                </span>

                <span className="arrow">
                  →
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
