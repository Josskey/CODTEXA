import { Link } from "react-router-dom";
import offerText from "./docs/offer.txt?raw";

import "../public/LandingPage.css";
import "./LegalDocument.css";

export default function OfferPage() {
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
          Публичная оферта
        </h1>

        <div className="legal-text-block">
          {offerText}
        </div>

      </main>

    </div>
  );
}