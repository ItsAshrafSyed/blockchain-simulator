import Block from "./block";
import Add from "./add";
import { useState } from "react";

import { FcExpand } from "react-icons/fc";
import { sha256 } from "js-sha256";

const BlockChain = ({chain,setChain}) => {
  //Back Process
  var difficulty = 4;
  var maximumNonce = 500000;
  var pattern = "";
  for (var x = 0; x < difficulty; x++) {
    pattern += "0";
  }
  function addBlock(data) {
    const block = {
      block: chain.length + 1,
      data: data,
      chain: 1,
      nonce: 11316,
      previous: chain[chain.length - 1].hash,
      hash: "",
      timestamp: Date().toString(),
    };
    mine(block);
    setChain([...chain, block]);
  }

  function mine(block, isChain = false) {
    for (var x = 0; x <= maximumNonce; x++) {
      block.hash = getSha256(
        block.data + chain.length + 1 + x + block.previous
      );

      if (block.hash.slice(0, 4) === pattern) {
        block.nonce = x;

        if (isChain) hashChange(block, block.data, true);

        break;
      }
    }
  }

  function hashChange(block, txt, mine = false) {
    var hash;
    setChain(
      chain.map((e, i) => {
        if (e.block === block.block) {
          hash = mine
            ? block.hash
            : getSha256(
                block.data + block.block + block.nonce + block.previous
              );
          console.log(hash);

          return { ...block, data: txt, hash };
        } else if (e.block > block.block) {
          const prev = hash;
          hash = getSha256(e.data + e.block + e.nonce + prev);
          return { ...e, previous: prev, hash };
        }
        return e;
      })
    );
  }

  function getSha256(txt) {
    // calculate a SHA256 hash of the contents of the block
    return sha256(txt);
  }

  return (
    <div className="flex flex-col space-y-5 justify-center items-center">
      <h1 className="text-4xl text-center font-black m-4 font-pop">
        BLOCK CHAIN {chain[0]["chain"]}
      </h1>
      <Block data={chain[0]} hashChange={hashChange} mine={mine} />
      {chain.slice(1).map((e) => (
        <div
          key={e.block}
          className="flex flex-col items-center justify-center space-y-5"
        >
          <div>
            <FcExpand className="h-10 w-10" />
          </div>
          <Block data={e} hashChange={hashChange} mine={mine} />
        </div>
      ))}
      <Add data={chain} handle={addBlock} />
    </div>
  );
};

export default BlockChain;
