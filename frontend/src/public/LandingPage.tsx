import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";
import "./effects.css";

// @ts-ignore
import { initQrEffects } from "./effects.js";

import { FaVk } from "react-icons/fa";
export default function LandingPage() {
  useEffect(() => {


  const cleanup = initQrEffects();

  return cleanup;
}, []);
  return (
    <div className="landing">

      <header className="landing-header">

        <div className="landing-logo">
  <img
    src="/favicon.svg"
    alt="CODTEXA"
    className="brand-logo"
  />

  <span className="brand-name">
    CODTEXA
  </span>
</div>

        <nav className="landing-nav landing-nav-home">
  <a href="#about">О продукте</a>
  <a href="#how">Как это работает</a>
  <a href="#possibilities">Возможности</a>
  <a href="#audience">Для кого</a>
</nav>

        <div className="landing-actions">
          <Link
            to="/login"
            className="landing-login"
          >
            Вход
          </Link>

          <Link
            to="/register"
            className="landing-register"
          >
            Регистрация
          </Link>
        </div>

      </header>

      <section className="hero qrfx-hero">

        <div className="hero-overlay" />

        <img
  src="/images/hero-shirt.webp"
  className="hero-bg"
  alt="CODTEXA"
  data-glitch
/>

        <div className="hero-content">

          <h1 data-glitch>
  WEAR.
  <br />
  SCAN.
  <br />
  EXPLORE.
</h1>

          <h2>
            Больше, чем просто футболка.
          </h2>

          <p>
            Один QR-код.
            Безграничные возможности.
            Ваш цифровой профиль всегда под рукой.
          </p>

          <a
  href="https://vk.ru/codtexa"
  target="_blank"
  rel="noopener noreferrer"
  className="hero-button"
>
  Купить футболку →
</a>

<div className="hero-meta">

  <div className="hero-line" />

  <span>
    CODTEXA
  </span>

</div>

        </div>

      </section>

      <section
        id="about"
        className="block about"
      >

        <div className="block-image">

          <img
            src="/images/cta-placeholder.webp"
            alt=""
          />

        </div>

        <div className="block-content">

          <span className="section-number">
            01 — О ПРОДУКТЕ
          </span>

          <h2>
            Футболка
            <br />
            с QR-кодом
          </h2>

          <p>
            Каждая футболка содержит
            уникальный QR-код, который
            подтверждает владение и открывает
            доступ к вашему цифровому профилю.
          </p>

          <div className="advantages">

            <div>
  <img
    src="/icons/Infinity.svg"
    alt=""
    className="advantage-icon"
  />

  <span>
    Безлимитная
    смена данных
  </span>
</div>

<div>
  <img
    src="/icons/Zap.svg"
    alt=""
    className="advantage-icon"
  />

  <span>
    Быстрая
    активация
  </span>
</div>

<div>
  <img
    src="/icons/ShieldCheck.svg"
    alt=""
    className="advantage-icon"
  />

  <span>
    Защита
    подлинности
  </span>
</div>

          </div>

        </div>

      </section>

      <section
  id="how"
  className="split-section"
>

  <div className="split-left">

    <span className="section-number">
      02 — КАК ЭТО РАБОТАЕТ
    </span>

    <h2>
      Легко.
      <br />
      Быстро.
      <br />
      Удобно.
    </h2>

    <p>
      Активируйте футболку за несколько
      минут и управляйте своим цифровым
      профилем через личный кабинет.
    </p>

    <Link
      to="/register"
      className="hero-button"
    >
      Начать →
    </Link>

  </div>

  <div className="cards">

  <div className="card-box">

  <h3>1</h3>

  <p>Получите футболку</p>

  <img
    src="/icons/Shirt.svg"
    alt=""
    className="step-icon"
  />

</div>

  <div className="flow-arrow">
    →
  </div>

  <div className="card-box">
  <h3>2</h3>

  <p>Введите код активации</p>

  <img
    src="/icons/CreditCard.svg"
    alt=""
    className="step-icon"
  />
</div>

  <div className="flow-arrow">
    →
  </div>

  <div className="card-box">
  <h3>3</h3>

  <p>Активируйте изделие</p>

  <img
    src="/icons/Link.svg"
    alt=""
    className="step-icon"
  />
</div>


  <div className="flow-arrow">
    →
  </div>

  <div className="card-box">
  <h3>4</h3>

  <p>Управляйте профилем</p>

  <img
    src="/icons/ScanQrCode.svg"
    alt=""
    className="step-icon"
  />
</div>

  </div>

</section>

      <section id="possibilities" 
      className="split-section">

  <div className="split-left">

    <span className="section-number">
      03 — ВОЗМОЖНОСТИ
    </span>

    <h2>
      Что можно связать
      с QR-кодом?
    </h2>

    <p>
      CODTEXA позволяет объединить
      физическую одежду с цифровым
      контентом и данными владельца.
    </p>

    <a
  href="https://vk.ru/codtexa"
  target="_blank"
  rel="noopener noreferrer"
  className="hero-button"
>
  Узнать больше →
</a>

  </div>

  <div className="split-right">

    <div className="features-grid">

      <div className="feature">
    <img
      src="/icons/Send.svg"
      alt=""
      className="feature-icon"
    />
    <span>Социальные сети</span>
  </div>

  <div className="feature">
    <img
      src="/icons/Globe.svg"
      alt=""
      className="feature-icon"
    />
    <span>Личный сайт и портфолио</span>
  </div>

  <div className="feature">
    <img
      src="/icons/Music4.svg"
      alt=""
      className="feature-icon"
    />
    <span>Музыка и афиша мероприятий</span>
  </div>

  <div className="feature">
    <img
      src="/icons/BriefcaseBusiness.svg"
      alt=""
      className="feature-icon"
    />
    <span>Профессиональная визитка</span>
  </div>

  <div className="feature">
    <img
      src="/icons/BadgePercent.svg"
      alt=""
      className="feature-icon"
    />
    <span>Промо-акции и реклама</span>
  </div>

  <div className="feature">
    <img
      src="/icons/Plus.svg"
      alt=""
      className="feature-icon"
    />
    <span>И многое другое...</span>
  </div>

    </div>

  </div>

</section>

      <section id="audience"
  className="split-section">

  <div className="split-left">

    <span className="section-number">
      04 — ДЛЯ КОГО
    </span>

    <h2>
      Для всех,
      кто ценит
      подлинность
    </h2>

    <p>
      Для создателей, брендов,
      коллекционеров и всех, кто хочет
      связать реальный продукт
      с цифровым пространством.
    </p>

  </div>

  <div className="split-right">

    <div className="audience-grid">

  <div
    className="audience-card"
    style={{
      backgroundImage: "url('/images/collector.webp')"
    }}
  >
    Коллекционеры
  </div>

  <div
    className="audience-card"
    style={{
      backgroundImage: "url('/images/blogger.webp')"
    }}
  >
    Блогеры
  </div>

  <div
    className="audience-card"
    style={{
      backgroundImage: "url('/images/musician.webp')"
    }}
  >
    Музыканты
  </div>

  <div
    className="audience-card"
    style={{
      backgroundImage: "url('/images/spicer.webp')"
    }}
  >
    Спикеры
  </div>

  <div
    className="audience-card"
    style={{
      backgroundImage: "url('/images/actor.webp')"
    }}
  >
    Модели
  </div>

</div>

  </div>

</section>


      <section className="cta">

  <div className="cta-image">

  <img
    src="/images/QR.webp"
    alt="CODTEXA"
  />

</div>

  <div className="cta-content">

    <h2>
      CODTEXA
    </h2>

    <h3>
      Технология. Стиль. Свобода.
    </h3>

    <p>
      Присоединяйтесь к новому поколению
      умной одежды.
    </p>

    <a
  href="https://vk.ru/codtexa"
  target="_blank"
  rel="noopener noreferrer"
  className="hero-button"
>
  Купить сейчас →
</a>

  </div>

</section>

      <footer id="contacts" className="footer">
  <div className="footer-inner">

    <div className="footer-top">

      <div className="footer-brand">
  <img
    src="/favicon.svg"
    alt="CODTEXA"
    className="brand-logo"
  />

  <span className="brand-name">
    CODTEXA
  </span>
</div>

      <div className="footer-center">

        <div className="footer-links">

          <Link to="/faq">
            FAQ
          </Link>

          <Link to="/legal">
            Правовые документы
          </Link>

        </div>

      </div>

      <div className="footer-socials">

        <a
          href="https://vk.ru/codtexa"
          target="_blank"
          rel="noreferrer"
          className="vk-link"
        >
          <FaVk />
        </a>

      </div>

    </div>

    <div className="footer-bottom">

      <div className="footer-copyright">
        © 2026 CODTEXA. Все права защищены.
      </div>

      <div className="footer-slogan">
        WEAR. SCAN. EXPLORE.
      </div>

    </div>

  </div>
</footer>

    </div>
  );
}