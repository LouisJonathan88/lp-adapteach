import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Home } from "./screens/Home";
import { Pricing } from "./screens/PricingPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
                <Routes>

                  <Route
                    path="/home"
                    element={
                        <Home />
                    }
                  />

                  <Route
                    path="/"
                    element={<Navigate to="/home" replace />}
                  />

                    <Route
                    path="/pricing"
                    element={
                        <Pricing />
                    }
                  />
                </Routes>
                <Toaster
                  position="top-right"
                  toastOptions={{
                    duration: 4000,
                    style: {
                      background: "#363636",
                      color: "#fff",
                    },
                    success: {
                      style: {
                        background: "#10b981",
                      },
                    },
                    error: {
                      style: {
                        background: "#ef4444",
                      },
                    },
                  }}
                />
          
        </BrowserRouter>
  </StrictMode>
);
