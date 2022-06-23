import { Tab, Transition } from "@headlessui/react";
import Peer from "./peer";
import { useState } from "react";
import Chain from "./chain";
import { RiUserAddLine } from "react-icons/ri";

export default function Peers() {
  const names = [
    "alice",
    "sam",
    "nancy",
    "carol",
    "frank",
    "sita",
    "rama",
    "emily",
    "bob",
  ];
  const [chain, setChain] = useState(1);

  const [tabs, setTabs] = useState([
    {
      name: "bob",
      data: [
        {
          block: 1,
          chain: chain,
          nonce: 11316,
          previous: "0000",
          hash: "000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
          data: " block data",
          timestamp: new Date().toString(),
        },
      ],
    },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isShowing, setIsShowing] = useState(true);
  function addPeer() {
    setChain(++chain);
    setTabs([
      ...tabs,
      {
        name: names[tabs.length % 8],
        data: [
          {
            block: 1,
            chain: chain,
            nonce: 11316,
            previous: "0000",
            hash: "000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
            data: " block data",
            timestamp: Date().toString(),
          },
        ],
      },
    ]);
    setSelectedIndex(tabs.length);
    setIsShowing(false);
    setTimeout(() => setIsShowing(true), 100);
  }

  //fucntion to close the peer
  function close(id) {
    setTabs((tabs) => tabs.filter((e, i) => id !== i));
    selectedIndex == 0 ? setSelectedIndex(0) : setSelectedIndex((e) => e - 1);
    setIsShowing(false);
    setTimeout(() => setIsShowing(true), 100);
  }

  return (
    <div className="z-10 flex flex-col items-center mt-5 justify-center ">
      <Tab.Group
        selectedIndex={selectedIndex}
        onChange={(index) => {
          setSelectedIndex(index);
          setIsShowing(false);
          setTimeout(() => setIsShowing(true), 100);
        }}
      >
        <div className=" flex ">
          <Tab.List className="flex space-x-4 md:space-x-6 rounded-xl w-[18rem] sm:w-[27rem] md:w-[35rem] lg:w-[45rem] xl:w-[60rem] overflow-x-scroll scrollbar ">
            {tabs.map((e, id) => (
              <div
                key={id}
                className="flex flex-col justify-center items-start"
              >
                <Tab>
                  {({ selected }) => (
                    <Peer
                      name={e["name"]}
                      select={selected}
                      close={() => close(id)}
                      id={id}
                    />
                  )}
                </Tab>
                <span
                  className={`p-1 border mx-4 rounded-full hover:cursor-pointer ${
                    id === selectedIndex ? "invisible" : "visible"
                  }`}
                >
                  <RiUserAddLine
                    className={`w-3 h-3 ${
                      id === selectedIndex ? "invisible" : "visible"
                    }`}
                  />
                </span>
              </div>
            ))}
          </Tab.List>
          <span>
            <button
              onClick={addPeer}
              className="bg-purple-400 px-2 md:px-3 text-xs md:text-sm w-[5rem] md:w-[6rem] my-4 mx-2 rounded-md hover:bg-violet-400 text-white py-2 "
            >
              Add Peer
            </button>
          </span>
        </div>
        <Tab.Panels className=" flex">
          <Transition
            show={isShowing}
            enter="transition duration-350 ease-out "
            enterFrom="opacity-20 scale-80 -translate-x-[20rem] "

          >
            {isShowing &&
              tabs.map((e, idx) => (
                <Tab.Panel key={idx}>
                  <Chain
                    tabs={tabs}
                    id={idx}
                    setTabs={setTabs}
                    data={e["data"]}
                  />
                </Tab.Panel>
              ))}
          </Transition>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
