import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import ServiciosItem from './ServiciosItem'
import { Share } from '../../icons/icons'
import { scroll } from '../../utils/scroll'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    scroll()
  })

  return (
    <Layout>
      <section className='shadow-main mt-48 mb-24 pb-8 lg:pb-0'>
        <div className='m-auto max-w-7xl px-6 gap-20 lg:flex'>
          <div className='py-8 pb-20 lg:w-2/3'>
            <div className='flex items-center justify-between'>
              <h1 className='font-extrabold mb-4 text-secondary'>NOVEDADES</h1>
              <a
                href='http://'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Share />
              </a>
            </div>
            <div>
              <div className='w-1/2 py-1 px-4 bg-primary rounded-md mb-2 text-white'>Salta</div>
            </div>
            <div className='mb-6'>
              <img
                src='https://images.pexels.com/photos/6753871/pexels-photo-6753871.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
                alt=''
                className='w-full'
              />
            </div>
            <div>
              <h1 className='text-primary text-3xl mb-8 font-extrabold'>Titulo xxxx xxxxxxxxxxxxxxxxxxxxx xxxxxxxx</h1>
              <p className='text-wrap mb-4 font-bold'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismoenim ad minim
                veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat.
              </p>
              <p className='text-wrap mb-4 text-sm'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismoenim ad minim
                veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismoenim ad
                minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismoenim ad
                minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat.
              </p>
            </div>

            <div className='mb-4'>youtube</div>

            <div>
              <p className='text-wrap mb-4 text-sm'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismoenim ad minim
                veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismoenim ad
                minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismoenim ad
                minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat.
              </p>
            </div>

            <hr className='mt-12' />
          </div>
          <div className='bg-secondary px-12 py-8 text-white lg:w-1/3 lg:pr-20'>
            <h1 className='font-extrabold mb-8'>SERVICIOS</h1>
            <section className='flex flex-col gap-y-8'>
              <ServiciosItem />
              <ServiciosItem />
              <ServiciosItem />
            </section>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
