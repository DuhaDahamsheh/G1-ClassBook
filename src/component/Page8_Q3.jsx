import { useRef, useState } from "react";
import img1 from "../assets/matching1Q_Page8 (1).png";
import img2 from "../assets/matching2Q_Page8 (2).png";

export default function MatchExercise() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState(null);

  const points = {
    t1: { x: 120, y: 80 },
    t2: { x: 120, y: 180 },
    i1: { x: 420, y: 90 },
    i2: { x: 420, y: 190 }
  };

  function getPointAt(x, y) {
    for (let key in points) {
      const p = points[key];
      const d = Math.hypot(x - p.x, y - p.y);
      if (d < 15) return key;
    }
    return null;
  }

  function handleMouseDown(e) {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const point = getPointAt(x, y);

    if (point && point.startsWith("t")) {
      setIsDrawing(true);
      setStartPos(points[point]);
    }
  }

  function handleMouseUp(e) {
    if (!isDrawing) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const point = getPointAt(x, y);

    if (point && point.startsWith("i")) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.strokeStyle = "black";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(startPos.x, startPos.y);
      ctx.lineTo(points[point].x, points[point].y);
      ctx.stroke();
    }

    setIsDrawing(false);
    setStartPos(null);
  }

  return (
    <div className="popup-container">
      <h3>Match:</h3>

      <div className="match-wrapper">

        {/* النصوص */}
        <div className="text-col">
          <div className="text">Hello! I'm John.</div>
          <div className="text">Goodbye!</div>
        </div>

        {/* الصور */}
        <div className="img-col">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>

        {/* الخطوط */}
        <canvas
          ref={canvasRef}
          width={600}
          height={300}
          className="canvas"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />

        {/* النقاط */}
        {Object.values(points).map((p, i) => (
          <div
            key={i}
            className="dot"
            style={{ top: p.y - 6, left: p.x - 6 }}
          ></div>
        ))}

      </div>
    </div>
  );
}
