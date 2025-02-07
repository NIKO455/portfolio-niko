import Dock from "@/components/Dock/Dock";
import RotatingText from "@/components/RotatingText/RotatingText";
import Social from "../Social/Social";

export default function Sidebar({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="relative">
      {/* Dock */}
      < div
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
        style={{ zIndex: 1 }}
      >
        <Dock collapsible={false} responsive="bottom" />
      </div>
      <p className="font-awesome text-2xl absolute"><span className="text-purple-600 text-5xl">.</span> NIKO</p>
      <div className="text-center pt-20 pl-16">
        <br />
        <h1 className="text-left font-medium text-7xl md:text-8xl font-rubik bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent">
          Bhupendra
        </h1>
        <h1 className="text-left md:pb-6 pt-2 md:pt-0 pb-7 leading-10 font-semibold text-6xl md:text-7xl font-rubik">
          Kathayat
        </h1>
        <hr className="md:w-24 w-20 md:mb-0 mb-4 h-3 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]" />
      </div>
      <div className="pl-16 font-first text-4xl mt-6">
        <p className="flex items-center gap-4">
          I am a Passionate
          <span className="font-rubik">
            <RotatingText
              texts={['web', 'fullstack', 'frontend', 'backend', 'devOps']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </span>
        </p>
        <p className="mt-4">Engineer.</p>
      </div>
      <div className="mt-14 social-links">
        <Social />
      </div>

    </div>
  );
}
