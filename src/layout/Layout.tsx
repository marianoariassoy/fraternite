import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'
import MobileMenu from './MobileMenu'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className='fixed w-full bg-white/70 backdrop-blur-sm z-50'>
        <Header />
        <MobileMenu />
      </header>
      <main>
        {children}
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
