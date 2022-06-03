import {BsFileEarmarkText} from 'react-icons/bs'

import {useState} from 'react'



export default function Add({handle}){
  const styles={
    wrapper:" bg-white  flex space-y-4 md:space-y-8 font-extralight   items-center w-full p-8 border max-w-xs md:max-w-sm justify-center flex-col shadow-md rounded-lg hover:shadow-2xl transition-all ",
    inputwrapper:"  flex    items-center ",
    input:"outline-none text-xs p-[4px]  flex-1 ",
    inputgroup:`p-[3px]  hover:border-sky-400 focus-within:ring-2 focus-within:ring-sky-100 focus-within:border-sky-400 flex rounded-r-lg items-center border flex-1`,
    texticon:"p-[4px] pl-2",
    inputtext:"border rounded-l-lg p-[5px] text-sm font-light  px-5 bg-gray-50",
    button:"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gray-400 text-white font-bold w-full  max-w-[12rem] py-2 px-4 rounded",
  }
  
  const [input,setInput]=useState("");
  
  function handleClick(){
   handle(input)
  }

  return(
    <div className={styles.wrapper}>
      <div className={styles.inputwrapper}>
        <div className={styles.inputtext}>
          DATA
        </div>
        <div className={styles.inputgroup}>
        <span className={styles.texticon}>
       <BsFileEarmarkText />
          </span>
        <input 
          onChange={(e)=>setInput(e.target.value)}
          placeholder="welcome to blockchain demo!"
          className={styles.input} type="text"/>
      </div>
    </div>
      <button 
        onClick={handleClick}
        className={styles.button}>
          + ADD</button>
      </div>
  )
}

