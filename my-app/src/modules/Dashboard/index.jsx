import React, { useState } from "react";
import { Popup } from "../../components";

let todoData = {
  id: "",
  title: "",
  description: "",
  tags: [
    { id: 1, checked: false, text: "Notes" },
    { id: 2, checked: false, text: "Study" },
    { id: 3, checked: false, text: "Works" },
  ],
};

function Dashboard() {
  const [isopen, setisopen] = useState(false);

  const [data, setdata] = useState(todoData);

  const [mainArray, setMainArray] = useState([]);

  console.log(mainArray,'xxxxxxxxxxxxxxxxxxxxx');
  

  return (
    <div className="w-full h-screen box-border">
      <header className="w-full min-h-[80px] fixed top-0 left-0 flex justify-between items-center  text-2xl font-bold px-3 md:px-3">
        <div className="cursor-pointer text-3xl md:w-[20%] text-center">
          SuperNotes
        </div>
        <div
          className="cursor-pointer text-4xl text-end md:pr-16   md:w-[80%]"
          onClick={() => setisopen(true)}
        >
          +
        </div>
      </header>
      <div
        className="md:flex fixed top-[80px] w-full"
        style={{ height: "calc(100% - 80px)" }}
      >
        <aside className=" flex justify-around gap-0 md:justify-start items-center md:flex-col md:text-xl md:font-semibold  md:pt-8 md:gap-5 md:w-[20%] h-12 md:h-full">
          <div className="cursor-pointer flex justify-between items-center">
            <span className="text-[45px] md:text-[70px] text-red-300 pb-3  md:pr-4 md:px-0 md:pb-4">
              ●
            </span>
            <span className=" px-1">Home</span>
          </div>
          <div className="cursor-pointer flex justify-between items-center ">
            <span className="text-[45px] md:text-[70px] text-amber-300 pb-3  md:pr-4 md:px-0 md:pb-4">
              ●
            </span>
            <span className=" px-1">Notes</span>
          </div>
          <div className="cursor-pointer flex justify-between items-center">
            <span className="text-[45px] md:text-[70px] text-green-300 pb-3  md:pr-4 md:px-0 md:pb-4">
              ●
            </span>
            <span className=" px-1">Study</span>
          </div>
          <div className="cursor-pointer flex justify-between items-center">
            <span className="text-[45px] md:text-[70px] text-cyan-300 pb-3  md:pr-3 md:px-0 md:pb-4">
              ●
            </span>
            <span className=" px-1">Works</span>
          </div>
        </aside>
        <section className=" w-full md:w-[84%] h-full"></section>
      </div>
      {isopen ? (
        <Popup
          setdata={setdata}
          data={data}
          setisopen={setisopen}
          setMainArray={setMainArray}
          mainArray={mainArray}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Dashboard;
