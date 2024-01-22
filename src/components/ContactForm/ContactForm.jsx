import { useState } from 'react'
import styles from './ContactForm.module.css'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    const submitHandler = e => {
        e.preventDefault()

        if (!name || !email) return false

        setIsSuccess(true)
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <>
            {isSuccess ? (
                <div className={styles.successBody}>
                    <h2 className={styles.successTitle}>Application sent! We will contact you shortly!</h2>
                </div>
            ) : (
                <form onSubmit={submitHandler}>
                    <div className={styles.row}>
                        <input type="text" placeholder="Your name" value={name} className={styles.control} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className={styles.row}>
                        <input type="email" placeholder="Your email" value={email} className={styles.control} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.row}>
                        <textarea placeholder="Tell more about your request" value={message} className={`${styles.control} ${styles.textarea}`} onChange={e => setMessage(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className={styles.button}>Send</button>
                    </div>
                </form>
            )}
        </>
    )
}

export default ContactForm