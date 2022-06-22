import { useState, useEffect } from "react";
import BlockChain from "../blockchain";

export default function Chain({ id, tabs, setTabs, data }) {
  const [chain, setChain] = useState(data);

  useEffect(() => {
    console.log(chain)
  
  },[chain]);

  return (
    <div>
      <BlockChain chain={chain} setChain={setChain} />
    </div>
  );
}
