import { useContext } from 'react'
import styles from './Consultation.module.css'
import img from '../../assets/contsultation.png'
import Button from '../../components/Button/Button'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { AppContext } from '../../context/Context'

const Consultation = () => {
    const { toggleModal } = useContext(AppContext)

    return (
        <div className="section">
            <div className={styles.inner}>
                <img src={img} alt="Get free сonsultations" className={styles.img} />
                <Button style="black" type="button" onClick={toggleModal}>
                    Get free consultations
                    <IoIosArrowRoundForward size={35} color="#fff" />
                </Button>
            </div>
        </div>
    )
}

export default Consultation