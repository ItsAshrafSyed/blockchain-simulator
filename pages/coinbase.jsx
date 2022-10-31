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

			blocks: [
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
		};
		var difficulty = 4;
		var maximumNonce = 500000;
		var pattern = "";
		for (var x = 0; x < difficulty; x++) {
			pattern += "0";
		}
	}
	names = ["vikram", "Dilli", "Fahad", "Rolex", "Santanam"];
	name_index = 0;
	remove_user(index) {
		if (this.state.users.length > 1) {
			this.state.users.splice(index, 1);
			this.setState({ users: this.state.users });
			this.name_index--;
		}
	}
	add_user() {
		if (this.name_index <= 4) {
			this.state.users.push({ name: this.names[this.name_index++] });
			this.setState({ users: this.state.users });
		}
	}

	// addBlock(data) {
	//     const block = { block: chain.length + 1, data: data, chain: 1, nonce: 11316, previous: chain[chain.length - 1].hash, hash: "", timestamp: Date().toString() }
	//     mine(block);
	//     this.state.users[0].chain
	//     this.setState()
	// }

	getSha256(txt) {
		// calculate a SHA256 hash of the contents of the block
		return sha256(txt);
	}

	mine(index, block) {
		var hash;
		hash = this.getSha256(block.block + block.nonce + block.previous);
		let res = "0000" + hash.slice(4);
		console.log(res);
		let temp = this.state.blocks;
		temp[index].hash = res;
		temp[index].nonce = parseInt((Math.random() * 100000).toFixed(0));
		if (index + 1 < temp.length) {
			temp[index + 1].previous = res;
		}
		this.setState({ blocks: temp });
		this.hashChange(index + 1, temp[index + 1], "", true);
		// console.log(hash, "mine_hash");
	}

	hashChange(index, block, txt = "", mine = false) {
		var hash;
		let blockss = this.state.blocks;
		let new_blocks = blockss.map((e, i) => {
			if (i >= index) {
				hash = this.getSha256(txt + e.block + e.nonce + e.previous);
				let temp = blockss;
				temp[i].hash = hash;
				if (i < blockss.length - 1 && !mine) {
					temp[i + 1].previous = hash;
					// console.log(temp[i].previous)
				}
				this.setState({ blocks: temp });
			}
		});
	}

	styles = {
		wrapper: `font-robo flex space-y-5  block  bg-white align-center w-[340px] md:w-[1280px] p-5 pt-8 border max-w-md md:max-w-xl justify-center flex-col w-full shadow-md rounded-lg hover:shadow-2xl transition-all`,
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
				<div className="flex flex-col space-y-5 justify-center items-center">
					<span
						className="text-4xl m-[5px] font-pop w-auto mx-auto justify-center "
						aria-current="page"
					>
						Coinbase
					</span>

					{/* <div className="flex columns-2">
                        <div className="flex">
                            {
                                this.state.users.map((item, index) => {

                                    return (
                                        <div className="pb-4 flex">
                                            <CgProfile className="" size={40} style={{ color: "gray" }} />
                                            <IoIosClose onClick={() => {
                                                this.remove_user(index);
                                                console.log(index)
                                            }} style={{ color: "gray" }} className="hover:border-red-400" />
                                            <h6>{item.name}</h6>
                                        </div >
                                    )

                                })
                            }
                            <div className="p-2">
                                1
                            </div>
                        </div>
                        <div className="align-right ">
                            <button
                                onClick={() => {
                                    this.add_user()
                                }}
                                className="float-right bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gray-400 text-white font-bold w-full  max-w-[12rem] py-2 px-4 rounded">
                                + ADD</button>
                        </div>
                    </div> */}

					{this.state.blocks.map((item, index) => {
						return (
							<>
								<div className={this.styles.wrapper} key={index}>
									<div className="text-2xl font-pop">
										BLOCK #{item.block}{" "}
										<span className="text-xs">
											{this.state.users[0].chain[0].timestamp.split("(")[0]}
										</span>
										<button
											disabled={item.hash.slice(0, 4) === "0000"}
											onClick={() => {
												this.mine(index, item);
											}}
											className={`${
												item.hash.slice(0, 4) === "0000"
													? "cursor-not-allowed bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none"
													: "bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 flex items-center text-white font-medium rounded-lg  px-4 space-x-2 py-[5px]  transition-all text-white font-pop bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 "
											} float-right flex hover:bg-gradient-to-br focus:ring-4 focus:outline-none  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 flex items-center text-white font-medium rounded-lg  px-4 space-x-2 py-[5px]  transition-all text-white font-pop`}
										>
											<GiMiner />
											<span>Mine</span>{" "}
										</button>
									</div>

									<div className="flex items-center space-x-2">
										<p className="text-sm">NONCE</p>
										<div className="text-sm border bg-gray-50 px-2 py-[2px] rounded ">
											{item.nonce}
										</div>
									</div>
									<div className="contianer">
										<p className="text-sm">Wallets</p>
										<div className="flex-1">
											<div className="grid grid-cols-4 ">
												{item.balance.map((data, ind) => {
													return (
														<div className="flex m-[1px]">
															<div className="flex  rounded-l-lg p-[5px] text-sm font-light bg-gray-50">
																{data.name}
															</div>
															<div className="flex-1 rounded-r-lg p-[5px] text-sm font-light bg-red-50">
																<input
																	value={data.wallet}
																	onwheel="return false;"
																	type="number"
																	className="w-[50px] border-none  text-sm   bg-red-50"
																	onChange={(e) => {
																		console.log();

																		let temp = data;
																		temp.wallet = parseInt(e.target.value);
																		let temp2 = this.state.blocks;
																		temp2[index].balance[ind] = temp;
																		this.setState({
																			blocks: temp2,
																		});
																		this.hashChange(index, item, temp.wallet);
																	}}
																/>
															</div>
														</div>
													);
												})}
											</div>
										</div>
									</div>

									<div className="flex">
										<div className={this.styles.inputtext}>Tx :</div>

										<div className="p-[1px]  flex-1 rounded-r-lg items-center border">
											<div class="grid grid-cols-3 ">
												{item.trans.map((object, i) => {
													return (
														<>
															{/* { this.check_input_balance(object,i,item,index) &&
                                                                    <div className="max-w-xs bg-white border rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700" role="alert">
                                                                    <div className="flex p-4">
                                                                      <div className="flex-shrink-0">
                                                                        <svg className="h-4 w-4 text-red-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                                                        </svg>
                                                                      </div>
                                                                      <div className="ml-3">
                                                                        <p className="text-sm text-gray-700 dark:text-gray-400">
                                                                          This is an error message.
                                                                        </p>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  
                                                                } */}
															<div
																className={`${
																	object.status == true
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
																			let static_amount = object.amount;
																			temp.amount = parseInt(e.target.value);
																			let res = item.balance.filter((data) => {
																				if (data.name === object.from) {
																					return data;
																				}
																			});
																			// console.log(res[0],"res");
																			if (res[0].wallet >= temp.amount) {
																				temp.status = true;
																				console.log(temp, "t");
																				// if(temp.amount < static_amount){
																				//     this.state.blocks[index+1].balance
																				// }
																			} else {
																				temp.status = false;
																				console.log(temp, "f");
																			}
																			let temp2 = this.state.blocks;
																			temp2[index].trans[i] = temp;
																			// console.log(this.state.blocks);
																			this.setState({
																				blocks: temp2,
																			});
																			// console.log(this.state.blocks);
																			this.hashChange(index, item, temp.amount);
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
								{index != this.state.blocks.length - 1 && (
									<FcExpand className="h-10 w-10" />
								)}
							</>
						);
					})}
				</div>
			</>
		);
	}
}

export default Tokens;
