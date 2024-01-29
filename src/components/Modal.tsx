import ReactDOM from 'react-dom'

export default function Modal() {
  return ReactDOM.createPortal(<div className='modal'></div> ,
  document.getElementById('modal')!)
}
