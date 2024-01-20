import styles from './Consultation.module.css'
import img from '../../assets/contsultation.png'
import Button from '../../components/Button/Button'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Consultation = () => {
    return (
        <div className="section">
            <div className={styles.inner}>
                <img src={img} alt="Get free сonsultations" className={styles.img} />
                <Button style="black" type="link" link="/contact">
                    Get free consultations
                    <IoIosArrowRoundForward size={35} color="#fff" />
                </Button>
            </div>
        </div>
    )
}

export default Consultation