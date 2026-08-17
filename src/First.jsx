import React from "react";

function First() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

          body {
          background: #000;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }
          .portfolio {
          width: 100%;
          min-height: 100vh;
          background: #000;
        }


        .header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 20;

          display: flex;
          flex-direction: column;
          align-items: center;
        }

            .logo {
          width: 300px;
          height: 32px;
          background: white;
        //   border-radius:20px;

          display: flex;
          justify-content: center;
          align-items: center;

          clip-path: polygon(
            0 0,
            100% 0,
            100% 35%,
            82% 35%,
            77% 100%,
            23% 100%,
            18% 35%,
            0 35%
          );
            }

            .logo span {
          color: #ff3434;
          font-size: 14px;
          font-weight: 700;
            }

          nav {
          display: flex;
          gap: 25px;
          margin-top: 12px;
        }

        nav a {
          color: white;
          text-decoration: none;
          font-size: 12px;
          transition: 0.3s;
        }

        nav a:hover {
          color: #ff3434;
        }

        
        .her {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;

          overflow: hidden;
          background: #000;

          border: 5px solid #191919;
        }

        .earth {
          position: absolute;
          left: -5%;
          bottom: -30%;

          width: 110%;
          height: 65%;

          border-radius: 50% 50% 0 0;

          background-image:
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.9),
              rgba(0,0,0,0.1)
            ),

          background-size: cover;
          background-position: center;

          filter: grayscale(1) brightness(0.65);

          transform: perspective(800px) rotateX(8deg);

          z-index: 1;
        }

        .title {
          position: absolute;

          top: 34%;
          left: 50%;

          transform: translate(-50%, -50%);

          z-index: 10;

          width: 100%;

          text-align: center;

          font-size: clamp(70px, 12vw, 145px);

          font-weight: 900;
          letter-spacing: -7px;

          white-space: nowrap;
        }


        .rock {
          position: absolute;
          z-index: 8;

          object-fit: contain;

          filter:
            drop-shadow(0 15px 15px rgba(0,0,0,0.8));

          animation: float 6s ease-in-out infinite;
        }

        .rock-one {
          width: 150px;
          top: 85px;
          left: 11%;
        }

        .rock-two {
          width: 175px;
          right: 7%;
          bottom: 13%;
          animation-delay: -2s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }

        .coordinates {
          position: absolute;
          z-index: 15;

          left: 28px;
          bottom: 50px;

          font-size: 10px;
          line-height: 1.4;
        }

        .coordinates span {
          color: #ff3434;
        }
        @media (max-width: 768px) {

          .logo {
            width: 220px;
          }

          .title {
            font-size: 70px;
            letter-spacing: -4px;
          }

          .rock-one {
            width: 100px;
            left: 5%;
          }

          .rock-two {
            width: 120px;
            right: 3%;
          }

          .coordinates {
            left: 15px;
            bottom: 25px;
          }
        }

        @media (max-width: 480px) {

          nav {
            gap: 15px;
          }

          .title {
            font-size: 50px;
          }

          .rock-one {
            width: 80px;
          }

          .rock-two {
            width: 100px;
          }
        }
      `}</style>

      <main className="portfolio">

        <section className="hero">
          <header className="header">

            <div className="logo">
              <span>Portfolio</span>
            </div>

            <nav>
              <a href="#home">Home</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
            </nav>

          </header>

          
          <div className="earth"></div>

          <img
            src="" alt=""
            className="rock rock-one"
          />
          <h1 className="title">
            PORTFOLIO
          </h1>
          <img
            src="" alt=""
            className="rock-two"
          />
          <div className="coordinates">
            <p><span>EARTH</span> / 67
            </p>
            <p><span>LAT</span> / 69.69
            </p>
            <p><span>LON</span> / 96
            </p>
          </div>

        </section>

      </main>
    </>
  );
}

export default First;