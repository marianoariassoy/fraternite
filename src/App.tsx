import { Route } from 'wouter'
import Home from './pages/home/Index'
import Posts from './pages/posts/Index'

function App() {
  return (
    <>
      <Route
        path='/'
        component={Home}
      />
      <Route
        path='/post/:id'
        component={Posts}
      />
      <Route
        path='/Valores'
        component={Home}
      />
      <Route
        path='/Servicios'
        component={Home}
      />
      <Route
        path='/Novedades'
        component={Home}
      />
      <Route
        path='/Contacto'
        component={Home}
      />
    </>
  )
}

export default App
