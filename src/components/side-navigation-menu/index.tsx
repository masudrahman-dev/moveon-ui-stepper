import { ArrowRightMini, TriangleDownMini } from "@medusajs/icons";
import React, { useEffect, useState } from "react";
import { data } from "./side-navigation-menu";

const GrandChildMenu = ({ grandChildMenu }) => {
  return (
    <ul className="group-hover/child:flex  flex-col  hidden    w-52 absolute border  -right-[210px] top-0 z-50">
      {grandChildMenu?.map((subItem) => {
        console.log("subItem :>> ", subItem);
        return (
          <li
            className=" p-2   group/child text-black hover:text-orange-500"
            key={subItem?.id}
          >
            <div className="flex justify-between">
              <span>{subItem?.title}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const ChildMenu = ({ clildMenu }) => {
  return (
    <ul className="group-hover/parent:flex  flex-col  hidden  rounded-lg    w-52 absolute border  -right-[210px] top-0 z-50">
      {clildMenu?.map((subItem) => {
        return (
          <li
            className="  p-2 group/child text-black hover:text-orange-500"
            key={subItem?.id}
          >
            <div className="flex justify-between">
              <span>{subItem?.title}</span>
              <span className="group-hover/child:block hidden">
                <ArrowRightMini />
              </span>
            </div>
            <GrandChildMenu grandChildMenu={clildMenu} />
          </li>
        );
      })}
    </ul>
  );
};

const SideNavigationMenu = () => {
  // const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   const res = await fetch("side-navigation-menu.json");
  //   const lists = await res.json();

  //   setData(lists);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="ml-3">
      <div className="mx-auto   mt-10 max-w-screen-lg">
        <div className=" rounded-lg border w-72  ">
          <ul>
            {data?.map((item) => {
              return (
                <li
                  key={item?.id}
                  className=" w-full p-2 group/parent text-sm   relative hover:text-orange-500 "
                >
                  <div className="flex justify-between">
                    <div className="inline-flex gap-1">
                      <span>{item?.icon}</span>
                      <span>{item?.title}</span>
                    </div>
                    <span className="group-hover/parent:block hidden">
                      <ArrowRightMini />
                    </span>
                  </div>
                  <ChildMenu clildMenu={item?.childCategories} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavigationMenu;
