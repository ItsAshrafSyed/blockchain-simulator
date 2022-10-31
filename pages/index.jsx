import { useState } from 'react'
import BlockChain from '../components/blockchain'
import Hash from "../components/hash/hash";

export default function Home() {
	return (
		<>
			<div className=" min-h-screen flex flex-col py-2 space-y-5 justify-center items-center">
				{/* <h1 className="text-4xl text-center font-black m-4 font-pop">
        BLOCKCHAIN 
      </h1> */}
				{/* <BlockChain /> */}
				<Hash />
			</div>
		</>
	);
}
