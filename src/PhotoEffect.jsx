import { useEffect, useRef } from "react";
import "./index.css";

import forest from "./assets/pic.webp";

const RADIUS=90;
const POINTS=20;

function PhotoEffect({ width=500, height=800, classname}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = forest;

    const mouse = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      inside: false,
    }

    // Generate Random Points To Form A Random Blob
    const points = []; // array of random points  

    const genPoints = () => {
      for (let i = 0; i < POINTS; i++) {
        const angle = (Math.PI * 2 * i) / POINTS;

        points.push({
          angle,
          radius: RADIUS * (0.69 + Math.random() * 0.7),
          targetRadius: RADIUS * (0.69 + Math.random() * 0.1),
          velocity: 0,
        });
      }
    };

    genPoints();

    const resize = () => {
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      // get canvas coordinate
      const rect = canvas.getBoundingClientRect(); 

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouse.vx = x - mouse.x;
      mouse.vy = y - mouse.y;

      mouse.x = x;
      mouse.y = y;

      mouse.inside = true;
    };

    const handleMouseLeave = () => {
      mouse.inside = false;
    };

    const draw = () => {
      // clear previous canvas
      ctx.clearRect(
        0,
        0,
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

      for (const point of points) {
        if (Math.random() < 0.02) {
          point.targetRadius =
            RADIUS * (0.69 + Math.random() * 0.4);
        }

        // interpolate thing
        const deformForce = 
          (point.targetRadius - point.radius) * 0.07;

        // get mouse velocity dir
        const dirX = Math.cos(point.angle);
        const dirY = Math.sin(point.angle);

        // calc velocity force
        const velocityForce = 
          mouse.vx * dirX + mouse.vy * dirY;

        // combine
        point.velocity += deformForce;
        point.velocity += velocityForce * 0.063;

        // damping: slow the deformation
        point.velocity *= 0.87;

        // apply velocity
        point.radius += point.velocity;
      }

      for (let i = 0; i < points.length; i++) {
        const current = points[i];
        const next = points[(i + 1) % points.length];

        // move points relative to cursor
        const currentX =
          mouse.x + Math.cos(current.angle) * current.radius;

        const currentY =
          mouse.y + Math.sin(current.angle) * current.radius;

        const nextX =
          mouse.x + Math.cos(next.angle) * next.radius;

        const nextY =
          mouse.y + Math.sin(next.angle) * next.radius;

        // midpoint
        const midX = (currentX + nextX) / 2;
        const midY = (currentY + nextY) / 2;

        // sets the starting point
        if (i === 0) {
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
    <canvas
    ref={canvasRef}
    width={width}
    height={height}
    className={`block cursor-none ${classname}`}
    />
    </>
  );
}

export default PhotoEffect;
