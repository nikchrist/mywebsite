import React, { useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultDevice, { Mobile, Desktop } from "./components/Devices";
import MainNav from "./components/Navigations/MainNav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Logo from "./components/Logo";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import Footer from "./components/Footer";
import Single from "./components/Projects/Single";
import MobileMainNav from "./components/Navigations/MobileMainNav";
function App() {
  const particlesInit = useCallback(async function (engine) {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async function (container) {
    await console.log(container);
  }, []);
  return (
    <BrowserRouter>
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "rgba(0,0,0,0.2)",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.7,
              },
            },
          },
          particles: {
            color: {
              value: "#4E6578",
            },
            links: {
              color: "#4E6578",
              distance: 300,
              enable: true,
              opacity: 0.7,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: false,
                area: 600,
              },
              value: 20,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "triangle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
          willReadFrequently: false,
        }}
      /> */}
      <main className="grid grid-cols-12 md:grid-cols-12 z-200">
        <header className="col-span-12 md:col-span-3">
          <Logo />
          <Mobile>
            <MobileMainNav />
          </Mobile>
          <DefaultDevice>
            <MainNav />
          </DefaultDevice>
          <DefaultDevice>
            <Footer />
          </DefaultDevice>
        </header>
        <div className="content col-span-12 md:col-span-9">
          <Routes>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />}>
              <Route path=":type" element={<Projects />} />
              <Route path="project/:name" element={<Single />} />
            </Route>
          </Routes>
        </div>
        <Mobile>
          <Footer backColor={"#658299"} margTop={"0"} />
        </Mobile>
      </main>
    </BrowserRouter>
  );
}

export default App;
