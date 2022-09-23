import React from "react";

// import Component
import FeaturesSection from "./FeaturesSection";
import FeaturesSection2 from "./FeaturesSection2";
import FeaturesSection3 from "./FeaturesSection3";

const Features = () => {
  return (
    <section className="pt-12 lg:pt-24 bg-violet">
      <div className="container mx-auto ">
        <div className="text-center max-w-[758px] mb-24 mx-auto">
          <h2
            className="section-title "
            data-aos="fade-up"
            data-aos-offset="400"
          >
            Market sentiments, portfolio, and run the infrastructure of you
            choice
          </h2>
        </div>
        <FeaturesSection />
        <FeaturesSection2 />
        <FeaturesSection3 />
      </div>
    </section>
  );
};

export default Features;
