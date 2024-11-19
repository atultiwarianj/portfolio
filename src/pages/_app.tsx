import StarsCanvas from "@/components/canvas/StarCanvas";
import Hero from "@/components/Hero";
import Me from "@/components/Me";
import Navbar from "@/components/Navbar";
import Technologies from "@/components/Technologies";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TheAtulTiwari | Portfolio</title>
        <link rel="shortcut icon" href="logo.png" />
        <meta
          name="description"
          content="The Atul Tiwari | A professional Full stack Web Developer React Native Developer and MERN stack Developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="keywords"
          content="Atul Tiwari, the Atul Tiwari, theabhipatel, theAtulTiwari portfolio, Atul Tiwari, the Atul Tiwari, Atul Tiwari web developer, the atul tiwari fullstack developer, atul tiwari mern stack developer, "
        />
        <meta name="subject" content="the Atul Tiwari Portfolio" />
        <meta name="copyright" content="the Atul Tiwari" />
        <meta name="abstract" content="The Atul Tiwari" />
        <meta name="topic" content="the Atul Tiwari portfolio" />
        <meta
          name="summary"
          content="This is My(the Atul Tiwari) Portfolio Website"
        />
        <meta name="author" content="The Atul Tiwari" />
        <meta name="designer" content="the Atul Tiwari" />
        <meta name="owner" content="the AtulTiwari" />
        <meta name="url" content="/" />
        <meta name="identifier-URL" content="/" />
        <meta name="category" content="Fullstack developer | Portfolio" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />

        {/* --- og tags goes here --- */}
        <meta property="og:title" content="AtulTiwari | Portfolio" />
        <meta
          property="og:description"
          content="A professional Full stack Web Developer ,React Native Developer and MERN stack Developer."
        />
        <meta property="og:image" content="https://theabhipatel.com/logo.png" />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Head>

      <div className="relative z-0  max-w-screen-2xl mx-auto w-full ">
        <div className="relative z-50 bg-[#000000] ">
          <StarsCanvas />
          <Navbar />
          <Hero />
          {/* <Technologies /> */}
          {/* <Me /> */}
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
