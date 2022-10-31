import { useState } from "react";
import Chain from "./chain";

export default function Main() {
  const [chain1, setChain1] = useState([
    {
      block: 1,
      chain: 1,
      nonce: 11316,
      previous: "0000",
      hash: "000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
      data: " block data",
      timestamp: Date().toString(),
    },
  ]);
  const [chain2, setChain2] = useState([
    {
      block: 1,
      chain: 1,
      nonce: 11316,
      previous: "0000",
      hash: "000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
      data: " block data",
      timestamp: Date().toString(),
    },
  ]);
  const [chain3, setChain3] = useState([
    {
      block: 1,
      chain: 1,
      nonce: 11316,
      previous: "0000",
      hash: "000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
      data: " block data",
      timestamp: Date().toString(),
    },
  ]);

  return (
		<div className="flex flex-col items-start justify-center">
			{/* <h1 className="text-center text-[2rem] font-bold font-robo ">
        Distributed
      </h1> */}
			<div className=" min-h-screen flex  md:space-x-2 lg:space-x-5 xl:space-x-8 r">
				<div className=" ">
					<h1 className="text-2xl py-3 text-center font-medium">Alice</h1>
					<Chain
						chain={chain1}
						setChain={setChain1}
						setChain1={setChain2}
						setChain2={setChain3}
					/>
				</div>

				<div className=" ">
					<h1 className="text-2xl py-3 text-center font-medium">Bob</h1>
					<Chain
						chain={chain2}
						setChain={setChain2}
						setChain1={setChain1}
						setChain2={setChain3}
					/>
				</div>
				<div className=" ">
					<h1 className="text-2xl py-3 text-center font-medium">Nancy</h1>
					<Chain
						chain={chain3}
						setChain={setChain3}
						setChain1={setChain1}
						setChain2={setChain2}
					/>
				</div>
			</div>
		</div>
	);
}
