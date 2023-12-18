import React from "react";
import { Routes, Route } from "react-router-dom";
import "./globals.css";
import SignInForm from "./_auth/forms/SignInForm";
import SignupForm from "./_auth/forms/SignupForm";
import { Home } from "./_root/pages";
import RootLayout from "./_root/RootLayout";
import AuthLayout from "./_auth/AuthLayout";

const App = () => {
  return (
    <main className="h-screen flex">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
