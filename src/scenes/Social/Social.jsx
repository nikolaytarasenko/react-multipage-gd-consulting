import styles from './Social.module.css'
import Button from '../../components/Button/Button'
import { PiWhatsappLogo, PiTelegramLogo } from 'react-icons/pi'
import { CiMail } from 'react-icons/ci'

const Social = () => {
    return (
        <div className='section'>
            <div className={styles.inner}>
                <h2 className={`section-title ${styles.title}`}>Or you can contact with us</h2>
                <div className={styles.list}>
                    <div>
                        <Button style="green" type="link" link="#">
                            <PiWhatsappLogo color="#fff" size={30} />
                            Whatsapp
                        </Button>
                    </div>
                    <div>
                        <Button style="blue" type="link" link="#">
                            <PiTelegramLogo color="#fff" size={30} />
                            Telegram
                        </Button>
                    </div>
                    <div>
                        <Button style="silver" type="link" link="#">
                            <CiMail color="#fff" size={30} />
                            E-mail
                        </Button>
                    </div>
                </div>
                <p className={styles.text}>Click for a free consultation and confidently achieve financial goals.</p>
                <p className={styles.text}>Empower your business with our expert services. Act now!</p>
            </div>
        </div>
    )
}

export default Social