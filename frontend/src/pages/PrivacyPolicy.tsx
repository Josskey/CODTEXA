import { Link } from "react-router-dom";
import "../public/LandingPage.css";
import "./LegalDocument.css";

export default function PrivacyPolicy() {
  return (
    <div className="legal-document-page">

      <header className="landing-header">

        <div className="landing-logo">
          QR
          <br />
          T-SHIRT
        </div>

        <nav className="landing-nav">
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
          Политика конфиденциальности
        </h1>

        <p className="document-date">
          Последнее обновление: 11.11.2026
        </p>

        <section>

          <h2>1. Общие положения</h2>

          <p>
            Настоящая Политика конфиденциальности
            регулирует обработку персональных данных
            пользователей платформы QR T-SHIRT.
          </p>

        </section>

        <section>

          <h2>2. Персональные данные</h2>

          <p>
            Сервис может обрабатывать данные,
            предоставленные пользователем при
            регистрации, активации изделия
            и использовании платформы.
          </p>

        </section>

        <section>

          <h2>3. Хранение информации</h2>

          <p>
            Данные хранятся в объёме,
            необходимом для предоставления
            функциональности платформы.
          </p>

        </section>

      </main>

    </div>
  );
}