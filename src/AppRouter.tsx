import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { BookingPage } from "./components/BookingPage";

export function AppRouter() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  </BrowserRouter>;
}