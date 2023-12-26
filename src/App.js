import "./App.css";
import 'animate.css';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import Background from "./Pages/Shared/Theme/Background/Background";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolios from "./Pages/Portfolios/Portfolios";
import Footer from "./Pages/Shared/Footer/Footer";
import Particle from "./Particle/Particle";
import AnimatedCursor from "react-animated-cursor";
import NotFound from "./Pages/NotFound/NotFound";
import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "./Pages/Shared/Loader/Loader";
import { Toaster } from "react-hot-toast";
import MessengerCustomerChat from 'react-messenger-customer-chat';
// const Background = lazy(() =>
//   import("./Pages/Shared/Theme/Background/Background")
// );

// const Home = lazy(() => import("./Pages/Home/Home"));

// const Navbar = lazy(() => import("./Pages/Shared/Navbar/Navbar"));

// const Blog = lazy(() => import("./Pages/Blog/Blog"));
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));


// const About = lazy(() => import("./Pages/About/About"));

// const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Login = lazy(() => import("./Pages/Auth/Login"));
const SignUp = lazy(() => import("./Pages/Auth/SignUp"));

// const Portfolios = lazy(() => import("./Pages/Portfolios/Portfolios"));

// const Footer = lazy(() => import("./Pages/Shared/Footer/Footer"));

// const NotFound = lazy(() => import("./Pages/NotFound/NotFound"));



function App() {
  const [loading, setLoading] = useState(true);
  const [change, setChange] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setChange(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, 2000);


  }, [])
  if (loading) {
    return <Loader loading={loading} change={change} />
  }
  return (
    <>
    
      <ThemeProvider>
        <HelmetProvider>
          <AnimatedCursor innerSize={12} outerSize={10} color="67, 56, 202" />
          <Particle />
          <Navbar />
          <Toaster />
          <Background>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="/portfolio" element={<Portfolios />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>

          </Background>
          {/* <MessengerCustomerChat
            pageId="194609567069890"
            appId="2064715320576296"
            htmlRef="<REF_STRING>"
          /> */}
          <Footer />
        </HelmetProvider>
      </ThemeProvider>

    </>
  );
}

export default App;
