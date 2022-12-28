import { useEffect, useState } from 'react'
import PhoneCall from '@/data/phone-call.svg'

const ContactForm = () => {
  const [show, setShow] = useState(false)

  const showPhoneNumber = () => {
    setShow(!show)
  }

  return (
    <div className="prose fixed bottom-0 right-3">
      <p className="mb-3">
        <a href="https://darklimeteam.com/#contactUs">Drop me a line</a>
      </p>
      <div className="mb-2">
        <span className="pr-4">or</span>
        <button
          className="inline-flex items-center rounded-md border-2 border-zinc-200 px-3 py-1"
          onClick={showPhoneNumber}
        >
          <>
            <PhoneCall />
          </>
          <span className="pl-3">call</span>
        </button>
        {show ? (
          <p className="my-1">
            <a href="tel:+19045787170">+19045787170</a>
          </p>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default ContactForm
