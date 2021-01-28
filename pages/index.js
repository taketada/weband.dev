import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../components/footer";
import ShuffleAnimateText from "../public/scripts/ShuffleAnimateText";

const Home = () => {
  useEffect(() => {
    const text = new ShuffleAnimateText(".title", "Web & Development");
    text.start();
  }, []);

  return (
    <div className="main">
      <Head>
        <title>Web & Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="box">
          <h1 className="title">Web & Development</h1>
          <h2>Tadayuki Takeda / Web Developer</h2>
        </div>

        <Footer />
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }

        .main {
          width: 100%;
          height: 100vh;
        }

        h2 {
          color: rgba(0, 0, 0, 0.1);
          font-weight: 200;
          font-size: 25px;
          margin-top: 30px;
          animation: fadeIn 2s ease forwards;
        }

        .container {
          display: flex;
          justify-content: center;
          flex-direction: column;
          flex-wrap: wrap;
          align-items: center;
          width: 100%;
          height: 100%;
          text-align: center;
        }

        .box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 600px;
          height: 500px;
        }

        .title {
          margin: 0;
          width: 100%;
          line-height: 1.15;
          font-size: 48px;
          color: white;
          background: #000;
          width: 500px;
          padding: 10px;
        }

        @keyframes fadeIn {
          0% {
            color: rgba(0, 0, 0, 0.1);
          }
          100% {
            color: rgba(0, 0, 0, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
