import Nav from './nav'

const Layout=({children})=>{
  return(
  <div className="flex flex-col justify-center items-center">
    <Nav/>
    {children}
  </div>

  )
}
export default Layout;