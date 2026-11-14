import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./admin/LoginPage";
import ProtectedRoute from "./admin/ProtectedRoute";

import AdminLayout from "./admin/AdminLayout";
import DashboardPage from "./admin/DashboardPage";

import UsersPage from "./admin/UsersPage";
import UserDetailsPage from "./admin/UserDetailsPage";

import ShirtsPage from "./admin/ShirtsPage";
import ShirtDetailsPage from "./admin/ShirtDetailsPage";

import BatchesPage from "./admin/BatchesPage";
import BatchDetailsPage from "./admin/BatchDetailsPage";

import UserLoginPage from "./user/UserLoginPage";
import UserRegisterPage from "./user/UserRegisterPage";

import UserProtectedRoute from "./user/UserProtectedRoute";
import MyShirtsPage from "./user/MyShirtsPage";

import ClaimShirtPage from "./user/ClaimShirtPage";
import UserShirtPage from "./user/UserShirtPage";

import ProfilePage from "./user/ProfilePage";
import UserLayout from "./user/UserLayout";

import ActivateInfoPage from "./user/ActivateInfoPage";
import LandingPage from "./public/LandingPage";

import LegalPage from "./pages/LegalPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsPage from "./pages/TermsPage";
import PersonalDataPage from "./pages/PersonalDataPage";
import OfferPage from "./pages/OfferPage";
import CookiesPage from "./pages/CookiesPage";
import FaqPage from "./pages/FaqPage";

export default function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<LandingPage />}
        
      />
    <Route
        path="/legal"
        element={<LegalPage />}
      />

      <Route
  path="/legal/privacy"
  element={<PrivacyPolicy />}
/>

<Route
  path="/legal/terms"
  element={<TermsPage />}
/>

<Route
  path="/legal/personal-data"
  element={<PersonalDataPage />}
/>

<Route
  path="/legal/offer"
  element={<OfferPage />}
/>

<Route
  path="/legal/cookies"
  element={<CookiesPage />}
/>

<Route
  path="/faq"
  element={<FaqPage />}
/>
      
      {/* Admin Login */}

      <Route
        path="/adm/login"
        element={<LoginPage />}
      />

      {/* User Login */}

      <Route
        path="/login"
        element={<UserLoginPage />}
      />

      {/* User Register */}

      <Route
        path="/register"
        element={<UserRegisterPage />}
      />
<Route
  path="/activate-info"
  element={<ActivateInfoPage />}
/>

      {/* User Area */}

      <Route
  element={
    <UserProtectedRoute>
      <UserLayout />
    </UserProtectedRoute>
  }
>

  <Route
    path="/my-shirts"
    element={<MyShirtsPage />}
  />

  <Route
    path="/my-shirts/:publicId"
    element={<UserShirtPage />}
  />

  <Route
    path="/profile"
    element={<ProfilePage />}
  />

  <Route
    path="/claim"
    element={<ClaimShirtPage />}
  />

</Route>

      {/* Admin Area */}

      <Route
        path="/adm"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >

        <Route
          path="dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="users"
          element={<UsersPage />}
        />

        <Route
          path="users/:id"
          element={<UserDetailsPage />}
        />

        <Route
          path="shirts"
          element={<ShirtsPage />}
        />

        <Route
          path="shirts/:id"
          element={<ShirtDetailsPage />}
        />

        <Route
          path="batches"
          element={<BatchesPage />}
        />

        <Route
          path="batches/:id"
          element={<BatchDetailsPage />}
        />

      </Route>

    </Routes>

  );

}