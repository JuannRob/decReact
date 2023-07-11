import React, { useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import { fetchData } from "./service/dataFetch";

export const App = () => {
  useEffect(() => {
    fetchData();
  }, []);

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
