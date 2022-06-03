import Head from 'next/head'
import BlockChain from '../components/blockchain'
import Header from '../components/header'


export default function Home() {
  return (
    <>
    <Head>
    <title>Block Chain Demo</title>  
    </Head>
   <div className="bg-gray-50 min-h-screen flex flex-col py-2 space-y-5 justify-center items-center">
    <Header/>
    <BlockChain/>
   </div>
      </>
  )
}
