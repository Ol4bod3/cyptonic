import React from "react";

// import Image
import Image1 from "../assets/img/feature-1-img.png";

const FeaturesSection = () => {
  return (
    <section className="pb-[30px] lg:pb-[120px] pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* text */}
        <div
          className="max-w-[454px] mb-6 lg:mb-10"
          data-aos="fade-right"
          data-aos-offset="400"
        >
          <h3 className="mb-6 h3">Invent Smart</h3>
          <p className="mb-8 text-gray">
            Get full statistic information about the behavior of buyers and
            sellers will help you make decision.
          </p>
          <button className="px-8 btn">Learn More</button>
        </div>
        {/* image */}
        <div
          className="flex justify-end flex-1 "
          data-aos="fade-left"
          data-aos-offset="400"
        >
          <img src={Image1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
