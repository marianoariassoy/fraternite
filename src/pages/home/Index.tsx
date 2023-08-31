import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { Helmet } from 'react-helmet'
import Home from './Home'
import Valores from './Valores'
import Servicios from './Servicios'
import Novedades from './Novedades'
import { scroll } from '../../utils/scroll'
import { useLocation } from 'wouter'

const Index = () => {
  useEffect(() => {
    scroll()
  }, [])

  const [location] = useLocation()

  useEffect(() => {
    if (location === '/') return

    const target = location.replace('/', '#') as string
    const targetElement = document.querySelector(`${target}`) as HTMLElement

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      })
    }
  }, [location])

  return (
    <Layout>
      <Home />
      <Valores />
      <Servicios />
      <Novedades />
      <Helmet>
        <title>Fraternité Centro Privado de Mediación</title>
      </Helmet>
    </Layout>
  )
}

export default Index
