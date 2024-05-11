import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { lazy, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import { RestrictedRoute } from "./RestrictedRoute.jsx";
import { PrivateRoute } from "./PrivateRoute.jsx";
import { refreshUser } from "./redux/auth/operations.js";
import { selectIsRefreshing } from "./redux/auth/selectors.js";

// import { useEffect } from "react";
// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList/ContactList";
// import SearchBox from "./components/SearchBox/SearchBox";
// import { nanoid } from "nanoid";
// import { useState } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const RegisterPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage.jsx")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
