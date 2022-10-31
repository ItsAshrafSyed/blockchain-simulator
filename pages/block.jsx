import { useState } from "react";
import { sha256 } from "js-sha256";
import { GiMiner } from "react-icons/gi";


export default function HashPage() {
  const [data, setData] = useState("");
  const [block,setblock] = useState(1);
  const [change, setchange] = useState(false);
  const [nonce , setnonce] = useState(8101);
  const [hash, sethash] = useState("00006df0bbbe9df4c21c6434967f8c7cefa1a8515a3128c4b3accc1beab40670");


 
  const styles = {
    wrapper: `font-robo flex space-y-5  block  bg-white align-center w-[340px] sm:w-full sm:w-screen p-5 pt-8 border max-w-md md:max-w-xl justify-center flex-col w-full shadow-md rounded-lg hover:shadow-2xl transition-all`,
    inputwrapper: "  flex  items-center ",
    input: "outline-none text-xs p-[4px]  flex-1 ",
    inputgroup: `p-[3px]  hover:border-sky-400 focus-within:ring-2 focus-within:ring-sky-100 focus-within:border-sky-400 flex rounded-r-lg items-center border flex-1 transition ease-in-out`,
    texticon: "p-[4px] pl-2",
    inputtext: "border rounded-l-lg p-[5px] text-sm font-light bg-gray-50 px-4",
  };
  const text = {
    wrapper: "space-y-2 ",
    prev: "flex space-x-2 items-center ",
    scroll:
      "overflow-x-scroll scrollbar-thin text-[13px] max-md transition-all",
    green: " bg-lime-50 border text-[#52c41a] rounded border-[#52c41a] px-2",
    txt: "text-sm",
    greenprev: "text-[#52c41a] text-[0.7rem]",
    redprev: "text-red-400 text-[0.7rem]",
    red: " bg-red-50 border text-red-400 rounded border-red-400 px-2",
  };
  const button = {
    btn: `${change==false
      ? "cursor-not-allowed bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none"
      : "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
      } flex items-center text-white font-medium rounded-lg  px-4 space-x-2 py-[5px]  transition-all text-white font-pop`,
  };

  function mine(data){
    console.log(data);
    let hash = sha256(nonce+data);
		  let res = "0000" + hash.slice(4);
      // console.log("res",res);
      sethash(res);
  }

  function generate_hash(data){
      console.log(data);
      sethash(sha256(data));
      
  }

  return (
		<>
			<div className="mt-4">
				<div className="block space-y-5 p-6 mt-2 p-5 pt-8 border rounded-lg shadow-lg bg-white max-w-[80vw] min-w-[80vw] xl:min-w-[65vw] full hover:shadow-2xl m-4">
					<div className="flex space-x-5 items-center">
						{/* <span className="">Block :</span>
            <p>
              <input className="rounded-r-lg rounded-l-lg p-[5px] text-sm font-light bg-red-50 max-w-auto"  type="number" value={2} />
            </p> */}
						<div className="container text-2xl font-pop">
							BLOCK #
							<span>
								<input
									className="max-auto"
									onChange={(e) => {
										setblock(e.target.value);
										setchange(true);
										generate_hash(data);
									}}
									type="number"
									value={block}
								/>
							</span>
							<div className="flex-1 float-right">
								<button
									disabled={change == false}
									onClick={() => {
										setchange(false);
										setnonce(parseInt((Math.random() * 100000).toFixed(0)));
										mine(data);
									}}
									className={`${
										change == false
											? "cursor-not-allowed bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none"
											: "bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 flex items-center text-white font-medium rounded-lg  px-4 space-x-2 py-[5px]  transition-all text-white font-pop bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 "
									} float-right flex hover:bg-gradient-to-br focus:ring-4 focus:outline-none  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 flex items-center text-white font-medium rounded-lg  px-4 space-x-2 py-[5px]  transition-all text-white font-pop`}
								>
									<GiMiner />
									<span>Mine</span>{" "}
								</button>
							</div>
						</div>
					</div>
					<span className="text-xs">{Date().toString()}</span>
					<div className="flex space-x-5 items-center">
						<span className="text-sm">Nonce :</span>
						<p className="text-sm border bg-gray-50 px-2 py-[2px] rounded ">
							{nonce}
						</p>
					</div>

					<div className=" flex space-x-5">
						<label
							htmlFor="data"
							className="form-label inline-block mb-2 text-gray-700"
						>
							<span className="text-sm font-pop">Data</span>
						</label>
						<textarea
							id="data"
							className="
        form-control
        block
        w-full
        px-3
        
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border-[1.7px] border-solid border-gray-500
        rounded
        transition
        ease-in-out
        m-0
      focus:ring-1
      foucus:ring-sky-100
        focus:text-gray-700 focus:bg-white focus:border-sky-400 focus:outline-none "
							rows="12"
							placeholder="Data inside the block"
							onChange={(e) => {
								setData(e.target.value);
								generate_hash(data);
								setchange(true);
								// setColor(true);
								// setTimeout(() => setColor(false), 100);
							}}
						></textarea>
					</div>

					<div className="flex space-x-5 items-center">
						<span className="font-pop">Hash</span>
						<p
							className={`${
								hash.slice(0, 4) === "0000" ? text.green : text.red
							} ${text.scroll}`}
						>
							{hash}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}