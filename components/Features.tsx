import { FEATURES } from "@/constants";
import Image from "next/image";
import FeatureItem from "./FeatureItem";

const Features = () => {
  return (
    <section className=" flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className=" flex max-container padding-container relative w-full justify-end">
        <div className=" flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="md:hidden 2xl:block feature-phone"
          />
          <Image
            src="/phone.png"
            alt="phone"
            width={360}
            height={700}
            className="feature-phone 2xl:hidden ml-[130px] mt-20"
          />
        </div>
        <div className=" z-20 flex w-full flex-col lg:w-[60%]">
          <div className=" relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className=" absolute left-[-5px] top-[-28px] lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {[
              FEATURES.map((feature) => (
                <FeatureItem
                  title={feature.title}
                  key={feature.title}
                  icon={feature.icon}
                  description={feature.description}
                />
              )),
            ]}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
