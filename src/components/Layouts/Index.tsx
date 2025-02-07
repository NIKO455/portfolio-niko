import Squares from "@/components/Squares";
import FluidCursor from "@/components/FluidCursor";
import Dock from "@/components/Dock/Dock";
import Loader from "@/components/Loader/Loader";

import { useState, useEffect } from "react";

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
      < div
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'}`
        }
        style={{ zIndex: 1 }}
      >
        <Loader />
      </div >

      {/* Main content */}
      < div
        className={`absolute top-0 text-white h-full w-full transition-opacity duration-500 ${isLoading ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
      >
        <div className="h-[90vh] w-[100vw] flex p-7 gap-x-6">
          <div className="bg-gray-800 min-w-[30vw] rounded">
            Sidebar
          </div>
          <div className="border border-gray-800 shadow-lg w-full">
            {children}
          </div>
        </div>
      </div >

      {/* Background squares animation */}
      < div className="absolute h-[100vh] w-full top-0 left-0 bg-black" style={{ zIndex: -1 }}>
        <Squares
          speed={0.1}
          squareSize={30}
          direction="diagonal"
          borderColor="#171717"
          hoverFillColor="black"
        />
      </div >

      {/* Custom cursor */}
      < FluidCursor />

      {/* Dock */}
      < div
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
        style={{ zIndex: 1 }}
      >
        <Dock collapsible={false} responsive="bottom" />
      </div >

    </>
  );
}
