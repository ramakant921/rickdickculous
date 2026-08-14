import { useEffect, useRef } from "react";
import "./index.css";

const CELL_SIZE = 20;
const FADE_DELAY = 100;
const FADE_DURATION = 400;

function PixelEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let cols = 0;
    let rows = 0;

    const cells = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      cols = Math.ceil(canvas.width / CELL_SIZE);
      rows = Math.ceil(canvas.height / CELL_SIZE);

      // resize cells array
      cells.length = cols * rows;

      for (let i = 0; i < cells.length; i++) {
        if (!cells[i]) {
          cells[i] = {
            activeAt: 0, // stores the time of activation
          };
        }
      }
    };

    const activateCell = (index) => {
      if (!cells[index]) return;

      cells[index].activeAt = performance.now(); // timestamp
    };

    const handleMouseMove = (e) => {
      // get cell's row and col
      const col = Math.floor(e.clientX / CELL_SIZE);
      const row = Math.floor(e.clientY / CELL_SIZE);

      // return if out of bound
      if (
        col < 0 ||
        col >= cols ||
        row < 0 ||
        row >= rows
      ) {
        return;
      }

      const index = row * cols + col; // convert row & col into 1d index

      activateCell(index);
    };

    const draw = () => {
      const now = performance.now();

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];

        if (!cell || cell.activeAt === 0) {
          continue;
        }

        const elapsed = now - cell.activeAt;

        if (elapsed < FADE_DELAY) {
          ctx.globalAlpha = 1;
        }

        // fading
        else if (elapsed < FADE_DELAY + FADE_DURATION) {
          const fadeTime = elapsed - FADE_DELAY;

          ctx.globalAlpha =
            1 - fadeTime / FADE_DURATION;
        }

        else {
          cell.activeAt = 0;
          continue;
        }

        const row = Math.floor(i / cols);
        const col = i % cols;

        ctx.fillStyle = "red";

        ctx.fillRect(
          col * CELL_SIZE,
          row * CELL_SIZE,
          CELL_SIZE,
          CELL_SIZE
        );
      }

      ctx.globalAlpha = 1;

      requestAnimationFrame(draw);
    };

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    const animation = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);

      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 h-screen w-screen pointer-events-none -z-10"
    />
  );
}

export default PixelEffect;
