import styles from './Principles.module.css'
import decorImg from '../../assets/principles-decor.svg'
import Button from '../../components/Button/Button'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Principles = () => {
    return (
        <div className="section">
            <div className={styles.list}>
                <div className={styles.item}>
                    <div className={styles.heading}>
                        <img src={decorImg} alt="Star" className={styles.decorImg} />
                        <h2 className={`section-title ${styles.title}`}>Our principles</h2>
                    </div>
                </div>
                <div className={styles.item}>
                    <p className={styles.text}>Providing an individual approach to each client and developing a personalized solution for their business</p>
                    <Button style="white" type="link" link="/contact">
                        <MdKeyboardArrowRight size={35} />
                    </Button>
                </div>
                <div className={styles.item}>
                    <p className={styles.text}>Maintaining transparency in communication with clients and promptly responding to their inquiries</p>
                    <Button style="white" type="link" link="/contact">
                        <MdKeyboardArrowRight size={35} />
                    </Button>
                </div>
                <div className={styles.item}>
                    <p className={styles.text}>Prioritizing the completion of tasks in full and on time, as one of the key factors</p>
                    <Button style="white" type="link" link="/contact">
                        <MdKeyboardArrowRight size={35} />
                    </Button>
                </div>
                <div className={styles.item}>
                    <p className={styles.text}>Taking care of employees to ensure high-quality task completion every day</p>
                    <Button style="white" type="link" link="/contact">
                        <MdKeyboardArrowRight size={35} />
                    </Button>
                </div>
                <div className={styles.item}>
                    <p className={styles.text}>Providing quality solutions based on experience and practical knowledge</p>
                    <Button style="white" type="link" link="/contact">
                        <MdKeyboardArrowRight size={35} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Principles
