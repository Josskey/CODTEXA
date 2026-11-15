import { useState } from "react";
import { Link } from "react-router-dom";

import "../public/LandingPage.css";
import "./FaqPage.css";

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const faqItems = [
    {
      id: "activation",
      question: "Как активировать футболку?",
      answer:
        "Войдите в личный кабинет, откройте раздел активации и введите код активации, указанный на изделии.",
    },
    {
      id: "change-data",
      question: "Как изменить данные QR-кода?",
      answer:
        "После активации изделия откройте профиль изделия и обновите информацию, которая должна отображаться после сканирования QR-кода.",
    },
    {
      id: "transfer",
      question: "Можно ли передать футболку другому человеку?",
      answer:
        "Да. Для этого отвяжите изделие от текущего профиля и выполните привязку к новому владельцу.",
    },
    {
      id: "scan",
      question: "Что происходит после сканирования?",
      answer:
        "После сканирования открывается цифровой профиль изделия и данные, которые указал владелец.",
    },
    {
      id: "profile",
      question: "Как восстановить доступ к профилю?",
      answer:
        "Используйте функцию восстановления пароля на странице входа или обратитесь в службу поддержки.",
    },
  ];

  return (
    <div className="faq-page">

      <header className="landing-header">
        <div className="landing-logo">
          QR
          <br />
          T-SHIRT
        </div>

        <nav className="landing-nav legal-nav">
          <Link to="/">Главная</Link>
        </nav>
      </header>

      <section className="faq-hero">

        <div className="faq-wrapper">

          <span className="faq-line" />

          <h1>
            FAQ
            <br />
            ВОПРОСЫ И ОТВЕТЫ
          </h1>

          <p>
            Ответы на самые популярные вопросы
            пользователей платформы CODTEXA.
          </p>

          <div className="faq-list">

            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className="faq-item"
              >

                <button
                  className="faq-card"
                  onClick={() =>
                    setOpenFaq(
                      openFaq === item.id
                        ? null
                        : item.id
                    )
                  }
                >

                  <span className="faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="faq-question">
                    {item.question}
                  </span>

                  <span className="faq-arrow">
                    {openFaq === item.id
                      ? "−"
                      : "+"}
                  </span>

                </button>

                {openFaq === item.id && (
                  <div className="faq-answer">
                    {item.answer}
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>

      </section>
    </div>
  );
}