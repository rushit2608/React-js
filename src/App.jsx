import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import CustomerReview from "./components/CustomerReview/CustomerReview";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App(){
  return(
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subtitle='OUR PRODUCTS' title='what we offer'></Title>
        <Products></Products>
        <About></About>
        <Title subtitle='CUSTOMER REVIEW' title='See what our Customers Say about us '></Title>
        <CustomerReview></CustomerReview>
        <Title subtitle='CUSTACT US' title='Get in Touch'></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}