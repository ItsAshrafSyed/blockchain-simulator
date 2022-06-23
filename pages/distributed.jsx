import Peers from "../components/distributed/peers";

export default function distributed() {
  return (
    <div className="max-w-screen space-y-3 flex flex-col mt-4 ">
      <h1 className="text-2xl  font-pop font-extrabold ">Peers</h1>
      <Peers />
    </div>
  );
}
