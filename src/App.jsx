// import Sidebar from "./components/3-sidebar/Sidebar";
import Scroll2Top from "./components/Scroll2Top";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/4-main/Main";
import Contact from "./components/5-contact/Contact";
import Footer from "./components/6-footer/Footer";
import Particle from "./components/Particles";
import Cursor from "./components/Cursor";
import Skills from "./components/3-skills/Skills";

//
export default function App() {
  return (
    <>
      <Cursor />
      <div className="hero-particles absolute z-20">
        <div className="">
          <Particle />
        </div>
      </div>
      <div className="relative z-50 w-screen">
        <Header />
        <Hero />
        <main className="w-full">
          <div className="" id="divider"></div>
          <Skills />
          <Main />
          <Contact />
          <Footer />
          <Scroll2Top />
        </main>
      </div>
    </>
  );
}
