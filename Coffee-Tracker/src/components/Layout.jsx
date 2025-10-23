import { useState } from 'react'
import Modal from './Modal'
import Authentication from './Authentication'

export default function Layout({ children }) {
  const [showModal, setShowModal] = useState(false)
  const header=(
    <header>
      <div>
        <h1 className='text-gradient'>
          CAFFIEND
        </h1>
        <p>
          For coffee Insatiates
        </p>
      </div>
      <button onClick={() => setShowModal(true)}>
        <p>
          Sign Up free
        </p>
        <i className="fa-solid fa-mug-hot"></i>
      </button>
    </header>)
  
  const footer=(
    <footer>
      <p>
        <span className='text-gradient'>Caffiend </span>was made by <a target='_blank'  href="https://github.com/Reddy076/Coffee-Tracker.git">Dasthagiri</a> <br /> using <a target='_blank' href="https://www.fantacss.smoljames.com">FantaCSS</a> design library
      </p>
    </footer>
  )
  
  return (
    <>
    {showModal && (<Modal handleCloseModal={() => setShowModal(false)}>
      <Authentication />
    </Modal>)}
      {header}
      <main>
        {children}
      </main>
      {footer}
    </>
  )
}
