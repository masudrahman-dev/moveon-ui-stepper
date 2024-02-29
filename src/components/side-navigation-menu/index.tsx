import React, { useEffect, useState } from "react";

const GrandChildMenu = ({ grandChildMenu }) => {
  return (
    <ul className="group-hover/child:flex  flex-col gap-3   divide-y   p-3 w-48 absolute border hidden -right-48 top-0 z-50">
      {grandChildMenu?.map((subItem) => {
        console.log("subItem :>> ", subItem);
        return (
          <li
            className="odd:bg-white even:bg-slate-50 text-black hover:text-orange-500"
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
    <ul className="group-hover/parent:flex  flex-col gap-3   divide-y  p-3 w-48 absolute border hidden -right-48 top-0 z-50">
      {clildMenu?.map((subItem) => {
        return (
          <li
            className="odd:bg-white even:bg-slate-50 group/child text-black hover:text-orange-500"
            key={subItem?.id}
          >
            <div className="flex justify-between">
              <span>{subItem?.title}</span>
              <span className="group-hover/child:block hidden">{`>`}</span>
            </div>
            <GrandChildMenu grandChildMenu={clildMenu} />
          </li>
        );
      })}
    </ul>
  );
};

const SideNavigationMenu = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("side-navigation-menu.json");
    const lists = await res.json();

    setData(lists);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="mx-auto   mt-10 max-w-screen-lg">
        <div>
          <ul className="flex flex-col gap-3   divide-y">
            {data?.map((item) => {
              return (
                <li
                  key={item?.id}
                  className="odd:bg-white w-1/2 group/parent relative hover:text-orange-500"
                >
                  <div className="flex justify-between">
                    <span>{item?.title}</span>
                    <span className="group-hover/parent:block hidden">{`>`}</span>
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
