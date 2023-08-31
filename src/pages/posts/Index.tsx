import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import ServiciosItem from '../home/ServiciosItem'
import { scroll } from '../../utils/scroll'
import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import { useRoute } from 'wouter'
import ImageItem from '../../components/ImageItem'
import ReactPlayer from 'react-player'
import {
  FacebookShareButton,
  LinkedinShareButton,
  EmailShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookIcon
} from 'react-share'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    scroll()
  })

  const [match, params] = useRoute<{ id: string }>('/post/:id')
  const { data: dataServicios, loading: loadingServicios } = useFetch(`/servicios`)
  const { id } = params

  const { data, loading } = useFetch(`/post/${id}`)
  const shareUrl = `http://mediacionfraternite.com.ar/post/${id}`

  if (!match) {
    return <p>User not found</p>
  }

  console.log(match)

  return (
    <Layout>
      {loading ? (
        <div className='h-56'>
          <Loader />
        </div>
      ) : (
        <>
          <section className='shadow-main mt-48 mb-24 pb-8 lg:pb-0'>
            <div className='m-auto max-w-7xl px-6 gap-20 lg:flex'>
              <div className='py-8 pb-20 lg:w-2/3'>
                <div className='flex items-center justify-between mb-4'>
                  <h1 className='font-extrabold mb-4 text-secondary'>
                    {data[0].section === 2 ? 'SERVICIOS' : 'NOVEDADES'}
                  </h1>
                  <a
                    href='http://'
                    target='_blank'
                    rel='noopener noreferrer'
                  ></a>
                  <div className='flex gap-x-2'>
                    <TwitterShareButton url={shareUrl}>
                      <TwitterIcon
                        size={28}
                        round={true}
                      />
                    </TwitterShareButton>
                    <FacebookShareButton url={shareUrl}>
                      <FacebookIcon
                        size={28}
                        round={true}
                      />
                    </FacebookShareButton>
                    <LinkedinShareButton url={shareUrl}>
                      <LinkedinIcon
                        size={28}
                        round={true}
                      />
                    </LinkedinShareButton>

                    <EmailShareButton url={shareUrl}>
                      <EmailIcon
                        size={28}
                        round={true}
                      />
                    </EmailShareButton>
                    <WhatsappShareButton url={shareUrl}>
                      <WhatsappIcon
                        size={28}
                        round={true}
                      />
                    </WhatsappShareButton>
                  </div>
                </div>
                {data[0].subtitle && (
                  <div>
                    <div className='w-1/2 py-1 px-4 bg-primary rounded-md mb-2 text-white'>{data[0].subtitle}</div>
                  </div>
                )}

                {data[0].image_main && (
                  <div className='mb-6'>
                    <ImageItem
                      src={data[0].image_main}
                      alt={data[0].title}
                    />
                  </div>
                )}

                <div className='mb-8'>
                  <h1 className='text-primary text-3xl mb-4 font-extrabold'>{data[0].title}</h1>
                  <p className='text-wrap mb-4 font-bold whitespace-pre-wrap'>{data[0].text3}</p>
                  <p className='text-wrap mb-4 text-sm whitespace-pre-wrap'>{data[0].text4}</p>
                </div>

                {data[0].video && (
                  <ReactPlayer
                    url={data[0].video}
                    controls={true}
                    width='100%'
                    height='auto'
                    className='w-screen aspect-video my-8'
                  />
                )}

                {data[0].text5 && (
                  <div>
                    <p className='text-wrap mb-4 text-sm whitespace-pre-wrap'>{data[0].text5}</p>
                  </div>
                )}

                <hr className='mt-12' />
              </div>
              <div className='bg-secondary px-12 py-8 text-white lg:w-1/3 lg:pr-20'>
                <h1 className='font-extrabold mb-8'>SERVICIOS</h1>
                <section className='flex flex-col gap-y-8'>
                  {loadingServicios ? (
                    <Loader />
                  ) : (
                    dataServicios.map(item => (
                      <ServiciosItem
                        data={item}
                        key={item.id}
                      />
                    ))
                  )}
                </section>
              </div>
            </div>
          </section>
          <Helmet>
            <title>{data[0].title}</title>
          </Helmet>
        </>
      )}
    </Layout>
  )
}

export default Index
