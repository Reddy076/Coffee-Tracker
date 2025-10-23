import ReactDom from 'react-dom'

export default function Modal({ children }) {
  return ReactDom.createPortal(
    <div className='modal-container'>
      <button className='modal-underlay' />
      <div className='modal-content'>
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  )
}


