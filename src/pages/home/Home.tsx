import Slider from './Slider'
import useFetch from '../../hooks/useFetch'

const Home = () => {
  const { data, loading } = useFetch(`/home`)

  return (
    <section id='home'>
      <div className='m-auto max-w-7xl bg-primary p-14 text-white shadow-main flex gap-x-8'>
        <div className='w-1/2'>
          <h1 className='font-extrabold mb-4'>NUESTRO NOMBRE</h1>
          <p className='mb-4 font-bold'>El término Fraternidad es definido como el afecto o vínculo entre hermanos. </p>
          <p className='text-wrap text-sm'>
            Por ello nuestro nombre evoca a la fraternidad humana, en cuanto adhesión a los principios de libertad,
            justicia, democracia, tolerancia, solidaridad, cooperación, pluralismo, diversidad cultural, diálogo y
            entendimiento a todos los niveles de la sociedad. <br />
            <br />
            La fraternidad -construida sobre la justicia social- es aquello que mantiene a una sociedad unida y que se
            expresa en una actitud de cuidado recíproco, entre personas que se reconocen como miembros de una misma
            comunidad política y que se expresa como confianza y paz social.
            <br />
            <br />
            Se acepta que ser fraterno es acoger, tratar y escuchar a todos como iguales, sin hacer distinciones, porque
            pertenecemos a la misma familia, la humana.
            <br />
            <br />
            Ser fraterno es relacionarse con los demás de tal manera que se sientan a gusto, respetados, apreciados.
            <br />
            <strong>NUESTRO PROPÓSITO: </strong> es resolver eficientemente los conflictos en los que intervenimos
            actualizando el valor justicia.
            <br />
            <strong>NUESTRA VISION: </strong> es estar entre los mejores Centros Privados de Mediación de la Región.
          </p>
        </div>
        <div className='w-1/2'>{!loading && <Slider data={data} />}</div>
      </div>
    </section>
  )
}

export default Home
