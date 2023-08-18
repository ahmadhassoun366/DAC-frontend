import React from "react";
import bg from "../../../../Assets/bg/urban.gif";
import { Link } from "react-router-dom";
const hero = () => {
  return (
    <section class="bg-CustomColor2">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-4xl text-white">
            Efficient Business Management
          </h1>
          <p class="w-3/4 mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl">
            Empowering Your Business with Seamless Accounting and Store
            Management
          </p>
          <Link
            href="#"
            class="inline-flex
                         items-center
                          justify-center
                           px-5 py-3 mr-3 
                           text-base
                            font-medium
                             text-center
                              text-CustomColor1 
                              rounded-lg
                               bg-CustomColor3  focus:ring-1 focus:ring-blue-300 "
          >
            Get started
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-200 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 focus:ring-1 focus:ring-gray-100"
          >
            Speak to Sales
          </Link>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-4 lg:flex">
          {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" /> */}
          <img src={bg} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default hero;
