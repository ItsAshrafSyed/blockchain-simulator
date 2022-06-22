import { useState, useEffect } from "react";
import BlockChain from "../blockchain";

export default function Chain({ id, tabs, setTabs, data }) {
  const [chain, setChain] = useState(data);

  useEffect(() => {
    setTabs(tabs.map(
    (e,i)=>{
        if(id===i) return chain;
        return e;
      }

    ))
  
  },[chain]);

  return (
    <div>
      <BlockChain chain={chain} setChain={setChain} />
    </div>
  );
}
