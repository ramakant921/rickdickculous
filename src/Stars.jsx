import { useState, useEffect } from "react";

export default function Stars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 30 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() < 0.8 ? 4 : 6,
      }))
    );

    const interval = setInterval(() => {
      setStars(prev => [
        ...prev,
        {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
      ].slice(1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    {stars.map((star, i) => (
      <div 
      key={i} 
      className="fixed opacity-70 rounded-full bg-gray-400 animate-pulse"
      style={{
        left: star.x,
          top: star.y,
          width: `${star.size}px`,
          height: `${star.size}px`,
          animationDelay: `${Math.random() * 3}s`
      }}
      />
    ))}
    </>
  );

};
