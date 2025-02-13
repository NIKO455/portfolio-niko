import LogoWall from "@/components/LogoWall/LogoWall";

export default function Home() {

  const logoImgs = [
    { imgUrl: "https://skillforge.com/wp-content/uploads/2020/10/javascript.png", altText: "Javascript Logo" },
    { imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/800px-Vimlogo.svg.png', altText: "Vim Logo" },
    { imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png', altText: "Linux Logo" },
    { imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png', altText: "PHP Logo" },
    { imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo.min.svg/2560px-Logo.min.svg.png', altText: "Image Logo" },
    { imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png', altText: "Node Logo" },
    { imgUrl: 'https://www.atmail.com/wp-content/uploads/2018/01/React_logo_wordmark.png', altText: "React Logo" }
  ];

  return (
    <>
      <h1 className="text-5xl font-bold leading-[1.2]">
        Transforming Your Ideas into <span className="text-purple-600">Reality</span>
      </h1>
      <p className="mt-3 text-gray-300 text-base">Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</p>
      <div className="flex gap-3 mt-8">
        <div>
          <p className="text-7xl font-bold">+12</p>
          <p className="mt-2 text-gray-300">
            YEARS OF
            EXPERIENCE
          </p>
        </div>
        <div>
          <p className="text-7xl font-bold">+46</p>
          <p className="mt-2 text-gray-300">
            PROJECTS
            COMPLETED
          </p>
        </div>
        <div>
          <p className="text-7xl font-bold">+20</p>
          <p className="mt-2 text-gray-300">
            WORLDWIDE
            CLIENTS
          </p>
        </div>
      </div>
      <div className="mt-8 flex items-center gap-8">
        <button className="talk_button">
          Let's Talk
        </button>

        <button className="button">
          <span className=" text-white">My Work</span>
          <span className="svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="20"
              viewBox="0 0 38 15"
              fill="none"
            >
              <path
                fill="#7D2AE8"
                d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
              ></path>
            </svg>
          </span>
        </button>
      </div>

      <div className="w-full relative mt-8">
        <p className="py-2">Technologies I Specialize In <span>✨</span></p>
        <LogoWall
          items={logoImgs}
          direction='horizontal'
          pauseOnHover={true}
          size='clamp(8rem, 1rem + 20vmin, 25rem)'
          duration='60s'
          bgColor='transparent'
          bgAccentColor='#111111'
        />
      </div>

      <div className="mt-10">
        <h1 className="text-5xl font-bold leading-[1.2]">
          Recent Projects <br /> and <span className="text-purple-600">Achievements</span>
        </h1>

        <div className="mt-8 grid grid-cols-2 gap-4 mb-10">
          <div className="border border-gray-600 rounded-xl bg-[#080707] cursor-pointer group">
            <img src="https://framerusercontent.com/images/0Mi0IWlbWJU3AYT2hGFzEwO4Ku8.png?scale-down-to=2048" className="rounded-t-xl w-full object-cover" style={{ height: '170px' }} />
            <div className="p-3 ">
              <h2 className="text-[17px] font-medium py-1 flex justify-between items-center">
                Sidhasewa
                <div className="bg-gray-900 group-hover:bg-gray-800 p-2 rounded-full relative duration-600 transition-all overflow-hidden">
                  <p className="group-hover:translate-x-5 group-hover:-translate-y-6  duration-400 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right">
                      <path d="M13 5H19V11" /><path d="M19 5L5 19" />
                    </svg>
                  </p>
                  <p className="absolute top-9 -left-3 group-hover:translate-x-5 group-hover:-translate-y-7 duration-600 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right">
                      <path d="M13 5H19V11" /><path d="M19 5L5 19" />
                    </svg>
                  </p>
                </div>
              </h2>
              <p className="text-sm text-[#727078] mt-1">
                buying and selling webiste (ecommerce)
              </p>
            </div>
          </div>
          <div className="border border-gray-600 rounded-xl bg-[#080707] cursor-pointer group">
            <img src="https://framerusercontent.com/images/hxgSQmquybiB6mIsV8wyxmKgo.jpeg" className="rounded-t-xl w-full object-cover" style={{ height: '170px' }} />
            <div className="p-3 ">
              <h2 className="text-[17px] font-medium py-1 flex justify-between items-center">
                Hello Sawari
                <div className="bg-gray-900 group-hover:bg-gray-800 p-2 rounded-full relative group duration-400 transition-all overflow-hidden">
                  <p className="group-hover:translate-x-5 group-hover:-translate-y-6  duration-400 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right">
                      <path d="M13 5H19V11" /><path d="M19 5L5 19" />
                    </svg>
                  </p>
                  <p className="absolute top-9 -left-3 group-hover:translate-x-5 group-hover:-translate-y-7 duration-400 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right">
                      <path d="M13 5H19V11" /><path d="M19 5L5 19" />
                    </svg>
                  </p>
                </div>
              </h2>
              <p className="text-sm text-[#727078] mt-1">
                Riding website and cool person for the best.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-5xl font-bold leading-[1.2]">
          Design Thoughts and <br /> and <span className="text-purple-600">Perspectives</span>
        </h1>

        <div className="mt-8 grid grid-cols-2 gap-4 mb-5">
          <div className="border border-gray-600 rounded-xl bg-[#080707] cursor-pointer group">
            <img src="https://framerusercontent.com/images/0Mi0IWlbWJU3AYT2hGFzEwO4Ku8.png?scale-down-to=2048" className="rounded-t-xl w-full object-cover" style={{ height: '170px' }} />
            <div className="p-3 ">
              <p className="text-sm">April 8, 2022</p>
              <h2 className="text-[17px] py-1 flex font-bold justify-between items-center group-hover:text-purple-500 transition-all duration-400">
                Starting and Growing a career in web desing
              </h2>
            </div>
          </div>
          <div className="border border-gray-600 rounded-xl bg-[#080707] cursor-pointer group">
            <img src="https://framerusercontent.com/images/hxgSQmquybiB6mIsV8wyxmKgo.jpeg" className="rounded-t-xl w-full object-cover" style={{ height: '170px' }} />
            <div className="p-3 ">
              <p className="text-sm">Mar 15, 2022</p>
              <h2 className="text-[17px] py-1 flex font-bold justify-between items-center group-hover:text-purple-500 transition-all duration-400">
                Crating a langind page that performs greate
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 group bg-gray-800 p-6 rounded-xl hover:bg-purple-600 cursor-pointer duration-400 transition-all ease-in-out">
        <div className="flex items-center justify-between">
          <p className="text-5xl leading-2 font-medium">Let's <br /> <span className="text-purple-600 group-hover:text-white"> collaborate</span></p>
          <div className="bg-purple-600 group-hover:bg-white group-hover:text-purple-600 p-2 rounded-full relative group duration-400 transition-all  overflow-hidden">
            <p className="group-hover:translate-x-8 group-hover:-translate-y-10  duration-400 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right">
                <path d="M13 5H19V11" /><path d="M19 5L5 19" />
              </svg>
            </p>
            <p className="absolute top-12 -left-6 group-hover:translate-x-8 group-hover:-translate-y-10 duration-400 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right">
                <path d="M13 5H19V11" /><path d="M19 5L5 19" />
              </svg>
            </p>
          </div>
        </div>
        <div className="mt-3">
          Unlock the portential of your product with expret design and development service. Let's collaborate to create user-centered solutions that not only meet your goals but also delight your users.
        </div>
      </div>

    </ >
  );
}
