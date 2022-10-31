import { Component, useState } from "react";
import Header from "../components/header";
import { CgProfile } from "react-icons/cg";
import { IoIosClose } from "react-icons/io";
import { GiMiner } from "react-icons/gi";
import { FcExpand } from "react-icons/fc";
import { sha256 } from "js-sha256";

class Tokens extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pattern: "0000",
			users: [
				{
					name: "vamsi",
					chain: [
						{
							block: 1,
							chain: 1,
							nonce: 11316,
							previous: "0000",
							hash: "000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
							data: " block data",
							timestamp: Date().toString(),
						},
					],
				},
			],

			alice_blocks: [
				{
					block: 1,
					chain: 1,
					nonce: 11316,
					previous: "0000",
					hash: "000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
					data: " block data",
					timestamp: Date().toString(),
					trans: [
						{
							amount: 25,
							to: "Jane",
							from: "Darcy",
							status: true,
						},
						{
							amount: 10,
							to: "Ash",
							from: "Darcy",
							status: true,
						},
						{
							amount: 40,
							to: "Lary",
							from: "charlo",
							status: true,
						},
						{
							amount: 35,
							to: "Ben",
							from: "Darcy",
							status: true,
						},
						{
							amount: 25,
							to: "Ben",
							from: "Carlo",
							status: true,
						},
					],
					balance: [
						{
							name: "Darcy",
							wallet: 100,
						},
						{
							name: "Charlo",
							wallet: 70,
						},
						{
							name: "Ash",
							wallet: 10,
						},
						{
							name: "Ben",
							wallet: 25,
						},
						{
							name: "Lary",
							wallet: 80,
						},
						{
							name: "Jane",
							wallet: 0,
						},
					],
				},
				{
					block: 2,
					chain: 1,
					nonce: 38592,
					previous:
						"000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
					hash: "000013c51fc7812e3ccbb832e357f603ee6c17f81a5752f5271435d36d953625",
					data: " block data",
					timestamp: Date().toString(),
					trans: [
						{
							amount: 30,
							to: "Carlo",
							from: "Ben",
							status: true,
						},
						{
							amount: 20,
							to: "Ash",
							from: "Ben",
							status: true,
						},
						{
							amount: 50,
							to: "Carlo",
							from: "Lary",
							status: true,
						},
						{
							amount: 25,
							to: "Darcy",
							from: "Lary",
							status: true,
						},
						{
							amount: 5,
							to: "Ash",
							from: "Jane",
							status: true,
						},
					],
					balance: [
						{
							name: "Darcy",
							wallet: 65,
						},
						{
							name: "Charlo",
							wallet: 5,
						},
						{
							name: "Ash",
							wallet: 20,
						},
						{
							name: "Ben",
							wallet: 85,
						},
						{
							name: "Lary",
							wallet: 120,
						},
						{
							name: "Jane",
							wallet: 25,
						},
					],
				},
				{
					block: 3,
					chain: 1,
					nonce: 21501,
					previous:
						"000013c51fc7812e3ccbb832e357f603ee6c17f81a5752f5271435d36d953625",
					hash: "000021f1deecbac9ca594ca6426c04f06923de9b962ef5e5ba75b5b5ced6efce",
					data: " block data",
					timestamp: Date().toString(),
					trans: [
						{
							amount: 10,
							to: "Darcy",
							from: "Ben",
							status: true,
						},
						{
							amount: 15,
							to: "Carlo",
							from: "Ash",
							status: true,
						},
						{
							amount: 20,
							to: "Lary",
							from: "Jane",
							status: true,
						},
						{
							amount: 5,
							to: "Lary",
							from: "Ben",
							status: true,
						},
						{
							amount: 10,
							to: "Darcy",
							from: "Jane",
							status: true,
						},
					],
					balance: [
						{
							name: "Darcy",
							wallet: 90,
						},
						{
							name: "Charlo",
							wallet: 55,
						},
						{
							name: "Ash",
							wallet: 45,
						},
						{
							name: "Ben",
							wallet: 35,
						},
						{
							name: "Lary",
							wallet: 45,
						},
						{
							name: "Jane",
							wallet: 20,
						},
					],
				},
			],
			bob_blocks: [
				{
					block: 1,
					chain: 1,
					nonce: 11316,
					previous: "0000",
					hash: "000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
					data: " block data",
					timestamp: Date().toString(),
					trans: [
						{
							amount: 25,
							to: "Jane",
							from: "Darcy",
							status: true,
						},
						{
							amount: 10,
							to: "Ash",
							from: "Darcy",
							status: true,
						},
						{
							amount: 40,
							to: "Lary",
							from: "charlo",
							status: true,
						},
						{
							amount: 35,
							to: "Ben",
							from: "Darcy",
							status: true,
						},
						{
							amount: 25,
							to: "Ben",
							from: "Carlo",
							status: true,
						},
					],
					balance: [
						{
							name: "Darcy",
							wallet: 100,
						},
						{
							name: "Charlo",
							wallet: 70,
						},
						{
							name: "Ash",
							wallet: 10,
						},
						{
							name: "Ben",
							wallet: 25,
						},
						{
							name: "Lary",
							wallet: 80,
						},
						{
							name: "Jane",
							wallet: 0,
						},
					],
				},
				{
					block: 2,
					chain: 1,
					nonce: 38592,
					previous:
						"000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
					hash: "000013c51fc7812e3ccbb832e357f603ee6c17f81a5752f5271435d36d953625",
					data: " block data",
					timestamp: Date().toString(),
					trans: [
						{
							amount: 30,
							to: "Carlo",
							from: "Ben",
							status: true,
						},
						{
							amount: 20,
							to: "Ash",
							from: "Ben",
							status: true,
						},
						{
							amount: 50,
							to: "Carlo",
							from: "Lary",
							status: true,
						},
						{
							amount: 25,
							to: "Darcy",
							from: "Lary",
							status: true,
						},
						{
							amount: 5,
							to: "Ash",
							from: "Jane",
							status: true,
						},
					],
					balance: [
						{
							name: "Darcy",
							wallet: 65,
						},
						{
							name: "Charlo",
							wallet: 5,
						},
						{
							name: "Ash",
							wallet: 20,
						},
						{
							name: "Ben",
							wallet: 85,
						},
						{
							name: "Lary",
							wallet: 120,
						},
						{
							name: "Jane",
							wallet: 25,
						},
					],
				},
				{
					block: 3,
					chain: 1,
					nonce: 21501,
					previous:
						"000013c51fc7812e3ccbb832e357f603ee6c17f81a5752f5271435d36d953625",
					hash: "000021f1deecbac9ca594ca6426c04f06923de9b962ef5e5ba75b5b5ced6efce",
					data: " block data",
					timestamp: Date().toString(),
					trans: [
						{
							amount: 10,
							to: "Darcy",
							from: "Ben",
							status: true,
						},
						{
							amount: 15,
							to: "Carlo",
							from: "Ash",
							status: true,
						},
						{
							amount: 20,
							to: "Lary",
							from: "Jane",
							status: true,
						},
						{
							amount: 5,
							to: "Lary",
							from: "Ben",
							status: true,
						},
						{
							amount: 10,
							to: "Darcy",
							from: "Jane",
							status: true,
						},
					],
					balance: [
						{
							name: "Darcy",
							wallet: 90,
						},
						{
							name: "Charlo",
							wallet: 55,
						},
						{
							name: "Ash",
							wallet: 45,
						},
						{
							name: "Ben",
							wallet: 35,
						},
						{
							name: "Lary",
							wallet: 45,
						},
						{
							name: "Jane",
							wallet: 20,
						},
					],
				},
			],
			nancy_blocks: [
				{
					block: 1,
					chain: 1,
					nonce: 11316,
					previous: "0000",
					hash: "000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
					data: " block data",
					timestamp: Date().toString(),
					trans: [
						{
							amount: 25,
							to: "Jane",
							from: "Darcy",
							status: true,
						},
						{
							amount: 10,
							to: "Ash",
							from: "Darcy",
							status: true,
						},
						{
							amount: 40,
							to: "Lary",
							from: "charlo",
							status: true,
						},
						{
							amount: 35,
							to: "Ben",
							from: "Darcy",
							status: true,
						},
						{
							amount: 25,
							to: "Ben",
							from: "Carlo",
							status: true,
						},
					],
					balance: [
						{
							name: "Darcy",
							wallet: 100,
						},
						{
							name: "Charlo",
							wallet: 70,
						},
						{
							name: "Ash",
							wallet: 10,
						},
						{
							name: "Ben",
							wallet: 25,
						},
						{
							name: "Lary",
							wallet: 80,
						},
						{
							name: "Jane",
							wallet: 0,
						},
					],
				},
				{
					block: 2,
					chain: 1,
					nonce: 38592,
					previous:
						"000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
					hash: "000013c51fc7812e3ccbb832e357f603ee6c17f81a5752f5271435d36d953625",
					data: " block data",
					timestamp: Date().toString(),
					trans: [
						{
							amount: 30,
							to: "Carlo",
							from: "Ben",
							status: true,
						},
						{
							amount: 20,
							to: "Ash",
							from: "Ben",
							status: true,
						},
						{
							amount: 50,
							to: "Carlo",
							from: "Lary",
							status: true,
						},
						{
							amount: 25,
							to: "Darcy",
							from: "Lary",
							status: true,
						},
						{
							amount: 5,
							to: "Ash",
							from: "Jane",
							status: true,
						},
					],
					balance: [
						{
							name: "Darcy",
							wallet: 65,
						},
						{
							name: "Charlo",
							wallet: 5,
						},
						{
							name: "Ash",
							wallet: 20,
						},
						{
							name: "Ben",
							wallet: 85,
						},
						{
							name: "Lary",
							wallet: 120,
						},
						{
							name: "Jane",
							wallet: 25,
						},
					],
				},
				{
					block: 3,
					chain: 1,
					nonce: 21501,
					previous:
						"000013c51fc7812e3ccbb832e357f603ee6c17f81a5752f5271435d36d953625",
					hash: "000021f1deecbac9ca594ca6426c04f06923de9b962ef5e5ba75b5b5ced6efce",
					data: " block data",
					timestamp: Date().toString(),
					trans: [
						{
							amount: 10,
							to: "Darcy",
							from: "Ben",
							status: true,
						},
						{
							amount: 15,
							to: "Carlo",
							from: "Ash",
							status: true,
						},
						{
							amount: 20,
							to: "Lary",
							from: "Jane",
							status: true,
						},
						{
							amount: 5,
							to: "Lary",
							from: "Ben",
							status: true,
						},
						{
							amount: 10,
							to: "Darcy",
							from: "Jane",
							status: true,
						},
					],
					balance: [
						{
							name: "Darcy",
							wallet: 90,
						},
						{
							name: "Charlo",
							wallet: 55,
						},
						{
							name: "Ash",
							wallet: 45,
						},
						{
							name: "Ben",
							wallet: 35,
						},
						{
							name: "Lary",
							wallet: 45,
						},
						{
							name: "Jane",
							wallet: 20,
						},
					],
				},
			],
			mem_pool: [
			],
			add_tx: {
				amount: 10,
				from: "Darcy",
				to: "Ash"
			}

		};
		var difficulty = 4;
		var maximumNonce = 500000;
		var pattern = "";
		for (var x = 0; x < difficulty; x++) {
			pattern += "0";
		}
	}
	// names = ["vikram", "Dilli", "Fahad", "Rolex", "Santanam"];
	// name_index = 0;
	// remove_user(index) {
	// 	if (this.state.users.length > 1) {
	// 		this.state.users.splice(index, 1);
	// 		this.setState({ users: this.state.users });
	// 		this.name_index--;
	// 	}
	// }
	// add_user() {
	// 	if (this.name_index <= 4) {
	// 		this.state.users.push({ name: this.names[this.name_index++] });
	// 		this.setState({ users: this.state.users });
	// 	}
	// }

	getSha256(txt) {
		// calculate a SHA256 hash of the contents of the block
		return sha256(txt);
	}

	alice_mine(index, block) {
		var hash;
		hash = this.getSha256(block.block + block.nonce + block.previous);
		let res = "0000" + hash.slice(4);
		console.log(res);
		let temp = this.state.alice_blocks;
		temp[index].hash = res;
		temp[index].nonce = parseInt((Math.random() * 100000).toFixed(0));
		if (index + 1 < temp.length) {
			temp[index + 1].previous = res;
		}
		this.setState({ alice_blocks: temp });
		this.alice_hashChange(index + 1, temp[index + 1], "", true);
		// console.log(hash, "mine_hash");
	}

	alice_hashChange(index, block, txt = "", mine = false) {
		var hash;
		let alice_blockss = this.state.alice_blocks;
		let new_alice_blocks = alice_blockss.map((e, i) => {
			if (i >= index) {
				hash = this.getSha256(txt + e.block + e.nonce + e.previous);
				let temp = alice_blockss;
				temp[i].hash = hash;
				if (i < alice_blockss.length - 1 && !mine) {
					temp[i + 1].previous = hash;
					// console.log(temp[i].previous)
				}
				this.setState({ alice_blocks: temp });
			}
		});
	}

	bob_mine(index, block) {
		var hash;
		hash = this.getSha256(block.block + block.nonce + block.previous);
		let res = "0000" + hash.slice(4);
		console.log(res);
		let temp = this.state.bob_blocks;
		temp[index].hash = res;
		temp[index].nonce = parseInt((Math.random() * 100000).toFixed(0));
		if (index + 1 < temp.length) {
			temp[index + 1].previous = res;
		}
		this.setState({ bob_blocks: temp });
		this.bob_hashChange(index + 1, temp[index + 1], "", true);
		// console.log(hash, "mine_hash");
	}

	bob_hashChange(index, block, txt = "", mine = false) {
		var hash;
		let bob_blockss = this.state.bob_blocks;
		let new_bob_blocks = bob_blockss.map((e, i) => {
			if (i >= index) {
				hash = this.getSha256(txt + e.block + e.nonce + e.previous);
				let temp = bob_blockss;
				temp[i].hash = hash;
				if (i < bob_blockss.length - 1 && !mine) {
					temp[i + 1].previous = hash;
					// console.log(temp[i].previous)
				}
				this.setState({ bob_blocks: temp });
			}
		});
	}

	nancy_mine(index, block) {
		var hash;
		hash = this.getSha256(block.block + block.nonce + block.previous);
		let res = "0000" + hash.slice(4);
		console.log(res);
		let temp = this.state.nancy_blocks;
		temp[index].hash = res;
		temp[index].nonce = parseInt((Math.random() * 100000).toFixed(0));
		if (index + 1 < temp.length) {
			temp[index + 1].previous = res;
		}
		this.setState({ nancy_blocks: temp });
		this.nancy_hashChange(index + 1, temp[index + 1], "", true);
		// console.log(hash, "mine_hash");
	}

	nancy_hashChange(index, block, txt = "", mine = false) {
		var hash;
		let nancy_blockss = this.state.nancy_blocks;
		let new_nancy_blocks = nancy_blockss.map((e, i) => {
			if (i >= index) {
				hash = this.getSha256(txt + e.block + e.nonce + e.previous);
				let temp = nancy_blockss;
				temp[i].hash = hash;
				if (i < nancy_blockss.length - 1 && !mine) {
					temp[i + 1].previous = hash;
					// console.log(temp[i].previous)
				}
				this.setState({ nancy_blocks: temp });
			}
		});
	}


	styles = {
		wrapper: `font-robo flex space-y-5  block  bg-white align-center w-[15rem] md:w-[17rem] xl:w-[19rem]  p-5 pt-8 border max-w-xl  justify-center flex-col w-full shadow-md rounded-lg hover:shadow-2xl transition-all`,
		inputwrapper: "  flex  items-center ",
		input: "outline-none text-xs   flex-1 ",
		inputgroup: `p-[3px]  hover:border-sky-400 focus-within:ring-2 focus-within:ring-sky-100 focus-within:border-sky-400 flex rounded-r-lg items-center border flex-1`,
		texticon: "p-[4px] pl-2",
		inputtext: "border rounded-l-lg p-[5px] text-sm font-light bg-gray-50 px-4",
	};
	text = {
		wrapper: "space-y-2 ",
		prev: "flex space-x-2 items-center ",
		scroll:
			"overflow-x-scroll scrollbar-thin text-[13px] max-md transition-all",
		green:
			" bg-lime-50 border text-[#52c41a] text-sm rounded border-[#52c41a] px-2 overflow-x-scroll scrollbar-thin text-[13px] max-md transition-all",
		txt: "text-sm",
		greenprev: "text-[#52c41a] text-[0.7rem]",
		redprev: "text-red-400 text-[0.7rem]",
		red: " bg-red-50 border text-red-400 rounded border-red-400 px-2",
	};
	// button = {
	//     btn: `${data.hash.slice(0, 4) === "0000" ? "cursor-not-allowed bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none" : "bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 flex items-center text-white font-medium rounded-lg  px-4 space-x-2 py-[5px]  transition-all text-white font-pop"} flex `
	//   }
	list = {};
	// state = {  }
	render() {
		return (
			<>
				<div className="flex flex-col margin-3 space-y-5 justify-center items-center">
					{/* <span
						className="text-4xl m-[5px] font-pop w-auto mx-auto justify-center "
						aria-current="page"
					>
						Tokens
					</span> */}

					<div className="flex columns-4 ">
						<div className="flex">
							<div className="p-2">
								<span className="text-2xl font-pop w-auto mx-auto justify-center ">
									Alice
								</span>
								{this.state.alice_blocks.map((item, index) => {
									return (
										<>
											<div
												className={`${
													item.hash.slice(0, 4) === "0000"
														? ""
														: " border-red-200 bg-red-100"
												} ${this.styles.wrapper}`}
												key={index * 10}
											>
												<div className="text-2xl font-pop">
													BLOCK #{item.block}{" "}
													<span className="text-xs">
														{
															this.state.users[0].chain[0].timestamp.split(
																"("
															)[0]
														}
													</span>
												</div>
												<div className="flex items-center space-x-2">
													<p className="text-sm">NONCE</p>
													<div className="text-sm border bg-gray-50 px-2 py-[2px] rounded ">
														{item.nonce}
													</div>
													<button
														disabled={item.hash.slice(0, 4) === "0000"}
														onClick={() => {
															this.alice_mine(index, item);
														}}
														className={`${
															item.hash.slice(0, 4) === "0000"
																? "cursor-not-allowed bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none"
																: "bg-gray-800  focus:ring-4 focus:outline-none focus:ring-gray-500 "
														} flex items-rigth text-white font-medium rounded-lg  px-3 space-x-2 py-[2px] float-right  transition-all text-white font-pop`}
													>
														<GiMiner />
														<span>Mine</span>{" "}
													</button>
												</div>
												Tx:
												<div className="flex">
													<div className="flex-1 rounded-r-lg items-center border">
														<div class="grid grid-cols-3 ">
															{item.trans.map((object, i) => {
																return (
																	<>
																		<div
																			className={`${
																				true
																					? " "
																					: "bg-red-50 filter text-red-400"
																			} ${"flex"}`}
																			key={index * 10 + i}
																		>
																			<div className="flex  rounded-l-lg p-[5px] text-sm font-light bg-gray-50">
																				$
																			</div>
																			<div className="flex-1 rounded-r-lg p-[5px] text-sm font-light bg-red-50">
																				{/* {100} */}
																				<input
																					value={object.amount}
																					className="rounded-r-lg text-sm font-light  bg-red-50"
																					onChange={(e) => {
																						// console.log()

																						let temp = object;
																						// let static_amount = object.amount;
																						temp.amount = parseInt(
																							e.target.value
																						);
																						// let res = item.balance.filter((data) => {
																						// 	if (data.name === object.from) {
																						// 		return data;
																						// 	}
																						// });
																						// console.log(res[0],"res");
																						// if (res[0].wallet >= temp.amount) {
																						// 	temp.status = true;
																						// 	console.log(temp, "t");
																						// 	// if(temp.amount < static_amount){
																						// 	//     this.state.alice_blocks[index+1].balance
																						// 	// }
																						// } else {
																						// 	temp.status = false;
																						// 	console.log(temp, "f");
																						// }
																						let temp2 = this.state.alice_blocks;
																						temp2[index].trans[i] = temp;
																						// console.log(this.state.alice_blocks);
																						this.setState({
																							alice_blocks: temp2,
																						});
																						// console.log(this.state.alice_blocks);
																						this.alice_hashChange(
																							index,
																							item,
																							temp.amount
																						);
																					}}
																					type="number"
																				/>
																			</div>
																		</div>
																		<div className="flex">
																			<div className="flex  rounded-l-lg p-[5px] text-sm font-light bg-purple-50">
																				{"From"}
																			</div>
																			<div className="flex-1 rounded-r-lg p-[5px] text-sm font-light bg-red-50">
																				{object.from}
																			</div>
																		</div>
																		<div className="flex">
																			<div className="flex  rounded-l-lg p-[5px] text-sm font-light bg-purple-50">
																				{"To"}
																			</div>
																			<div className="flex-1 rounded-r-lg p-[5px] text-sm font-light bg-red-50">
																				{object.to}
																			</div>
																		</div>
																	</>
																);
															})}
														</div>
													</div>
												</div>
												<div className={this.text.wrapper}>
													<div className={this.text.prev}>
														<p className={this.text.txt}>PREVIOUS HASH</p>
														<div
															className={`${
																item.previous.slice(0, 4) === "0000"
																	? this.text.greenprev
																	: this.text.redprev
															} ${this.text.scroll}`}
														>
															{item.previous}
														</div>
													</div>
													<div className={this.text.prev}>
														<p className={this.text.txt}>HASH</p>
														<div
															className={`${
																item.hash.slice(0, 4) === "0000"
																	? this.text.green
																	: this.text.red
															} ${this.text.scroll}`}
														>
															{item.hash}
														</div>
													</div>
												</div>
											</div>
											{index != this.state.alice_blocks.length - 1 && (
												<div className="flex align-center">
													<FcExpand className="h-5 w-" />
												</div>
											)}
										</>
									);
								})}
							</div>
						</div>
						<div className="flex">
							<div className="p-2">
								<span className="text-2xl font-pop w-auto mx-auto justify-center ">
									Bob
								</span>
								{this.state.bob_blocks.map((item, index) => {
									return (
										<>
											<div
												className={`${
													item.hash.slice(0, 4) === "0000"
														? ""
														: " border-red-200 bg-red-100"
												} ${this.styles.wrapper}`}
												key={index * 100}
											>
												<div className="text-2xl font-pop">
													BLOCK #{item.block}{" "}
													<span className="text-xs">
														{
															this.state.users[0].chain[0].timestamp.split(
																"("
															)[0]
														}
													</span>
												</div>
												<div className="flex items-center space-x-2">
													<p className="text-sm">NONCE</p>
													<div className="text-sm border bg-gray-50 px-2 py-[2px] rounded ">
														{item.nonce}
													</div>
													<button
														disabled={item.hash.slice(0, 4) === "0000"}
														onClick={() => {
															this.bob_mine(index, item);
														}}
														className={`${
															item.hash.slice(0, 4) === "0000"
																? "cursor-not-allowed bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none"
																: "bg-gray-800  focus:ring-4 focus:outline-none focus:ring-gray-500 "
														} flex items-rigth text-white font-medium rounded-lg  px-3 space-x-2 py-[2px] float-right  transition-all text-white font-pop`}
													>
														<GiMiner />
														<span>Mine</span>{" "}
													</button>
												</div>
												Tx:
												<div className="flex">
													<div className="flex-1 rounded-r-lg items-center border">
														<div class="grid grid-cols-3 ">
															{item.trans.map((object, i) => {
																return (
																	<>
																		<div
																			key={index * 100 + i}
																			className={`${
																				true
																					? " "
																					: "bg-red-50 filter text-red-400"
																			} ${"flex"}`}
																		>
																			<div className="flex  rounded-l-lg p-[5px] text-sm font-light bg-gray-50">
																				$
																			</div>
																			<div className="flex-1 rounded-r-lg p-[5px] text-sm font-light bg-red-50">
																				{/* {100} */}
																				<input
																					value={object.amount}
																					className="rounded-r-lg text-sm font-light  bg-red-50"
																					onChange={(e) => {
																						// console.log()

																						let temp = object;
																						// let static_amount = object.amount;
																						temp.amount = parseInt(
																							e.target.value
																						);
																						// let res = item.balance.filter((data) => {
																						// 	if (data.name === object.from) {
																						// 		return data;
																						// 	}
																						// });
																						// console.log(res[0],"res");
																						// if (res[0].wallet >= temp.amount) {
																						// 	temp.status = true;
																						// 	console.log(temp, "t");
																						// 	// if(temp.amount < static_amount){
																						// 	//     this.state.alice_blocks[index+1].balance
																						// 	// }
																						// } else {
																						// 	temp.status = false;
																						// 	console.log(temp, "f");
																						// }
																						let temp2 = this.state.bob_blocks;
																						temp2[index].trans[i] = temp;
																						// console.log(this.state.alice_blocks);
																						this.setState({
																							bob_blocks: temp2,
																						});
																						// console.log(this.state.alice_blocks);
																						this.bob_hashChange(
																							index,
																							item,
																							temp.amount
																						);
																					}}
																					type="number"
																				/>
																			</div>
																		</div>
																		<div className="flex">
																			<div className="flex  rounded-l-lg p-[5px] text-sm font-light bg-purple-50">
																				{"From"}
																			</div>
																			<div className="flex-1 rounded-r-lg p-[5px] text-sm font-light bg-red-50">
																				{object.from}
																			</div>
																		</div>
																		<div className="flex">
																			<div className="flex  rounded-l-lg p-[5px] text-sm font-light bg-purple-50">
																				{"To"}
																			</div>
																			<div className="flex-1 rounded-r-lg p-[5px] text-sm font-light bg-red-50">
																				{object.to}
																			</div>
																		</div>
																	</>
																);
															})}
														</div>
													</div>
												</div>
												<div className={this.text.wrapper}>
													<div className={this.text.prev}>
														<p className={this.text.txt}>PREVIOUS HASH</p>
														<div
															className={`${
																item.previous.slice(0, 4) === "0000"
																	? this.text.greenprev
																	: this.text.redprev
															} ${this.text.scroll}`}
														>
															{item.previous}
														</div>
													</div>
													<div className={this.text.prev}>
														<p className={this.text.txt}>HASH</p>
														<div
															className={`${
																item.hash.slice(0, 4) === "0000"
																	? this.text.green
																	: this.text.red
															} ${this.text.scroll}`}
														>
															{item.hash}
														</div>
													</div>
												</div>
											</div>
											{index != this.state.alice_blocks.length - 1 && (
												<div className="flex align-center">
													<FcExpand className="h-5 w-" />
												</div>
											)}
										</>
									);
								})}
							</div>
						</div>
						<div className="flex">
							<div className="p-2">
								<span className="text-2xl font-pop w-auto mx-auto justify-center ">
									Nancy
								</span>
								{this.state.nancy_blocks.map((item, index) => {
									return (
										<>
											<div
												className={`${
													item.hash.slice(0, 4) === "0000"
														? ""
														: " border-red-200 bg-red-100"
												} ${this.styles.wrapper}`}
												key={index * 1000}
											>
												<div className="text-2xl font-pop">
													BLOCK #{item.block}{" "}
													<span className="text-xs">
														{
															this.state.users[0].chain[0].timestamp.split(
																"("
															)[0]
														}
													</span>
												</div>
												<div className="flex items-center space-x-2">
													<p className="text-sm">NONCE</p>
													<div className="text-sm border bg-gray-50 px-2 py-[2px] rounded ">
														{item.nonce}
													</div>
													<button
														disabled={item.hash.slice(0, 4) === "0000"}
														onClick={() => {
															this.nancy_mine(index, item);
														}}
														className={`${
															item.hash.slice(0, 4) === "0000"
																? "cursor-not-allowed bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none"
																: "bg-gray-800  focus:ring-4 focus:outline-none focus:ring-gray-500 "
														} flex items-rigth text-white font-medium rounded-lg  px-3 space-x-2 py-[4px]  transition-all text-white font-pop`}
													>
														<GiMiner />
														<span>Mine</span>{" "}
													</button>
												</div>
												Tx:
												<div className="flex">
													<div className="flex-1 rounded-r-lg items-center border">
														<div class="grid grid-cols-3 ">
															{item.trans.map((object, i) => {
																return (
																	<>
																		<div
																			key={index * 1000 + i}
																			className={`${
																				true
																					? " "
																					: "bg-red-50 filter text-red-400"
																			} ${"flex"}`}
																		>
																			<div className="flex  rounded-l-lg p-[5px] text-sm font-light bg-gray-50">
																				$
																			</div>
																			<div className="flex-1 rounded-r-lg p-[5px] text-sm font-light bg-red-50">
																				{/* {100} */}
																				<input
																					value={object.amount}
																					className="rounded-r-lg text-sm font-light  bg-red-50"
																					onChange={(e) => {
																						// console.log()

																						let temp = object;
																						// let static_amount = object.amount;
																						temp.amount = parseInt(
																							e.target.value
																						);
																						// let res = item.balance.filter((data) => {
																						// 	if (data.name === object.from) {
																						// 		return data;
																						// 	}
																						// });
																						// console.log(res[0],"res");
																						// if (res[0].wallet >= temp.amount) {
																						// 	temp.status = true;
																						// 	console.log(temp, "t");
																						// 	// if(temp.amount < static_amount){
																						// 	//     this.state.alice_blocks[index+1].balance
																						// 	// }
																						// } else {
																						// 	temp.status = false;
																						// 	console.log(temp, "f");
																						// }
																						let temp2 = this.state.nancy_blocks;
																						temp2[index].trans[i] = temp;
																						// console.log(this.state.alice_blocks);
																						this.setState({
																							nancy_blocks: temp2,
																						});
																						// console.log(this.state.alice_blocks);
																						this.nancy_hashChange(
																							index,
																							item,
																							temp.amount
																						);
																					}}
																					type="number"
																				/>
																			</div>
																		</div>
																		<div className="flex">
																			<div className="flex  rounded-l-lg p-[5px] text-sm font-light bg-purple-50">
																				{"From"}
																			</div>
																			<div className="flex-1 rounded-r-lg p-[5px] text-sm font-light bg-red-50">
																				{object.from}
																			</div>
																		</div>
																		<div className="flex">
																			<div className="flex  rounded-l-lg p-[5px] text-sm font-light bg-purple-50">
																				{"To"}
																			</div>
																			<div className="flex-1 rounded-r-lg p-[5px] text-sm font-light bg-red-50">
																				{object.to}
																			</div>
																		</div>
																	</>
																);
															})}
														</div>
													</div>
												</div>
												<div className={this.text.wrapper}>
													<div className={this.text.prev}>
														<p className={this.text.txt}>PREVIOUS HASH</p>
														<div
															className={`${
																item.previous.slice(0, 4) === "0000"
																	? this.text.greenprev
																	: this.text.redprev
															} ${this.text.scroll}`}
														>
															{item.previous}
														</div>
													</div>
													<div className={this.text.prev}>
														<p className={this.text.txt}>HASH</p>
														<div
															className={`${
																item.hash.slice(0, 4) === "0000"
																	? this.text.green
																	: this.text.red
															} ${this.text.scroll}`}
														>
															{item.hash}
														</div>
													</div>
												</div>
											</div>
											{index != this.state.bob_blocks.length - 1 && (
												<div className="flex align-center">
													<FcExpand className="h-5 w-" />
												</div>
											)}
										</>
									);
								})}
							</div>
						</div>
						<div className="">
							<div className="p-2">
								<span className="text-2xl font-pop w-auto mx-auto justify-center ">
									Add Block
								</span>
								<div className="font-robo flex space-y-5  block  bg-white align-center    w-[18rem] md:w-[20rem] xl:w-[22rem]  p-5 pt-8 border max-w-xl   justify-center flex-col w-full shadow-md rounded-lg hover:shadow-2xl transition-all">
									<span className="text-xl font-pop">Tx</span>
									<div className="flex">
										<div className="static flex-1 rounded-r-lg items-center border">
											<div class="grid grid-cols-3 ">
												<>
													<div
														className={`${
															true ? " " : "bg-red-50 filter text-red-400"
														} ${"flex"}`}
													>
														<div className="flex  rounded-l-lg p-[5px] text-sm font-light bg-gray-50">
															$
														</div>
														<div className="flex-1 rounded-r-lg p-[5px] text-sm font-light bg-red-50">
															<input
																value={this.state.add_tx.amount}
																onChange={(e) => {
																	let temp = this.state.add_tx;
																	temp.amount = e.target.value;
																	this.setState({
																		add_tx: temp,
																	});
																}}
																className="rounded-r-lg text-sm font-light  bg-red-50"
																type="number"
															/>
														</div>
													</div>
													<div className="flex">
														<div className="flex  p-[5px] text-sm font-light bg-purple-50">
															{"From"}
														</div>
														<div className="flex-1 rounded-r-lg p-[5px] text-sm font-light bg-red-50">
															<input
																value={this.state.add_tx.from}
																onChange={(e) => {
																	let temp = this.state.add_tx;
																	temp.from = e.target.value;
																	this.setState({
																		add_tx: temp,
																	});
																}}
																className="rounded-r-lg max-w-[60px] text-sm font-light  bg-red-50"
																type="text"
															/>
														</div>
													</div>
													<div className="flex">
														<div className="flex  rounded-l-lg p-[5px] text-sm font-light bg-purple-50">
															{"To"}
														</div>
														<div className="flex-1 rounded-r-lg p-[5px] text-sm font-light bg-red-50">
															<input
																value={this.state.add_tx.to}
																onChange={(e) => {
																	let temp = this.state.add_tx;
																	temp.to = e.target.value;
																	this.setState({
																		add_tx: temp,
																	});
																}}
																className="rounded-r-lg max-w-[60px] text-sm font-light  bg-red-50"
																type="text"
															/>
														</div>
													</div>
												</>
											</div>
										</div>
									</div>

									<div className="flex">
										<button
											// disabled={item.hash.slice(0, 4) === "0000"}
											onClick={() => {
												let temp = this.state.mem_pool;
												temp.push({
													amount: this.state.add_tx.amount,
													from: this.state.add_tx.from,
													to: this.state.add_tx.to,
												});
												this.setState({
													mem_pool: temp,
												});
											}}
											className={`${
												"00009" === "0000"
													? "cursor-not-allowed bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none"
													: "bg-gray-800  focus:ring-4 focus:outline-none focus:ring-gray-500 "
											}  text-white w-auto mx-auto font-medium rounded-lg px-[6px] space-x-2 py-[4px]   transition-all text-white font-pop`}
										>
											{/* <GiMiner /> */}
											<span className=" font-medium text-sm ">
												Add to Mem-Pool
											</span>
										</button>
									</div>

									<span className="text-2xl  font-pop">Mem-Pool</span>

									<div className="flex">
										{this.state.mem_pool.length != 0 && (
											<div className="flex-1 rounded-r-lg items-center border">
												<div class="grid grid-cols-3 ">
													{this.state.mem_pool.map((object, i) => {
														return (
															<>
																<div
																	className={`${
																		true ? " " : "bg-red-50 filter text-red-400"
																	} ${"flex"}`}
																>
																	<div className="flex  rounded-l-lg p-[5px] text-sm font-light bg-gray-50">
																		$
																	</div>
																	<div className="flex-1 rounded-r-lg p-[5px] text-sm font-light bg-red-50">
																		{/* <input
																		value={20}
																		className="rounded-r-lg text-sm font-light  bg-red-50"
																		type="number"
																	/> */}
																		{object.amount}
																	</div>
																</div>
																<div className="flex">
																	<div className="flex  p-[5px] text-sm font-light bg-purple-50">
																		{"From"}
																	</div>
																	<div className="flex-1 rounded-r-lg p-[5px] text-sm font-light bg-red-50">
																		{object.from}
																	</div>
																</div>
																<div className="flex">
																	<div className="flex  rounded-l-lg p-[5px] text-sm font-light bg-purple-50">
																		{"To"}
																	</div>
																	<div className="flex-1 rounded-r-lg p-[5px] text-sm font-light bg-red-50">
																		{object.to}
																	</div>
																</div>
															</>
														);
													})}
												</div>
											</div>
										)}
										{this.state.mem_pool.length == 0 && (
											<div className="flex-1 text-sm font-light bg-gray-50 p-[5px] rounded-lg items-center border">
												<h6>Mem-Pool Empty</h6>
											</div>
										)}
									</div>

									{this.state.mem_pool.length != 0 && (
										<div className="flex mx-auto w-auto">
											<button
												onClick={() => {
													let _block_number =
														this.state.alice_blocks.length - 1;
													let _prev_hash =
														this.state.alice_blocks[_block_number].hash;
													let _hash = this.getSha256(
														this.state.alice_blocks[_block_number].block +
															this.state.alice_blocks[_block_number].nonce +
															this.state.alice_blocks[_block_number].previous
													);
													_hash = "0000" + _hash.slice(4);
													let _timestamp = Date().toString();
													let t1 = this.state.mem_pool.map((obj) => {
														return obj;
													});
													let t2 = this.state.mem_pool.map((obj) => {
														return obj;
													});
													let t3 = this.state.mem_pool.map((obj) => {
														return obj;
													});

													let new_block1 = {
														block: _block_number + 2,
														chain: 1,
														nonce: parseInt(
															(Math.random() * 100000).toFixed(0)
														),
														previous: _prev_hash,
														hash: _hash,
														timestamp: _timestamp,
														trans: t1,
													};
													let new_block2 = {
														block: _block_number + 2,
														chain: 1,
														nonce: parseInt(
															(Math.random() * 100000).toFixed(0)
														),
														previous: _prev_hash,
														hash: _hash,
														timestamp: _timestamp,
														trans: t2,
													};
													let new_block3 = {
														block: _block_number + 2,
														chain: 1,
														nonce: parseInt(
															(Math.random() * 100000).toFixed(0)
														),
														previous: _prev_hash,
														hash: _hash,
														timestamp: _timestamp,
														trans: t3,
													};

													let b1 = this.state.alice_blocks;
													b1.push(new_block1);

													let b2 = this.state.bob_blocks;
													b2.push(new_block2);

													let b3 = this.state.nancy_blocks;
													b3.push(new_block3);

													// let _block_number2 = this.state.bob_blocks.length-1;
													// let _prev_hash2 = this.state.alice_blocks[_block_number2].hash;
													// let _hash2 = this.getSha256(this.state.alice_blocks[_block_number2].block + this.state.alice_blocks[_block_number].nonce + this.state.alice_blocks[_block_number].previous);
													// _hash2 = "0000" + _hash.slice(4);
													// let _timestamp2 = Date().toString();
													// let new_block2 = {
													// 	"block":_block_number2+2,
													// 	"chain":1,
													// 	"nonce":parseInt((Math.random() * 100000).toFixed(0)),
													// 	"previous":_prev_hash2,
													// 	"hash":_hash2,
													// 	"timestamp":_timestamp2,
													// 	"trans":this.state.mem_pool
													// }
													// let temp2 = this.state.bob_blocks;
													// temp2.push(new_block2);

													// temp1[_block_number+1] = new_block;
													// temp2[_block_number+1] = new_block;
													// temp3[_block_number+1] = new_block;
													// this.setState({
													// 	alice_blocks:temp1,
													// })
													// this.setState({
													// 	bob_blocks:temp2,
													// })
													// this.setState({
													// 	nancy_blocks:temp3,
													// })
													this.setState({
														mem_pool: [],
													});
													window.scrollTo(0, document.body.scrollHeight, {
														behavior: "smooth",
													});
												}}
												className={`${
													"2" === "0000"
														? "cursor-not-allowed bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none"
														: "bg-gray-800  focus:ring-4 focus:outline-none focus:ring-gray-500 "
												} flex items-rigth text-white font-medium rounded-lg  px-3 space-x-2 py-[4px]  transition-all text-white font-pop`}
											>
												<GiMiner />
												<span> Mine </span>{" "}
											</button>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Tokens;