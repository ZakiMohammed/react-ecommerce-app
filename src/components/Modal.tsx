import { useEffect } from 'react'

const Modal = (prop: { title: string, message: string, showModal: boolean, setShowModal: (showModal: boolean) => void }) => {

    const { title, message, showModal, setShowModal } = prop

    useEffect(() => {
        const html = (document.querySelector('html') as HTMLElement)
        if (showModal) {
            html.classList.add('is-clipped')        
        } else {
            html.classList.remove('is-clipped')
        }
    }, [showModal])

    const closeModal = () => setShowModal(false)

    return (
        <div className={'modal ' + (showModal ? 'is-active' : '') }>
            <div className="modal-background" onClick={closeModal}></div>
            <div className="modal-content">
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <h4 className='has-text-primary'>{title}</h4>
                            <p>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
        </div>
    )
}

export default Modal
