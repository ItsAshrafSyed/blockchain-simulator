import Hash from '../components/hash/hash'

export default function HashPage(){

  return(
    <div className="mt-4">
      <span className="font-bold text-xl font-pop">Sha256 Hash</span>
      <Hash/>
    </div>
  )
}