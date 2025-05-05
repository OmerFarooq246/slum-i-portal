import { useEffect, useRef, useState } from "react";

interface OverlayCanvasProps {
  baseImageUrl: string;
  maskImageUrl: string;
};

export default function OverlayCanvas({
  baseImageUrl,
  maskImageUrl,
}: OverlayCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const baseImg = new Image();
    const maskImg = new Image();

    baseImg.crossOrigin = "anonymous";
    maskImg.crossOrigin = "anonymous";

    baseImg.src = baseImageUrl;
    maskImg.src = maskImageUrl;

    baseImg.onload = () => {
      const width = baseImg.naturalWidth;
      const height = baseImg.naturalHeight;

      // Update canvas size dynamically
      canvas.width = width;
      canvas.height = height;

      setDimensions({ width, height });

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(baseImg, 0, 0, width, height);

      maskImg.onload = () => {
        ctx.globalAlpha = 0.5;
        ctx.drawImage(maskImg, 0, 0, width, height);
        ctx.globalAlpha = 1.0;
      };
    };
  }, [baseImageUrl, maskImageUrl]);

  return (
    <div className="overflow-auto">
      <canvas
        ref={canvasRef}
        className="rounded-4xl"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}
