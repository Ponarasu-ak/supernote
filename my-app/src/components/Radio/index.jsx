import React from "react";

function Radio({ setdata, data }) {
  const { tags } = data;

  function handleRadio(id) {
    let handlechange = tags.map((ele) => {
      if (ele.id === id) {
        return { ...ele, checked: true };
      } else return { ...ele, checked: false };
    });

    setdata({ ...data, tags: handlechange });
  }

  const getColorClass = (text) => {
    switch (text) {
      case "Work":
        return "border-cyan-200 bg-cyan-50 accent-cyan-600";
      case "Study":
        return "border-green-200 bg-green-50 accent-green-600";
      default:
        return "border-amber-200 bg-amber-50 accent-amber-600";
    }
  };

  return (
    <div className="w-64 md:w-96  mt-2">
      <div className="flex justify-between">
        {tags &&
          tags.map((item, index) => (
            // <label
            //   key={index}
            //   className={`border px-2 rounded md:px-6 md:py-1 ${getColorClass(
            //     item.text
            //   )}`}
            //   htmlFor=""
            // >

            //   {item.text}
            // </label>
            <div
              className={`relative border py-2 px-10 ${getColorClass(
                item.text
              )}`}
            >
              <input
                className={`cursor-pointer mr-1 h-full w-full z-[2] opacity-0  absolute md:scale-150 md:mr-2`}
                type="radio"
                id={item.id}
                checked={item.checked}
                onClick={() => handleRadio(item.id)}
              />
              <div>
                <label> {item.text}</label>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Radio;
