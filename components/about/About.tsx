import Image from "next/image";
import React from "react";
import { Categorys } from "../category/Category";

const About = () => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-5">
        <div className="lg:col-span-5">
          <div className="bg-slate-100 dark:bg-neutral-950 p-3 border-2  rounded-xl">
            <Image
              src="/banner.jpg"
              alt="about us banner"
              className="w-full rounded-xl shadow-md shadow-lime-400"
              width={500}
              height={500}
            />

            <h2 className="text-center text-2xl mt-4 font-semibold px-4 py-4">
              About
            </h2>
            <div className="space-y-3">
              <p>
                A dedicated team leveraging cutting-edge technology to deliver
                innovative solutions and exceptional service for the digital
                age.
              </p>
              <p>
                Our technology firm excels in providing innovative solutions,
                combining advanced tech and expert knowledge. With a commitment
                to excellence, we deliver top-notch services, ensuring client
                satisfaction and success. We strive to stay ahead of industry
                trends, offering tailored solutions that drive digital
                transformation and business growth in an ever-evolving tech
                landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="bg-slate-100 dark:bg-neutral-950 border-2 p-3  rounded-xl">
            <Image
              src="/banner2.jpg"
              alt="about us banner"
              className="w-full rounded-xl shadow-md "
              width={500}
              height={500}
            />
          </div>
          <div className="bg-slate-100 mt-2 dark:bg-neutral-950 border-2 p-3 rounded-xl ">
            <p className="text-left border-lime-500 text-md  border-b-2 mb-2 font-semibold">Categories</p>
            <Categorys />
          </div>
          <div className="bg-slate-100 mt-2 dark:bg-neutral-950 border-2 p-3 rounded-xl">
            <Image
              src="/clodron.gif"
              alt="about us banner"
              className="w-full rounded-xl shadow-md "
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
