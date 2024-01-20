import styles from './ContactForm.module.css'

const ContactForm = () => {
    return (
        <form className={styles.form}>
             <div className={styles.row}>
                 <input type="text" placeholder="Your name" className={styles.control} />
             </div>
            <div className={styles.row}>
                <input type="email" placeholder="Your email" className={styles.control} />
            </div>
            <div className={styles.row}>
                <textarea placeholder="Tell more about your request" className={`${styles.control} ${styles.textarea}`} />
            </div>
            <div className={styles.buttonWrapper}>
                <button type="submit" className={styles.button}>Send</button>
            </div>
        </form>
    )
}

export default ContactForm