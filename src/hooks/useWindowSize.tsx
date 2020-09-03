import React, { useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}
type UseWindowReturnType = WindowSize;

function useWindowSize(): UseWindowReturnType {
  const isOnBrowser = typeof window !== "undefined";
  console.log("isOnBrowser :>> ", isOnBrowser);
  const [windowSize, setWindowSize] = useState({
    width: isOnBrowser ? window.innerWidth : 0,
    height: isOnBrowser ? window.innerHeight : 0,
  });

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({ width: window.innerHeight, height: window.innerHeight });
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      });
    };
  }, []);
  return windowSize;
}

export default useWindowSize;
