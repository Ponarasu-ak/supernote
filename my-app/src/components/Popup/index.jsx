import React from "react";
import Radio from "../Radio";

function Popup({ setisopen, setdata, data }) {
  console.log(data,'lllllllllll');

  function handleadd() {
    
  }
  
  return (
    <div className="w-full h-screen box-border backdrop-blur flex justify-center items-center ">
      <div className="  border rounded-md border-grey-500 ">
        <div className="bg-white p-4 px-3 w-full h-full flex flex-col   justify-center items-center">
          <div className="w-64 md:w-96 flex justify-between pb-2 ">
            <button onClick={() => setisopen(false)} className=" px-3 py-1  ">
              Cancel
            </button>
            <button onClick={handleadd} className="border text-white  bg-gray-600 rounded px-10 py-1">
              Add
            </button>
          </div>

          <div>
            <input
              className="bg-blue-100 w-64 md:w-96  h-12 p-2 outline-none broder mb-3"
              type="text"
              placeholder="Title..."
              value={data.title}
              onChange={(e)=>setdata({...data,title:e.target.value})}
            />
          </div>

          <div>
            <textarea
              className="bg-blue-100 w-64 md:w-96 h-40 p-2 outline-none "
              type="text"
              placeholder="Description..."
              value={data.description}
              onChange={(e)=>setdata({...data,description:e.target.value})}
            />
          </div>
          <div>
            <Radio setdata={setdata} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
