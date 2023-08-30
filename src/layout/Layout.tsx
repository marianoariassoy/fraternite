import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className=' '>
        <Header />
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
