import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />

      <main>
        <div className="flex min-h-screen items-center justify-center bg-main-background">
          <Search />
        </div>
      </main>

      <Footer />
    </>
  );
};
