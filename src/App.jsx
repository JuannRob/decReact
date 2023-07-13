import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Results from "./components/Results";
import Details from "./components/Details";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Header />

      <Container>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/decretos" element={<Results />}>
            <Route path=":decreto" element={<Details />} />
          </Route>
        </Routes>
      </Container>

      <Footer />
    </>
  );
};
