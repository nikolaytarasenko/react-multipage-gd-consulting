import styles from './CommonHero.module.css'
import Button from '../../components/Button/Button'
import { IoIosArrowRoundForward } from 'react-icons/io'

const CommonHero = ({ data: { title, text, image } }) => {
    return (
        <div className="section">
            <div className={styles.hero}>
                <div className={styles.content}>
                    <h1 className={styles.heroTitle}>{title}</h1>
                    {text.map((paragraph, i) => (
                        <p key={i} className={styles.heroText}>{paragraph}</p>
                    ))}
                    <div className={styles.buttonWrapper}>
                        <Button style="transparent" type="link" link="/contact">
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