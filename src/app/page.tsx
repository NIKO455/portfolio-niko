import HoverButton from "@/components/HoverButton/HoverButton";

export default function Home() {
  return (
    <div className="max-w-[90%]">
      <h1 className="text-5xl font-bold leading-[1.2]">
        Transforming Your Ideas into <span className="text-purple-600">Reality</span>
      </h1>
      <p className="mt-3 text-gray-300 text-base">Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</p>
      <div className="flex gap-3 mt-8">
        <div className="">
          <p className="text-7xl font-bold">+12</p>
          <p className="mt-2 text-gray-300">
            YEARS OF
            EXPERIENCE
          </p>
        </div>

        <div className="">
          <p className="text-7xl font-bold">+46</p>
          <p className="mt-2 text-gray-300">
            PROJECTS
            COMPLETED
          </p>
        </div>

        <div className="">
          <p className="text-7xl font-bold">+20</p>
          <p className="mt-2 text-gray-300">
            WORLDWIDE
            CLIENTS
          </p>
        </div>

      </div>
    </div >
  );
}
