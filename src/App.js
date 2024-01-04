import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Deals from "./components/Deals";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Home from "./components/Home";
import How from "./components/How";
import Nav from "./components/Nav";
import Why  from "./components/Why";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <How />
      <Deals />
      <Why />
      <Faq />
      <Banner />
      <Contact /> 
      <Footer />
    </>
  );
}

export default App;
