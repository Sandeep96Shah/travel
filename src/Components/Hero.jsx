import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center z-30">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            The <span className="text-orange-600">Beauty</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {" "}
            <span className="text-orange-600">of</span> World
          </h1>
        </div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <img
              className="w-full max-h-[500px] object-cover"
                src="https://images.pexels.com/photos/949774/pexels-photo-949774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            <div className="embla__slide">
              <img
              className="w-full max-h-[500px] object-cover"
                src="https://images.pexels.com/photos/5054770/pexels-photo-5054770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            <div className="embla__slide">
              <img
              className="w-full max-h-[500px] object-cover"
                src="https://images.pexels.com/photos/325944/pexels-photo-325944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
