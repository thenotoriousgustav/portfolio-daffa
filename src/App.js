import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TextScroll from "./components/TextScroll";

export default function App() {
  return (
    <div id='bg'>
      <Navbar />
      <Header />
      <TextScroll />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
