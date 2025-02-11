import Squares from "@/components/Squares";
import FluidCursor from "@/components/FluidCursor";
import Loader from "@/components/Loader/Loader";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function Home({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader with smooth transition */}
      <div
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ zIndex: 1 }}
      >
        <Loader />
      </div>

      {/* Main content */}
      <div
        className={`absolute top-0 text-white h-full w-full transition-opacity duration-500 ${isLoading ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
      >
        <div className="h-[100vh] w-full max-w-[1350px] mx-auto flex flex-col md:flex-row p-4 gap-6 md:gap-12 overflow-hidden">
          {/* Sidebar */}
          <div className="w-full md:w-[50vw]">
            <Sidebar isLoading={isLoading} />
          </div>

          {/* Main Content */}
          <div className="w-full overflow-y-scroll">
            {children}
          </div>
        </div>
      </div>

      {/* Background squares animation */}
      <div className="absolute h-[100vh] w-full top-0 left-0 bg-black" style={{ zIndex: -1 }}>
        <Squares
          speed={0.1}
          squareSize={30}
          direction="diagonal"
          borderColor="#171717"
          hoverFillColor="black"
        />
      </div>

      {/* Custom cursor */}
      <FluidCursor />
    </>
  );
}

