import React from "react";

function Radio({ setdata, data }) {
  const { tags } = data;

  function handleRadio(id) {
    let handlechange = tags.map((ele) => ({
      ...ele,
      checked: ele.id === id,
    }));

    setdata({ ...data, tags: handlechange });

    console.log(handlechange, "Updated tags after selection");
  }

  const getColorClass = (text, checked) => {
    if (checked) {
      switch (text) {
        case "Works":
          return "border-cyan-600 bg-cyan-200 accent-cyan-800";
        case "Study":
          return "border-green-600 bg-green-200 accent-green-800";
        default:
          return "border-amber-600 bg-amber-200 accent-amber-800";
      }
    } else {
      switch (text) {
        case "Works":
          return "border-cyan-200 bg-cyan-50 accent-cyan-600";
        case "Study":
          return "border-green-200 bg-green-50 accent-green-600";
        default:
          return "border-amber-200 bg-amber-50 accent-amber-600";
      }
    }
  };

  return (
    <div className="w-64 md:w-96 mt-2">
      <div className="flex justify-between flex-wrap gap-2 md:gap-0">
        {tags &&
          tags.map((item, index) => (
            <div
              key={index}
              className={`relative border py-2 px-10 ${getColorClass(
                item.text,
                item.checked
              )}`}
            >
              <input
                className={`cursor-pointer mr-1 h-full w-full z-[2] opacity-0 absolute md:scale-150 md:mr-2`}
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
