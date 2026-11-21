import { Link } from "react-router-dom";
import privacyText from "./docs/privacy-policy.txt?raw";

import "../public/LandingPage.css";
import "./LegalDocument.css";

export default function PrivacyPolicy() {
  return (
    <div className="legal-document-page">

      <header className="landing-header">

        <div className="landing-logo">
          CODTEXA
        </div>

        <nav className="landing-nav document-nav">
          <Link to="/legal">
            ← Все документы
          </Link>
        </nav>

      </header>

      <main className="legal-document">

        <span className="document-label">
          ПРАВОВОЙ ДОКУМЕНТ
        </span>

        <h1>
          Политика обработки персональных данных
        </h1>

        <p className="document-date">
          Дата публикации: [указать дату]
        </p>

        <div
          className="legal-text-block"
        >
          {privacyText}
        </div>

      </main>

    </div>
  );
}