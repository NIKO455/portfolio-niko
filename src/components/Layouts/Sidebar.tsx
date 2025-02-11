import Dock from "@/components/Dock/Dock";
import RotatingText from "@/components/RotatingText/RotatingText";
import Social from "../Social/Social";

export default function Sidebar({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="relative h-[95vh]">
      {/* Dock */}
      <div
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
      <div className="mt-20 social-links flex items-center bg-green-600 relative">
        <div className={"bg-purple-600 border border-purple-600 hover:bg-transparent hover:border-white transition-all duration-500 absolute cursor-pointer -left-7 p-2 px-3 flex items-center gap-3 rounded-tr-xl rounded-br-xl"}>
          Github
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
            <path fill={'currentColor'} d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
          </svg>
        </div>
        <div className={"absolute left-24"}>
          <Social />
        </div>
      </div>

      <div className="absolute bottom-0 text-xs pl-16">
        © 2025 by NIKO. All Rights Reserved. Created by Bhupendra Kathayat
      </div>

    </div>
  );
}
