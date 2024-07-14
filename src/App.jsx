// import Sidebar from "./components/3-sidebar/Sidebar";
import Scroll2Top from "./components/Scroll2Top";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/4-main/Main";
import Contact from "./components/5-contact/Contact";
import Footer from "./components/6-footer/Footer";
import Particle from "./components/Particles";
import Cursor from "./components/Cursor";

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
      <div className="relative z-50">
        <Header />
        <Hero />
        <main className="">
          <div className="" id="divider"></div>
          <Main  />
          {/* <div className="" id="divider"></div> */}
          <Contact />
          {/* <div className="" id="divider"></div> */}
          <Footer />
          <Scroll2Top />
        </main>
      </div>
    </>
  );
}
