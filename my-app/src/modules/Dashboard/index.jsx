import React from "react";
import { Popup } from "../../components";

function Dashboard() {
  return (
    <div className=" w-full h-screen box-border">
      <header className=" w-full min-h-[80px] fixed top-0 left-0 flex justify-between items-center border text-2xl font-bold px-3 md:px-14  ">
        <div className="cursor-pointer">SuperNotes</div>
        <div className="cursor-pointer text-4xl">+</div>
      </header>
      <div
        className="md:flex fixed top-[80px] w-full"
        style={{ height: "calc(100% - 80px)" }}
      >
        <aside className="  border border-grey flex justify-around md:justify-start   items-center  md:flex-col md:text-xl md:font-semibold md:pt-8 md:gap-7   md:w-1/5 h-12 md:h-full ">
          <div className="cursor-pointer border border-red-300 bg-red-100 rounded px-2 py-1 md:px-10 ">
            Home
          </div>
          <div className="cursor-pointer  border border-amber-300  bg-amber-100 rounded px-2 py-1 md:px-10">
            Notes
          </div>
          <div className="cursor-pointer border border-green-300 bg-green-100 rounded px-2 py-1 md:px-10">
            Study
          </div>
          <div className="cursor-pointer border border-cyan-300 bg-cyan-100 rounded px-2 py-1 md:px-10">
            Work
          </div>
        </aside>
        <section className="border border-grey w-full md:w-[80%]  h-full"></section>
      </div>
      {/* <Popup/> */}
    </div>
  );
}

export default Dashboard;
