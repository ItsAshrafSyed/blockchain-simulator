import { useState } from 'react'
import BlockChain from '../components/blockchain'


export default function Home() {
  const [chain, setChain] = useState([
    {
      block: 1,
      chain: 1,
      nonce: 11316,
      previous: "0000",
      hash: "000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
      data: " block data",
      timestamp: Date().toString(),
    }])
  return (
    <>
    
   <div className=" min-h-screen flex flex-col py-2 space-y-5 justify-center items-center">
    
    <BlockChain chain={chain} setChain={setChain}/>
   </div>
      </>
  )
}
