import {useState} from 'react'
import { sha256 } from 'js-sha256';


export default function Hash(){
  const [data,setData]=useState("")
  const [color,setColor]=useState(false)

  
  return(
    <div className="block space-y-5 p-6 mt-2 rounded-lg shadow-lg bg-white max-w-[80vw] min-w-[80vw] xl:min-w-[65vw] full hover:shadow-2xl m-4">
      <div className=" flex space-x-5">
    <label htmlForfor="data" className="form-label inline-block mb-2 text-gray-700"
      >Data</label>
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
      placeholder="Data"
      onChange={e=>{setData(e.target.value);
                    setColor(true)    ;      setTimeout(()=>setColor(false),100)}}
    ></textarea>
    </div>
      <div className="flex space-x-5 items-center">
        <span className="">Hash</span>
        <p className={color?"border bg-lime-50 border text-[#52c41a] border-[#52c41a] overflow-x-scroll scrollbar-thin rounded-lg p-2 transition-all text-medium":`border overflow-x-scroll scrollbar-thin rounded-lg transition-all p-2 text-medium`}>{sha256(data)}</p>
      </div>
      </div>
    
  )
  
}