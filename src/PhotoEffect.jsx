import { useEffect, useRef } from "react";
import "./index.css";

import forest from "./test_assets/forest.webp";

const RADIUS=100;
const POINTS=30;

function PhotoEffect({ width=500, height=800 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = forest;

    const mouse = {
      x: 0,
      y: 0,
      inside: false,
    }

    // Generate Random Points To Form A Random Blob
    const points = []; // array of random points  

    for(let i=0; i<POINTS; i++) {
      const angle = (Math.PI * 2 * i) / POINTS;

      const randomRadius = RADIUS * (0.69 + Math.random() * 0.7);

      // sin and cos makes a circle
      const x = Math.cos(angle) * randomRadius;
      const y = Math.sin(angle) * randomRadius;

      points.push({x, y});
    }


    const resize = () => {
      // canvas.width = window.innerWidth;
      // canvas.height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      // get canvas coordinate
      const rect = canvas.getBoundingClientRect(); 

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.inside = true;
    };

    const handleMouseLeave = () => {
      mouse.inside = false;
    };

    const draw = () => {
      // clear previous canvas
      ctx.clearRect(
        -100,
        -100,
        canvas.width,
        canvas.height
      );

      // Normal image
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Don't draw if cursor is not inside the image
      if (!mouse.inside){
        requestAnimationFrame(draw);
        return;
      }

      // isolated drawing state to create the effect
      ctx.save();

      // draw blob around the cursor
      ctx.beginPath();
      // ctx.arc(mouse.x, mouse.y, RADIUS, 0, Math.PI * 2);

      for (let i=0; i<points.length; i++) {
        const current = points[i];
        const next = points[(i + 1) % points.length];

        // move points relative to cursor
        const currentX = mouse.x + current.x;
        const currentY = mouse.y + current.y;

        const nextX = mouse.x + next.x;
        const nextY = mouse.y + next.y;

        // midpoint
        const midX = (currentX + nextX) / 2;
        const midY = (currentY + nextY) / 2;

        // sets the starting point
        if (i===0) {
          ctx.moveTo(midX, midY);
        }
        
        // current: control point, mid: where the curve ends
        ctx.quadraticCurveTo(
          currentX,
          currentY,
          midX, 
          midY
        );
      }

      ctx.closePath();

      // only draw inside circle
      ctx.clip();

      const zoom = 1.2;

      const imageX = mouse.x - mouse.x * zoom;
      const imageY = mouse.y - mouse.y * zoom;

      ctx.filter = `
      invert(1)
      `;
      ctx.drawImage(
        image, 
        imageX,
        imageY,
        canvas.width * zoom,
        canvas.height * zoom
      );

      // restore to saved state
      ctx.restore();

      requestAnimationFrame(draw);
    };

    resize();

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animation = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);

      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <>
    {/* <img src={forest} /> */}
    <canvas
    ref={canvasRef}
    width={width}
    height={height}
    className="block"
    />
    </>
  );
}

export default PhotoEffect;
