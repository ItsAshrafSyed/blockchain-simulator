import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";

function Peer({ select, name }) {
  return (
    <div className="  ">
      <div className="flex flex-col relative justify-start items-start  mx-2 my-1">
        <span
          className={`p-[0.93rem] z-0 ml-[0.45rem] mt-2   absolute opacity-70 rounded-full  ${
            select ? "animate-ping bg-purple-700" : "bg-sky-600"
          } `}
        ></span>
      <span className="flex  space-x-2 z-10 items-end">
      <span
          className={` hover:cursor-pointer  p-1  rounded-full ${
            select ? " bg-fuchsia-100 " : "bg-sky-100"
          } `}
        >
          <AiOutlineUser
            className={` opacity-90 w-9 h-9 ${
              select ? " text-purple-600 " : "text-blue-600"
            }`}
          />

         
        </span>
        {select && (
            <button className="">
              <AiOutlineClose
                className={`w-3 text-thick text-purple-500 hover:text-red-500 h-3`}
              />
            </button>
          )}
      </span>
        <span
          className={`font-thin font-robo mx-1  ${
            select ? " text-purple-600 hover:text-purple-700" : "text-blue-600 hover:text-blue-700"
          }`}
        >
          {name}
        </span>
        
      </div>
    </div> 
  );
}
export default Peer;
