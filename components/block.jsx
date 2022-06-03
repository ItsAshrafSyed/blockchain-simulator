import {BsFileEarmarkText} from 'react-icons/bs';
import {GiMiner} from 'react-icons/gi';
import {useState} from 'react';

const Block=({data,hashChange,mine})=>{
  const styles={
    wrapper:`font-robo flex space-y-5  block  bg-white align-center w-[340px] md:w-[1280px] p-5 pt-8 border max-w-md md:max-w-xl justify-center flex-col w-full shadow-md rounded-lg hover:shadow-2xl transition-all`,
    inputwrapper:"  flex  items-center ",
    input:"outline-none text-xs p-[4px]  flex-1 ",
    inputgroup:`p-[3px]  hover:border-sky-400 focus-within:ring-2 focus-within:ring-sky-100 focus-within:border-sky-400 flex rounded-r-lg items-center border flex-1`,
    texticon:"p-[4px] pl-2",
    inputtext:"border rounded-l-lg p-[5px] text-sm font-light bg-gray-50 px-4"
  }
  const text={
    wrapper:"space-y-2 ",
    prev:"flex space-x-2 items-center ",
    scroll:"overflow-x-scroll scrollbar-thin text-[13px] max-md transition-all",
    green:" bg-lime-50 border text-[#52c41a] rounded border-[#52c41a] px-2",
    txt:"text-sm",
    greenprev:"text-[#52c41a] text-[0.7rem]",
    redprev:"text-red-400 text-[0.7rem]",
   red:" bg-red-50 border text-red-400 rounded border-red-400 px-2",
    
  }
  const button={
    btn:`${data.hash.slice(0,4)==="0000"?"cursor-not-allowed bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none":"bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"} flex items-center text-white font-medium rounded-lg  px-4 space-x-2 py-[5px]  transition-all text-white font-pop`
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
        value={data.data}
          onChange={(e)=>hashChange(data,e.target.value)}
          placeholder="welcome to blockchain demo!"
          className={styles.input} type="text"/>
      </div>
    </div>
   <div className={text.wrapper}>
    <div className={text.prev}>
      <p className={text.txt}>PREVIOUS HASH</p>
      <div className={`${data.previous.slice(0,4)==="0000"?text.greenprev:text.redprev} ${text.scroll}`}>{data.previous}</div>
    </div>
     <div className={text.prev}>
       <p className={text.txt}>HASH</p> 
       <div className={`${data.hash.slice(0,4)==="0000"?text.green:text.red} ${text.scroll}`}>{data.hash}  </div>
     </div>
     </div>
      <div className="flex items-center space-x-2">
      <p className={text.txt}>NONCE</p>
        <div className="text-sm border bg-gray-50 px-2 py-[2px] rounded ">
    {data.nonce}
          </div>
      </div>
      <div className="flex justify-between">
        <div className="text-2xl font-pop">
          BLOCK #{data.block} <span className="text-xs">{data.timestamp.split("(")[0]}</span>
        </div>
    <div >
      <button disabled={data.hash.slice(0,4)==="0000"} onClick={()=>mine(data,true)} className={button.btn}><GiMiner/><span >Mine</span> </button>
    </div>
        </div>
  </div>
)
}

export default  Block;