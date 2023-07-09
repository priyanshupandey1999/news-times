import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { CircularProgress, Box } from "@mui/material";

const Home = lazy(() => import("./../pages/HomePage/HomePage"));
const About = lazy(() => import("./../pages/About/About"));
// const Products = lazy(() => import("./Pages/Products"));
// const ProductDetails = lazy(() => import("./Pages/ProductDetails"));
const NoMatch = lazy(() => import("./../pages/NoMatch/NoMatch"));

function Routing() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <Box className="container" sx={{ height: "100%", width: "100%" }}>
            <CircularProgress />
          </Box>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} /> */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default Routing;
