import { useContext } from 'react'
import styles from './CommonHero.module.css'
import Button from '../../components/Button/Button'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { AppContext } from '../../context/Context'

const CommonHero = ({ data: { title, text, image } }) => {
    const { toggleModal } = useContext(AppContext)

    return (
        <div className="section">
            <div className={styles.hero}>
                <div className={styles.content}>
                    <h1 className={styles.heroTitle}>{title}</h1>
                    {text.map((paragraph, i) => (
                        <p key={i} className={styles.heroText}>{paragraph}</p>
                    ))}
                    <div className={styles.buttonWrapper}>
                        <Button style="transparent" type="button" onClick={toggleModal}>
                            Submit your application
                            <IoIosArrowRoundForward size={35} />
                        </Button>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={image} alt={title} />
                </div>
            </div>
        </div>
    )
}

export default CommonHero