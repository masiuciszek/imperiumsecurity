import { useEffect, useState } from "react";

function useWindowWidth(): number {
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 960;
  const [width, setWidth] = useState(windowWidth);

  useEffect(() => {
    const handleResize = (): void => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
}

export default useWindowWidth;
