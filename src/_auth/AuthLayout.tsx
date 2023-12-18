import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const is_Authenticated = false;
  return (
    <>
      {is_Authenticated ? (
        <>
          <Navigate to="/" />
        </>
      ) : (
        <>
          <section className="flex flex-1 items-center justify-center py-10">
            <Outlet />
          </section>
        </>
      )}
    </>
  );
};

export default AuthLayout;
