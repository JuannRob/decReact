import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Results from "./components/Results";
import Details from "./components/Details";
import { Container, Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#252d35",
            marginY: "20px",
            padding: "10px",
          }}
        >
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/decretos" element={<Results />}>
              <Route path=":decreto" element={<Details />} />
            </Route>
          </Routes>
        </Box>
      </Container>

      <Footer />
    </div>
  );
};
