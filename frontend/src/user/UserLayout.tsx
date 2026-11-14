import { Link, Outlet } from "react-router-dom";
import "./UserLayout.css";
export default function UserLayout() {

  function logout() {

    localStorage.removeItem(
      "userToken"
    );

    window.location.href =
      "/login";

  }

  return (

    <div className="user-layout">

      <aside className="user-sidebar">

        <h1
          style={{
            marginTop: 0,
            marginBottom: 32
          }}
        >
          QR Shirts
        </h1>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}
        >

          <Link
            to="/my-shirts"
            style={{
              textDecoration: "none",
              fontSize: 18
            }}
          >
            👕 Мои футболки
          </Link>

          <Link
            to="/claim"
            style={{
              textDecoration: "none",
              fontSize: 18
            }}
          >
            ➕ Активировать
          </Link>

          <Link
            to="/profile"
            style={{
              textDecoration: "none",
              fontSize: 18
            }}
          >
            👤 Профиль
          </Link>

          <button
  onClick={logout}
  className="logout-button"
>
  🚪 Выйти
</button>

        </nav>

      </aside>

      <main className="user-main">
        <Outlet />
      </main>

    </div>

  );

}