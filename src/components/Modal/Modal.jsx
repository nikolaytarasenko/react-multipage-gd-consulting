import { useContext } from 'react'
import styles from './Modal.module.css'
import ContactForm from '../ContactForm/ContactForm'
import { IoClose } from 'react-icons/io5'
import { AppContext } from '../../context/Context'

const Modal = () => {
    const { toggleModal } = useContext(AppContext)

    const overlayClickHandler = e => {
        if (e.target.classList.contains('overlay')) {
            toggleModal()
        }
    }

    return (
        <div className={`${styles.overlay} overlay`} onClick={overlayClickHandler}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Let's work together!</h2>
                    <button className={styles.close} onClick={() => toggleModal()}>
                        <IoClose size={35} />
                    </button>
                </div>
                <div className={styles.modalContent}>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Modal