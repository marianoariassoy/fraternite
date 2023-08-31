import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import BeatLoader from 'react-spinners/BeatLoader'

const Form = () => {
  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    setSending(true)
    const sender = {
      to: ' ',
      from: 'no-reply@mediacionfraternite.com.ar',
      from_name: 'Fraternite',
      subject: 'Contacto'
    }

    axios
      .post('http://mediacionfraternite.com.ar/backend/send-email.php', { ...data, ...sender })
      .then(data => {
        if (data.data === 'success') {
          setSended(true)
          setSending(false)
        } else {
          setError(true)
          setSending(false)
        }
      })
      .catch(() => {
        setError(true)
        setSended(false)
      })
  }

  const Error = () => {
    return <div className='text-sm mb-4 mt-2'>Por favor completá este campo</div>
  }

  const text = {
    es: {
      name: 'Nombre',
      email: 'E-Mail',
      message: 'Mensaje',
      send: 'Contactanos',
      thanks: 'Gracias por contactarte con nosotros, te responderemos a la brevedad.',
      error: 'Se produjo un error al enviar el mensaje.'
    }
  }

  return (
    <>
      {error ? (
        <span className='text-xl font-bold'>{text['es'].error}</span>
      ) : sended ? (
        <span className='text-xl font-bold'>{text['es'].thanks}</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='font-bold text-secondary mb-2 block'>{text['es'].name}</label>
            <input
              {...register('name', { required: true })}
              className='w-full h-11 p-3 border rounded-lg text-sm text-black border-black'
            />
            {errors.name && <Error />}
          </div>

          <div className='mb-4'>
            <label className='font-bold text-secondary mb-2 block'>{text['es'].email}</label>
            <input
              {...register('email', { required: true })}
              placeholder={text['es'].email}
              className='w-full h-11 p-3 border rounded-lg text-sm text-black border-black'
            />
            {errors.email && <Error />}
          </div>

          <div className='mb-4'>
            <label className='font-bold text-secondary mb-2 block'>{text['es'].message}</label>
            <textarea
              {...register('message', { required: true })}
              className='w-full p-3 h-32 border rounded-md text-sm text-black border-black'
              placeholder={text['es'].message}
            />
            {errors.message && <Error />}
          </div>

          <div>
            {sending ? (
              <BeatLoader />
            ) : (
              <button className='bg-secondary rounded-lg font-bold px-10 py-2 text-white hover:bg-black'>
                {text['es'].send}
              </button>
            )}
          </div>
        </form>
      )}
    </>
  )
}

export default Form
