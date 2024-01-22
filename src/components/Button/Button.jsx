import styles from './Button.module.css'
import { Link } from 'react-router-dom'

const Button = ({ style, type, link, onClick = () => {}, children }) => {

    return (
        <>
            {type === 'button' ? (
                <button className={`${styles.button} ${styles[style]}`} onClick={() => onClick()}>
                    {children}
                </button>
            ) : (
                <Link to={link} className={`${styles.button} ${styles[style]}`}>
                    {children}
                </Link>
            )}
        </>

    )
}

export default Button