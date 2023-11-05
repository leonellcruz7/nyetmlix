import React from "react";

const Hero = () => {
  return (
    <div className="h-[80vh] bg-slate-900 flex items-center">
      <div className="main-container flex flex-col gap-4">
        <p className="font-bold text-6xl text-white">Movie title</p>
        <p className="lg:max-w-[35%] text-white text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          doloribus assumenda laudantium aspernatur quibusdam corporis sit rerum
          ut laboriosam aperiam incidunt perspiciatis quis recusandae, velit,
          provident, cupiditate cum distinctio dolor.
        </p>
        <div className="flex gap-4">
          <button className="button white">Play</button>
          <button className="button grey">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
