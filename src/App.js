import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Experience } from "./components/experience/Experience";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Services } from "./components/services/Services";
import { Testimonials } from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Contact />
      <Experience />
      <Services />
      <Testimonials />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
