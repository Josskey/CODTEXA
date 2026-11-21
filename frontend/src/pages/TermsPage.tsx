import { Link } from "react-router-dom";
import termsText from "./docs/terms.txt?raw";

import "../public/LandingPage.css";
import "./LegalDocument.css";

export default function TermsPage() {
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
          Пользовательское соглашение
        </h1>

        <div className="legal-text-block">
          {termsText}
        </div>

      </main>

    </div>
  );
}