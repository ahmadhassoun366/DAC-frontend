import React, { useState } from "react";
import { Link } from "react-router-dom";

import van from "../../../../Assets/van.png";
import shop from "../../../../Assets/store.png";
import storepng from "../../../../Assets/department.png";

const Card = ({ title, description, imgSrc, managerType }) => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src={imgSrc}
          alt={title}
        />
      </div>
      <div className="flex flex-col">
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
        <div className="mt-4 flex">
          <Link
            className="bg-cyan-600 text-white px-6 py-2 rounded inline-flex items-center"
          >
            Visit
          </Link>
          <Link
            className="ml-auto bg-gray-600 text-white px-6 py-2 rounded inline-flex items-center"
          >
            create
          </Link>
        </div>
      </div>
    </div>
  );
};
const SmallCard = ({ title, description, imgSrc }) => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg CustomizedHover" >
      <div className="flex justify-center md:justify-end">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src={imgSrc}
          alt={title}
        />
      </div>
      <div className="flex flex-col">
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
        <div className="mt-4 flex">
          <Link
            className="bg-cyan-600 text-white px-6 py-2 rounded inline-flex items-center"
          >
            Visit
          </Link>
        </div>
      </div>
    </div>
  );
};
const Stocks = () => {
  return (
    <div className="px-5">
      <div className="mt-8">
        <div className="mb-10">
          <div className="flex justify-around p-10 gap-8">
            <div className="" style={{ borderRight: "1px solid black", paddingRight: "2%" }}>
              <Card
                title="Store"
                description="Manage your inventory, categorize products, track sales and more"
                imgSrc={storepng}
                managerType="store"
              />
              <div className="mt-16">
                <SmallCard title="Store 1" description="Small Card Description" imgSrc={storepng} />
                <SmallCard title="Store 2" description="Small Card Description" imgSrc={storepng} />
                <SmallCard title="Store 3" description="Small Card Description" imgSrc={storepng} />
              </div>
            </div>
            <div className="" style={{ borderRight: "1px solid black", paddingRight: "2%" }}>
              <Card
                title="Shop"
                description="Your personal digital storefront to sell products directly to customers"
                imgSrc={shop}
                managerType="shop"
              />
              <div className="mt-16">
                <SmallCard title="Shop 1" description="Small Card Description" imgSrc={shop} />
                <SmallCard title="Shop 2" description="Small Card Description" imgSrc={shop} />
                <SmallCard title="Shop 3" description="Small Card Description" imgSrc={shop} />
              </div>
            </div>
            <div className="">
              <Card
                title="Vehicle"
                description="Track deliveries and manage logistics for your business operations"
                imgSrc={van}
                managerType="vehicle"
              />
              <div className="mt-16">
                <SmallCard title="Vehicle 1" description="Small Card Description" imgSrc={van} />
                <SmallCard title="Vehicle 2" description="Small Card Description" imgSrc={van} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
