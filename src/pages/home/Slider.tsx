import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Loader from '../../components/Loader'

type SliderItemProps = {
  src: string
}

const SliderItem = ({ src }: SliderItemProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return (
    <div className='aspect-[4/5] lg:aspect-[5/4] bg-white'>
      {isLoading ? (
        <Loader />
      ) : (
        <img
          src={src}
          className='fade-in h-full w-full object-cover object-center block'
        />
      )}
    </div>
  )
}

type SliderComponentProps = {
  data: Array<{ id: number; image: string }>
}

const Slider = ({ data }: SliderComponentProps) => {
  const properties = {
    autoplay: true,
    transitionDuration: 400,
    autoplayInterval: 5000,
    indicators: true,
    arrows: false,
    infinite: true
  }

  type Image = {
    id: number
    image: string
  }

  return (
    <div className='relative shadow-main'>
      <Slide {...properties}>
        {data &&
          data.map((image: Image) => (
            <SliderItem
              key={image.id}
              src={image.image}
            />
          ))}
      </Slide>
    </div>
  )
}

export default Slider
