import useFetch from '../../hooks/useFetch'
import NovedadesItem from './NovedadesItem'

const Novedades = () => {
  const { data } = useFetch(`/novedades`)

  return (
    <section
      className='text-white bg-secondary'
      id='Novedades'
    >
      <div className='m-auto max-w-7xl px-6 py-12'>
        <h1 className='font-extrabold mb-8'>NOVEDADES</h1>
        <section className='grid lg:grid-cols-4 gap-8 items-start'>
          {data &&
            data.map(item => (
              <NovedadesItem
                data={item}
                key={item.id}
              />
            ))}
        </section>
      </div>
    </section>
  )
}

export default Novedades
