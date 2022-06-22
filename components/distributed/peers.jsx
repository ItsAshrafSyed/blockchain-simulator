import { Tab, Transition } from "@headlessui/react";
import Peer from "./peer";
import BlockChain from "../blockchain";
import { useState } from "react";
import Chain from "./chain";
import {RiUserAddLine} from 'react-icons/ri'


export default function Peers() {
  const names = [
    "bob",
    "alice",
    "eve",
    "nancy",
    "carol",
    "frank",
    "sita",
    "rama",
    "emily",
    "bob",
    "alice",
    "eve",
    "nancy",
    "carol",
    "frank",
    "sita",
    "rama",
    "emily",
    "bob",
    "alice",
    "eve",
    "nancy",
    "carol",
    "frank",
    "sita",
    "rama",
    "emily",
  ];

  const [tabs, setTabs] = useState([
   
    [
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
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isShowing, setIsShowing] = useState(true);
  function addPeer() {
    setTabs([
      ...tabs,
      [
        {
          block: tabs.length,
          chain: 1,
          nonce: 11316,
          previous: "0000",
          hash: "000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
          data: " block data",
          timestamp: Date().toString(),
        },
      ],
    ]);
    console.log(tabs.length)
    setSelectedIndex(tabs.length);
    setIsShowing(false);
    setTimeout(() => setIsShowing(true), 100);
  }
  return (
    <div className="flex items-start mt-5 justify-center max-w-screen w-11/12 ">
      <div className="">
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={() => {
           
            setIsShowing(false);
            setTimeout(() => setIsShowing(true), 100);
          }}
        >
          <Tab.List className="flex space-x-10 rounded-xl w-[60rem] overflow-x-scroll scrollbar-thin">
            {names.slice(0, tabs.length ).map((name, id) => (
               <div className="flex flex-col justify-center items-start">
              <Tab key={id}>
                {({ selected }) => (
                 
                    <Peer name={name} select={selected} />
                   
                )}
              </Tab>
              {true && (
                      <span className="p-1 border mx-4 rounded-full ">
                        <RiUserAddLine className="w-3 h-3" />
                      </span>
                    )}
                  </div>
            ))}
          </Tab.List>

          <Tab.Panels className="">
            <Transition
              show={isShowing}
              enter="transition duration-200 ease-out "
              enterFrom="opacity-20 scale-100 -translate-x-96  origin-bottom "
              enterTo="opacity-100 scale-100 -translate-x-0"
              leave="transition duration-150 "
              leaveFrom="opacity-100"
              leaveTo="opacity-0 "
            >
              {tabs.map((data, idx) => (
                <Tab.Panel key={idx}>
                  <Chain id={idx} tabs={tabs} setTabs={setTabs} data={data} />
                </Tab.Panel>
              ))}
            </Transition>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <span>
        <button
          onClick={addPeer}
          className="bg-purple-400 px-3 text-sm w-[6rem] my-4 mx-2 rounded-md hover:bg-violet-400 text-white py-2 "
        >
          Add Peer
        </button>
      </span>
    </div>
  );
}
