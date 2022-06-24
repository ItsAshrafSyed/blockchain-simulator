import Header from './header';
import Nav from './nav'

const Layout = ({ children }) => {
  return (

    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        {children}
      </div>
    </>

  )
}
export default Layout;