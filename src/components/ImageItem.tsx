import { useEffect, useState } from 'react'
import Loader from './Loader'

type ImageComponentProps = {
  src: string
  alt: string
}

const ImageItem = ({ src, alt }: ImageComponentProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return isLoading ? (
    <div className='h-56'>
      <Loader />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className='fade-in w-full'
    />
  )
}

export default ImageItem
