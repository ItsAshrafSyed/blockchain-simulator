import { BsFileEarmarkText } from "react-icons/bs";
import { GiMiner } from "react-icons/gi";
import { useState } from "react";

const Block = ({ data, hashChange, mine }) => {
  const styles = {
    wrapper: `font-robo flex space-y-5  block  bg-white align-center w-[18rem] md:w-[20rem] xl:w-[22rem]  p-5 pt-8 border max-w-xl  justify-center flex-col w-full shadow-md rounded-lg hover:shadow-2xl transition-all`,
    inputwrapper: "  flex  items-center ",
    input: "outline-none text-xs p-[2px]  flex-1 ",
    inputgroup: `p-[3px]  hover:border-sky-400 focus-within:ring-2 focus-within:ring-sky-100 focus-within:border-sky-400 flex rounded-r-lg items-center border flex-1 transition ease-in-out`,
    texticon: "p-[2px] pl-2",
    inputtext: "border rounded-l-lg p-[3px] text-sm font-light bg-gray-50 px-4",
  };
  const text = {
    wrapper: "space-y-2 ",
    prev: "flex space-x-2 items-center ",
    scroll:
      "overflow-x-scroll scrollbar-thin text-[13px] max-md transition-all",
    green: " bg-lime-50 border text-[#52c41a] rounded border-[#52c41a] px-2",
    txt: "text-xs",
    greenprev: "text-[#52c41a] text-[0.6rem]",
    redprev: "text-red-400 text-[0.6rem]",
    red: " bg-red-50 border text-red-400 rounded border-red-400 px-2",
  };
  const button = {
    btn: `${
      data.hash.slice(0, 4) === "0000"
        ? "cursor-not-allowed bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none"
        : "bg-gray-800  focus:ring-4 focus:outline-none focus:ring-gray-500 "
    } flex items-center text-white font-medium rounded-lg  px-3 space-x-2 py-[4px]  transition-all text-white font-pop`,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputwrapper}>
        <div className={styles.inputtext}>DATA</div>
        <div className={styles.inputgroup}>
          <span className={styles.texticon}>
            <BsFileEarmarkText />
          </span>
          <input
            value={data.data}
            onChange={(e) => hashChange(data, e.target.value)}
            placeholder="Enter data"
            className={styles.input}
            type="text"
          />
        </div>
      </div>
      <div className={text.wrapper}>
        <div className={text.prev}>
          <p className={text.txt}>PREVIOUS HASH</p>
          <div
            className={`${
              data.previous.slice(0, 4) === "0000"
                ? text.greenprev
                : text.redprev
            } ${text.scroll}`}
          >
            {data.previous}
          </div>
        </div>
        <div className={text.prev}>
          <p className={text.txt}>HASH</p>
          <div
            className={`${
              data.hash.slice(0, 4) === "0000" ? text.green : text.red
            } ${text.scroll}`}
          >
            {data.hash}{" "}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <p className={text.txt}>NONCE</p>
        <div className="text-xs border bg-gray-50 px-2 py-[2px] rounded ">
          {data.nonce}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-xl font-pop">
          BLOCK #{data.block}{" "}
          <span className="text-[0.5rem]">{data.timestamp.split("G")[0]}</span>
        </div>
        <div>
          <button
            disabled={data.hash.slice(0, 4) === "0000"}
            onClick={() => mine(data, true)}
            className={button.btn}
          >
            <GiMiner />
            <span>Mine</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Block;
