import React from "react";

// import Image
import Image3 from "../assets/img/feature-3-img.png";

const FeaturesSection = () => {
  return (
    <section className="py-[30px] lg:py-[120px]">
      <div className="flex flex-col lg:flex-row">
        {/* text */}
        <div
          className="max-w-[454px] mb-6 lg:mb-10"
          data-aos="fade-right"
          data-aos-offset="400"
        >
          <h3 className="mb-6 h3">
            Grow your profit and track your investments
          </h3>
          <p className="mb-8 text-gray max-w-[408px]">
            Use advanced analytical tools. Clear TradingView charts let you
            track current and historical profit investments.
          </p>
          <button className="px-8 btn">Learn More</button>
        </div>
        {/* image */}
        <div
          className="flex justify-end flex-1 "
          data-aos="fade-left"
          data-aos-offset="450"
        >
          <img src={Image3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
