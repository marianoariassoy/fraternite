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
    console.log(location)
    const target = location.replace('/', '#') as string
    const targetElement = document.querySelector(`${target}`) as HTMLElement
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    })
  }, [location])

  return (
    <Layout>
      <Home />
      <Valores />
      <Servicios />
      <Novedades />
      <Helmet>
        <title>Fraternite</title>
      </Helmet>
    </Layout>
  )
}

export default Index
