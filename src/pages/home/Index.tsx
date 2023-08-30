import Layout from '../../layout/Layout'
import { Helmet } from 'react-helmet'
import Home from './Home'
import Valores from './Valores'
import Servicios from './Servicios'
import Novedades from './Novedades'

const Index = () => {
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
